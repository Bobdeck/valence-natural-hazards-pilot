VALENCE | SURF LIFE SAVING NATURAL HAZARDS PILOT
Dashboard v0.7 | configurable screening administration | checked 18 September 2026 NZST

HOSTED TEST INSTANCE
The live review environment is https://valence-natural-hazards-pilot.vercel.app/ and deploys from Bobdeck/valence-natural-hazards-pilot main through the existing GitHub → Vercel connection. Open_Map.cmd remains a local fallback only.

OPEN THE DASHBOARD
1. Run Open_Map.cmd.
2. Leave the CMD window open.
3. The browser opens the dashboard.
4. Close the CMD window when finished.

Opening index.html directly as a file pauses online basemap tiles and shows a concise launch instruction. Open_Map.cmd selects an available loopback-only port so the Map and Aerial basemaps can load normally with compliant web requests.

PILOT SITES
- Mount Maunganui Lifeguard Service — 21 Adams Avenue — verified point -37.631147, 176.177011.
- Omanu SLSC — 15 Surf Road, Omanu, Mt Maunganui 3116 — verified point -37.6588411, 176.2153694.
- Pāpāmoa Surf Life Saving Club — 561 Pāpāmoa Beach Road — verified point -37.69605, 176.28609.
- Maketu Surf Life Saving Club — 1 Town Point Road — verified point -37.75427, 176.45614.
- Whakatāne SLSC at Ōhope — 6 Mair Street — verified point -37.96321, 177.03593.

Use Regional portfolio to compare the five clubs across seven hazards. Select a site or matrix cell to drill into Site detail. The selected marker, site summary, hazard cards, evidence detail and map view update together.

FILES
index.html — Dashboard v0.7 portfolio/site views plus controlled draft, validation, preview and publish configuration workflow
Open_Map.cmd — Windows launcher
serve-map.ps1 — loopback-only local server using an available port
robots.txt — prevents search-engine crawling of the test instance
vercel.json — test-host headers, no-index control and repeatable deployment configuration
Valence_SLS_Natural_Hazards_Pilot_Review_Brief_v0.2.docx — historical two-site review brief
README.txt — these instructions

BASEMAPS AND OVERLAYS
- Map uses the policy-compliant OpenStreetMap Standard URL https://tile.openstreetmap.org/{z}/{x}/{y}.png with visible © OpenStreetMap contributors attribution.
- Aerial uses Esri World Imagery with visible Esri and source attribution.
- Council hazard overlays are independent of the selected basemap. Changing Map or Aerial does not switch hazard layers off.
- Leaflet 1.9.4 CSS, JavaScript and marker assets are bundled inside index.html.

EVIDENCE RULES
- Results are original source observations, not professional risk ratings.
- No point hit and NoData remain non-clearance states and never become green.
- Evidence is structured as site → hazard → source → scenario/model → screening rule → screening result → presentation state.
- Lee's company will define configurable thresholds, consequences, rating methods and approvals; v0.7 proves controlled source-backed configuration without providing a professional risk score.
- Public property parcel sources are identified but not connected. No suitable public portfolio dataset for club lease boundaries was identified in this review.
- Public GIS access does not itself confirm commercial redistribution rights. Retain attribution and confirm council/GNS rights before reproducing source geometry in a client-facing product.

OMANU POINT RESULTS
- TCC 1% AEP 2130 RCP8.5 flood: no point hit — not cleared.
- BOPRC historic flood extent: no point hit — not cleared.
- BOPRC tsunami evacuation: Land, OBJECTID 831.
- BOPRC tsunami 2,500-year ARI: Yellow, OBJECTID 10.
- BOPRC tsunami 5 m above MHWS: Orange, OBJECTID 7.
- BOPRC tsunami 2 m above MHWS: no point hit — not cleared.
- BOPRC liquefaction Level B: Unlikely, Active Foredunes, lateral spreading No, OBJECTID 1795.
- BOPRC liquefaction Level A: no point hit — not cleared.
- BOPRC landslide rainfall and earthquake rasters: NoData.
- BOPRC/GNS active faults: no exact point hit at 1:250,000 scale.
- Coastal erosion and coastal inundation: authoritative source found; scenario result not yet connected.

The Mount Maunganui findings already verified for this pilot are preserved in the dashboard without re-querying or reclassification.
