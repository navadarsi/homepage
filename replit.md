# Navadarsi Enterprises Website - Replit Development Guide

## Overview

This is a comprehensive multi-page website for Navadarsi Enterprises, featuring both a corporate website and an interactive orbiting logo animation. The project includes three main pages: a homepage, about page, and contact page, plus a special animation page showcasing the original orbiting logos concept. The site presents Navadarsi Enterprises and its three core services: Monolithia GCC, Arbab Jobs, and OYIFA.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Website Structure
- **Multi-page Architecture**: Four main pages with shared navigation and styling
  - `index.html`: Homepage with company overview and services
  - `about.html`: Detailed about page with comprehensive service information
  - `contact.html`: Contact page with form and company details
  - `orbiting-logos.html`: Interactive animation showcase (original concept)
- **Pure HTML/CSS/JavaScript**: No frameworks or build tools - keeps things simple and lightweight
- **Responsive design**: Built to work across different screen sizes and devices
- **Semantic HTML**: Uses proper HTML5 semantic elements for better SEO

### Key Design Patterns
- **Component-based styling**: Modular CSS classes for different sections and elements
- **Progressive enhancement**: Core content works without JS, enhanced with JS features
- **Mobile-first responsive**: Breakpoints optimized for various screen sizes
- **Sticky navigation**: Consistent navigation across all pages

## Key Components

### HTML Structure
- **Main Stage**: Central container that holds all visual elements
- **Central Logo**: Fixed Navadarsi logo at the center with hover effects
- **Orbit Container**: Wrapper for all orbiting logos
- **Orbiting Logos**: Three company logos positioned at specific angles (0°, 120°, 240°)

### CSS Features
- **Gradient background**: Modern visual appeal with animated background
- **Glassmorphism effects**: Backdrop blur and transparency for modern UI
- **CSS animations**: Smooth orbital motion and hover transitions
- **Responsive viewport units**: Uses vw/vh for full-screen experience

### JavaScript Functionality
- **Initialization system**: Checks for required elements and sets up the app
- **Image preloading**: Ensures smooth loading of SVG logos
- **Interactive features**: Enhanced user interactions (implementation in progress)
- **Performance optimization**: Animation performance monitoring and optimization

## Data Flow

1. **Page Load**: HTML structure loads immediately
2. **CSS Application**: Styles applied, animations begin automatically
3. **JavaScript Enhancement**: 
   - DOM ready event triggers initialization
   - Image preloading starts
   - Interactive features activate
   - Performance optimizations apply

## External Dependencies

### Assets Required
- **SVG Logo Files**:
  - `images/navadarsi.svg` (central logo)
  - `images/oyifa.svg` (orbiting logo 1)
  - `images/arbabjobs.svg` (orbiting logo 2)
  - `images/monolithia.svg` (orbiting logo 3)

### No External Libraries
- Pure vanilla JavaScript (no jQuery, React, etc.)
- Native CSS (no framework dependencies)
- Self-contained with no CDN requirements

## Development Strategy

### File Organization
- `index.html`: Homepage with company overview and services
- `about.html`: Detailed about page with comprehensive service information
- `contact.html`: Contact page with form and company details
- `orbiting-logos.html`: Interactive animation showcase (original concept)
- `website-style.css`: Main website styling for all pages
- `website-script.js`: JavaScript functionality for website pages
- `style.css`: Original orbiting logo animation styling
- `script.js`: Original orbiting logo animation functionality
- `images/`: Company logo assets directory (JPEG format)

### Key Development Considerations
- **Performance**: Smooth 60fps animations are priority
- **Accessibility**: Proper alt tags and semantic HTML
- **Browser Compatibility**: Modern browser features with graceful degradation
- **Mobile Responsiveness**: Touch-friendly interactions and scaling

### Current Implementation Status
- ✅ Basic HTML structure complete
- ✅ CSS animations framework in place
- ✅ JavaScript interactivity fully implemented
- ✅ Full responsive behavior with multiple breakpoints
- ✅ Variable animation speeds implemented
- ✅ Touch event support for mobile devices
- ✅ Performance optimizations implemented

### Key Features Implemented
- **Equidistant Logo Animation**: All logos orbit at same radius (35vmin) with 25s duration
- **Auto-Blur Text Protection**: Logos automatically blur when crossing text area for better readability
- **Radial Saffron Gradient**: Light center (Navadarsi light source) radiating to dark edges (dark room)
- **Glassmorphism Text Design**: Text area has frosted glass background with subtle border
- **Touch-Optimized Mobile**: Full touch event support with responsive breakpoints

### Animation & Visual Design
- **Background**: Radial gradient from very light saffron center to deep saffron edges
- **Gentle Glow Effect**: Subtle breathing animation enhances the light emanation effect
- **Text Protection**: Blur and opacity reduction when logos intersect text area
- **Equidistant Orbits**: All logos maintain same orbital distance for balanced composition

### Recent Changes (July 2025)
- ✅ Created comprehensive multi-page website for Navadarsi Enterprises
- ✅ Built homepage with company overview and service showcase
- ✅ Developed detailed about page with full service descriptions
- ✅ Implemented contact page with functional form and company information
- ✅ Preserved original orbiting logo animation as separate page
- ✅ Added responsive navigation with mobile hamburger menu
- ✅ Created professional color scheme with gradient backgrounds
- ✅ Implemented contact form with validation and user feedback
- ✅ Added smooth scrolling and fade-in animations
- ✅ Optimized for mobile devices with responsive breakpoints