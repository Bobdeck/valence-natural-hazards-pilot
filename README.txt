VALENCE | SURF LIFE SAVING NATURAL HAZARDS PILOT
Dashboard v0.10.5 | Coromandel spatial evidence activation | checked 22 September 2026 NZST

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
index.html — Dashboard v0.10.5 multi-region Portfolio, Site Detail, Rules & Sources, Configuration and Reports views with one shared prototype colour policy and separate regional source/scenario mapping
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
- v0.10.5 retains one shared prototype RAG policy and activates authoritative point-evaluable Coromandel evidence without changing Bay of Plenty results.
- Coromandel clubhouse addresses come from official SLSNZ club pages. Google place pins were visually cross-checked against current satellite imagery before replacing the earlier general Club Finder coordinates.
- The shared flooding policy is Red at 2% AEP / 1-in-50, Amber at 1% AEP / 1-in-100 when not Red, Green only where the escalation bands can be excluded with valid coverage, and Grey where the thresholds cannot be evaluated. Tairua and Whangamatā are Green because each point is outside an enclosing mapped 1% AEP extent within confirmed model coverage. Pāuanui remains Grey because no applicable local model covers the point.
- WRC’s maximum-credible-event tsunami inundation zone intersects all three Coromandel clubhouse points, so Tsunami evaluates Red at each site under the shared mapped-zone rule.
- WRC’s Liquefaction Level A polygons classify all three Coromandel clubhouse points as Possible, so Liquefaction evaluates Amber at each site under the shared category rule.
- TCDC's public king-tide, 5% AEP and 1% AEP coastal-inundation vector layers were queried at all three verified clubhouse points. All three points are inside the service extent and none intersects the three scenario layers, so Coastal inundation evaluates Green under the configured complete-evidence rule; this is scenario-specific screening, not clearance.
- TCDC’s coastal-erosion source is connected as published boundary-line geometry, but those lines do not encode which side is inside each current or later-horizon extent; Coastal erosion therefore remains Grey at all three sites. WRC/GNS landslide and active-fault line inventories likewise remain Grey because they do not supply the susceptibility polygons or high-resolution FAZ/FAA coverage required by the shared rules.
- Configuration is locked/read-only by default. It shows one shared Master RAG Thresholds table followed by a separate Regional Data Mapping table for the selected Region. Unlock enables separate direct edits to shared threshold wording and regional source/scenario mapping; Save writes to this browser and locks the page again. There is no draft, staging or publish workflow. No regional threshold override exists by default.
- All eight sites × seven hazards were re-evaluated through the shared defaults. Notable changes are Pāpāmoa flooding Red → Amber because its point result is the shared 1% AEP band, and Ōhope liquefaction Amber → Grey because the published class is Undetermined.
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

V0.10.5 COROMANDEL SPATIAL EVIDENCE
- One Master RAG Thresholds table is the authoritative prototype colour policy for all Regions.
- Regional Data Mapping separately records each Region's organisation, dataset, source link, scenario availability, testable master thresholds, coverage, check date and gap reason.
- No regional threshold is created automatically and no source gap promotes an available scenario into a different colour.
- Evaluation, portfolio matrices, cards, reports and exports use the shared policy; regional evidence remains traceable through the same reusable site → hazard → source → scenario → result model.
- Shared UI refinements include the prominent Regional overview selector, summary-led portfolio hierarchy, compact future-ready RAG matrix, subordinate map-view controls, detailed evidence table, plain-English rule labels with optional technical details, explicit complete-evidence/no-rule wording, and a viewport-contained mobile legend.
- Regional map fitting is driven by valid configured site coordinates with per-region fallback bounds. It runs at initial load and after an actual region change, not during ordinary portfolio re-renders, so manual pan and zoom are preserved.
- Coromandel’s 21 site × hazard results now resolve to: Tairua 2 Green / 1 Amber / 1 Red / 3 Grey; Pāuanui 1 Green / 1 Amber / 1 Red / 4 Grey; Whangamatā 2 Green / 1 Amber / 1 Red / 3 Grey.
- Remaining Grey reasons are exact: Pāuanui flooding has no applicable local model; all landslide results have only line-inventory evidence without a susceptibility class or polygon; all coastal-erosion results have boundary lines without site-evaluable inside/outside topology; all active-fault results lack high-resolution FAZ/FAA coverage.
