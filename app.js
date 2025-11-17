const allowedChars = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';

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
    sum += transliterate(vinArr[i]) * weights[i];
  }
  let remainder = sum % 11;
  return remainder === 10 ? 'X' : remainder.toString();
}

function generateVIN() {
  let vinArr = [];
  for (let i = 0; i < 17; i++) {
    vinArr.push(allowedChars[Math.floor(Math.random() * allowedChars.length)]);
  }
  vinArr[8] = calculateCheckDigit(vinArr);
  const vin = vinArr.join('');
  
  const vinInput = document.getElementById('vin');
  if (vinInput) {
    vinInput.value = vin;
  }
}

function copyVIN() {
  const vinInput = document.getElementById('vin');
  if (!vinInput) return;
  
  vinInput.select();
  vinInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(vinInput.value);
  
  const notification = document.getElementById('notification');
  if (notification) {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2500);
  }
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Generate VIN on page load if on generator page
  const vinInput = document.getElementById('vin');
  if (vinInput) {
    generateVIN();
  }
});