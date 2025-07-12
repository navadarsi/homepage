// Enhanced orbital animation and interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
    
    // Handle responsive behavior
    handleResponsiveDesign();
    
    // Add interactive features
    addInteractiveFeatures();
    
    // Performance optimizations
    optimizeAnimations();
});

/**
 * Initialize the main application
 */
function initializeApp() {
    console.log('Navadarsi Orbiting Logos - Initialized');
    console.log('Equidistant Logo Animation:');
    console.log('- All logos orbit at same radius and 25s duration');
    console.log('- Auto-blur effect when logos cross text area');
    console.log('- Radial saffron gradient: light center to dark edges');
    
    // Check if all required elements are present
    const requiredElements = [
        '.main-stage',
        '.central-logo',
        '.orbit-container',
        '.orbiting-logo'
    ];
    
    requiredElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Warning: Required element ${selector} not found`);
        }
    });
    
    // Initialize logo loading
    preloadImages();
}

/**
 * Preload all logo images for smooth experience
 */
function preloadImages() {
    const imagePaths = [
        'images/navadarsi.jpg',
        'images/oyifa.jpg',
        'images/arbabjobs.jpg',
        'images/monolithia.jpg'
    ];
    
    const preloadPromises = imagePaths.map(path => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                console.log(`✓ Loaded: ${path}`);
                resolve(path);
            };
            img.onerror = () => {
                console.warn(`⚠ Failed to load: ${path}`);
                resolve(path); // Resolve anyway to not block the app
            };
            img.src = path;
        });
    });
    
    Promise.all(preloadPromises).then(() => {
        console.log('All images preloaded');
        document.body.classList.add('loaded');
    });
}

/**
 * Handle responsive design adjustments
 */
function handleResponsiveDesign() {
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            adjustOrbitRadius();
            updateAnimationSpeed();
        }, 250);
    });
    
    // Initial adjustment
    adjustOrbitRadius();
}

/**
 * Dynamically adjust orbit radius based on screen size
 */
function adjustOrbitRadius() {
    const orbitContainer = document.querySelector('.orbit-container');
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    
    if (!orbitContainer || !orbitingLogos.length) return;
    
    const viewportMin = Math.min(window.innerWidth, window.innerHeight);
    const orbitRadius = Math.max(150, viewportMin * 0.3);
    
    // Update CSS custom property for orbit radius
    document.documentElement.style.setProperty('--orbit-radius', `${orbitRadius}px`);
    
    // Apply to orbiting logos
    orbitingLogos.forEach(logo => {
        logo.style.transformOrigin = `${orbitRadius}px ${orbitRadius}px`;
    });
}

/**
 * Update animation speed based on user preferences
 */
function updateAnimationSpeed() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '40s');
        console.log('Reduced motion detected - slowing animations');
    } else {
        document.documentElement.style.setProperty('--animation-duration', '25s');
    }
}

/**
 * Add interactive features and hover effects
 */
function addInteractiveFeatures() {
    const centralLogo = document.querySelector('.central-logo');
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    
    // Central logo has no interactions (pointer-events: none in CSS)
    
    // Orbiting logo interactions
    orbitingLogos.forEach((logo, index) => {
        // Mouse events for desktop
        logo.addEventListener('mouseenter', function() {
            highlightOrbitingLogo(this, true);
        });
        
        logo.addEventListener('mouseleave', function() {
            highlightOrbitingLogo(this, false);
        });
        
        // Touch events for mobile
        logo.addEventListener('touchstart', function(e) {
            e.preventDefault();
            highlightOrbitingLogo(this, true);
        });
        
        logo.addEventListener('touchend', function(e) {
            e.preventDefault();
            highlightOrbitingLogo(this, false);
            redirectToCompanyWebsite(this, index);
        });
        
        // Click events for all devices
        logo.addEventListener('click', function() {
            redirectToCompanyWebsite(this, index);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Start monitoring for text area intersections
    monitorTextAreaIntersections();
}

/**
 * Pause orbital animation
 */
function pauseOrbitAnimation() {
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    orbitingLogos.forEach(logo => {
        logo.style.animationPlayState = 'paused';
    });
}

/**
 * Resume orbital animation
 */
function resumeOrbitAnimation() {
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    orbitingLogos.forEach(logo => {
        logo.style.animationPlayState = 'running';
    });
}

/**
 * Highlight orbiting logo
 */
function highlightOrbitingLogo(logo, highlight) {
    if (highlight) {
        logo.style.transform = 'scale(1.2)';
        logo.style.zIndex = '20';
        logo.style.background = 'rgba(255, 255, 255, 0.3)';
    } else {
        logo.style.transform = 'scale(1)';
        logo.style.zIndex = '5';
        logo.style.background = 'rgba(255, 255, 255, 0.15)';
    }
}

/**
 * Create ripple effect on click
 */
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Redirect to company website
 */
function redirectToCompanyWebsite(logo, index) {
    const websites = [
        'https://oyifa.com',
        'https://arbabjobs.com', 
        'https://gcc.monolithiaglobal.com'
    ];
    const logoNames = ['Oyifa', 'Arbab Jobs', 'Monolithia GCC'];
    
    console.log(`Redirecting to: ${logoNames[index]} - ${websites[index]}`);
    
    // Add a brief visual feedback before redirect
    logo.style.transition = 'transform 0.2s ease';
    logo.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        window.open(websites[index], '_blank');
        logo.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(event) {
    switch(event.key) {
        case ' ': // Spacebar
            event.preventDefault();
            toggleAnimation();
            break;
        case 'r':
        case 'R':
            resetAnimation();
            break;
        case 'Escape':
            resetFocus();
            break;
    }
}

/**
 * Toggle animation play/pause
 */
function toggleAnimation() {
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    const firstLogo = orbitingLogos[0];
    
    if (!firstLogo) return;
    
    const currentState = getComputedStyle(firstLogo).animationPlayState;
    
    if (currentState === 'paused') {
        resumeOrbitAnimation();
        console.log('Animation resumed');
    } else {
        pauseOrbitAnimation();
        console.log('Animation paused');
    }
}

/**
 * Reset animation to initial state
 */
function resetAnimation() {
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    
    orbitingLogos.forEach(logo => {
        logo.style.animation = 'none';
        // Force reflow
        logo.offsetHeight;
        logo.style.animation = '';
    });
    
    console.log('Animation reset');
}

/**
 * Reset focus states
 */
function resetFocus() {
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    const centralLogo = document.querySelector('.central-logo');
    
    orbitingLogos.forEach(logo => {
        highlightOrbitingLogo(logo, false);
    });
    
    // Central logo positioning is handled by CSS
    
    resumeOrbitAnimation();
}

/**
 * Monitor logos crossing the text area and apply blur
 */
function monitorTextAreaIntersections() {
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    const tagline = document.querySelector('.tagline');
    
    if (!tagline) return;
    
    setInterval(() => {
        const taglineRect = tagline.getBoundingClientRect();
        
        orbitingLogos.forEach(logo => {
            const logoRect = logo.getBoundingClientRect();
            
            // Check if logo intersects with text area (with padding for smoother effect)
            const padding = 30;
            const isIntersecting = !(
                logoRect.right < taglineRect.left - padding ||
                logoRect.left > taglineRect.right + padding ||
                logoRect.bottom < taglineRect.top - padding ||
                logoRect.top > taglineRect.bottom + padding
            );
            
            // Apply blur effect when intersecting
            if (isIntersecting) {
                logo.style.filter = 'blur(3px)';
                logo.style.opacity = '0.6';
                logo.style.transition = 'filter 0.3s ease, opacity 0.3s ease';
            } else {
                // Only remove blur if not hovering
                if (!logo.matches(':hover')) {
                    logo.style.filter = '';
                    logo.style.opacity = '1';
                }
            }
        });
    }, 100); // Check every 100ms for smooth effect
}

/**
 * Performance optimizations
 */
function optimizeAnimations() {
    // Use requestAnimationFrame for smooth animations
    const orbitingLogos = document.querySelectorAll('.orbiting-logo');
    
    orbitingLogos.forEach(logo => {
        logo.style.willChange = 'transform';
        logo.style.backfaceVisibility = 'hidden';
    });
    
    // Cleanup will-change after animations complete
    setTimeout(() => {
        orbitingLogos.forEach(logo => {
            logo.style.willChange = 'auto';
        });
    }, 1000);
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    .loaded .main-stage {
        opacity: 1;
    }
    
    .main-stage {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// Export functions for potential external use
window.NavadarsiOrbit = {
    toggleAnimation,
    resetAnimation,
    pauseOrbitAnimation,
    resumeOrbitAnimation
};
