---
title: "How to Decode a European Import VIN"
date: 2026-09-12
category: "VIN Guide"
description: "How to decode a European import VIN. Learn what the letter prefixes mean, how country codes work, and why import VINs differ from US-market cars."
image: /assets/blog/how-to-decode-a-european-import-vin.jpg
author: "FreeVinGenerator Team"
---

Importing a car from Europe, or buying one already imported, means facing a VIN that looks different from a US-market car. The good news is that it follows the same 17-character standard worldwide, so the same reading method works. The difference is in the prefixes: European VINs start with letters instead of numbers, and the codes point to European plants and specifications. Here is how to decode a European import VIN.

## The Standard Is Global

Every modern VIN, wherever the car was built, uses the ISO 3779 format: 17 characters split into a manufacturer block, a description block, and a unique-unit block.

| Positions | Section | What it tells you |
|---|---|---|
| 1-3 | WMI | Country, maker, and vehicle type |
| 4-8 | VDS | Model, body, engine, restraints |
| 9 | Check digit | Verification (see note below) |
| 10 | Model year | The year code |
| 11 | Plant | Which factory built it |
| 12-17 | Serial | The unit's production number |

## Positions 1-3: European Country Codes

The first character is the country of manufacture, and this is where European VINs stand out. North American VINs start with a number (1-5). European VINs start with a letter. A few common ones:

| First character | Country |
|---|---|
| W | Germany |
| S | United Kingdom |
| V | France / Spain |
| Z | Italy |
| Y | Sweden / Finland |
| T | Switzerland / Czech Republic and others |

So a VIN starting with **W** was built in Germany, and **S** points to the United Kingdom. The next two characters identify the maker, so WBA is a German BMW and WVW is a German Volkswagen. Our [WMI code reference](/wmi-codes/) lists the country and manufacturer prefixes, and [how to decode a BMW VIN](/blog/how-to-decode-a-bmw-vin/) shows a German example in full.

## Positions 4-8: European Specifications

This block, the VDS, describes the model, body, engine, and safety equipment. For a European car, these codes reflect European-market specs, which can differ from the US version of the same model: different engines, trim names, and equipment. The letters mean whatever the manufacturer assigned for that market and model year.

A decoder that reads the maker's tables gives you the plain-English version. Paste the VIN into our [VIN Decoder](/vin-decoder/) to see the make, country, and year. Keep in mind that a European-spec car may show details a US-focused database does not fully recognize.

## Position 9: The Check Digit Caveat

Here is a key difference. The check digit in position nine is required in North America, but it is not mandatory in Europe. Many European manufacturers put a different character there instead of a calculated check digit. So a genuine European import can fail a strict North American check-digit test and still be a valid VIN.

Our [VIN Validator](/vin-validator/) calculates the check digit the North American way, which is perfect for US-market cars. For a European import, treat a check-digit mismatch as expected rather than proof of a problem, and confirm the VIN against the car's documents. To understand how the calculation works, see [what is a VIN check digit](/blog/what-is-a-vin-check-digit/).

## Position 10: The Model Year

The tenth character is the model year, using the same worldwide cycle that skips I, O, Q, U, Z, and 0.

| Code | Year | Code | Year |
|---|---|---|---|
| H | 2017 | N | 2022 |
| J | 2018 | P | 2023 |
| K | 2019 | R | 2024 |
| L | 2020 | S | 2025 |
| M | 2021 | T | 2026 |

The full chart is in our [VIN model year codes chart](/blog/vin-model-year-codes-chart/). Note that some smaller European makers use position seven differently, so lean on the documents for older imports.

## Positions 11-17: Plant and Serial

The eleventh character is the plant code, pointing to a European factory. The final six characters are the sequential serial. Together they make the VIN unique.

## Extra Steps for an Import

Decoding the VIN is only part of importing a car. A vehicle brought into North America also needs to meet local safety and emissions rules, and the VIN is what customs and the DMV use to track it. Confirm the VIN matches the title and the plate on the car before any purchase, and check it against the country codes above so the origin lines up with the seller's story.

## Decode an Import VIN Now

Paste any VIN into our [VIN Decoder](/vin-decoder/) to read the country, maker, and year, and use the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/) to see the structure. For European cars, remember the check-digit caveat and always cross-check against the vehicle's paperwork.

## Keep Reading

- [How to Decode a BMW VIN: Read Every Character](/blog/how-to-decode-a-bmw-vin/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)
- [What Is a VIN Check Digit and How Is It Calculated?](/blog/what-is-a-vin-check-digit/)
- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
