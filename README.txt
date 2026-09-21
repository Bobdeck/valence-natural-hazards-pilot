VALENCE | SURF LIFE SAVING NATURAL HAZARDS PILOT
Dashboard v0.10.3 | activated Coromandel point screening and compact mobile hazard-card status treatment | checked 21 September 2026 NZST

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
index.html — Dashboard v0.10.3 multi-region Portfolio, Site Detail, Rules & Sources, Configuration and Reports views with active Coromandel RAG screening, precise Grey reasons and compact mobile status pills
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
- v0.10.3 preserves the same source/scenario/region-aware RAG and completeness architecture across Bay of Plenty and Coromandel without bespoke regional UI forks or a professional risk score.
- Coromandel clubhouse addresses come from official SLSNZ club pages. Google place pins were visually cross-checked against current satellite imagery before replacing the earlier general Club Finder coordinates.
- Tairua and Pāuanui remain Grey for flooding because TCDC explicitly records that no settlement model has been undertaken. Whangamatā is Green under the configured 1% AEP rule because the clubhouse lies inside the published model extent and the exact point does not intersect the mapped stormwater-flood layer; this is screening only, not clearance.
- TCDC's public king-tide, 5% AEP and 1% AEP coastal-inundation vector layers were queried at all three verified clubhouse points. All three points are inside the service extent and none intersects the three scenario layers, so Coastal inundation evaluates Green under the configured complete-evidence rule; this is scenario-specific screening, not clearance.
- TCDC's Shoreline Management Pathways programme, WRC tsunami/coastal material and GNS national sources remain connected with provenance. Where a coast section, point class, proximity result or approved rule is still unavailable, the app gives the exact Grey reason rather than inferring exposure or safety.
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

V0.10.3 ARCHITECTURE ASSESSMENT
- Answer: yes. Coromandel was added primarily through reusable region, site, source, scenario and RAG-rule configuration; no duplicate regional page or component tree was created.
- Data/config additions: reusable Coromandel point-results for the three TCDC coastal-inundation scenarios, the Whangamatā 1% AEP stormwater layer and model extent, plus Coromandel-scoped RAG rules.
- Shared-model changes: activeSites/currentRegion selection, region-aware evaluateRag filtering, regional report/marker roll-ups, and source applicability labels. These changes serve any configured region rather than encoding TCDC-specific UI behavior.
- Shared UI refinements include the prominent Regional overview selector, summary-led portfolio hierarchy, compact future-ready RAG matrix, subordinate map-view controls, detailed evidence table, plain-English rule labels with optional technical details, explicit complete-evidence/no-rule wording, and a viewport-contained mobile legend.
- Regional map fitting is driven by valid configured site coordinates with per-region fallback bounds. It runs at initial load and after an actual region change, not during ordinary portfolio re-renders, so manual pan and zoom are preserved.
- Unresolved evidence gaps remain explicit: Tairua/Pāuanui have no settlement flood model; tsunami lacks a reproducible clubhouse-point class and configured threshold; coastal erosion lacks the site coast-section/pathway; landslide/liquefaction lack a reproducible point class and regional rule; active faults lacks an appropriately scaled proximity result and distance rule. These remain Grey and are not risk conclusions.
