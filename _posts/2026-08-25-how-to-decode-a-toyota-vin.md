---
title: "How to Decode a Toyota VIN: Read Every Character"
date: 2026-08-25
category: "VIN Guide"
description: "How to decode a Toyota VIN by hand. Learn what each of the 17 characters means, from the JTD or 4T1 prefix to the model year, plant, and serial."
image: /assets/blog/how-to-decode-a-toyota-vin.jpg
author: "FreeVinGenerator Team"
---

A Toyota VIN looks like a random string until you know where to split it. Every Toyota, Lexus, and the old Scion line uses the same 17-character ISO 3779 format, so the number tells you where the car was built, what it is, and its model year. A Camry from Kentucky and a Land Cruiser from Japan start with different characters for exactly that reason. Here is how to read a Toyota VIN one position at a time.

## The Layout of a Toyota VIN

The 17 characters break into three sections: a manufacturer block, a description block, and a unique-unit block.

| Positions | Section | What it tells you |
|---|---|---|
| 1-3 | WMI | Country, maker, and vehicle type |
| 4-8 | VDS | Model, body, engine, restraints |
| 9 | Check digit | Math that verifies the VIN |
| 10 | Model year | The year code |
| 11 | Plant | Which factory built it |
| 12-17 | Serial | The unit's production number |

## Positions 1-3: The Toyota WMI

The first three characters name the maker and the country of assembly. Toyota builds all over the world, so it uses several prefixes. A Japan-built Toyota usually starts with J, while a North American one starts with a number.

| WMI | Meaning |
|---|---|
| JTD, JTM, JTE | Toyota, built in Japan |
| 4T1, 4T3 | Toyota, built in the USA |
| 5TD, 5TF | Toyota, built in the USA |
| 2T1, 2T3 | Toyota, built in Canada |
| JTH | Lexus, built in Japan |
| 2T2 | Lexus, built in the USA/Canada |

So a VIN starting **JTD** is a Japanese-built Toyota, and one starting **4T1** was assembled in the United States. The first character is the country (J is Japan, 1 and 4 and 5 are the USA, 2 is Canada), and the next two identify Toyota and the vehicle type. You can check any prefix on our [WMI code reference](/wmi-codes/).

## Positions 4-8: The Vehicle Description

This block, the VDS, carries the model-specific details: the line, body style, engine, and restraint system. Toyota assigns these codes per model, so the same letter means one thing on a Corolla and another on a Tacoma. Roughly:

- **Positions 4-5** cover the model line and grade.
- **Position 6** often marks the body type or platform.
- **Position 7** relates to the restraint system.
- **Position 8** is the engine code, tied to a specific engine family.

These charts are Toyota-specific, so the fastest way to turn them into plain English is a decoder that reads them for you. Paste the VIN into our [VIN Decoder](/vin-decoder/) to see the make, country, and year without a lookup table.

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

The same letters repeat every 30 years, so a decoder uses other clues to separate a 1995 from a 2025. The complete chart back to 1980 is in our [VIN model year codes chart](/blog/vin-model-year-codes-chart/).

## Position 11: The Assembly Plant

The eleventh character is the plant code, the specific factory that built the car. For Toyota that might be Tsutsumi or Takaoka in Japan, Georgetown in Kentucky, or a plant in Canada. It is most useful for matching a VIN to a production record or a recall.

## Positions 12-17: The Serial Number

The last six characters are the sequential production number. This is the unit's unique serial, the part that separates two identical-looking Camrys built on the same day. Combined with the year and plant, it makes the VIN one of a kind.

## Try It on a Real Toyota VIN

You can decode a Toyota VIN by hand once you know the blocks, but a tool is faster and catches mistakes. Paste any VIN into the [VIN Decoder](/vin-decoder/) for the country, maker, and year, or use the [VIN Validator](/vin-validator/) to confirm the check digit before you rely on it. To see all 17 positions mapped out, try the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/).

## Keep Reading

- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)
- [What a VIN Tells You: Decoding Make, Model, and Year](/blog/what-a-vin-tells-you/)
- [VIN Model Year Codes: The Full Chart (1980-2031)](/blog/vin-model-year-codes-chart/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
