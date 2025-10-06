# Subscription Page Components

This folder contains all the components for the subscription page, designed to be reusable and maintainable.

## Folder Structure

```
subscription/
├── README.md
├── index.ts
├── hero-banner.tsx
├── notification-banner.tsx
├── plan-card.tsx
└── plan-toggle.tsx
```

## Components

### HeroBanner

- Displays the main hero section with title, subtitle, and benefits
- Uses the subscription banner image from `/public/assets/subscription-banner.png`
- Responsive design with gradient overlay

### NotificationBanner

- Shows payment verification status
- Orange banner with clock icon
- Displays payment date information

### PlanToggle

- Toggle between Monthly and Yearly plans
- Client-side state management
- Callback function to handle toggle changes

### PlanCard

- Reusable card component for subscription plans
- Accepts plan data and icon as props
- Features list with checkmarks and X marks
- Popular badge for featured plans
- Customizable button colors

## Data Structure

The subscription data is managed in `/src/lib/data/subscription.ts` with TypeScript interfaces in `/src/lib/types/subscription.ts`.

### Plan Features

- All plans include core features
- Advanced features are tiered based on plan level
- Features can be marked as included/excluded

### Customization

- Button colors are configurable per plan
- Icon colors match button themes
- Plan descriptions and pricing are data-driven

## Usage

```tsx
import { HeroBanner, PlanCard, PlanToggle } from '@/components/features/panel/subscription';
import { subscriptionData } from '@/lib/data/subscription';

// Use in your page component
<HeroBanner
  title={subscriptionData.hero.title}
  subtitle={subscriptionData.hero.subtitle}
  benefits={subscriptionData.hero.benefits}
/>;
```

## Assets

The hero banner uses `/public/assets/subscription-banner.png` for the background image. Make sure this asset is available in your public folder.
