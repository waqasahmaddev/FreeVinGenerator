---
title: "How to Decode a Chevrolet VIN: Read Every Character"
date: 2026-09-01
category: "VIN Guide"
description: "How to decode a Chevrolet VIN by hand. See what each of the 17 characters means, from the 1G1 prefix to the model year, plant, and serial number."
image: /assets/blog/how-to-decode-a-chevrolet-vin.jpg
author: "FreeVinGenerator Team"
---

A Chevrolet VIN tells you where the vehicle was built, what it is, and its model year, all in 17 characters. Chevy is part of General Motors, so its VINs share the "1G" family with Buick, Cadillac, and GMC, but the third character sets Chevrolet apart. Once you know which position holds what, a Silverado or a Malibu VIN reads plainly. Here is how to decode one character by character.

## The Three Parts of a Chevrolet VIN

Every VIN breaks into three blocks: the manufacturer, the vehicle description, and the unique unit.

| Positions | Section | What it tells you |
|---|---|---|
| 1-3 | WMI | Country, maker, and vehicle type |
| 4-8 | VDS | Model, body, engine, restraints |
| 9 | Check digit | Math that verifies the VIN |
| 10 | Model year | The year code |
| 11 | Plant | Which factory built it |
| 12-17 | Serial | The unit's production number |

## Positions 1-3: The Chevrolet WMI

The first three characters name the maker and country. General Motors uses "1G" for US-built vehicles, then a third character to split the brands and vehicle types. Chevrolet cars usually read 1G1, while Chevy trucks and SUVs read 1GC or 1GN.

| WMI | Meaning |
|---|---|
| 1G1 | Chevrolet car, built in the USA |
| 2G1 | Chevrolet car, built in Canada |
| 1GC | Chevrolet truck, built in the USA |
| 1GN | Chevrolet SUV, built in the USA |
| 1GT, 1GK | GMC (US) |
| 1G4 | Buick (US) |
| 1G6 | Cadillac (US) |

So a VIN starting **1GC** is a US-built Chevrolet truck before you read another character. The first digit is the country (1 and 4 and 5 are the USA, 2 is Canada, 3 is Mexico), the "G" marks General Motors, and the third character identifies the brand and type. Check any prefix on our [WMI code reference](/wmi-codes/).

## Positions 4-8: The Vehicle Description

This block, the VDS, carries the model-specific details: the series, body style, restraint system, and engine. GM assigns these codes per model year, so the same letter means one thing on a Malibu and another on a Silverado. In broad terms:

- **Position 4** often covers the restraint system.
- **Positions 5-7** identify the series, body style, and model line.
- **Position 8** is the engine code, tied to a specific engine family.

These charts are GM-specific, so the fastest way to turn them into plain English is a decoder that reads them for you. Paste the VIN into our [VIN Decoder](/vin-decoder/) to see the make, country, and year without a lookup table.

## Position 9: The Check Digit

The ninth character verifies the whole VIN. It is a single value from 0 to 9 (or X for 10), calculated from every other character with a fixed formula. If one character is wrong, the check digit stops matching, which flags typos and tampering. Our [VIN Validator](/vin-validator/) runs the calculation, and [how to check if a VIN is valid](/blog/how-to-check-if-a-vin-is-valid/) walks through the math.

## Position 10: The Model Year

The tenth character is the model year. It cycles through letters and numbers, skipping I, O, Q, U, Z, and 0. The recent codes:

| Code | Year | Code | Year |
|---|---|---|---|
| E | 2014 | M | 2021 |
| F | 2015 | N | 2022 |
| G | 2016 | P | 2023 |
| H | 2017 | R | 2024 |
| J | 2018 | S | 2025 |
| K | 2019 | T | 2026 |
| L | 2020 | V | 2027 |

The same letters repeat every 30 years, so a decoder uses position seven to separate a 1995 from a 2025. The full chart back to 1980 is in our [VIN model year codes chart](/blog/vin-model-year-codes-chart/).

## Position 11: The Assembly Plant

The eleventh character is the plant code, the specific factory that built the vehicle. For Chevrolet that might be Bowling Green (Corvette), Fort Wayne, Flint, or a plant in Canada or Mexico. It is most useful for matching a VIN to a production record or a recall.

## Positions 12-17: The Serial Number

The last six characters are the sequential production number, the unit's unique serial. Two identical-looking Silverados off the same line differ here. Combined with the year and plant, it makes the VIN one of a kind.

## Try It on a Real Chevrolet VIN

You can decode a Chevy VIN by hand once you know the blocks, but a tool is faster and catches mistakes. Paste any VIN into the [VIN Decoder](/vin-decoder/) for the country, maker, and year, or use the [VIN Validator](/vin-validator/) to confirm the check digit before you rely on it. To see all 17 positions mapped out, try the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/).

## Keep Reading

- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)
- [What a VIN Tells You: Decoding Make, Model, and Year](/blog/what-a-vin-tells-you/)
- [VIN Model Year Codes: The Full Chart (1980-2031)](/blog/vin-model-year-codes-chart/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
