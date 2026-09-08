# Content Calendar & Growth Plan — FreeVinGenerator.com

Purpose: a ready backlog of article topics so there is always something to publish. Cadence: ~2 articles per week (one batch, published Thursday/Friday). Every article follows the writing rules in `CLAUDE.md` section 8 (human voice, no em dashes, no AI filler, ~800-1000 words, real tables/examples, 2-4 internal links + a "Keep Reading" section, featured image at `assets/blog/<slug>.jpg` 1200x630).

## Already published (13 articles + reference)

1. How to Read a VIN: What All 17 Characters Mean
2. What a VIN Tells You: Decoding Make, Model, and Year
3. Where to Find Your VIN: Every Location on Your Vehicle
4. VIN Model Year Codes: The Full Chart (1980-2031)
5. How to Check If a VIN Is Valid (and Spot a Cloned One)
6. How VIN Cloning Scams Work (and How to Protect Yourself)
7. How to Check If a Car Is Stolen Using the VIN
8. VIN vs. License Plate vs. Registration: The Difference
9. How to Decode a Motorcycle VIN
10. What a Salvage or Rebuilt Title VIN Tells You
11. How to Check Open Recalls by VIN
12. How to Create a VIN QR Code (Free, No Signup) — *tool-cluster page (Aug 21)*
13. How to Generate a Random VIN Number (for Testing) — *tool-cluster page (Aug 22)*
- Reference page: `/wmi-codes/` (VIN country + manufacturer codes)

**Note on #12-13 (tool clusters):** these two support the QR + Generator tools directly (funnel readers to the tools and give the tools indexable supporting content). They were NOT from the 12-week backlog below - they were added to build topic clusters around the tools. **Open follow-up:** the tool pages do NOT yet link back to these articles. Add reverse "related reading" links from `/` and `/vin-qr-code-generator/` (and other tools) to complete the clusters - this is the top priority before the next content batch.

## The 12-week backlog (2 per week)

Pick the pair each week, write, add a 1200x630 image, publish Thursday. Titles are written to match how people actually search. Each note lists the tool/article to link to.

**Week 1**
- How to Run a Free VIN Check (Without Paying) - links: Decoder, Validator, history-report articles
- Why Won't My VIN Decode? Common Reasons and Fixes - links: Decoder, Validator, how-to-read-a-vin

**Week 2** ✅ LIVE (published week of Aug 24)
- ✅ How to Decode a Ford VIN - links: Decoder, /wmi-codes/, how-to-read-a-vin
- ✅ How to Decode a Toyota VIN - links: Decoder, /wmi-codes/

**Week 3** ✅ written 2026-08-28 (images pending - see note)
- ✅ How to Tell What Engine a Car Has From the VIN - links: Decoder, what-a-vin-tells-you
- ✅ How to Find a Car's Manufacture Date From the VIN - links: model-year-chart, Decoder

**Week 4** ✅ LIVE (published week of Sep 1)
- ✅ How to Decode a Honda VIN - links: Decoder, /wmi-codes/
- ✅ How to Decode a Chevrolet VIN - links: Decoder, /wmi-codes/

**Week 5** ✅ LIVE (published Sep 3-4)
- ✅ What Is a VIN Check Digit and How Is It Calculated? - links: Validator, how-to-read-a-vin
- ✅ VIN vs. Engine Number: What's the Difference? - links: where-to-find-your-vin, motorcycle-vin

**Week 6** ✅ LIVE (published Sep 5-6)
- ✅ How to Check a Car's Accident History by VIN - links: stolen-by-vin, salvage-title, Decoder
- ✅ How to Check for Flood Damage by VIN - links: salvage-title, history articles

**Week 7** ✅ written, dated Sep 7-8 (images pending - see note)
- ✅ How to Decode a BMW VIN - links: Decoder, /wmi-codes/
- ✅ How to Decode a Nissan VIN - links: Decoder, /wmi-codes/

**Week 8** ✅ written, dated Sep 9-10 (images pending - see note)
- ✅ Free vs. Paid VIN History Reports: What Each One Gives You - links: stolen-by-vin, recalls, salvage-title
- ✅ How to Check a Car's Odometer/Mileage History by VIN - links: history articles, Decoder

**Week 9** ✅ written, dated Sep 11-12 (images pending - see note)
- ✅ How to Decode a Truck VIN - links: Decoder, /wmi-codes/, Ford, Chevrolet
- ✅ How to Decode a European Import VIN - links: Decoder, /wmi-codes/, BMW, check-digit

**Week 10**
- How to Read a Car's Window Sticker (and Find It by VIN) - links: what-a-vin-tells-you, Decoder
- How to Check a Car's Options and Features by VIN - links: what-a-vin-tells-you, Decoder

**Week 11** (developer angle - unique niche, strong for backlinks)
- How to Generate Test VINs for Software Testing - links: Generator, Bulk Generator, Validator
- How to Validate a VIN in Code: The Check-Digit Algorithm - links: Validator, check-digit article

**Week 12**
- The History of the VIN: Why 17 Characters? - links: how-to-read-a-vin, what-is-a-vin
- How to Decode a Classic (Pre-1981) Car VIN - links: how-to-read-a-vin, model-year-chart

