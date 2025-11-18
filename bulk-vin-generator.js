// Bulk VIN Generator Logic

const allowedCharsBulk = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
let generatedVINs = [];

function transliterateBulk(char) {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8,
        J:1, K:2, L:3, M:4, N:5, P:7, R:9,
        S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9,
        0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
    };
    return map[char] || 0;
}

function calculateCheckDigitBulk(vinArr) {
    const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < 17; i++) {
        sum += transliterateBulk(vinArr[i]) * weights[i];
    }

    let remainder = sum % 11;
    return remainder === 10 ? 'X' : remainder.toString();
}

function generateSingleVIN() {
    let vinArr = [];
    for (let i = 0; i < 17; i++) {
        vinArr.push(allowedCharsBulk[Math.floor(Math.random() * allowedCharsBulk.length)]);
    }
    vinArr[8] = calculateCheckDigitBulk(vinArr);
    return vinArr.join('');
}

function generateBulkVINs() {
    const countInput = document.getElementById('vinCount');
    let count = parseInt(countInput.value);

    // Validate input
    if (isNaN(count) || count < 1) {
        count = 1;
        countInput.value = 1;
    } else if (count > 1000) {
        count = 1000;
        countInput.value = 1000;
    }

    // Generate VINs
    generatedVINs = [];
    for (let i = 0; i < count; i++) {
        generatedVINs.push(generateSingleVIN());
    }

    // Display VINs
    const output = document.getElementById('vinsOutput');
    output.value = generatedVINs.join('\n');

    // Show output and buttons
    document.getElementById('bulkOutput').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'flex';
    document.getElementById('downloadBtns').style.display = 'flex';

    // Show notification
    showNotification(`Generated ${count} VIN${count > 1 ? 's' : ''} successfully!`);
}

function copyAllVINs() {
    const output = document.getElementById('vinsOutput');
    output.select();
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
    showNotification('All VINs copied to clipboard!');
}

function downloadVINs(format) {
    let content = '';
    let filename = '';
    let mimeType = '';

    if (format === 'txt') {
        content = generatedVINs.join('\n');
        filename = 'vins.txt';
        mimeType = 'text/plain';
    } else if (format === 'csv') {
        content = 'VIN\n' + generatedVINs.join('\n');
        filename = 'vins.csv';
        mimeType = 'text/csv';
    }

    // Create blob and download
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showNotification(`Downloaded as ${filename}!`);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}