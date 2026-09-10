// VIN Barcode Generator Logic (Code 39 - the format on factory VIN labels)

let barcodeGenerated = false;

function generateBarcode() {
  const vinInput = document.getElementById('vinBarcodeInput');
  const vin = vinInput.value.toUpperCase().trim();
  const sizeVal = document.getElementById('barcodeSize').value;
  const result = document.getElementById('barcodeResult');
  const canvas = document.getElementById('barcodeCanvas');

  if (typeof gtag !== 'undefined') {
    gtag('event', 'barcode_generated', {
      'event_category': 'Tool Usage',
      'event_label': 'VIN Barcode Generator',
      'value': 1
    });
  }

  // Validate VIN
  if (vin.length === 0) {
    showNotification('Please enter a VIN number', 'error');
    return;
  }
  if (vin.length !== 17) {
    showNotification('VIN must be exactly 17 characters', 'error');
    return;
  }
  const validChars = /^[A-HJ-NPR-Z0-9]{17}$/;
  if (!validChars.test(vin)) {
    showNotification('Invalid VIN format (I, O, Q not allowed)', 'error');
    return;
  }

  // Size presets map to Code 39 bar width + height
  const sizes = {
    small: { width: 1.5, height: 70 },
    medium: { width: 2, height: 100 },
    large: { width: 3, height: 140 }
  };
  const s = sizes[sizeVal] || sizes.medium;

  try {
    JsBarcode(canvas, vin, {
      format: 'CODE39',
      width: s.width,
      height: s.height,
      displayValue: true,
      font: 'monospace',
      fontSize: 16,
      textMargin: 6,
      margin: 12,
      background: '#ffffff',
      lineColor: '#000000'
    });

    barcodeGenerated = true;
    result.style.display = 'block';
    showNotification('Barcode generated successfully!', 'success');

    setTimeout(() => {
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  } catch (error) {
    showNotification('Error generating barcode', 'error');
    console.error(error);
  }
}

function clearBarcode() {
  const vinInput = document.getElementById('vinBarcodeInput');
  const result = document.getElementById('barcodeResult');
  vinInput.value = '';
  result.style.display = 'none';
  barcodeGenerated = false;
}

function downloadBarcode() {
  const canvas = document.getElementById('barcodeCanvas');
  const vin = document.getElementById('vinBarcodeInput').value.toUpperCase().trim();

  if (!barcodeGenerated || !canvas) {
    showNotification('Please generate a barcode first', 'error');
    return;
  }

  try {
    canvas.toBlob(function (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `VIN-Barcode-${vin}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showNotification('Barcode downloaded!', 'success');
    });
  } catch (error) {
    showNotification('Error downloading barcode', 'error');
    console.error(error);
  }
}

function printBarcode() {
  const canvas = document.getElementById('barcodeCanvas');
  const vin = document.getElementById('vinBarcodeInput').value.toUpperCase().trim();

  if (!barcodeGenerated || !canvas) {
    showNotification('Please generate a barcode first', 'error');
    return;
  }

  try {
    const printWindow = window.open('', '_blank');
    const imgData = canvas.toDataURL('image/png');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Print VIN Barcode</title>
        <style>
          body {
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
          }
          img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            padding: 10px;
          }
          .vin-text {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          }
          @media print {
            body { margin: 0; }
          }
        </style>
      </head>
      <body>
        <img src="${imgData}" alt="VIN Barcode">
        <div class="vin-text">VIN: ${vin}</div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 100);
          };
        <\/script>
      </body>
      </html>
    `);

    printWindow.document.close();
  } catch (error) {
    showNotification('Error printing barcode', 'error');
    console.error(error);
  }
}

// Allow Enter key to generate
document.addEventListener('DOMContentLoaded', function () {
  const vinInput = document.getElementById('vinBarcodeInput');
  if (vinInput) {
    vinInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        generateBarcode();
      }
    });
  }
});
