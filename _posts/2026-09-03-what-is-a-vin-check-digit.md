---
title: "What Is a VIN Check Digit and How Is It Calculated?"
date: 2026-09-03
category: "VIN Guide"
description: "What a VIN check digit is and how it is calculated. See the weights, the transliteration table, and a worked example you can verify by hand."
image: /assets/blog/what-is-a-vin-check-digit.jpg
author: "FreeVinGenerator Team"
---

The ninth character of a VIN is not random and it does not describe the car. It is a check digit, a single value calculated from the other 16 characters that proves the VIN is internally consistent. Change any character by mistake or on purpose, and the math stops adding up. That is how a lookup tool, a DMV system, or a validator catches a bad VIN in an instant. Here is exactly how the check digit works and how to calculate one yourself.

## What the Check Digit Is For

A VIN has 17 characters, and position nine is reserved for the check digit. Its only job is verification. The formula takes all 17 positions, runs a fixed calculation, and produces a single expected value from 0 to 9, or the letter X for the value 10. If the character sitting in position nine matches that expected value, the VIN passes. If it does not, something is wrong.

This catches the two most common problems: a typo when someone keys in a VIN, and a tampered VIN where a character was changed to hide a car's identity. Neither survives the math.

## The Three Ingredients

Calculating a check digit needs three things:

1. **A transliteration table** to turn letters into numbers.
2. **A set of position weights** to multiply each character by.
3. **Division by 11** to get the final value.

Take them one at a time.

## Step 1: Turn Letters Into Numbers

Numbers keep their value. Letters convert to a digit using a fixed table (the letters I, O, and Q are never used in a VIN, so they are absent):

| Letter | Value | Letter | Value | Letter | Value |
|---|---|---|---|---|---|
| A | 1 | J | 1 | S | 2 |
| B | 2 | K | 2 | T | 3 |
| C | 3 | L | 3 | U | 4 |
| D | 4 | M | 4 | V | 5 |
| E | 5 | N | 5 | W | 6 |
| F | 6 | P | 7 | X | 7 |
| G | 7 | R | 9 | Y | 8 |
| H | 8 |  |  | Z | 9 |

## Step 2: Multiply by the Position Weights

Each of the 17 positions has a fixed weight. Position nine gets a weight of 0, because the check digit cannot help calculate itself.

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Weight | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 10 | 0 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 |

Multiply each character's number by its position weight, then add all 17 products together.

## Step 3: Divide by 11

Take the total sum and divide by 11. The remainder is the check digit. If the remainder is 10, the check digit is written as X. That is the whole formula: transliterate, multiply, sum, and take the remainder after dividing by 11.

## A Worked Example You Can Verify

Take the simplest possible case, a VIN of all ones: `11111111111111111`. Every character transliterates to 1, so the sum is just the total of all the weights:

8 + 7 + 6 + 5 + 4 + 3 + 2 + 10 + 0 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 = **89**

Now divide by 11: 89 ÷ 11 is 8 with a remainder of 1. So the check digit is **1**, and sure enough, position nine of that VIN is a 1. The VIN is valid. You can paste it straight into our [VIN Validator](/vin-validator/) and watch the check pass.

## Why This Matters in Practice

The check digit is the reason a [random VIN generator](/) can produce numbers that behave like real VINs: it calculates position nine correctly every time, so the output passes validation. It is also why a single mistyped character gets rejected. If you have ever entered a VIN and been told it is invalid, the check digit is usually why.

For a full walkthrough of every validation step, not just the check digit, see [how to check if a VIN is valid](/blog/how-to-check-if-a-vin-is-valid/). To understand what the other 16 characters mean, start with [how to read a VIN](/blog/how-to-read-a-vin/).

## Check a VIN Now

You do not have to do the arithmetic by hand. Paste any VIN into our [VIN Validator](/vin-validator/) and it runs this exact calculation, shows you the expected check digit next to the actual one, and tells you whether they match. It is the fastest way to confirm a VIN is genuine before you trust it.

## Keep Reading

- [How to Check If a VIN Is Valid (and Spot a Cloned One)](/blog/how-to-check-if-a-vin-is-valid/)
- [How to Read a VIN: What All 17 Characters Mean](/blog/how-to-read-a-vin/)
- [How VIN Cloning Scams Work (and How to Protect Yourself)](/blog/how-vin-cloning-scams-work/)
- [WMI Codes: VIN Country and Manufacturer Reference](/wmi-codes/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Visualizer](/vin-breakdown-visualizer/)
