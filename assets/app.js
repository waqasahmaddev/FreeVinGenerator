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

    gtag('event', 'vin_generated', {
        'event_category': 'Tool Usage',
        'event_label': 'Random VIN',
        'value': 1
    });
}

let notificationTimeout;

function copyVIN() {
    const vinInput = document.getElementById('vin');
    if (!vinInput) return;

    vinInput.select();
    vinInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(vinInput.value);

    const notification = document.getElementById('notification');
    if (notification) {
        // Clear any existing timeout
        clearTimeout(notificationTimeout);

        // Remove class first to reset animation
        notification.classList.remove('show');

        // Add class after a tiny delay to restart animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Set new timeout
        notificationTimeout = setTimeout(() => {
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

    // Apply dark mode to body if needed (html already has it from inline script)
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Scroll to top button visibility
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

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
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

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    nav.classList.toggle('active');
    toggle.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    const overlay = document.getElementById('menuOverlay');

    if (nav && toggle && nav.classList.contains('active')) {
        // Check if click is outside nav and toggle button
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

// Close mobile menu when link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            const nav = document.getElementById('mainNav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const body = document.body;

            if (nav && toggle) {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                body.classList.remove('menu-open');
                overlay.classList.remove('active');
            }
        });
    }

    const navLinks = document.querySelectorAll('#mainNav a');
    const body = document.body;

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.getElementById('mainNav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const overlay = document.getElementById('menuOverlay');

            if (nav && toggle && nav.classList.contains('active')) {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                body.classList.remove('menu-open');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            }
        });
    });
});

function smoothScrollToContent() {
    const contentSection = document.querySelector('.content-section');
    if (contentSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = contentSection.offsetTop - headerHeight - 20; // 20px extra spacing

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}