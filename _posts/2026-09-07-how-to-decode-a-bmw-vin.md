---
title: "How to Decode a BMW VIN: Read Every Character"
date: 2026-09-07
category: "VIN Guide"
description: "How to decode a BMW VIN by hand. See what each of the 17 characters means, from the WBA or 5UX prefix to the model year, plant, and serial number."
image: /assets/blog/how-to-decode-a-bmw-vin.jpg
author: "FreeVinGenerator Team"
---

A BMW VIN carries the car's origin, identity, and model year in 17 characters. BMW follows the same ISO 3779 layout as every automaker, so a 3 Series built in Germany and an X5 built in South Carolina start with different characters on purpose. Once you know which position holds what, the number reads like a short label. Here is how to decode a BMW VIN one character at a time.

## The Three Parts of a BMW VIN

Every VIN splits into three blocks: who made it, what it is, and which exact unit it is.

| Positions | Section | What it tells you |
|---|---|---|
| 1-3 | WMI | Country, maker, and vehicle type |
| 4-8 | VDS | Model, body, engine, restraints |
| 9 | Check digit | Math that verifies the VIN |
| 10 | Model year | The year code |
| 11 | Plant | Which factory built it |
| 12-17 | Serial | The unit's production number |

## Positions 1-3: The BMW WMI

The first three characters name the maker and the country of assembly. BMW builds in Germany and the United States, among others, so it uses different prefixes. A German-built BMW usually starts with WBA, while a US-built BMW SUV starts with 5UX.

| WMI | Meaning |
|---|---|
| WBA | BMW car, built in Germany |
| WBS | BMW M model, built in Germany |
| WBY | BMW electric/i model, Germany |
| 5UX | BMW SUV, built in the USA |
| 4US | BMW, built in the USA |

So a VIN starting **WBA** is a German-built BMW before you read another character. The letter W is the country code for Germany, and the next two characters identify BMW and the vehicle type. A prefix starting with 5 or 4 points to US assembly. Look up any prefix on our [WMI code reference](/wmi-codes/).

## Positions 4-8: The Vehicle Description

This block, the VDS, holds the model-specific details: the model line, body style, engine, and restraint system. BMW assigns these codes per model and year, so the same letter means one thing on a 3 Series and another on an X5. In broad terms:

- **Positions 4-5** cover the model series and body type.
- **Position 6** often marks the body style or drive type.
- **Position 7** relates to the restraint system.
- **Position 8** is the engine code, tied to a specific engine family.

These charts are BMW-specific, so the quickest way to turn them into plain English is a decoder that reads them for you. Paste the VIN into our [VIN Decoder](/vin-decoder/) to see the make, country, and year without a lookup table.

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

The eleventh character is the plant code, the specific factory that built the car. For BMW that might be Munich or Dingolfing in Germany, or Spartanburg in South Carolina, which builds many of BMW's SUVs. It is most useful for matching a VIN to a production record or a recall.

## Positions 12-17: The Serial Number

The last six characters are the sequential production number, the unit's unique serial. Two identical-looking 3 Series built on the same day differ here. Combined with the year and plant, it makes the VIN one of a kind.

## Try It on a Real BMW VIN

You can decode a BMW VIN by hand once you know the blocks, but a tool is faster and catches mistakes. Paste any VIN into the [VIN Decoder](/vin-decoder/) for the country, maker, and year, or use the [VIN Validator](/vin-validator/) to confirm the check digit before you rely on it. To see all 17 positions mapped out, try the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/).

## Keep Reading

- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)
- [What a VIN Tells You: Decoding Make, Model, and Year](/blog/what-a-vin-tells-you/)
- [VIN Model Year Codes: The Full Chart (1980-2031)](/blog/vin-model-year-codes-chart/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
