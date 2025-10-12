# Course Components

This directory contains all the components for the course certification section, following the same clean architecture pattern as the subscription components.

## Components Structure

### Core Components

- **`course-content.tsx`** - Main container component that orchestrates all course sections
- **`hero-banner.tsx`** - Hero section with gradient background and certification messaging
- **`progress-section.tsx`** - Progress tracking section with circular progress indicator
- **`course-modules-section.tsx`** - Container for course cards grid
- **`course-card.tsx`** - Individual course card with status, progress, and actions

### Data Structure

The course data is defined in `/lib/data/courses.ts` with the following interfaces:

- **`Course`** - Individual course with status, progress, and metadata
- **`CourseProgress`** - Overall progress tracking
- **`CourseData`** - Complete course section data structure

### Course Status Types

- **`completed`** - Course finished with certificate earned
- **`in-progress`** - Course currently being taken with progress percentage
- **`not-started`** - Course locked and not yet available

### Features

- Responsive design with mobile-first approach
- Status-based styling and interactions
- Progress tracking with visual indicators
- Lock/unlock functionality for course progression
- Clean component separation following subscription pattern

## Usage

```tsx
import { CourseContent } from '@/components/features/panel/courses';

export default function CoursesPage() {
  return <CourseContent />;
}
```

## Customization

To modify course data, update the `courseData` object in `/lib/data/courses.ts`. The components will automatically reflect the changes.
