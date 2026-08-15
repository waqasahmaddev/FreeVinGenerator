// VIN Decoder Logic (client-side, no backend)
// Reference data embedded as JS so the tool works instantly and privately.

// ---- Country / region (ISO 3780, by first 1-2 WMI characters) ----
function getCountry(vin) {
    const a = vin[0], b = vin[1];
    const inR = (ch, lo, hi) => ch >= lo && ch <= hi; // safe for letter ranges A-Z
    switch (a) {
        case '1': case '4': case '5': return 'United States';
        case '2': return 'Canada';
        case '3': return 'Mexico';
        case '6': return 'Australia';
        case '7': return 'New Zealand';
        case '8':
            if (inR(b, 'A', 'E')) return 'Argentina';
            if (inR(b, 'F', 'K')) return 'Chile';
            if (inR(b, 'L', 'R')) return 'Ecuador';
            if (inR(b, 'S', 'W')) return 'Peru';
            return 'Venezuela';
        case '9':
            if (inR(b, 'F', 'K')) return 'Colombia';
            return 'Brazil';
        case 'J': return 'Japan';
        case 'K':
            if (inR(b, 'A', 'E')) return 'Sri Lanka';
            if (inR(b, 'F', 'K')) return 'Kenya';
            return 'South Korea';
        case 'L': return 'China';
        case 'M':
            if (inR(b, 'F', 'K')) return 'Indonesia';
            if (inR(b, 'L', 'R')) return 'Thailand';
            return 'India';
        case 'N':
            if (inR(b, 'A', 'E')) return 'Iran';
            return 'Turkey';
        case 'P':
            if (inR(b, 'F', 'K')) return 'Singapore';
            if (inR(b, 'L', 'R')) return 'Malaysia';
            return 'Philippines';
        case 'R':
            if (inR(b, 'F', 'K')) return 'Vietnam';
            if (inR(b, 'L', 'R')) return 'Thailand';
            if (inR(b, 'S', 'W')) return 'United Arab Emirates';
            return 'Taiwan';
        case 'S':
            if (inR(b, 'A', 'M')) return 'United Kingdom';
            if (inR(b, 'N', 'T')) return 'Germany';
            if (inR(b, 'U', 'Z')) return 'Poland';
            return 'United Kingdom';
        case 'T':
            if (inR(b, 'A', 'H')) return 'Switzerland';
            if (inR(b, 'J', 'P')) return 'Czech Republic';
            if (inR(b, 'R', 'V')) return 'Hungary';
            return 'Portugal';
        case 'U':
            if (inR(b, 'H', 'M')) return 'Denmark';
            if (inR(b, 'N', 'T')) return 'Ireland';
            return 'Romania';
        case 'V':
            if (inR(b, 'A', 'E')) return 'Austria';
            if (inR(b, 'F', 'R')) return 'France';
            if (inR(b, 'S', 'W')) return 'Spain';
            return 'Serbia';
        case 'W': return 'Germany';
        case 'X':
            if (inR(b, 'A', 'E')) return 'Bulgaria';
            if (inR(b, 'F', 'K')) return 'Greece';
            if (inR(b, 'L', 'R')) return 'Netherlands';
            return 'Russia';
        case 'Y':
            if (inR(b, 'A', 'E')) return 'Belgium';
            if (inR(b, 'F', 'K')) return 'Finland';
            if (inR(b, 'S', 'W')) return 'Sweden';
            if (inR(b, 'X', 'Z')) return 'Norway';
            return 'Sweden';
        case 'Z':
            if (inR(b, 'A', 'R')) return 'Italy';
            return 'Italy';
        default: return 'Unknown';
    }
}

