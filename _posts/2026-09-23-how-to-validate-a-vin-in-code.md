---
title: "How to Validate a VIN in Code: The Check-Digit Algorithm"
date: 2026-09-23
category: "Developer"
description: "How to validate a VIN in code. The full ISO 3779 check-digit algorithm with working JavaScript and Python, plus the length and character rules to check first."
image: /assets/blog/how-to-validate-a-vin-in-code.jpg
author: "FreeVinGenerator Team"
---

Validating a VIN in code is three checks: the right length, the right characters, and a matching check digit. The first two are trivial. The third, the check digit, is where most homegrown validators either cheat (skip it) or get it wrong. This post gives you the full algorithm with working code in JavaScript and Python, so your validation actually catches typos and bad data instead of waving them through.

## The Three Rules

A VIN is valid when all three hold:

1. **Length:** exactly 17 characters.
2. **Characters:** letters and digits only, and never I, O, or Q (they are excluded to avoid confusion with 1 and 0).
3. **Check digit:** position nine equals the value computed from the other 16 characters.

Skipping the third rule is the common mistake. Length and character checks catch obvious garbage, but only the check digit catches a single transposed character, which is the most common real-world error.

## How the Check Digit Works

The algorithm, defined by ISO 3779 for North American VINs:

1. **Transliterate** each character to a number. Digits keep their value; letters map to a fixed table.
2. **Multiply** each value by the weight for its position.
3. **Sum** all 17 products.
4. **Take the remainder** of that sum divided by 11. If it is 10, the check digit is `X`; otherwise it is the digit itself.
5. **Compare** the result to the character actually in position nine.

The transliteration table:

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

The position weights (positions 1 to 17):

`8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2`

Note position nine has a weight of 0, because the check digit cannot help calculate itself.

## JavaScript

```javascript
const TRANSLITERATION = {
  A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8,
  J:1, K:2, L:3, M:4, N:5, P:7, R:9,
  S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9,
  '0':0, '1':1, '2':2, '3':3, '4':4,
  '5':5, '6':6, '7':7, '8':8, '9':9
};
const WEIGHTS = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];

function isValidVIN(vin) {
  if (typeof vin !== 'string') return false;
  vin = vin.toUpperCase();
  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) return false; // length + chars, excludes I/O/Q

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += TRANSLITERATION[vin[i]] * WEIGHTS[i];
  }
  const remainder = sum % 11;
  const expected = remainder === 10 ? 'X' : String(remainder);
  return vin[8] === expected;
}
```

The regex `^[A-HJ-NPR-Z0-9]{17}$` handles length and character rules in one shot: it requires 17 characters and, by skipping I, O, and Q in the ranges, rejects them automatically.

## Python

```python
TRANSLITERATION = {
    **{c: i for i, c in enumerate("0123456789")},
    'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,
    'J':1,'K':2,'L':3,'M':4,'N':5,'P':7,'R':9,
    'S':2,'T':3,'U':4,'V':5,'W':6,'X':7,'Y':8,'Z':9,
}
WEIGHTS = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2]

import re
VIN_RE = re.compile(r'^[A-HJ-NPR-Z0-9]{17}$')

def is_valid_vin(vin: str) -> bool:
    if not isinstance(vin, str):
        return False
    vin = vin.upper()
    if not VIN_RE.match(vin):
        return False
    total = sum(TRANSLITERATION[ch] * WEIGHTS[i] for i, ch in enumerate(vin))
    remainder = total % 11
    expected = 'X' if remainder == 10 else str(remainder)
    return vin[8] == expected
```

Both versions follow the same steps and return the same result. Port the transliteration table and the weights to any language and the logic is identical.

## Test It

Do not trust a validator you have not tested. A clean way to check yours: the all-ones VIN `11111111111111111` is valid (every character transliterates to 1, the weights sum to 89, and 89 mod 11 is 1, which matches position nine). Generate more valid samples with our [VIN Generator](/) or a batch from the [Bulk VIN Generator](/bulk-vin-generator/), and confirm your code agrees with our [VIN Validator](/vin-validator/). Then flip one character to build a known-invalid case and make sure your validator rejects it. For the math behind the algorithm, see [what is a VIN check digit](/blog/what-is-a-vin-check-digit/).

## One Caveat: Non-US VINs

The check digit is mandatory for North American VINs but optional in some other markets, where manufacturers may put a different character in position nine. So a genuine European or JDM VIN can fail this check and still be a real VIN. If your app handles imports, treat a check-digit failure as a warning to confirm against documents, not automatic proof of a bad VIN. More on that in [how to decode a European import VIN](/blog/how-to-decode-a-european-import-vin/).

## Keep Reading

- [What Is a VIN Check Digit and How Is It Calculated?](/blog/what-is-a-vin-check-digit/)
- [How to Generate Test VINs for Software Testing](/blog/how-to-generate-test-vins-for-software-testing/)
- [How to Check If a VIN Is Valid (and Spot a Cloned One)](/blog/how-to-check-if-a-vin-is-valid/)
- [How to Decode a European Import VIN](/blog/how-to-decode-a-european-import-vin/)

**Free VIN tools:** [VIN Generator](/) · [VIN Decoder](/vin-decoder/) · [VIN Validator](/vin-validator/) · [Bulk Generator](/bulk-vin-generator/) · [QR Code Generator](/vin-qr-code-generator/) · [Barcode Generator](/vin-barcode-generator/) · [Visualizer](/vin-breakdown-visualizer/)
