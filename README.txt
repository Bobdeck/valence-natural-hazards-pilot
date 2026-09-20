VALENCE | SURF LIFE SAVING NATURAL HAZARDS PILOT
Dashboard v0.10.2 | consolidated regional navigation, reconciled coastal evidence, direct configuration editing and context-correct reports | checked 20 September 2026 NZST

HOSTED TEST INSTANCE
The live review environment is https://valence-natural-hazards-pilot.vercel.app/ and deploys from Bobdeck/valence-natural-hazards-pilot main through the existing GitHub → Vercel connection. Open_Map.cmd remains a local fallback only.

OPEN THE DASHBOARD
1. Run Open_Map.cmd.
2. Leave the CMD window open.
3. The browser opens the dashboard.
4. Close the CMD window when finished.

Opening index.html directly as a file pauses online basemap tiles and shows a concise launch instruction. Open_Map.cmd selects an available loopback-only port so the Map and Aerial basemaps can load normally with compliant web requests.

PILOT SITES
Bay of Plenty
- Mount Maunganui Lifeguard Service — 21 Adams Avenue — verified point -37.631147, 176.177011.
- Omanu SLSC — 15 Surf Road, Omanu, Mt Maunganui 3116 — verified point -37.6588411, 176.2153694.
- Pāpāmoa Surf Life Saving Club — 561 Pāpāmoa Beach Road — verified point -37.69605, 176.28609.
- Maketū Surf Life Saving Club — 1 Town Point Road — verified point -37.75427, 176.45614.
- Whakatāne SLSC at Ōhope — 6 Mair Street — verified point -37.96321, 177.03593.

Coromandel / Thames-Coromandel District
- Tairua SLSC — 38 Paku Drive, Tairua 3508 — verified clubhouse point -36.9952582, 175.8611453.
- Pāuanui SLSC — 27 Pauanui Boulevard, Pāuanui — verified clubhouse point -37.014158, 175.8659196.
- Whangamatā SLSC — Cnr Lowe Street & Esplanade Drive, Whangamatā 3620 — verified clubhouse point -37.21401, 175.87878.

Use the single Region selector in the blue Regional overview banner to switch between Bay of Plenty and Coromandel. The current app page is preserved; Site detail moves to the first valid site in the new region, and the portfolio map refits only when the Portfolio page is active. Select a site or matrix cell to drill into Site detail. The selected marker, site summary, hazard cards, evidence detail and map view update together.

FILES
index.html — Dashboard v0.10.2 multi-region Portfolio, Site Detail, Rules & Sources, Configuration and Reports views with state-preserving region navigation, reconciled evidence, direct locked editing and context-correct exports
published-config.json — project-owned published RAG/completeness configuration seed and version record
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
- Green is permitted only where a configured below-threshold rule has adequate connected evidence; it never means safe or cleared. NoData and evidence gaps remain Grey.
- Evidence is structured as site → hazard → source → scenario/model → screening rule → screening result → presentation state.
- v0.10.2 preserves the same source/scenario/region-aware RAG and completeness architecture across Bay of Plenty and Coromandel without bespoke regional UI forks or a professional risk score.
- Coromandel clubhouse addresses come from official SLSNZ club pages. Google place pins were visually cross-checked against current satellite imagery before replacing the earlier general Club Finder coordinates.
- TCDC's published stormwater/flood-model coverage is connected: Tairua and Pāuanui have no model undertaken and are estimated for 2028–2030; Whangamatā has an August 2023 model whose published context includes the 1% AEP event, with a 2026 topography/climate-factor update scheduled. These are coverage facts, not connected clubhouse-point flood results.
- TCDC's completed Shoreline Management Pathways programme and interactive coastal mapping, WRC's 0.8 m sea-level-rise raster source, NIWA extreme sea-level scenarios, and GNS national sources are identified with provenance. Where a site-point scenario, coast section, or pathway has not been reproducibly extracted, the app preserves the gap as Grey rather than inferring exposure or clearance.
- Configuration is locked/read-only by default. Unlock exposes direct source, scenario and threshold fields with validation; Save writes to this browser and locks the page again. There is no draft, staging or publish workflow. Shared multi-user writes remain unavailable because the static project has no authenticated backend write path.
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

V0.10.2 ARCHITECTURE ASSESSMENT
- Answer: yes. Coromandel was added primarily through reusable region, site, source, scenario and RAG-rule configuration; no duplicate regional page or component tree was created.
- Data/config additions: REGIONS, three COROMANDEL_SITE_CONFIGS records, reusable coromandelGap source mappings, and Coromandel-scoped coastal-inundation and tsunami RAG rules.
- Shared-model changes: activeSites/currentRegion selection, region-aware evaluateRag filtering, regional report/marker roll-ups, and source applicability labels. These changes serve any configured region rather than encoding TCDC-specific UI behavior.
- Shared UI refinements include the prominent Regional overview selector, summary-led portfolio hierarchy, compact future-ready RAG matrix, subordinate map-view controls, detailed evidence table, plain-English rule labels with optional technical details, explicit complete-evidence/no-rule wording, and a viewport-contained mobile legend.
- Regional map fitting is driven by valid configured site coordinates with per-region fallback bounds. It runs at initial load and after an actual region change, not during ordinary portfolio re-renders, so manual pan and zoom are preserved.
- Unresolved evidence gaps remain explicit: no reproducible Coromandel club-point hazard result is connected; the site-applicable coastal segment/pathway is not selected; property parcels and club lease boundaries are not connected. These gaps remain Grey and are not risk conclusions.
