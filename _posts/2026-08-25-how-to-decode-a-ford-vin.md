---
title: "How to Decode a Ford VIN: Read Every Character"
date: 2026-08-24
category: "VIN Guide"
description: "How to decode a Ford VIN by hand. See what each of the 17 characters means, from the 1FA prefix to the model year, plant, and serial number."
image: /assets/blog/how-to-decode-a-ford-vin.jpg
author: "FreeVinGenerator Team"
---

Every Ford, Lincoln, and Mercury built since 1981 carries a 17-character VIN that spells out where the vehicle was made, what it is, and when it rolled off the line. Ford follows the same ISO 3779 layout every automaker uses, so once you know which character does what, a Ford VIN reads like a short sentence. Here is how to decode one position by position.

## The Three Parts of a Ford VIN

A VIN splits into three blocks. The first three characters are the World Manufacturer Identifier (WMI). The next six describe the vehicle. The last eight pin down the exact unit.

| Positions | Section | What it tells you |
|---|---|---|
| 1-3 | WMI | Country, maker, and vehicle type |
| 4-8 | VDS | Model, body, engine, restraints |
| 9 | Check digit | Math that verifies the VIN |
| 10 | Model year | The year code |
| 11 | Plant | Which factory built it |
| 12-17 | Serial | The unit's production number |

## Positions 1-3: The Ford WMI

The first three characters tell you it is a Ford and where it was assembled. Ford uses several prefixes because it splits cars, trucks, and SUVs, and builds in more than one country.

| WMI | Meaning |
|---|---|
| 1FA | Ford car, built in the USA |
| 1FT | Ford truck, built in the USA |
| 1FM | Ford SUV/MPV, built in the USA |
| 1FD | Ford truck/van (heavier), USA |
| 2FA, 2FM, 2FT | Ford, built in Canada |
| 3FA | Ford, built in Mexico |
| 1LN | Lincoln, built in the USA |

So a VIN starting **1FT** is a US-built Ford truck before you read another character. The first digit is the country (1 and 4 are the USA, 2 is Canada, 3 is Mexico), the second and third identify Ford and the vehicle line. You can look up any prefix on our [WMI code reference](/wmi-codes/).

## Positions 4-8: The Vehicle Description

This block, the VDS, is where Ford encodes the specifics: restraint system, body style, series, and engine. Ford publishes these codes per model year, so the same letter can mean different things on an F-150 than on a Mustang. In broad terms:

- **Position 4** often covers the restraint system (airbags, seatbelt type).
- **Positions 5-7** identify the model line, series, and body style (regular cab vs. crew cab, coupe vs. sedan).
- **Position 8** is the engine code, which maps to a specific displacement and configuration.

Because these are brand-specific, a decoder that reads Ford's tables gives you the plain-English version instead of the raw letters. Drop the VIN into our [VIN Decoder](/vin-decoder/) to see the make, country, and year without memorizing Ford's charts.

## Position 9: The Check Digit

Position nine is not descriptive. It is a single digit (0-9, or X for 10) calculated from all the other characters using a fixed weighting formula. Change any character in the VIN and the check digit no longer matches, which is how you catch a typo or a tampered number. Our [VIN Validator](/vin-validator/) runs that exact calculation, and you can read the full method in [how to check if a VIN is valid](/blog/how-to-check-if-a-vin-is-valid/).

## Position 10: The Model Year

The tenth character is the model year, and it uses a letter-and-number cycle that skips I, O, Q, U, Z, and 0. Here are the recent codes:

| Code | Year | Code | Year |
|---|---|---|---|
| E | 2014 | M | 2021 |
| F | 2015 | N | 2022 |
| G | 2016 | P | 2023 |
| H | 2017 | R | 2024 |
| J | 2018 | S | 2025 |
| K | 2019 | T | 2026 |
| L | 2020 | V | 2027 |

The cycle repeats every 30 years, so position seven helps a decoder tell a 1995 from a 2025. For the full table back to 1980, see our [VIN model year codes chart](/blog/vin-model-year-codes-chart/).

## Position 11: The Assembly Plant

The eleventh character is Ford's plant code. It names the exact factory that assembled the vehicle, such as Dearborn, Kansas City, or a plant in Canada or Mexico. Ford maps each code to a plant internally, so it is most useful when you are matching a VIN to a build record or a recall notice.

## Positions 12-17: The Serial Number

The final six characters are the sequential production number, the unit's unique serial. Two otherwise identical trucks off the same line differ here. Together with the plant and year, these six digits make the VIN one of a kind.

## Try It on a Real Ford VIN

Reading a Ford VIN by hand gets easier once you have done it a few times, but you do not have to. Paste any VIN into the [VIN Decoder](/vin-decoder/) to see the country, maker, and year instantly, or run it through the [VIN Validator](/vin-validator/) to confirm the check digit is correct before you trust it. If you want to see the structure laid out visually, the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/) maps every position.

## Keep Reading

- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)
- [What a VIN Tells You: Decoding Make, Model, and Year](/blog/what-a-vin-tells-you/)
- [VIN Model Year Codes: The Full Chart (1980-2031)](/blog/vin-model-year-codes-chart/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