// ---- Manufacturer (3-character WMI, with 2-char fallback) ----
const wmiMap = {
    // Ford
    '1FA': 'Ford', '1FB': 'Ford', '1FC': 'Ford', '1FD': 'Ford', '1FM': 'Ford', '1FT': 'Ford',
    '2FA': 'Ford', '2FM': 'Ford', '2FT': 'Ford', '3FA': 'Ford', '3FE': 'Ford',
    // GM
    '1G1': 'Chevrolet', '1GC': 'Chevrolet', '1GN': 'Chevrolet', '3GN': 'Chevrolet', '2G1': 'Chevrolet',
    '1G2': 'Pontiac', '1G3': 'Oldsmobile', '1G4': 'Buick', '1G6': 'Cadillac', '1GY': 'Cadillac',
    '1GT': 'GMC', '1GK': 'GMC', '1GD': 'GMC', '3GT': 'GMC', '1G8': 'Saturn', 'KL1': 'Chevrolet (Korea)',
    // Chrysler / Dodge / Jeep / Ram
    '1C3': 'Chrysler', '1C4': 'Jeep', '1C6': 'Ram', '2C3': 'Chrysler', '3C4': 'Chrysler',
    '1J4': 'Jeep', '1J8': 'Jeep', '1B3': 'Dodge', '2B3': 'Dodge', '2C4': 'Chrysler', '3C6': 'Ram',
    // Honda / Acura
    '1HG': 'Honda', '2HG': 'Honda', '2HK': 'Honda', '19X': 'Honda', '5FN': 'Honda', '5FP': 'Honda',
    '5J6': 'Honda', 'JHM': 'Honda', 'SHH': 'Honda', '19U': 'Acura', 'JH4': 'Acura', '2HN': 'Acura',
    // Toyota / Lexus
    '4T1': 'Toyota', '4T3': 'Toyota', '2T1': 'Toyota', '5TD': 'Toyota', '5TF': 'Toyota', '5TB': 'Toyota',
    'JTD': 'Toyota', 'JTE': 'Toyota', 'JTM': 'Toyota', 'JTN': 'Toyota', 'JT2': 'Toyota', 'JT3': 'Toyota',
    'JTH': 'Lexus', 'JTJ': 'Lexus', '2T2': 'Lexus', '58A': 'Lexus',
    // Nissan / Infiniti
    '1N4': 'Nissan', '1N6': 'Nissan', '3N1': 'Nissan', '5N1': 'Nissan', 'JN1': 'Nissan', 'JN6': 'Nissan',
    'JN8': 'Nissan', 'JNK': 'Infiniti', 'JNR': 'Infiniti', '5N3': 'Infiniti',
    // Hyundai / Kia
    'KMH': 'Hyundai', 'KM8': 'Hyundai', '5NP': 'Hyundai', '5NM': 'Hyundai', 'KND': 'Kia', 'KNA': 'Kia',
    'KNM': 'Kia', '5XY': 'Kia', '3KP': 'Kia', 'KND': 'Kia',
    // Volkswagen / Audi / Porsche / SEAT / Skoda
    'WVW': 'Volkswagen', 'WVG': 'Volkswagen', '3VW': 'Volkswagen', '1VW': 'Volkswagen', '9BW': 'Volkswagen',
    'WAU': 'Audi', 'WA1': 'Audi', 'TRU': 'Audi', '93U': 'Audi', 'WP0': 'Porsche', 'WP1': 'Porsche',
    'VSS': 'SEAT', 'TMB': 'Skoda',
    // BMW / Mini / Rolls-Royce
    'WBA': 'BMW', 'WBS': 'BMW M', 'WBX': 'BMW', 'WBY': 'BMW', '5UX': 'BMW', '4US': 'BMW', '5YM': 'BMW',
    'WMW': 'Mini', 'SCA': 'Rolls-Royce',
    // Mercedes-Benz / Smart
    'WDB': 'Mercedes-Benz', 'WDC': 'Mercedes-Benz', 'WDD': 'Mercedes-Benz', 'WDF': 'Mercedes-Benz',
    '4JG': 'Mercedes-Benz', '55S': 'Mercedes-Benz', 'W1K': 'Mercedes-Benz', 'W1N': 'Mercedes-Benz',
    // Subaru
    'JF1': 'Subaru', 'JF2': 'Subaru', '4S3': 'Subaru', '4S4': 'Subaru',
    // Mazda
    'JM1': 'Mazda', 'JM3': 'Mazda', '3MZ': 'Mazda', '4F2': 'Mazda', '4F4': 'Mazda',
    // Tesla
    '5YJ': 'Tesla', '7SA': 'Tesla', 'LRW': 'Tesla',
    // Mitsubishi
    'JA3': 'Mitsubishi', 'JA4': 'Mitsubishi', '4A3': 'Mitsubishi', 'ML3': 'Mitsubishi',
    // Volvo
    'YV1': 'Volvo', 'YV4': 'Volvo', '7JR': 'Volvo', 'LVY': 'Volvo',
    // Land Rover / Jaguar
    'SAL': 'Land Rover', 'SAJ': 'Jaguar',
    // Italian
    'ZFF': 'Ferrari', 'ZHW': 'Lamborghini', 'ZAM': 'Maserati', 'ZAR': 'Alfa Romeo', 'ZFA': 'Fiat',
    // British
    'SCC': 'Lotus', 'SCF': 'Aston Martin', 'SCB': 'Bentley', 'SCE': 'DeLorean',
    // French
    'VF1': 'Renault', 'VF3': 'Peugeot', 'VF7': 'Citroen', 'VF6': 'Renault',
    // Suzuki
    'JSA': 'Suzuki', '2S3': 'Suzuki', 'KL5': 'Suzuki'
};
// coarse 2-char fallback for anything not in the 3-char table
const wmi2Map = {
    '1F': 'Ford', '1G': 'General Motors', '1H': 'Honda', '1N': 'Nissan', '1C': 'Chrysler',
    '1L': 'Lincoln', '1M': 'Mercury', '2F': 'Ford', '2G': 'General Motors', '2H': 'Honda',
    '3F': 'Ford', '3G': 'General Motors', '3H': 'Honda', 'JH': 'Honda', 'JT': 'Toyota',
    'JN': 'Nissan', 'JM': 'Mazda', 'JF': 'Subaru', 'JS': 'Suzuki', 'JA': 'Mitsubishi',
    'KM': 'Hyundai', 'KN': 'Kia', 'WA': 'Audi', 'WB': 'BMW', 'WV': 'Volkswagen', 'WP': 'Porsche',
    'WD': 'Mercedes-Benz', 'YV': 'Volvo', 'ZA': 'Fiat', 'ZF': 'Ferrari', 'ZL': 'Lamborghini',
    'SA': 'Jaguar Land Rover', 'VF': 'Renault/PSA'
};
function getManufacturer(vin) {
    const wmi3 = vin.substring(0, 3);
    if (wmiMap[wmi3]) return wmiMap[wmi3];
    const wmi2 = vin.substring(0, 2);
    if (wmi2Map[wmi2]) return wmi2Map[wmi2];
    return 'Not in our database';
}