## Tool-cluster track (support each tool with 1-2 articles, then link both ways)
The QR + Generator clusters are started (#12-13). Finish the pattern for the other tools:
- Validator: "How to Validate a VIN (Check the Check Digit)" - links: Validator, check-digit article
- Decoder: covered heavily by the decode series below (Ford/Toyota/etc.)
- Bulk Generator: "How to Create Bulk Test VINs for a Database or Test Suite" - links: Bulk, Generator
- Visualizer: "The 3 Parts of a VIN: WMI, VDS, VIS Explained" - links: Visualizer, /wmi-codes/, how-to-read-a-vin
Rule: every tool page links to its cluster article(s), and every cluster article links to its tool.

## Beyond week 12 (more ideas, not yet slotted)
- Decode series continues: Jeep, Dodge/Ram, Hyundai, Kia, Subaru, Mazda, Tesla, Audi, Mercedes, VW, Harley, Yamaha
- How to Decode an RV / Trailer VIN; ATV / UTV VIN
- How to Check if a Car Was a Rental or Fleet Vehicle by VIN
- Lemon Law and the VIN: How to Check
- ISO 3779 and ISO 3780 Explained
- What Are the WMI, VDS, and VIS Sections of a VIN?
- More reference/data pages (linkable assets): full plant-code lists, a searchable WMI table, a recall-source directory

## Tools & Global Expansion Roadmap (build one by one)

Beyond the weekly articles, grow the SITE with new tools and an international angle. This is the product side of growth and a strong AdSense signal ("a real, useful site"). Build one at a time, ship it, then move to the next. All items are feasible on the static/client-side stack (vanilla JS + whitelisted CDN libs; live API calls are allowed to CORS-friendly free APIs).

### New tools
Tier 1 (highest demand - do first):
- [x] **Real VIN Decoder via NHTSA vPIC API** ("Lever B"). ✅ BUILT (2026-09-06, pending deploy). Decoder now fetches REAL make/model/trim/engine/plant/body/fuel/doors for actual VINs from the free NHTSA vPIC API (`DecodeVinValues`, no key, CORS `*`, client-side). Offline WMI decode still shows first; the live "Real Vehicle Details" section appears below it (debounced 500ms, 8s timeout). Graceful "no factory record" message for generated/non-US VINs; graceful network-error fallback. Code in `assets/vin-decoder.js` (rebuild with `npm run css`), UI in `vin-decoder.html`, styles in `app.css` (`.vpic-section`). Verified end-to-end against a real VIN. Two-section overlap fixed (top = "VIN Structure" with clarifier; Model Year dropped from the vPIC list). ✅ Cluster article written: "Free VIN Decoder: Get the Real Make, Model, and Engine" (_posts/2026-09-07-free-vin-decoder-make-model-engine.md), dated Sep 7 to go live with the tool.
- [ ] **VIN Check-Digit Calculator** - standalone, step-by-step; pairs with the Sep 3 article; targets "vin check digit calculator".
- [ ] **Interactive WMI Lookup tool** - turn /wmi-codes/ data into a live search box (prefix or country -> instant result).

Tier 2:
- [ ] **Generate VIN by Make/Country** - extend the generator to produce a valid VIN with a chosen WMI ("Ford VIN generator", "German VIN"). Testing use + SEO.
- [ ] **Bulk VIN Validator** - paste a list, see which pass. Dev/QA niche, low competition, backlink-friendly.
- [ ] **VIN Barcode generator** (Code 39 / Data Matrix) - factory-label formats; complements the QR tool.

### Global / international angle (underexploited, big reach)
The world calls the VIN different things; those markets are barely served.
- [ ] **Reference page: "What a VIN Is Called Around the World"** - chassis number, frame number (Japan 車台番号), etc. Linkable asset like /wmi-codes/.
- [ ] **Country guides:** How to Find the Chassis Number in the UK / Australia / India / Philippines / Nigeria (English-speaking used-import markets, real volume).
- [ ] **JDM angle:** "Chassis Number vs VIN on JDM Cars" (JDM cars use chassis codes, not 17-char VINs).

Rule for tools: each new tool gets a page in the Tools mega menu + tools hub + search index, and a cluster article that links to it (and back).

## Growth strategy (the "why" behind the calendar)

Content + SEO is ~80% of growth for this site. It compounds slowly (6-12 months) then snowballs. Priorities:

1. **Publish consistently** on real search queries (this backlog). This is the engine.
2. **Build linkable reference/data pages** (like `/wmi-codes/`) - they rank and earn backlinks.
3. **Optimize tool pages** for their keywords ("free VIN decoder", "VIN validator", etc.).
4. **Earn backlinks**: help genuinely on Reddit (r/askcarsales, r/MechanicAdvice), Quora, car forums; lean on the developer/test-data angle (Stack Overflow, dev communities).
5. **Use the data**: after ~2 months, check Search Console for which queries/pages win, then write more on those and expand them.
6. **Grow the tools** (product-led): the vPIC real-decode feature (make/model/engine for real VINs) would make the decoder a destination. See CLAUDE.md notes on "Lever B".
7. **Monetization depth over time**: AdSense first, then affiliate (vehicle-history / VIN-check services) on the buyer-intent articles (salvage, stolen, recalls).

Do NOT: buy links, spin/auto-generate content, or keyword-stuff. Consistency and genuine usefulness win.

## Two audiences to keep serving
- **Used-car buyers** - highest search volume (checks, recalls, stolen, salvage, decode).
- **Developers / QA** - the test-data niche (generator, bulk, validation-in-code). Fewer searches but strong for backlinks and low competition.
