# Indonesia Tourism Investment Portal

## Goal
Build a complete, responsive government-style tourism investment portal centered on 3 regenerative and 10 priority destinations.

## Implementation
- Establish a premium editorial design system using deep navy, charcoal, warm sand, off-white, natural green, and subtle gold, with accessible typography, focus states, and reduced-motion behavior.
- Create structured local destination, opportunity, regulation, publication, classification, and theme data without invented official statistics or investment figures.
- Build shared navigation, footer, section headers, destination cards, accessible draggable/autoplay carousels, explorer filters, opportunity filters, forms, and editorial content cards.
- Build the homepage in the requested storytelling order, emphasizing immersive destination photography and the two distinct destination categories.
- Add dedicated pages for destinations, each destination detail, opportunities, regulations, publications, and contact, with unique metadata and responsive layouts.
- Use clearly marked sample or placeholder content wherever verified official content is unavailable.
- Validate all routes, carousel interactions, search/filter behavior, navigation, forms, and desktop/mobile presentation.

## Technical details
- Use TanStack Router file routes, including a dynamic `/destinations/$slug` page backed by shared TypeScript data.
- Implement carousels with Embla Carousel for drag, swipe, looping, autoplay, keyboard control, and responsive slide widths.
- Store generated destination imagery locally under `src/assets` and import it directly.
- Keep all colors and visual roles in semantic Tailwind v4 tokens in `src/styles.css`.
- Forms remain presentation-only until a storage or email service is connected.
