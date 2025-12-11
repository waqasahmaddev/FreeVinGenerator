// VIN QR Code Generator Logic

let qrCodeInstance = null;

function generateQRCode() {
  const vinInput = document.getElementById('vinQrInput');
  const vin = vinInput.value.toUpperCase().trim();
  const qrSize = parseInt(document.getElementById('qrSize').value);
  const qrResult = document.getElementById('qrResult');
  const qrCanvas = document.getElementById('qrCanvas');
  const qrVinDisplay = document.getElementById('qrVinDisplay');
  
  // Validate VIN
  if (vin.length === 0) {
    showNotification('Please enter a VIN number', 'error');
    return;
  }
  
  if (vin.length !== 17) {
    showNotification('VIN must be exactly 17 characters', 'error');
    return;
  }
  
  // Check for invalid characters
  const validChars = /^[A-HJ-NPR-Z0-9]{17}$/;
  if (!validChars.test(vin)) {
    showNotification('Invalid VIN format (I, O, Q not allowed)', 'error');
    return;
  }
  
  // Clear previous QR code
  qrCanvas.innerHTML = '';
  
  // Generate new QR code
  try {
    qrCodeInstance = new QRCode(qrCanvas, {
      text: vin,
      width: qrSize,
      height: qrSize,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
    
    // Display VIN below QR code
    qrVinDisplay.textContent = `VIN: ${vin}`;
    
    // Show result section
    qrResult.style.display = 'block';
    
    showNotification('QR code generated successfully!', 'success');
    
    // Smooth scroll to result
    setTimeout(() => {
      qrResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
    
  } catch (error) {
    showNotification('Error generating QR code', 'error');
    console.error(error);
  }
}

function clearQRCode() {
  const vinInput = document.getElementById('vinQrInput');
  const qrResult = document.getElementById('qrResult');
  const qrCanvas = document.getElementById('qrCanvas');
  
  vinInput.value = '';
  qrCanvas.innerHTML = '';
  qrResult.style.display = 'none';
  qrCodeInstance = null;
}

function downloadQRCode() {
  const qrCanvas = document.getElementById('qrCanvas');
  const canvas = qrCanvas.querySelector('canvas');
  const vin = document.getElementById('vinQrInput').value.toUpperCase().trim();
  
  if (!canvas) {
    showNotification('Please generate a QR code first', 'error');
    return;
  }
  
  try {
    // Convert canvas to blob
    canvas.toBlob(function(blob) {
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `VIN-QR-${vin}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showNotification('QR code downloaded!', 'success');
    });
  } catch (error) {
    showNotification('Error downloading QR code', 'error');
    console.error(error);
  }
}

function printQRCode() {
  const qrCanvas = document.getElementById('qrCanvas');
  const canvas = qrCanvas.querySelector('canvas');
  const vin = document.getElementById('vinQrInput').value.toUpperCase().trim();
  
  if (!canvas) {
    showNotification('Please generate a QR code first', 'error');
    return;
  }
  
  try {
    // Create print window
    const printWindow = window.open('', '_blank');
    const imgData = canvas.toDataURL('image/png');
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Print VIN QR Code</title>
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
            body {
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        <img src="${imgData}" alt="VIN QR Code">
        <div class="vin-text">VIN: ${vin}</div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() {
              window.close();
            }, 100);
          };
        </script>
      </body>
      </html>
    `);
    
    printWindow.document.close();
    
  } catch (error) {
    showNotification('Error printing QR code', 'error');
    console.error(error);
  }
}

function showNotification(message, type) {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.classList.add('show');
    
    // Change color based on type
    if (type === 'error') {
      notification.style.background = 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)';
    } else {
      notification.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
    }
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2500);
  }
}

// Allow Enter key to generate
document.addEventListener('DOMContentLoaded', function() {
  const vinInput = document.getElementById('vinQrInput');
  if (vinInput) {
    vinInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        generateQRCode();
      }
    });
  }
});