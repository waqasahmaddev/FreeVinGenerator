// VIN Decoder Logic

const countryMap = {
    '1': 'United States', '4': 'United States', '5': 'United States',
    '2': 'Canada',
    '3': 'Mexico',
    'J': 'Japan',
    'K': 'South Korea',
    'L': 'China',
    'S': 'United Kingdom',
    'V': 'France/Spain',
    'W': 'Germany',
    'Y': 'Sweden/Finland',
    'Z': 'Italy'
};

const manufacturerMap = {
    '1F': 'Ford', '1G': 'General Motors', '1H': 'Honda', '1N': 'Nissan',
    '1C': 'Chrysler', '1L': 'Lincoln', '1M': 'Mercury',
    '2F': 'Ford Canada', '2G': 'General Motors Canada', '2H': 'Honda Canada',
    '3F': 'Ford Mexico', '3G': 'General Motors Mexico', '3H': 'Honda Mexico',
    'JH': 'Honda Japan', 'JT': 'Toyota', 'JN': 'Nissan Japan', 'JM': 'Mazda',
    'KM': 'Hyundai', 'KN': 'Kia',
    'WA': 'Audi', 'WB': 'BMW', 'WV': 'Volkswagen', 'WP': 'Porsche', 'WD': 'Mercedes-Benz',
    'YV': 'Volvo',
    'ZA': 'Fiat', 'ZF': 'Ferrari', 'ZL': 'Lamborghini'
};

const yearMap = {
    'A': 1980, 'B': 1981, 'C': 1982, 'D': 1983, 'E': 1984, 'F': 1985, 'G': 1986, 'H': 1987,
    'J': 1988, 'K': 1989, 'L': 1990, 'M': 1991, 'N': 1992, 'P': 1993, 'R': 1994, 'S': 1995,
    'T': 1996, 'V': 1997, 'W': 1998, 'X': 1999, 'Y': 2000,
    '1': 2001, '2': 2002, '3': 2003, '4': 2004, '5': 2005, '6': 2006, '7': 2007, '8': 2008, '9': 2009,
    'A': 2010, 'B': 2011, 'C': 2012, 'D': 2013, 'E': 2014, 'F': 2015, 'G': 2016, 'H': 2017,
    'J': 2018, 'K': 2019, 'L': 2020, 'M': 2021, 'N': 2022, 'P': 2023, 'R': 2024, 'S': 2025
};

function transliterateChar(char) {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8,
        J:1, K:2, L:3, M:4, N:5, P:7, R:9,
        S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9,
        0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
    };
    return map[char] || 0;
}

function validateCheckDigit(vin) {
    const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < 17; i++) {
        sum += transliterateChar(vin[i]) * weights[i];
    }

    let remainder = sum % 11;
    let checkDigit = remainder === 10 ? 'X' : remainder.toString();

    return checkDigit === vin[8];
}

function getCountry(vin) {
    const firstChar = vin[0];
    return countryMap[firstChar] || 'Unknown';
}

function getManufacturer(vin) {
    const wmi = vin.substring(0, 2);
    return manufacturerMap[wmi] || 'Unknown';
}

function getModelYear(vin) {
    const yearChar = vin[9];

    // For years 1980-2009
    if (yearMap[yearChar] && yearMap[yearChar] <= 2009) {
        return yearMap[yearChar];
    }

    // For years 2010+, need to consider the pattern repeats every 30 years
    // This is a simplified version
    if (yearChar >= 'A' && yearChar <= 'Y') {
        const baseYear = yearChar.charCodeAt(0) - 'A'.charCodeAt(0);
        return 2010 + baseYear;
    } else if (yearChar >= '1' && yearChar <= '9') {
        return 2001 + parseInt(yearChar) - 1;
    }

    return 'Unknown';
}

function decodeVIN() {
    const vinInput = document.getElementById('vinInput');
    const vin = vinInput.value.toUpperCase().trim();

    // Validate length
    if (vin.length !== 17) {
        document.getElementById('decodeResult').style.display = 'none';
        return;
    }

    // Validate characters
    const validChars = /^[A-HJ-NPR-Z0-9]{17}$/;
    if (!validChars.test(vin)) {
        document.getElementById('decodeResult').style.display = 'none';
        return;
    }

    // Decode
    const isValid = validateCheckDigit(vin);
    const country = getCountry(vin);
    const manufacturer = getManufacturer(vin);
    const modelYear = getModelYear(vin);
    const plantCode = vin[10];
    const serialNumber = vin.substring(11, 17);

    // Display results
    document.getElementById('decodedVin').textContent = vin;
    document.getElementById('checkDigitStatus').textContent = isValid ? '✓ Valid' : '✗ Invalid';
    document.getElementById('checkDigitStatus').style.color = isValid ? '#38ef7d' : '#f45c43';
    document.getElementById('country').textContent = country;
    document.getElementById('manufacturer').textContent = manufacturer;
    document.getElementById('modelYear').textContent = modelYear;
    document.getElementById('plantCode').textContent = plantCode;
    document.getElementById('serialNumber').textContent = serialNumber;

    document.getElementById('decodeResult').style.display = 'block';
}

function clearDecoder() {
    document.getElementById('vinInput').value = '';
    document.getElementById('decodeResult').style.display = 'none';
}