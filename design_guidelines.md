# Aulo Bros Website Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from industrial service leaders Republic Services, Casella, and Lawrence Waste Services to establish credibility and familiarity within the waste management sector. This approach creates immediate trust with commercial clients who expect professional, proven design patterns.

**Core Principles**:
- Industrial credibility over creative flair
- Information clarity and accessibility
- Trust-building through professional presentation
- Mobile-first responsive design for field workers and contractors

## Typography System

**Font Stack**:
- Primary: System fonts (Arial, Helvetica, sans-serif) for maximum readability and fast loading
- Headings: Bold weights (700) for impact and hierarchy
- Body: Regular weight (400) for comfortable reading
- Accent text: Semi-bold (600) for subheadings and calls-to-action

**Type Scale**:
- Hero headlines: 2.5-3rem desktop, 1.75rem mobile
- Section headings: 2rem desktop, 1.5rem mobile
- Subheadings: 1.25rem desktop, 1.125rem mobile
- Body text: 1rem (16px base)
- Small text: 0.875rem for captions and fine print

## Layout System

**Spacing Units**: Use consistent spacing multiples of 8px
- Section padding: 64px (desktop), 32px (mobile)
- Component spacing: 32px between major elements
- Content margins: 16px for related items
- Grid gaps: 24px between cards/columns

**Container Strategy**:
- Maximum content width: 1200px for optimal readability
- Full-width sections for visual impact (hero, footer)
- Contained content areas: 1200px max-width centered
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

## Page-Specific Layouts

### Home Page (index.html)
**Hero Section**: Full-width image with company truck/operations, overlaid text and CTA
- Hero height: 500-600px desktop, 400px mobile
- Centered content with semi-transparent overlay for text legibility
- Primary CTA button and secondary link

**Services Overview**: 3-column grid (1 column mobile) showcasing core offerings
- Icon or simple graphic per service
- Brief description with "Learn More" links to services.html

**Recycling Philosophy Section**: Full-width with stats/impact metrics
- 2-column layout: text content + supporting visual/infographic
- Highlight diversion rates and environmental commitment

**Trust Indicators**: Single row with company credentials
- Years in business, family-owned badge, service area coverage
- Simple icon + text format

### About Page
**Company Story**: 2-column layout alternating text and imagery
- Mission statement prominently featured at top
- Values section with icon grid (3-4 items)
- Recycling philosophy detailed with process breakdown

**Team/Credentials Section**: Professional presentation of company background
- Worcester roots and New England focus emphasized

### Services Page
**Service Categories**: Card-based layout, 2 columns desktop, 1 mobile
- Each service gets dedicated card with icon, heading, description
- Clear hierarchy: Roll-off rentals → Hauling → Demolition → Custom programs
- Bullet points for specific materials handled
- Recycling process explained per service type

### Contact Page
**Split Layout**: 60/40 or 50/50 desktop, stacked mobile
- Left: Contact information, hours, service area details
- Right: Map placeholder for Central Massachusetts coverage
- Phone number prominently displayed
- Simple text-based contact information (no form backend)

## Component Library

### Navigation Bar
**Structure**: Horizontal desktop, hamburger mobile
- Company logo left-aligned
- Navigation links right-aligned
- Sticky positioning for accessibility
- Active page indication with underline or weight change
- Mobile: Full-screen overlay menu

### Buttons
**Primary CTA**: Bold, high-contrast buttons for main actions
- Minimum touch target: 44px height
- Clear hover states (no complex animations)
- "Request Service", "Get Quote", "Contact Us" labels

**Secondary Links**: Text links with underline on hover

### Service Cards
- Clean white/light background
- Icon or simple graphic at top
- Heading, 2-3 sentence description
- Optional "Learn More" link at bottom
- Consistent padding: 24px all sides
- Subtle shadow for depth

### Footer
**Multi-Column Layout**: 3-4 columns desktop, stacked mobile
- Company info column: address, phone, email
- Quick links: Services, About, Contact
- Service area information
- Recycling commitment statement
- Social media links (if applicable)

## Images

**Required Image Placements**:

1. **Home Hero**: Wide landscape shot of Aulo Bros truck in action or at Worcester facility (1920x600px recommended)
   - Professional, well-lit photography showing equipment quality
   - Overlay-friendly composition (darker areas for text placement)

2. **Services Page**: Supporting images for each major service category
   - Roll-off containers on job sites
   - Demolition/hauling operations
   - Recycling sorting facilities
   - Size: 800x500px landscape format

3. **About Page**: Company credibility images
   - Team photo or facility exterior
   - Equipment lineup showing fleet quality
   - Size: 1200x700px landscape

4. **Trust Indicators**: Small icons/badges throughout
   - Family-owned emblem
   - Local Worcester/New England graphics
   - Recycling certification badges

**Placeholder Strategy**: Use text labels clearly indicating image purpose until real photos provided (e.g., "HERO IMAGE: Aulo Bros Truck at Worcester Facility")

## Mobile Responsiveness

**Breakpoint Strategy**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1023px (2-column where appropriate)
- Desktop: ≥ 1024px (full multi-column layouts)

**Touch Optimization**:
- All interactive elements minimum 44x44px
- Adequate spacing between clickable items
- Simplified navigation for small screens

## Accessibility Standards

- Semantic HTML throughout (header, nav, main, section, footer)
- Alt text for all images (descriptive for content, empty for decorative)
- Sufficient contrast ratios for text readability
- Keyboard navigation support
- Focus states visible on all interactive elements