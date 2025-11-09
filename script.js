// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('.theme-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme + '-theme');

// Update icon based on current theme
if (currentTheme === 'dark') {
    themeIcon.textContent = '☀️';
} else {
    themeIcon.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    
    const isDark = body.classList.contains('dark-theme');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Hero background scroll effect with parallax
const heroBackground = document.getElementById('heroBackground');
const heroImage = document.getElementById('heroImage');

function updateHeroEffects() {
    if (!heroBackground || !heroImage) return;
    
    const scrollPosition = window.scrollY;
    const heroHeight = heroBackground.offsetHeight;
    const fadeStart = 0;
    const fadeEnd = heroHeight * 0.8; // Start fading when scrolled 80% of image height
    
    // Parallax effect - background moves slower (0.2x speed for long image)
    const parallaxSpeed = 0.2;
    const parallaxOffset = scrollPosition * parallaxSpeed;
    heroImage.style.transform = `translateY(${parallaxOffset}px)`;
    
    // Opacity fade effect - gradually fade from 1 to 0
    let opacity = 1;
    if (scrollPosition >= fadeStart && scrollPosition <= fadeEnd) {
        opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
    } else if (scrollPosition > fadeEnd) {
        opacity = 0;
    }
    
    heroImage.style.opacity = opacity;
}

// Run on scroll
window.addEventListener('scroll', updateHeroEffects);

// Run on load
updateHeroEffects();

// Add scrolled class to body for container background
function updateScrolledClass() {
    if (window.scrollY > 100) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateScrolledClass);
updateScrolledClass();

// Update last updated date
function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Run on load
updateLastUpdated();

