# Problem-Solution Interactive Section

## Overview
An award-winning, scroll-based interactive section that showcases problems and their solutions with animated workflow diagrams.

## Features

### 🎯 **Interactive Scroll Detection**
- Automatically detects which problem is in view as user scrolls
- Smooth transitions between different problem states
- Sticky diagram on the right side (desktop only)

### 📊 **Workflow Diagrams**
Each problem shows a "Before → After" transformation:
- **Before State**: Red-themed cards showing current problems
- **Transition Arrow**: Shows "Our Solution" with trending up icon
- **After State**: Green-themed cards showing improvements
- **Impact Metric**: Animated progress bar showing expected improvement

### ✨ **Premium Animations**
- Staggered entrance animations for each element
- Smooth opacity and position transitions
- Active state indicators with gradient lines
- Pulsing status dots
- Animated progress bars

### 📱 **Responsive Design**
- Desktop: Two-column layout with sticky diagrams
- Mobile: Single column with problems list only
- Diagrams hidden on mobile for better UX

## Structure

### 5 Key Problems Addressed:

1. **Websites that don't convert**
   - Before: Generic messaging, No clear CTA, Slow load times
   - After: Conversion-optimized copy, Strategic CTAs, Performance optimized

2. **Content that doesn't drive demand**
   - Before: Random topics, No distribution plan, Vanity metrics
   - After: Intent-driven content, Multi-channel distribution, Lead generation focus

3. **Social presence without conversations**
   - Before: Broadcasting only, No engagement strategy, Disconnected from sales
   - After: Conversation-first approach, Community building, Social → Pipeline flow

4. **Leads without qualification**
   - Before: All leads treated equal, Manual qualification, Sales wastes time
   - After: AI-powered scoring, Automated qualification, Sales talks to buyers only

5. **Sales teams filtering instead of closing**
   - Before: Unqualified demos, Low close rates, Wasted capacity
   - After: Pre-qualified pipeline, High-intent prospects, Optimized close rates

## Technical Implementation

### Scroll Detection
```tsx
useEffect(() => {
    const handleScroll = () => {
        // Calculate scroll progress
        const scrollProgress = -rect.top / (rect.height - window.innerHeight);
        
        // Determine active problem based on scroll position
        const problemIndex = Math.floor(scrollProgress * problems.length);
        setActiveProblem(problemIndex + 1);
    };
    
    window.addEventListener("scroll", handleScroll);
}, []);
```

### Sticky Positioning
The workflow diagram uses `position: sticky` with `top-32` to stay in view while scrolling through problems.

### Animation States
- **Inactive**: `opacity-40` - Dimmed
- **Active**: `opacity-100` - Full brightness with gradient indicator
- **Hover**: `opacity-70` - Intermediate state

## Design System Usage

### Typography
- Section title: `text-display-2`
- Problem titles: `text-heading-2`
- Descriptions: `text-body-sm`
- Labels: `text-label-sm`, `text-ui-xs`

### Spacing
- Section padding: `section-padding`
- Container: `max-w-section container-padding`
- Grid gap: `gap-16 lg:gap-24`

### Colors
- Background: `bg-brand-bg`
- Error state: `bg-red-500/5 border-red-500/20`
- Success state: `bg-emerald-500/5 border-emerald-500/20`
- Glass effect: `glass-strong`

## User Experience

1. **User scrolls** through the problems list on the left
2. **Active problem** is highlighted with full opacity and gradient line
3. **Corresponding diagram** fades in on the right with staggered animations
4. **Before state** shows in red with error indicators
5. **Transition** shows "Our Solution" badge
6. **After state** shows in green with success indicators
7. **Impact metric** animates to show expected improvement (+85%)

## Customization

### Adding New Problems
```tsx
{
    id: 6,
    title: "Your Problem Title",
    description: "Problem description",
    icon: <YourIcon className="w-5 h-5" />,
    diagram: {
        before: [
            { label: "Current issue 1", status: "error" },
            { label: "Current issue 2", status: "error" },
        ],
        after: [
            { label: "Solution 1", status: "success" },
            { label: "Solution 2", status: "success" },
        ],
    },
}
```

### Adjusting Scroll Sensitivity
Modify the scroll calculation in `handleScroll`:
```tsx
const problemIndex = Math.floor(scrollProgress * problems.length);
```

### Changing Impact Percentage
Update the progress bar width and percentage text:
```tsx
<motion.div animate={{ width: isActive ? "85%" : 0 }} />
<span className="text-ui-sm text-emerald-400 font-bold">+85%</span>
```

## Performance Considerations

- Uses `viewport={{ once: true }}` for initial animations to prevent re-triggering
- Sticky positioning is GPU-accelerated
- Framer Motion optimizes animations automatically
- Scroll listener is properly cleaned up in useEffect

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast meets WCAG AA standards
- Keyboard navigation supported
- Screen reader friendly content structure

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Graceful degradation on mobile (hides diagrams)
- Sticky positioning fallback for older browsers
