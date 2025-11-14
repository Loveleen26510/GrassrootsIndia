# Design Guidelines for Grassroots India NGO Website

## Design Approach
**Reference-Based**: Drawing inspiration from professional NGO websites with trust-building elements and clear call-to-action patterns. The design balances emotional appeal with professional credibility.

## Core Design Principles
- **Trust & Compassion**: Clean, modern aesthetic that inspires confidence and warmth
- **Action-Oriented**: Clear donation pathways and engagement opportunities throughout
- **Accessibility**: High contrast ratios, readable typography, and semantic structure

## Color Palette
- **Primary (Trust)**: Deep blue `#003366` - headers, primary buttons, trust elements
- **Accent (Action)**: Warm orange `#F39C12` - CTAs, highlights, donation buttons
- **Text**: Dark grey `#343a40` - body copy, readable against light backgrounds
- **Backgrounds**: Off-white `#F8F9FA` for section alternation, pure white `#FFFFFF` for cards/content containers

## Typography System
- **Headings**: Montserrat (600 weight for impact, clean modern sans-serif)
- **Body**: Lato (400 regular, 300 light for secondary text)
- **Hierarchy**: H1 (48-56px), H2 (36-42px), H3 (24-28px), Body (16-18px)

## Layout & Spacing
- **Container**: Max-width 1140px for content sections
- **Section Padding**: py-5 to py-7 (80-112px vertical rhythm)
- **Spacing Units**: Bootstrap's spacing scale (1-5), focusing on 3, 4, 5 for consistency
- **Grid**: Bootstrap's 12-column responsive grid

## Component Library

### Navigation
- **Sticky top navbar**: White background with subtle shadow on scroll
- Brand text on left, navigation links center-right
- **Donate Now button**: Solid accent orange, positioned far right, always visible
- Mobile: Collapsible hamburger menu

### Hero Section
- **Full-width background image**: Rural Indian community/smiling children (Unsplash)
- **Dark overlay**: Semi-transparent (rgba(0,0,0,0.5)) for text readability
- **Content**: Centered, white text
  - H1 headline with strong emotional appeal
  - Supporting subheadline (18-20px)
  - **Dual CTAs**: Primary solid orange "Donate Now" + Secondary outline white "Learn Our Mission" (smooth scroll)
- **Height**: 100vh or 600px minimum

### About Us Section (Two-Column)
- **Left**: Compelling paragraph with mission statement
- **Right**: Three icon-based feature boxes
  - Font Awesome icons (48px, primary blue)
  - Bold titles (18px)
  - Short descriptive text
  - Vertical stack on mobile

### Our Work Cards (3-Column Grid)
- **Six pillar cards**: Relief, Education, Health, Women Empowerment, Livelihood, Peace
- **Card design**: White background, subtle shadow, border-radius 8px
- **Content**: 
  - Large icon at top (primary blue, 56px)
  - Title (20px, Montserrat)
  - Short description (16px, muted text)
- **Hover effect**: Lift with deeper shadow (transform: translateY(-5px))
- **Responsive**: 3 cols desktop, 2 cols tablet, 1 col mobile

### Impact Statistics Section
- **Background**: Primary blue with white text for contrast and distinction
- **Layout**: 4-column grid (2x2 on mobile)
- **Content per stat**:
  - Large number (48-60px, bold)
  - "+" symbol
  - Label below (16px, uppercase tracking)
- **Animation**: Count-up effect from 0 when section enters viewport (JavaScript)
- **Stats**: 5,000+ Lives Touched | 25+ Projects | 1,200+ Children Educated | 10+ Partner NGOs

### Get Involved Section
- **Two large interactive boxes** (side-by-side, 50/50 split)
- **Box styling**: 
  - Light background (#F8F9FA), border with accent color on hover
  - Icon at top
  - Title (24px, Montserrat)
  - Description text
  - CTA button (outline style, accent color)
- **Content**: "Volunteer Your Time" + "Partner With Us"
- **Mobile**: Stack vertically

### Footer (Multi-Column)
- **Background**: Dark grey (#343a40) with light text
- **Four columns**:
  1. Brand + mission snippet
  2. Quick Links (navigation)
  3. Contact Info (address, phone, email placeholders)
  4. Social Media icons (Facebook, Twitter, Instagram, LinkedIn)
- **Bottom bar**: Copyright notice, centered
- **Mobile**: Stack columns vertically

## Interactions & Animations
- **Smooth scroll**: All anchor links animate to sections
- **Button hovers**: Subtle scale (1.05) + shadow enhancement
- **Card hovers**: Lift effect with shadow depth increase
- **Statistics counter**: Animated number increment on scroll trigger
- **Navbar**: Shadow appears on scroll past hero

## Images
- **Hero Background**: High-quality image of rural Indian community or children (inspiring, hopeful tone) - use Unsplash placeholder
- **Placement**: Full-width background with overlay for text readability
- **Treatment**: Dark overlay (50% opacity) to ensure white text legibility
- **Buttons on image**: Implement with backdrop blur for depth

## Responsive Behavior
- **Desktop (≥992px)**: Full multi-column layouts
- **Tablet (768-991px)**: 2-column grids, adjusted spacing
- **Mobile (<768px)**: Single column, stacked cards, hamburger navigation, larger touch targets