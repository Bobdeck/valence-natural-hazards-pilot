VALENCE | SURF LIFE SAVING NATURAL HAZARDS PILOT
Dashboard v0.11.2 | Pilot QA and polish | checked 25 September 2026 NZST

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
index.html — Dashboard v0.11.2 multi-region Portfolio, Site Detail, Rules & Sources, Configuration and Reports views with static report maps, print-safe tables, provenance and v0.11 configuration history/rollback
published-config.json — project-owned RAG/completeness configuration seed, release history and empty audit-history baseline
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
- Green is permitted only where a configured below-threshold rule has adequate connected evidence; it never means safe or cleared. Missing point data and evidence gaps remain Grey.
- Evidence is structured as site → hazard → source → scenario/model → screening rule → screening result → presentation state.
- v0.11 retains the v0.10.5 evidence and RAG outcomes while adding durable, versioned configuration behaviour.
- Coromandel clubhouse addresses come from official SLSNZ club pages. Google place pins were visually cross-checked against current satellite imagery before replacing the earlier general Club Finder coordinates.
- The shared flooding policy is Red at 2% AEP / 1-in-50, Amber at 1% AEP / 1-in-100 when not Red, Green only where the escalation bands can be excluded with valid coverage, and Grey where the thresholds cannot be evaluated. Tairua and Whangamatā are Green because each point is outside an enclosing mapped 1% AEP extent within confirmed model coverage. Pāuanui remains Grey because no applicable local model covers the point.
- WRC’s maximum-credible-event tsunami inundation zone intersects all three Coromandel clubhouse points, so Tsunami evaluates Red at each site under the shared mapped-zone rule.
- WRC’s Liquefaction Level A polygons classify all three Coromandel clubhouse points as Possible, so Liquefaction evaluates Amber at each site under the shared category rule.
- TCDC's public king-tide, 5% AEP and 1% AEP coastal-inundation vector layers were queried at all three verified clubhouse points. All three points are inside the service extent and none intersects the three scenario layers, so Coastal inundation evaluates Green under the configured complete-evidence rule; this is scenario-specific screening, not clearance.
- TCDC’s coastal-erosion source is connected as published boundary-line geometry, but those lines do not encode which side is inside each current or later-horizon extent; Coastal erosion therefore remains Grey at all three sites. WRC/GNS landslide and active-fault line inventories likewise remain Grey because they do not supply the susceptibility polygons or high-resolution FAZ/FAA coverage required by the shared rules.
- Configuration is locked/read-only by default. It shows one shared Master RAG Thresholds table followed by a separate Regional Data Mapping table for the selected Region. Unlock enables direct edits; Save validates the full configuration, records field-level prior/new values plus an optional reason, writes a new version to the durable local project store, and locks the page again. Rollback restores the immediately previous saved values as another audited version. There is no draft, staging or publish workflow. No regional threshold override exists by default.
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

V0.11.2 PILOT QA AND POLISH
- The compact regional matrix now shows R, A, G and Gy abbreviations as well as colour, with an explicit accessible label on every result, so the outcome is not conveyed by colour alone.
- The unused future overall-score column has been removed. The interface states directly that no overall score is calculated.
- User-facing filters, rules and report warnings now describe missing point data in plain English while retaining original NoData values in source evidence and returned attributes.
- Scrollable matrix, rules, configuration and report tables can receive keyboard focus. A consistent visible focus treatment now covers controls, links, evidence summaries and table regions; configuration validation updates are announced as status messages.
- Region switching no longer repeats report and portfolio-marker rendering. Page, valid site, report context and map-fit behaviour remain preserved.
- Mobile status pills, responsive table scrolling, map legends, static report maps and A4 landscape print rules were retained and regression-checked across both Regions.

V0.11.1 REPORTING HARDENING
- Individual Site Report remains fixed to one selected site and all seven hazards. It has no hazard selector.
- Regional Report supports All hazards or one selected hazard. The summary matrix, evidence gaps, provenance appendix, completeness calculation and map marker status all use the same report scope.
- Site and regional reports include a deterministic static Esri World Imagery export with verified clubhouse marker overlays. The report caption retains imagery attribution and states that parcel and lease boundaries are not shown.
- The provenance appendix is a structured table with source organisation, dataset/layer, model/scenario, source link and screening rule, evidence/result, checked date/provenance and configuration version.
- Report metadata shows report v0.11.2, generated UTC time, configuration version and exact scope. Downloaded report data carries the same report, site, region, hazard and configuration context.
- Print / Save PDF uses A4 landscape, repeated table headers, row-safe page breaks, printable map height, unclipped wrapping, a concise report footer and no dashboard controls or browser UI inside the report area.
- TEST INSTANCE / NOT A SAFETY CLEARANCE and no-overall-score protections remain explicit. No external report service was added; printing uses the browser and static maps use the app's existing Esri provider.

V0.11 PERSISTENT CONFIGURATION AND AUDIT HISTORY
- The repository-owned published-config.json remains the clean project seed. The app automatically loads a newer saved configuration from the browser profile's durable local project store on startup.
- Saved versions survive reloads and later browser sessions in the same profile. The static pilot has no authenticated shared multi-user write service, so a different browser or device starts from the repository seed.
- Save validation requires all four Master RAG states, distinct rule wording, complete source/dataset/scenario fields, HTTPS source links, no unsafe clearance language, no regional redefinition of shared colour meaning, and no explicit threshold token unsupported by the shared rule or mapped scenario.
- The read-only change history records version, UTC timestamp, scope, hazard, changed field, prior value, new value and the optional reason.
- Rollback uses a clear confirmation, validates the stored target shape, restores the values immediately before the latest saved action, and records the rollback as a new version.
- The shared Master RAG policy remains global. Regional Data Mapping remains separate and cannot create regional colour definitions.

V0.10.5 COROMANDEL SPATIAL EVIDENCE
- One Master RAG Thresholds table is the authoritative prototype colour policy for all Regions.
- Regional Data Mapping separately records each Region's organisation, dataset, source link, scenario availability, testable master thresholds, coverage, check date and gap reason.
- No regional threshold is created automatically and no source gap promotes an available scenario into a different colour.
- Evaluation, portfolio matrices, cards, reports and exports use the shared policy; regional evidence remains traceable through the same reusable site → hazard → source → scenario → result model.
- Shared UI refinements include the prominent Regional overview selector, summary-led portfolio hierarchy, compact future-ready RAG matrix, subordinate map-view controls, detailed evidence table, plain-English rule labels with optional technical details, explicit complete-evidence/no-rule wording, and a viewport-contained mobile legend.
- Regional map fitting is driven by valid configured site coordinates with per-region fallback bounds. It runs at initial load and after an actual region change, not during ordinary portfolio re-renders, so manual pan and zoom are preserved.
- Coromandel’s 21 site × hazard results now resolve to: Tairua 2 Green / 1 Amber / 1 Red / 3 Grey; Pāuanui 1 Green / 1 Amber / 1 Red / 4 Grey; Whangamatā 2 Green / 1 Amber / 1 Red / 3 Grey.
- Remaining Grey reasons are exact: Pāuanui flooding has no applicable local model; all landslide results have only line-inventory evidence without a susceptibility class or polygon; all coastal-erosion results have boundary lines without site-evaluable inside/outside topology; all active-fault results lack high-resolution FAZ/FAA coverage.
