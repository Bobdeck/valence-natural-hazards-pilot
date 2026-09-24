const PRINT_URL='https://utility.arcgisonline.com/ArcGIS/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task/execute';

const COASTAL_LAYERS=[
  {itemId:'5984913d00e44d0c9830d605d6511541',title:'King tide',url:'https://tiles.arcgis.com/tiles/MYtLmLEStmKgdmln/arcgis/rest/services/CIH_King_Tide/VectorTileServer'},
  {itemId:'63d64c817bd74d739393822c308f10bd',title:'5% AEP',url:'https://tiles.arcgis.com/tiles/MYtLmLEStmKgdmln/arcgis/rest/services/Coastal_Inundation_Hazard___5_percent_AEP/VectorTileServer'},
  {itemId:'ebc750cd34614020a81f63959d6bcbb5',title:'1% AEP',url:'https://tiles.arcgis.com/tiles/MYtLmLEStmKgdmln/arcgis/rest/services/CIH_1pc_AEP/VectorTileServer'}
];

module.exports=async function coastalMap(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'POST required'});
  const extent=req.body&&req.body.extent||{},requestedSize=req.body&&req.body.outputSize||[];
  const values=[extent.xmin,extent.ymin,extent.xmax,extent.ymax].map(Number);
  if(values.some(value=>!Number.isFinite(value))||values[0]>=values[2]||values[1]>=values[3])return res.status(400).json({error:'Valid map extent required'});
  const width=Math.min(1600,Math.max(320,Math.round(Number(requestedSize[0])||900))),height=Math.min(1200,Math.max(240,Math.round(Number(requestedSize[1])||600)));
  const webMap={
    mapOptions:{extent:{xmin:values[0],ymin:values[1],xmax:values[2],ymax:values[3],spatialReference:{wkid:102100}},spatialReference:{wkid:102100}},
    operationalLayers:COASTAL_LAYERS.map(layer=>({id:layer.itemId,itemId:layer.itemId,type:'VectorTileLayer',layerType:'VectorTileLayer',title:layer.title,styleUrl:layer.url+'/resources/styles/root.json',opacity:.68,visibility:true})),
    exportOptions:{outputSize:[width,height],dpi:96},layoutOptions:{titleText:''},baseMap:{baseMapLayers:[]}
  };
  try{
    const body=new URLSearchParams({f:'json',Format:'PNG32',Layout_Template:'MAP_ONLY',Web_Map_as_JSON:JSON.stringify(webMap)}),printResponse=await fetch(PRINT_URL,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','User-Agent':'Mozilla/5.0 SLS-Pilot/0.11.3'},body});
    if(!printResponse.ok)throw new Error('ArcGIS renderer returned HTTP '+printResponse.status);
    const data=await printResponse.json(),output=(data.results||[]).map(result=>result.value).find(value=>value&&value.url);
    if(!output||!output.url)throw new Error((data.error&&data.error.message)||'ArcGIS renderer returned no image');
    const outputUrls=[output.url.replace('/arcgis/','/ArcGIS/'),output.url.replace('utility.arcgisonline.com','utility.arcgis.com').replace('/arcgis/','/ArcGIS/'),output.url];let imageResponse;for(const delay of [0,750,1500,3000]){if(delay)await new Promise(resolve=>setTimeout(resolve,delay));for(const url of outputUrls){imageResponse=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 SLS-Pilot/0.11.3','Accept':'image/png,*/*'}});if(imageResponse.ok&&String(imageResponse.headers.get('content-type')||'').includes('image/png'))break}if(imageResponse&&imageResponse.ok&&String(imageResponse.headers.get('content-type')||'').includes('image/png'))break}if(!imageResponse||!imageResponse.ok||!String(imageResponse.headers.get('content-type')||'').includes('image/png'))throw new Error('Rendered image was not available as PNG');
    const image=Buffer.from(await imageResponse.arrayBuffer());
    res.setHeader('Content-Type','image/png');res.setHeader('Cache-Control','public, max-age=300, s-maxage=300');return res.status(200).send(image);
  }catch(error){console.error('Coastal map rendering failed',error);return res.status(502).json({error:'Connected coastal scenario layers could not be rendered.',detail:error&&error.message?error.message:'Unknown renderer error'})}
};

module.exports.config={maxDuration:60};
