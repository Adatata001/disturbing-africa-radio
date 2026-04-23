
# Disturbing Africa Radio — Website Plan

A bold, dark-themed radio streaming site with yellow + green accents, inspired by your reference layout.

## Design direction
- **Theme:** Dark (near-black background) with bold yellow as primary accent and green as secondary accent
- **Typography:** Large, confident display headings (uppercase for hero); clean sans body
- **Vibe:** Editorial + underground — heavy type, sharp cards, subtle motion on the live player (animated EQ bars when playing)

## Pages

### 1. Home (`/`)
- **Sticky header** with logo, nav (Home, Shows, About, Contact), and a compact "Listen Live" button that scrolls to / activates the player
- **Hero**: "WELCOME TO DISTURBING AFRICA RADIO" with tagline about Afro Fusion, mainstream + underground. Primary CTA "Listen Live", secondary "Explore Shows"
- **Live player bar** (sticky bottom on mobile, embedded in hero on desktop): Play/pause, volume, now-playing label, animated EQ bars, station logo. Plays your provided stream URL.
- **Mission strip**: short bold statement — "Spread the influence of African underground genres"
- **Featured shows** grid (3–4 cards with show art, name, host, schedule)
- **Core values** section — bold numbered list (Bold Curations, Cultural Integrity, Disruptive Programming, etc.)
- **"United Voices, Limitless Stories"** editorial block with imagery
- **Community / Tip jar CTA** — Support the station + WhatsApp community link
- **Footer**: address, hours, socials, CEO, certification, parent company

### 2. Shows / Schedule (`/shows`)
- Intro header
- **Weekly schedule grid** (Mon–Sun × time slots) with show names, hosts, and genre tags
- **Show roster** below — cards for each show with description and host
- Persistent mini player at bottom

### 3. About (`/about`)
- Brand story + Mission + Vision (large editorial type)
- Core values as a bold grid
- CEO spotlight — Abraham Yusuf
- Certification badge (9/10/25) and parent company (Dstrb Afrik Global LTD)

### 4. Contact (`/contact`)
- Address: C10 Bugai Street, Makera, Kaduna
- Hours: 5am – 12am daily (with "Open now / Closed" live indicator)
- Embedded map placeholder
- Social links + WhatsApp community button + Tip jar button (links you provide later, placeholders for now)
- Simple contact form (email capture stored via Lovable Cloud)

## Global features
- **Persistent live audio player** that keeps playing as users navigate between pages (mounted in root layout)
- **"Open now" indicator** in header based on 5am–12am hours
- **Per-page SEO** (title, description, og tags) for each route
- **Responsive** — mobile-first, sticky bottom player on small screens
- **Social + WhatsApp + Tip jar** buttons in header CTA area and footer

## Tech notes
- Stream URL: I'll wire in the URL you provide; HTML5 `<audio>` element with custom controls
- No backend needed for v1 beyond a contact form table (Lovable Cloud)
- Placeholder imagery from Unsplash (radio/studio/African music themes) — easy to swap for real photos later
