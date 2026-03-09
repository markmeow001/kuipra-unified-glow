

## Plan: Update Navbar and Hero Section to Match Design

### Changes needed based on the design screenshot:

#### 1. Navbar (`src/components/Navbar.tsx`)
- Remove "Home" from nav items; reorder to: **Services, About, Projects, Our Team, Contact**
- Change language toggle text to show "中文/ENG" format
- Change CTA button text to "Get in touch"
- Update nav keys and section IDs accordingly
- Update i18n keys for `nav.team` to "Our Team" and `nav.language` to "中文/ENG", add `nav.getInTouch` for "Get in touch"

#### 2. Hero Section (`src/components/HeroSection.tsx`)
- The entire hero section (dark navy area) should be rendered as a **rounded card** with margins from viewport edges, not full-bleed. Add `mx-4 md:mx-8 rounded-2xl` to the section wrapper so it appears as a floating card on the white page background.
- The stats bar at the bottom should also have rounded bottom corners to match.

#### 3. i18n updates (`src/i18n/en.json`, `src/i18n/zh.json`)
- `nav.team` → "Our Team" / "我們的團隊"
- `nav.language` → "中文/ENG" (same in both)
- Add `nav.getInTouch` → "Get in touch" / "聯繫我們"
- Remove `nav.home` from display (keep key but skip in render)

### Files to modify:
- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/i18n/en.json`
- `src/i18n/zh.json`

