# Quick Reference - Design System Classes

## 🎯 Most Used Classes

### Typography
```tsx
// Headlines
<h1 className="text-display-1">        // 48-104px, Space Grotesk Bold
<h2 className="text-display-2">        // 40-80px, Space Grotesk Bold
<h3 className="text-display-3">        // 32-56px, Space Grotesk Bold

// Sections
<h4 className="text-heading-1">        // 24-36px, Space Grotesk Semibold
<h5 className="text-heading-2">        // 20-30px, Space Grotesk Semibold

// Body
<p className="text-body-lg">           // 18-20px, Inter
<p className="text-body">              // 16px, Inter (default)
<p className="text-body-sm">           // 14px, Inter

// UI Elements
<span className="text-ui">             // 14px, Inter Medium
<span className="text-ui-sm">          // 12px, Inter Medium
<span className="text-ui-xs">          // 10px, Outfit Bold Uppercase

// Labels
<span className="text-label">          // 12px, Outfit Bold Uppercase
<span className="text-label-sm">       // 10px, Outfit Black Uppercase
```

### Layout & Spacing
```tsx
// Sections
<section className="section-padding">           // py-16/24/32
<section className="section-padding-sm">        // py-12/16/20
<section className="section-padding-lg">        // py-20/32/40

// Containers
<div className="max-w-section">                 // max-w-7xl mx-auto
<div className="container-padding">             // px-6/8/12
<div className="max-w-content">                 // max-w-65ch (reading width)
```

### Colors
```tsx
// Backgrounds
className="bg-brand-bg"              // #050608
className="bg-brand-surface"         // #12151B
className="border-brand-border"      // #1F2430

// Text
className="text-white"               // 100%
className="text-white/90"            // 90%
className="text-white/70"            // 70%
className="text-white/60"            // 60%
className="text-white/50"            // 50%
className="text-white/40"            // 40%
className="text-white/30"            // 30%
className="text-white/20"            // 20%
className="text-white/10"            // 10%
```

### Effects
```tsx
// Text Gradients
className="text-gradient-white"      // White gradient effect
className="text-gradient-subtle"     // Subtle gradient

// Glass Morphism
className="glass"                    // Standard glass
className="glass-strong"             // Strong glass

// Glow Effects
className="glow-pink"                // White glow
className="glow-violet"              // Subtle glow
```

## 📝 Common Patterns

### Hero Section
```tsx
<section className="section-padding-lg bg-brand-bg">
  <div className="max-w-section container-padding">
    <span className="text-label-sm text-white/40">Label</span>
    <h1 className="text-display-1 text-white">Headline</h1>
    <p className="text-body-lg text-white/90">Description</p>
  </div>
</section>
```

### Content Section
```tsx
<section className="section-padding bg-brand-bg">
  <div className="max-w-section container-padding">
    <h2 className="text-display-2 text-white mb-6">Title</h2>
    <p className="text-body text-white/70 max-w-content">
      Content text here
    </p>
  </div>
</section>
```

### Card Component
```tsx
<div className="glass section-padding-sm">
  <span className="text-label-sm text-white/40">Category</span>
  <h3 className="text-heading-2 text-white mb-4">Card Title</h3>
  <p className="text-body-sm text-white/60">Description</p>
</div>
```

### Badge/Pill
```tsx
<span className="text-ui-xs text-white/40 px-3 py-1 rounded-full border border-white/10">
  Badge Text
</span>
```

## ⚡ Pro Tips

1. **Always use design system classes** - Avoid arbitrary values
2. **Maintain hierarchy** - Display → Heading → Body → UI → Label
3. **Use opacity for emphasis** - 100% → 90% → 70% → 60% → 40% → 20%
4. **Consistent spacing** - Use section-padding and container-padding
5. **Semantic HTML** - Use proper heading levels (h1-h6)
6. **Mobile-first** - All typography scales responsively

## 🔄 Migration Guide

### Before (Old Style)
```tsx
<h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-[-0.04em] leading-[0.9]">
<div className="py-20 px-6 max-w-7xl mx-auto">
<span className="text-[10px] uppercase tracking-[0.3em] font-bold">
```

### After (Design System)
```tsx
<h1 className="text-display-1">
<div className="section-padding container-padding max-w-section">
<span className="text-label-sm">
```

## 📊 Typography Scale Visual

```
H1 Display    ████████████████████████ 104px
H2 Display    ████████████████████ 80px
H3 Display    ████████████████ 56px
H4 Heading    ████████████ 36px
H5 Heading    ██████████ 30px
H6 Heading    ████████ 24px
Body Large    ██████ 20px
Body          █████ 16px
Body Small    ████ 14px
UI            ████ 14px
UI Small      ███ 12px
UI XS         ██ 10px
```

## 🎨 Spacing Scale Visual

```
spacing-1     ▌ 4px
spacing-2     ▌▌ 8px
spacing-3     ▌▌▌ 12px
spacing-4     ▌▌▌▌ 16px
spacing-6     ▌▌▌▌▌▌ 24px
spacing-8     ▌▌▌▌▌▌▌▌ 32px
spacing-12    ▌▌▌▌▌▌▌▌▌▌▌▌ 48px
spacing-16    ▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌ 64px
spacing-24    ▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌ 96px
spacing-32    ▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌ 128px
```
