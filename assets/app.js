// Database of REAL VIN patterns from actual vehicles (1980-2025)
// These are based on actual VINs that exist in decoder databases
const realVINDatabase = [
    // Format: { prefix: 'first 8 chars', yearCode: 'position 10', plant: 'position 11', serialStart: min, serialEnd: max, make, model, year }

    // 2020-2025 Vehicles
    { prefix: '1HGCV1F1', yearPos: 'M', plants: ['6','A','H'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2021' },
    { prefix: '1HGCV1F1', yearPos: 'N', plants: ['6','A','H'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2022' },
    { prefix: '1HGCV1F1', yearPos: 'P', plants: ['6','A','H'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2023' },
    { prefix: '19XFL1H5', yearPos: 'N', plants: ['E','A'], serial: [100000, 999999], make: 'Honda', model: 'Civic', years: '2022' },
    { prefix: '2HGFC2F5', yearPos: 'M', plants: ['3','H'], serial: [100000, 999999], make: 'Honda', model: 'Civic', years: '2021' },
    { prefix: '2HGFC2F5', yearPos: 'N', plants: ['3','H'], serial: [100000, 999999], make: 'Honda', model: 'Civic', years: '2022' },

    { prefix: '4T1K61AK', yearPos: 'M', plants: ['1','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2021' },
    { prefix: '4T1K61AK', yearPos: 'N', plants: ['1','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2022' },
    { prefix: '4T1K61AK', yearPos: 'P', plants: ['1','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2023' },
    { prefix: '5YFBURHE', yearPos: 'M', plants: ['C','E'], serial: [100000, 999999], make: 'Toyota', model: 'Corolla', years: '2021' },
    { prefix: '5YFBURHE', yearPos: 'N', plants: ['C','E'], serial: [100000, 999999], make: 'Toyota', model: 'Corolla', years: '2022' },
    { prefix: '2T1BURHE', yearPos: 'N', plants: ['1','Z'], serial: [100000, 999999], make: 'Toyota', model: 'Corolla', years: '2022' },
    { prefix: '5TDKZRFH', yearPos: 'N', plants: ['C','J'], serial: [100000, 999999], make: 'Toyota', model: 'Highlander', years: '2022' },
    { prefix: 'JTMEB3FV', yearPos: 'N', plants: ['X','J'], serial: [100000, 999999], make: 'Toyota', model: 'RAV4', years: '2022' },

    { prefix: '1FA6P8TH', yearPos: 'M', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2021' },
    { prefix: '1FA6P8TH', yearPos: 'N', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2022' },
    { prefix: '1FTEW1EP', yearPos: 'M', plants: ['C','K'], serial: [100000, 999999], make: 'Ford', model: 'F-150', years: '2021' },
    { prefix: '1FTEW1EP', yearPos: 'N', plants: ['C','K'], serial: [100000, 999999], make: 'Ford', model: 'F-150', years: '2022' },
    { prefix: '1FMCU9J9', yearPos: 'N', plants: ['2','U'], serial: [100000, 999999], make: 'Ford', model: 'Escape', years: '2022' },
    { prefix: '1FM5K8GC', yearPos: 'N', plants: ['8','C'], serial: [100000, 999999], make: 'Ford', model: 'Explorer', years: '2022' },

    { prefix: '1G1ZD5ST', yearPos: 'M', plants: ['U','K'], serial: [100000, 999999], make: 'Chevrolet', model: 'Malibu', years: '2021' },
    { prefix: '1G1ZD5ST', yearPos: 'N', plants: ['U','K'], serial: [100000, 999999], make: 'Chevrolet', model: 'Malibu', years: '2022' },
    { prefix: '3GNAXKEV', yearPos: 'N', plants: ['L','W'], serial: [100000, 999999], make: 'Chevrolet', model: 'Equinox', years: '2022' },
    { prefix: '1GCUDGED', yearPos: 'N', plants: ['E','Z'], serial: [100000, 999999], make: 'Chevrolet', model: 'Silverado', years: '2022' },
    { prefix: '1G1BE5SM', yearPos: 'N', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2022' },

    { prefix: '1N4BL4BV', yearPos: 'M', plants: ['C','N'], serial: [100000, 999999], make: 'Nissan', model: 'Altima', years: '2021' },
    { prefix: '1N4BL4BV', yearPos: 'N', plants: ['C','N'], serial: [100000, 999999], make: 'Nissan', model: 'Altima', years: '2022' },
    { prefix: '3N1AB8CV', yearPos: 'N', plants: ['L','M'], serial: [100000, 999999], make: 'Nissan', model: 'Sentra', years: '2022' },
    { prefix: '5N1DR2AM', yearPos: 'N', plants: ['C','N'], serial: [100000, 999999], make: 'Nissan', model: 'Rogue', years: '2022' },
    { prefix: 'JN8AZ2NE', yearPos: 'N', plants: ['1','2'], serial: [100000, 999999], make: 'Nissan', model: 'Murano', years: '2022' },

    { prefix: '5NMS24AJ', yearPos: 'N', plants: ['U','5'], serial: [100000, 999999], make: 'Hyundai', model: 'Santa Fe', years: '2022' },
    { prefix: '5NPD84LF', yearPos: 'N', plants: ['X','U'], serial: [100000, 999999], make: 'Hyundai', model: 'Elantra', years: '2022' },
    { prefix: 'KM8J3CA4', yearPos: 'N', plants: ['6','U'], serial: [100000, 999999], make: 'Hyundai', model: 'Tucson', years: '2022' },
    { prefix: 'KMHC75LC', yearPos: 'N', plants: ['U','5'], serial: [100000, 999999], make: 'Hyundai', model: 'Sonata', years: '2022' },

    { prefix: '5XYP5DHC', yearPos: 'N', plants: ['6','5'], serial: [100000, 999999], make: 'Kia', model: 'Sorento', years: '2022' },
    { prefix: 'KNDPM3AC', yearPos: 'N', plants: ['E','5'], serial: [100000, 999999], make: 'Kia', model: 'Forte', years: '2022' },
    { prefix: '5XYK5DHC', yearPos: 'N', plants: ['8','5'], serial: [100000, 999999], make: 'Kia', model: 'Sportage', years: '2022' },
    { prefix: 'KNDCC3LD', yearPos: 'N', plants: ['6','5'], serial: [100000, 999999], make: 'Kia', model: 'Soul', years: '2022' },

    { prefix: '4S4WMACD', yearPos: 'N', plants: ['5','H'], serial: [100000, 999999], make: 'Subaru', model: 'Outback', years: '2022' },
    { prefix: 'JF2GTANC', yearPos: 'N', plants: ['H','L'], serial: [100000, 999999], make: 'Subaru', model: 'Crosstrek', years: '2022' },
    { prefix: '4S3BTAFC', yearPos: 'N', plants: ['5','H'], serial: [100000, 999999], make: 'Subaru', model: 'Forester', years: '2022' },
    { prefix: 'JF1ZCAC1', yearPos: 'N', plants: ['H','E'], serial: [100000, 999999], make: 'Subaru', model: 'WRX', years: '2022' },

    { prefix: 'JM1BPBLY', yearPos: 'N', plants: ['1','M'], serial: [100000, 999999], make: 'Mazda', model: 'Mazda3', years: '2022' },
    { prefix: 'JM3KFBCM', yearPos: 'N', plants: ['5','0'], serial: [100000, 999999], make: 'Mazda', model: 'CX-5', years: '2022' },
    { prefix: 'JM3KFBDM', yearPos: 'N', plants: ['5','0'], serial: [100000, 999999], make: 'Mazda', model: 'CX-9', years: '2022' },

    { prefix: 'WBA5R1C0', yearPos: 'N', plants: ['D','Y'], serial: [100000, 999999], make: 'BMW', model: '330i', years: '2022' },
    { prefix: 'WBA73AK0', yearPos: 'N', plants: ['6','Y'], serial: [100000, 999999], make: 'BMW', model: 'X3', years: '2022' },
    { prefix: '5UX23EU0', yearPos: 'N', plants: ['8','Y'], serial: [100000, 999999], make: 'BMW', model: 'X3', years: '2022' },
    { prefix: 'WBA43AJ0', yearPos: 'N', plants: ['6','Y'], serial: [100000, 999999], make: 'BMW', model: 'X1', years: '2022' },

    { prefix: 'WDDWF8EB', yearPos: 'N', plants: ['8','A'], serial: [100000, 999999], make: 'Mercedes-Benz', model: 'C-Class', years: '2022' },
    { prefix: 'WDC0G4KB', yearPos: 'N', plants: ['F','A'], serial: [100000, 999999], make: 'Mercedes-Benz', model: 'GLC', years: '2022' },
    { prefix: 'WDDZF4KB', yearPos: 'N', plants: ['5','A'], serial: [100000, 999999], make: 'Mercedes-Benz', model: 'E-Class', years: '2022' },

    { prefix: '5YJ3E1EA', yearPos: 'N', plants: ['P','C'], serial: [100000, 999999], make: 'Tesla', model: 'Model 3', years: '2022' },
    { prefix: '5YJSA1E2', yearPos: 'N', plants: ['8','C'], serial: [100000, 999999], make: 'Tesla', model: 'Model S', years: '2022' },
    { prefix: '7SAYGDEE', yearPos: 'N', plants: ['N','F'], serial: [100000, 999999], make: 'Tesla', model: 'Model X', years: '2022' },
    { prefix: '5YJXCBE2', yearPos: 'N', plants: ['9','C'], serial: [100000, 999999], make: 'Tesla', model: 'Model Y', years: '2022' },

    { prefix: 'WAU2GAFF', yearPos: 'N', plants: ['C','M'], serial: [100000, 999999], make: 'Audi', model: 'A4', years: '2022' },
    { prefix: 'WA1L2AFP', yearPos: 'N', plants: ['2','E'], serial: [100000, 999999], make: 'Audi', model: 'Q5', years: '2022' },
    { prefix: 'WA1EAAGE', yearPos: 'N', plants: ['0','E'], serial: [100000, 999999], make: 'Audi', model: 'Q3', years: '2022' },

    { prefix: 'WVWAA7AU', yearPos: 'N', plants: ['C','M'], serial: [100000, 999999], make: 'Volkswagen', model: 'Jetta', years: '2022' },
    { prefix: '3VW2B7AJ', yearPos: 'N', plants: ['X','M'], serial: [100000, 999999], make: 'Volkswagen', model: 'Jetta', years: '2022' },
    { prefix: 'WVGBV7AX', yearPos: 'N', plants: ['3','M'], serial: [100000, 999999], make: 'Volkswagen', model: 'Tiguan', years: '2022' },

    { prefix: '1C4RJFAG', yearPos: 'N', plants: ['5','D'], serial: [100000, 999999], make: 'Jeep', model: 'Grand Cherokee', years: '2022' },
    { prefix: '1C4PJMDN', yearPos: 'N', plants: ['6','D'], serial: [100000, 999999], make: 'Jeep', model: 'Wrangler', years: '2022' },
    { prefix: '3C4PDCAB', yearPos: 'N', plants: ['G','D'], serial: [100000, 999999], make: 'Jeep', model: 'Cherokee', years: '2022' },

    { prefix: '2C3CDXJG', yearPos: 'N', plants: ['9','H'], serial: [100000, 999999], make: 'Dodge', model: 'Challenger', years: '2022' },
    { prefix: '2C3CDXCT', yearPos: 'N', plants: ['2','H'], serial: [100000, 999999], make: 'Dodge', model: 'Charger', years: '2022' },
    { prefix: '3C4PDCAB', yearPos: 'N', plants: ['G','B'], serial: [100000, 999999], make: 'Dodge', model: 'Durango', years: '2022' },

    { prefix: '3C6RR7LT', yearPos: 'N', plants: ['6','G'], serial: [100000, 999999], make: 'Ram', model: '1500', years: '2022' },
    { prefix: '1C6SRFFT', yearPos: 'N', plants: ['M','G'], serial: [100000, 999999], make: 'Ram', model: '1500', years: '2022' },

    { prefix: '1GYS4BKJ', yearPos: 'N', plants: ['X','0'], serial: [100000, 999999], make: 'Cadillac', model: 'Escalade', years: '2022' },
    { prefix: '1G6KD5RY', yearPos: 'N', plants: ['0','L'], serial: [100000, 999999], make: 'Cadillac', model: 'XT5', years: '2022' },

    { prefix: '1GKKNRLS', yearPos: 'N', plants: ['5','D'], serial: [100000, 999999], make: 'GMC', model: 'Terrain', years: '2022' },
    { prefix: '3GTUUCED', yearPos: 'N', plants: ['0','Z'], serial: [100000, 999999], make: 'GMC', model: 'Sierra', years: '2022' },

    { prefix: 'YV4A22PL', yearPos: 'N', plants: ['6','R'], serial: [100000, 999999], make: 'Volvo', model: 'XC60', years: '2022' },
    { prefix: 'YV4H60CL', yearPos: 'N', plants: ['3','R'], serial: [100000, 999999], make: 'Volvo', model: 'XC90', years: '2022' },

    { prefix: 'SALCP2FX', yearPos: 'N', plants: ['X','A'], serial: [100000, 999999], make: 'Land Rover', model: 'Range Rover', years: '2022' },
    { prefix: 'SALGS2SE', yearPos: 'N', plants: ['6','A'], serial: [100000, 999999], make: 'Land Rover', model: 'Discovery', years: '2022' },

    { prefix: 'WP0AA2A9', yearPos: 'N', plants: ['9','S'], serial: [100000, 999999], make: 'Porsche', model: '911', years: '2022' },
    { prefix: 'WP1AB2A5', yearPos: 'N', plants: ['9','S'], serial: [100000, 999999], make: 'Porsche', model: 'Cayenne', years: '2022' },

    // 2015-2020 Vehicles
    { prefix: '1HGCR2F7', yearPos: 'H', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2017' },
    { prefix: '1HGCR2F7', yearPos: 'J', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2018' },
    { prefix: '1HGCR2F7', yearPos: 'K', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2019' },
    { prefix: '1HGCR2F7', yearPos: 'L', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2020' },
    { prefix: '2HGFC2F7', yearPos: 'H', plants: ['3','H'], serial: [100000, 999999], make: 'Honda', model: 'Civic', years: '2017' },
    { prefix: '2HGFC2F7', yearPos: 'J', plants: ['3','H'], serial: [100000, 999999], make: 'Honda', model: 'Civic', years: '2018' },

    { prefix: '4T1BF1FK', yearPos: 'H', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2017' },
    { prefix: '4T1BF1FK', yearPos: 'J', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2018' },
    { prefix: '4T1BF1FK', yearPos: 'K', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2019' },
    { prefix: '4T1BF1FK', yearPos: 'L', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2020' },
    { prefix: '5YFS4RCE', yearPos: 'H', plants: ['X','Z'], serial: [100000, 999999], make: 'Toyota', model: 'Corolla', years: '2017' },
    { prefix: '2T1BURHE', yearPos: 'L', plants: ['1','Z'], serial: [100000, 999999], make: 'Toyota', model: 'Corolla', years: '2020' },

    { prefix: '1FA6P8TH', yearPos: 'H', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2017' },
    { prefix: '1FA6P8TH', yearPos: 'J', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2018' },
    { prefix: '1FA6P8TH', yearPos: 'K', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2019' },
    { prefix: '1FA6P8TH', yearPos: 'L', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2020' },
    { prefix: '1FTEW1EP', yearPos: 'H', plants: ['C','K'], serial: [100000, 999999], make: 'Ford', model: 'F-150', years: '2017' },
    { prefix: '1FTEW1EP', yearPos: 'K', plants: ['C','K'], serial: [100000, 999999], make: 'Ford', model: 'F-150', years: '2019' },

    { prefix: '1G1BE5SM', yearPos: 'H', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2017' },
    { prefix: '1G1BE5SM', yearPos: 'J', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2018' },
    { prefix: '1G1BE5SM', yearPos: 'K', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2019' },
    { prefix: '1G1ZD5ST', yearPos: 'H', plants: ['U','K'], serial: [100000, 999999], make: 'Chevrolet', model: 'Malibu', years: '2017' },
    { prefix: '1G1ZD5ST', yearPos: 'K', plants: ['U','K'], serial: [100000, 999999], make: 'Chevrolet', model: 'Malibu', years: '2019' },

    { prefix: '1N4AL3AP', yearPos: 'H', plants: ['8','C'], serial: [100000, 999999], make: 'Nissan', model: 'Altima', years: '2017' },
    { prefix: '1N4AL3AP', yearPos: 'J', plants: ['8','C'], serial: [100000, 999999], make: 'Nissan', model: 'Altima', years: '2018' },
    { prefix: '1N4BL4BV', yearPos: 'K', plants: ['C','N'], serial: [100000, 999999], make: 'Nissan', model: 'Altima', years: '2019' },
    { prefix: '1N4BL4BV', yearPos: 'L', plants: ['C','N'], serial: [100000, 999999], make: 'Nissan', model: 'Altima', years: '2020' },

    // 2010-2015 Vehicles
    { prefix: '1HGCP2F8', yearPos: 'A', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2010' },
    { prefix: '1HGCP2F8', yearPos: 'B', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2011' },
    { prefix: '1HGCP2F8', yearPos: 'C', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2012' },
    { prefix: '1HGCR2F5', yearPos: 'D', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2013' },
    { prefix: '1HGCR2F5', yearPos: 'E', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2014' },
    { prefix: '1HGCR2F5', yearPos: 'F', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2015' },

    { prefix: '4T1BF3EK', yearPos: 'A', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2010' },
    { prefix: '4T1BF3EK', yearPos: 'B', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2011' },
    { prefix: '4T4BF1FK', yearPos: 'C', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2012' },
    { prefix: '4T4BF1FK', yearPos: 'E', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2014' },
    { prefix: '4T1BF1FK', yearPos: 'F', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2015' },

    { prefix: '1ZVBP8AM', yearPos: 'A', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2010' },
    { prefix: '1ZVBP8AM', yearPos: 'B', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2011' },
    { prefix: '1ZVBP8AM', yearPos: 'C', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2012' },
    { prefix: '1ZVBP8AM', yearPos: 'D', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2013' },
    { prefix: '1ZVBP8AM', yearPos: 'E', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2014' },
    { prefix: '1FA6P8AM', yearPos: 'F', plants: ['F','W'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2015' },

    { prefix: '1G1PC5SH', yearPos: 'A', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2010' },
    { prefix: '1G1PC5SH', yearPos: 'B', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2011' },
    { prefix: '1G1PC5SH', yearPos: 'C', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2012' },
    { prefix: '1G1PC5SH', yearPos: 'E', plants: ['5','J'], serial: [100000, 999999], make: 'Chevrolet', model: 'Cruze', years: '2014' },

    // 2000-2009 Vehicles
    { prefix: '1HGCM726', yearPos: 'Y', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2000' },
    { prefix: '1HGCM726', yearPos: '1', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2001' },
    { prefix: '1HGCM726', yearPos: '2', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2002' },
    { prefix: '1HGCM665', yearPos: '3', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2003' },
    { prefix: '1HGCM665', yearPos: '5', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2005' },
    { prefix: '1HGCP263', yearPos: '8', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2008' },
    { prefix: '1HGCP263', yearPos: '9', plants: ['A','6'], serial: [100000, 999999], make: 'Honda', model: 'Accord', years: '2009' },

    { prefix: '4T1BE32K', yearPos: 'Y', plants: ['3','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2000' },
    { prefix: '4T1BE32K', yearPos: '2', plants: ['3','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2002' },
    { prefix: '4T1BE32K', yearPos: '5', plants: ['3','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2005' },
    { prefix: '4T1BF3EK', yearPos: '7', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2007' },
    { prefix: '4T1BF3EK', yearPos: '9', plants: ['5','U'], serial: [100000, 999999], make: 'Toyota', model: 'Camry', years: '2009' },

    { prefix: '1FAFP404', yearPos: 'Y', plants: ['2','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2000' },
    { prefix: '1FAFP404', yearPos: '2', plants: ['2','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2002' },
    { prefix: '1ZVFT80E', yearPos: '5', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2005' },
    { prefix: '1ZVHT82H', yearPos: '7', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2007' },
    { prefix: '1ZVHT82H', yearPos: '9', plants: ['5','F'], serial: [100000, 999999], make: 'Ford', model: 'Mustang', years: '2009' },

    { prefix: '2G1WF52E', yearPos: 'Y', plants: ['3','1'], serial: [100000, 999999], make: 'Chevrolet', model: 'Impala', years: '2000' },
    { prefix: '2G1WF52E', yearPos: '3', plants: ['3','1'], serial: [100000, 999999], make: 'Chevrolet', model: 'Impala', years: '2003' },
    { prefix: '2G1WF52E', yearPos: '6', plants: ['3','1'], serial: [100000, 999999], make: 'Chevrolet', model: 'Impala', years: '2006' },
    { prefix: '2G1WF52E', yearPos: '9', plants: ['3','1'], serial: [100000, 999999], make: 'Chevrolet', model: 'Impala', years: '2009' }
];

function transliterate(char) {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8,
        J:1, K:2, L:3, M:4, N:5, P:7, R:9,
        S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9,
        0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
    };
    return map[char] || 0;
}

const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

function calculateCheckDigit(vinArr) {
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        if (i !== 8) {
            sum += transliterate(vinArr[i]) * weights[i];
        }
    }
    let remainder = sum % 11;
    return remainder === 10 ? 'X' : remainder.toString();
}

function generateVIN() {
    // Select random VIN pattern from database
    const pattern = realVINDatabase[Math.floor(Math.random() * realVINDatabase.length)];

    let vinArr = new Array(17);

    // Set positions 1-8 from the pattern prefix
    for (let i = 0; i < 8; i++) {
        vinArr[i] = pattern.prefix[i];
    }

    // Position 9 (index 8): Check digit - placeholder
    vinArr[8] = '0';

    // Position 10 (index 9): Model year code
    vinArr[9] = pattern.yearPos;

    // Position 11 (index 10): Assembly plant
    vinArr[10] = pattern.plants[Math.floor(Math.random() * pattern.plants.length)];

    // Positions 12-17 (indices 11-16): Serial number
    const serialNum = Math.floor(Math.random() * (pattern.serial[1] - pattern.serial[0] + 1)) + pattern.serial[0];
    const serialStr = serialNum.toString().padStart(6, '0');
    for (let i = 0; i < 6; i++) {
        vinArr[11 + i] = serialStr[i];
    }

    // Calculate and set check digit
    vinArr[8] = calculateCheckDigit(vinArr);

    const vin = vinArr.join('');

    // Update UI
    const vinInput = document.getElementById('vin');
    if (vinInput) {
        vinInput.value = vin;
    }

    // Show vehicle info
    const vinInfo = document.getElementById('vinInfo');
    if (vinInfo) {
        vinInfo.innerHTML = `
            <small style="color: #666; font-size: 0.9em;">
                ${pattern.years} ${pattern.make} ${pattern.model} • Check: ${vinArr[8]}
            </small>
        `;
    }

    // Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'vin_generated', {
            'event_category': 'Tool Usage',
            'event_label': `${pattern.make} ${pattern.model}`,
            'value': 1
        });
    }

    return vin;
}

// Validate VIN
function validateVIN(vin) {
    if (!vin || vin.length !== 17) {
        return { valid: false, error: 'VIN must be exactly 17 characters' };
    }

    const upperVin = vin.toUpperCase();

    if (/[IOQ]/.test(upperVin)) {
        return { valid: false, error: 'VIN contains invalid characters (I, O, Q not allowed)' };
    }

    const vinArr = upperVin.split('');
    const calculatedCheckDigit = calculateCheckDigit(vinArr);
    const actualCheckDigit = vinArr[8];

    return {
        valid: calculatedCheckDigit === actualCheckDigit,
        calculatedCheckDigit,
        actualCheckDigit,
        message: calculatedCheckDigit === actualCheckDigit
            ? '✓ Valid VIN with correct check digit'
            : `✗ Invalid check digit. Expected: ${calculatedCheckDigit}, Got: ${actualCheckDigit}`
    };
}

// Copy VIN
let notificationTimeout;

function copyVIN() {
    const vinInput = document.getElementById('vin');
    if (!vinInput) return;

    vinInput.select();
    vinInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(vinInput.value).then(() => {
        showNotification('VIN copied to clipboard!');
    }).catch(err => {
        document.execCommand('copy');
        showNotification('VIN copied!');
    });
}

function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    if (notification) {
        clearTimeout(notificationTimeout);

        notification.textContent = message;
        notification.classList.remove('show', 'error');

        if (isError) {
            notification.classList.add('error');
        }

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }
}

// Validate VIN button handler
function validateVINInput() {
    const vinInput = document.getElementById('vin');
    if (!vinInput) return;

    const result = validateVIN(vinInput.value);
    showNotification(result.message, !result.valid);

    if (result.valid) {
        vinInput.style.borderColor = '#28a745';
    } else {
        vinInput.style.borderColor = '#dc3545';
    }

    setTimeout(() => {
        vinInput.style.borderColor = '';
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const vinInput = document.getElementById('vin');
    if (vinInput) {
        generateVIN();
    }

    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    window.addEventListener('scroll', handleScroll);
});

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const body = document.body;
    const isDark = html.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleScroll() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    if (nav && toggle) {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
}

document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    const overlay = document.getElementById('menuOverlay');

    if (nav && toggle && nav.classList.contains('active')) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = toggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            body.classList.remove('menu-open');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    }
});

function smoothScrollToContent() {
    const contentSection = document.querySelector('.content-section');
    if (contentSection) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = contentSection.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}