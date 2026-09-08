---
title: "How to Decode a Truck VIN: Read Every Character"
date: 2026-09-11
category: "VIN Guide"
description: "How to decode a truck VIN. Learn how pickup and commercial truck VINs work, what each character means, and how truck codes differ from car VINs."
image: /assets/blog/how-to-decode-a-truck-vin.jpg
author: "FreeVinGenerator Team"
---

Trucks use the same 17-character VIN as cars, but the codes lean toward things trucks care about: cab style, bed length, drive type, and gross weight rating. A pickup and a sedan from the same maker often start with different characters because the manufacturer assigns trucks their own prefix. Once you know where truck-specific details live, a truck VIN reads clearly. Here is how to decode one character by character.

## The Layout Is the Same as Any VIN

A truck VIN follows the ISO 3779 structure every vehicle uses. It splits into three blocks.

| Positions | Section | What it tells you |
|---|---|---|
| 1-3 | WMI | Country, maker, and vehicle type |
| 4-8 | VDS | Model, cab, drive, engine, weight |
| 9 | Check digit | Math that verifies the VIN |
| 10 | Model year | The year code |
| 11 | Plant | Which factory built it |
| 12-17 | Serial | The unit's production number |

## Positions 1-3: The Truck WMI

The first three characters name the maker and country, and the third often flags that the vehicle is a truck. Makers split their car and truck lines into separate prefixes.

| WMI | Meaning |
|---|---|
| 1FT, 1FD | Ford truck, built in the USA |
| 1GC | Chevrolet truck, built in the USA |
| 1GT | GMC truck, built in the USA |
| 3D7, 1C6 | Ram / Dodge truck |
| 5TF | Toyota truck, built in the USA |

So a VIN starting **1FT** is a US-built Ford truck, and **1GC** is a Chevrolet truck, before you read another character. The first digit is the country and the next two identify the maker and that it is a truck line. You can look up any prefix on our [WMI code reference](/wmi-codes/). For brand-specific walkthroughs, see [how to decode a Ford VIN](/blog/how-to-decode-a-ford-vin/) and [how to decode a Chevrolet VIN](/blog/how-to-decode-a-chevrolet-vin/).

## Positions 4-8: Where Trucks Differ

This block, the VDS, is where a truck VIN carries its truck-specific detail. On a pickup or commercial truck, these positions commonly encode:

- **Gross Vehicle Weight Rating (GVWR)** and brake type, which matter for classing the truck.
- **Cab style:** regular, extended, or crew cab.
- **Bed length** and body type.
- **Drive type:** two-wheel or four-wheel drive.
- **Engine code** in position eight, tied to a specific engine.

Because these codes are maker-specific and change by model year, the fastest way to read them is a decoder. Paste the VIN into our [VIN Decoder](/vin-decoder/) to see the make, country, and year, then match the truck details against the maker's chart.

## Position 9: The Check Digit

The ninth character verifies the whole VIN. It is a single value from 0 to 9 (or X for 10), calculated from every other character. If one character is wrong, the check digit stops matching, which flags typos and tampering. Our [VIN Validator](/vin-validator/) runs the calculation, and [how to check if a VIN is valid](/blog/how-to-check-if-a-vin-is-valid/) explains the math.

## Position 10: The Model Year

The tenth character is the model year, cycling through letters and numbers while skipping I, O, Q, U, Z, and 0.

| Code | Year | Code | Year |
|---|---|---|---|
| H | 2017 | N | 2022 |
| J | 2018 | P | 2023 |
| K | 2019 | R | 2024 |
| L | 2020 | S | 2025 |
| M | 2021 | T | 2026 |

The codes repeat every 30 years, so a decoder uses position seven to separate a 1995 from a 2025. The full chart is in our [VIN model year codes chart](/blog/vin-model-year-codes-chart/).

## Positions 11-17: Plant and Serial

The eleventh character is the plant code, the factory that built the truck. The final six characters are the sequential production number, the truck's unique serial. Together with the year, they make the VIN one of a kind.

## A Note on Heavy Trucks

Light-duty pickups follow the standard passenger-vehicle VIN closely. Medium- and heavy-duty commercial trucks use the same 17-character format, but the VDS codes shift toward commercial details like axle configuration, GVWR class, and body type. The reading method is identical; only the specific code meanings change by manufacturer.

## Decode Your Truck VIN Now

You can read a truck VIN by hand once you know the blocks, but a tool is faster. Paste any VIN into the [VIN Decoder](/vin-decoder/) for the make, country, and year, use the [VIN Validator](/vin-validator/) to confirm it is genuine, and try the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/) to see all 17 positions laid out.

## Keep Reading

- [How to Decode a Ford VIN: Read Every Character](/blog/how-to-decode-a-ford-vin/)
- [How to Decode a Chevrolet VIN: Read Every Character](/blog/how-to-decode-a-chevrolet-vin/)
- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