// ---- Model year (position 10) with position-7 era disambiguation ----
const YEAR_CODES = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','T','V','W','X','Y',
                    '1','2','3','4','5','6','7','8','9'];
function getModelYear(vin) {
    const idx = YEAR_CODES.indexOf(vin[9]); // position 10
    if (idx === -1) return 'Unknown';
    // 2010-2039 model years use a LETTER in position 7; 1980-2009 use a NUMBER.
    const p7IsLetter = /[A-Z]/.test(vin[6]);
    return p7IsLetter ? (2010 + idx) : (1980 + idx);
}

// ---- Check digit ----
function transliterateChar(char) {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8,
        J:1, K:2, L:3, M:4, N:5, P:7, R:9,
        S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9,
        '0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9
    };
    return map[char] || 0;
}
function calcCheckDigit(vin) {
    const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 17; i++) sum += transliterateChar(vin[i]) * weights[i];
    const r = sum % 11;
    return r === 10 ? 'X' : String(r);
}

function setField(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function showDecodeMessage(text, type) {
    const msg = document.getElementById('decodeMessage');
    if (!msg) return;
    msg.textContent = text || '';
    msg.className = 'decode-message' + (text ? ' show ' + (type || 'hint') : '');
}

function decodeVIN() {
    const vinInput = document.getElementById('vinInput');
    const vin = vinInput.value.toUpperCase().trim();
    const result = document.getElementById('decodeResult');

    // Helpful, specific feedback instead of silently hiding the result
    if (vin.length === 0) {
        result.style.display = 'none';
        showDecodeMessage('', 'hint');
        return;
    }
    if (/[IOQ]/.test(vin)) {
        result.style.display = 'none';
        showDecodeMessage('A VIN never uses the letters I, O, or Q (they look like 1 and 0).', 'error');
        return;
    }
    if (/[^A-HJ-NPR-Z0-9]/.test(vin)) {
        result.style.display = 'none';
        showDecodeMessage('A VIN uses only letters and numbers, no spaces or symbols.', 'error');
        return;
    }
    if (vin.length < 17) {
        result.style.display = 'none';
        showDecodeMessage('Keep going - a VIN is 17 characters (' + vin.length + '/17).', 'hint');
        return;
    }
    if (vin.length > 17) {
        result.style.display = 'none';
        showDecodeMessage('That is too long - a VIN is exactly 17 characters.', 'error');
        return;
    }

    showDecodeMessage('', 'hint');
    const expected = calcCheckDigit(vin);
    const isValid = expected === vin[8];

    setField('decodedVin', vin);
    const status = document.getElementById('checkDigitStatus');
    if (status) {
        status.textContent = isValid ? '✓ Valid' : '✗ Invalid (expected ' + expected + ')';
        status.style.color = isValid ? '#38ef7d' : '#f45c43';
    }
    setField('wmi', vin.substring(0, 3));
    setField('country', getCountry(vin));
    setField('manufacturer', getManufacturer(vin));
    setField('modelYear', getModelYear(vin));
    setField('plantCode', vin[10]);
    setField('serialNumber', vin.substring(11, 17));

    document.getElementById('decodeResult').style.display = 'block';

    if (typeof gtag !== 'undefined') {
        gtag('event', 'vin_decoded', {
            'event_category': 'Tool Usage',
            'event_label': 'VIN Decoder',
            'value': 1
        });
    }
}

function clearDecoder() {
    document.getElementById('vinInput').value = '';
    document.getElementById('decodeResult').style.display = 'none';
    showDecodeMessage('', 'hint');
}
