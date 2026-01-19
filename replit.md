# Aulo Bros - Static Website

## Overview
A clean, professional multi-page static website for Aulo Bros, a Worcester-based trucking and waste management company serving Massachusetts and the New England region.

## Project Structure
```
/
├── index.html          # Home page
├── about.html          # Company overview and values
├── services.html       # Services offered
├── contact.html        # Contact information
├── css/
│   └── styles.css      # Main stylesheet
├── images/
│   ├── logo.png                  # Company logo
│   ├── recycling-philosophy.jpg  # Home page recycling section
│   ├── about-top.jpg             # About page hero image
│   ├── about-bottom.jpg          # About page bottom image
│   ├── service-rolloff.jpg       # Roll-off dumpster service
│   ├── service-construction.jpg  # Construction/demolition service
│   ├── service-heavy-haul.jpg    # Heavy hauling service
│   ├── service-land-clearing.jpg # Land clearing service
│   ├── service-scrap-metal.jpg   # Scrap metal recovery service
│   └── service-custom-waste.jpg  # Custom waste programs service
├── js/
│   └── main.js         # Mobile navigation functionality
└── server/             # Express server for serving static files
```

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Server**: Express.js (serving static files only)
- **No build tools, no frameworks**

## Design Guidelines
- **Primary Color**: #2B5BA6 (Royal Blue - from logo)
- **Secondary Color**: #1E3A5F (Dark Navy)
- **Accent Color**: #E8A54B (Golden/Wheat from logo feathers)
- **Professional, industrial aesthetic**
- **Mobile-responsive using CSS flexbox**

## Pages
1. **Home (index.html)**: Hero section, service highlights, recycling philosophy, trust indicators
2. **About (about.html)**: Company story, values, recycling-first philosophy
3. **Services (services.html)**: Detailed service listings with descriptions
4. **Contact (contact.html)**: Contact information, business hours, service area

## Key Features
- Consistent navigation across all pages
- Mobile-responsive design
- Sticky header
- Professional color scheme derived from company logo
- Service images for all six service categories
- New England regional map image on services and contact pages

## Company Information
- **Location**: Worcester, Massachusetts
- **Service Area**: Massachusetts and New England region
- **Domain**: aulobros.com
- **Services**: Roll-off dumpster rentals, hauling, demolition support, recycling programs
- **Philosophy**: Recycling-first approach, landfill as last resort

## Running the Project
The Express server serves static files on port 5000.
- Run `npm run dev` to start the development server
- Access at the provided URL

## Images
All service images have been added and converted from HEIC format:
- Home page: Recycling philosophy section image
- About page: Top image (facility/truck) and bottom image (team/equipment)
- Services page: Individual images for each of the 6 services
- Maps: New England region map image showing service area

## GitHub Pages Ready
The site is fully static and ready for GitHub Pages deployment:
- All links are relative paths
- index.html serves as the homepage
- CSS centralized in css/styles.css (no inline styles)
- JavaScript only used for essential mobile navigation
- No server-side dependencies required

## Recent Changes
- January 2026: Initial static site creation with four pages
- January 2026: Broadened service area from "Central MA" to "Massachusetts and New England"
- January 2026: Added service images for all categories
- January 2026: Added New England regional map to services and contact pages
- January 2026: Updated copyright to 2026
- January 2026: Changed "Location" to "Headquarters" on contact page
- January 2026: Updated roll-off service title to include trailers
- January 2026: Cleaned up all inline styles to CSS classes
