---
title: "How to Read a VIN: What All 17 Characters Mean"
date: 2026-08-14
description: "A plain-English guide to reading a Vehicle Identification Number. Learn what each of the 17 VIN characters means, how the check digit works, and how to decode the model year."
image: /assets/og-image.jpg
author: "FreeVinGenerator Team"
---

Every car, truck, and motorcycle built since 1981 carries a unique 17-character **Vehicle Identification Number (VIN)**. It looks like a random jumble of letters and numbers, but it isn't random at all — every position tells you something specific about the vehicle. Once you know how to read it, a VIN becomes a compact fingerprint you can decode by eye.

This guide walks through all 17 positions, one section at a time.

## The three sections of a VIN

A VIN is divided into three logical blocks, defined by the international **ISO 3779** standard:

- **WMI** — World Manufacturer Identifier (positions 1–3)
- **VDS** — Vehicle Descriptor Section (positions 4–9)
- **VIS** — Vehicle Identifier Section (positions 10–17)

Let's break each one down.

## Positions 1–3: Who made it and where (WMI)

The first three characters identify the manufacturer and the country of origin.

- **Position 1** — the region/country of the plant. For example, `1`, `4`, and `5` are the United States; `J` is Japan; `W` is Germany; `S` is the United Kingdom; `K` is South Korea.
- **Positions 2–3** — the specific manufacturer and vehicle type. For instance, `1HG` is Honda in the USA, while `WBA` is BMW.

Together these three characters are called the World Manufacturer Identifier. A manufacturer that builds fewer than 1,000 vehicles a year gets a `9` in position 3 and is identified more specifically later in the VIN.

## Positions 4–8: What kind of vehicle (VDS)

These five characters describe the vehicle's attributes — things like the model, body style, engine type, and restraint system. There is no single universal table here; each manufacturer defines its own coding for this section. That's why two vehicles from the same brand can share the first three characters but differ starting at position 4.

## Position 9: The check digit

This is the clever one. Position 9 is a **check digit** — a single value (0–9, or the letter `X` for 10) that is mathematically calculated from all the other 16 characters. It exists to catch typos.

Here's how it works in brief:

1. Each letter is converted to a number using a fixed table (A=1, B=2, … with I, O, and Q skipped).
2. Each of the 17 positions is multiplied by an assigned weight.
3. The results are summed and divided by 11.
4. The remainder is the check digit (a remainder of 10 is written as `X`).

If someone mistypes even one character, the math almost always stops matching — which is exactly how a **VIN validator** flags an invalid number. You can test any VIN with our [VIN Validator](/vin-validator/).

## Position 10: The model year

A single character encodes the model year, and the code repeats on a 30-year cycle. A few examples:

| Code | Year | | Code | Year |
|------|------|---|------|------|
| A | 1980 / 2010 | | L | 1990 / 2020 |
| B | 1981 / 2011 | | M | 1991 / 2021 |
| S | 1995 / 2025 | | T | 1996 / 2026 |

The letters `I`, `O`, `Q`, `U`, `Z` and the number `0` are never used for the year. Because the cycle repeats, you use position 7 to tell the eras apart: if position 7 is a **number**, the vehicle is 1980–2009; if it's a **letter**, it's 2010 or later.

## Position 11: The assembly plant

This character identifies the specific factory where the vehicle was assembled. The codes are manufacturer-specific — each automaker maintains its own list of plant codes.

## Positions 12–17: The serial number

The final six characters are the vehicle's unique production serial number — essentially the order in which it rolled off the line. This is what makes each VIN one-of-a-kind, even for two otherwise identical vehicles.

## Why VINs skip I, O, and Q

You'll never find the letters **I, O, or Q** in a VIN. They're excluded on purpose because they look too much like the numbers 1 and 0, which would cause constant transcription errors. Keeping them out makes VINs far more reliable to read and type.

## Where to find your VIN

If you want to try decoding your own vehicle, the VIN appears in several places:

- On the **driver's-side dashboard**, visible through the windshield
- On the **driver's-side door jamb** sticker
- On your **vehicle title, registration, and insurance** documents

## Put it into practice

The fastest way to learn is to decode a real one. Paste any 17-character VIN into our free [VIN Decoder](/vin-decoder/) and you'll see the country, manufacturer, model year, and check-digit result broken out instantly — or use the [VIN Breakdown Visualizer](/vin-breakdown-visualizer/) to see each position mapped out visually.

Once you've read a few, the pattern sticks: three characters for the maker, five for the vehicle, one to check the math, one for the year, one for the plant, and six for the serial. Seventeen characters, no mystery.
