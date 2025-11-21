// VIN Validator Logic

function transliterateCharValidator(char) {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8,
        J:1, K:2, L:3, M:4, N:5, P:7, R:9,
        S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9,
        0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
    };
    return map[char] || 0;
}

function calculateExpectedCheckDigit(vin) {
    const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < 17; i++) {
        sum += transliterateCharValidator(vin[i]) * weights[i];
    }

    let remainder = sum % 11;
    return remainder === 10 ? 'X' : remainder.toString();
}

function validateVIN() {
    const vinInput = document.getElementById('vinValidateInput');
    const vin = vinInput.value.toUpperCase().trim();
    const resultDiv = document.getElementById('validationResult');
    const detailsDiv = document.getElementById('validationDetails');

    // Clear previous results
    resultDiv.innerHTML = '';

    if (vin.length === 0) {
        detailsDiv.style.display = 'none';
        return;
    }

    let isValid = true;
    let errors = [];

    // Check 1: Length
    const lengthValid = vin.length === 17;
    document.getElementById('lengthCheck').textContent = lengthValid ? '✓ Valid (17 characters)' : '✗ Invalid (must be 17 characters)';
    document.getElementById('lengthCheck').style.color = lengthValid ? '#38ef7d' : '#f45c43';
    if (!lengthValid) {
        isValid = false;
        errors.push('VIN must be exactly 17 characters');
    }

    // Check 2: Valid characters (no I, O, Q)
    const validChars = /^[A-HJ-NPR-Z0-9]*$/;
    const charsValid = validChars.test(vin);
    document.getElementById('characterCheck').textContent = charsValid ? '✓ Valid characters' : '✗ Invalid characters (I, O, Q not allowed)';
    document.getElementById('characterCheck').style.color = charsValid ? '#38ef7d' : '#f45c43';
    if (!charsValid) {
        isValid = false;
        errors.push('VIN contains invalid characters (I, O, Q are not allowed)');
    }

    // Check 3: Check digit validation (only if previous checks pass)
    let checkDigitValid = false;
    let expectedDigit = '-';
    let actualDigit = '-';

    if (lengthValid && charsValid) {
        expectedDigit = calculateExpectedCheckDigit(vin);
        actualDigit = vin[8];
        checkDigitValid = expectedDigit === actualDigit;

        document.getElementById('checkDigitCheck').textContent = checkDigitValid ? '✓ Valid' : '✗ Invalid';
        document.getElementById('checkDigitCheck').style.color = checkDigitValid ? '#38ef7d' : '#f45c43';
        document.getElementById('expectedCheckDigit').textContent = expectedDigit;
        document.getElementById('actualCheckDigit').textContent = actualDigit;

        if (!checkDigitValid) {
            isValid = false;
            errors.push(`Check digit mismatch (expected ${expectedDigit}, got ${actualDigit})`);
        }
    } else {
        document.getElementById('checkDigitCheck').textContent = 'N/A';
        document.getElementById('checkDigitCheck').style.color = '#718096';
        document.getElementById('expectedCheckDigit').textContent = 'N/A';
        document.getElementById('actualCheckDigit').textContent = 'N/A';
    }

    // Display overall result
    if (isValid) {
        resultDiv.innerHTML = '<div class="validation-result valid">✓ Valid VIN</div>';
    } else {
        let errorMsg = '<div class="validation-result invalid">✗ Invalid VIN<br><br>' + errors.join('<br>') + '</div>';
        resultDiv.innerHTML = errorMsg;
    }

    detailsDiv.style.display = 'block';

    gtag('event', 'vin_validated', {
        'event_category': 'Tool Usage',
        'event_label': 'VIN Validator',
        'value': 1
    });
}

function clearValidator() {
    document.getElementById('vinValidateInput').value = '';
    document.getElementById('validationResult').innerHTML = '';
    document.getElementById('validationDetails').style.display = 'none';
}