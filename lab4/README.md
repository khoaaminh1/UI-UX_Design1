# Lab 4: Creating a Style Guide, Wireframes, and Components in Figma# Lab 4: Creating a Style Guide, Wireframes, and Components in Figma



## Overview## 📝 Overview

Lab 4 focuses on creating a complete design system using Figma, including style guide, wireframes, and reusable components for a Food Ordering App.This lab focuses on creating a complete design system for a **Food Ordering App** using Figma, including style guide, wireframes, and reusable components.



## Submission Status**Theme:** Food Delivery App (similar to GrabFood/ShopeeFood)  

- **Due:** Sunday, 16 March 2026, 12:00 AM**Due:** Sunday, 16 March 2026, 12:00 AM  

- **Status:** In Progress**Tools:** Figma + Photoshop



## Contents---

This folder will contain:

- Figma design file (link in `figma-link.txt`)## 🎨 Part 1: Style Guide

- Photoshop source files (.PSD)

- Processed images (PNG/JPG)### Typography

- Style guide documentation```

- Wireframes (3+ screens)Heading H1: Poppins Bold, 32px, #1A1A1A

- Reusable componentsHeading H2: Poppins SemiBold, 24px, #1A1A1A

Heading H3: Poppins Medium, 18px, #1A1A1A

## Getting StartedBody Text: Inter Regular, 14px, #4A4A4A

Check `figma-link.txt` for the Figma design file link.Button Text: Poppins SemiBold, 16px, #FFFFFF

Small Text: Inter Regular, 12px, #7A7A7A
```

### Color Palette
```
Primary Color:   #FF6B35 (Orange - Food theme)
Secondary Color: #FFD93D (Yellow - Accent)
Background:      #F8F9FA (Light Gray)
Text Primary:    #1A1A1A (Dark Gray)
Text Secondary:  #7A7A7A (Medium Gray)
Success Color:   #28C76F (Green - For status)
Error Color:     #EA5455 (Red - For alerts)
White:           #FFFFFF
```

### Basic UI Elements

**Buttons:**
- Primary Button: Background #FF6B35, Text #FFFFFF, Border-radius 12px, Padding 12px 24px
- Secondary Button: Background #FFFFFF, Text #FF6B35, Border 2px #FF6B35, Border-radius 12px
- Disabled Button: Background #E0E0E0, Text #9E9E9E

**Input Fields:**
- Background: #FFFFFF
- Border: 1px solid #E0E0E0
- Border-radius: 8px
- Padding: 12px 16px
- Focus: Border #FF6B35

**Cards:**
- Background: #FFFFFF
- Border-radius: 16px
- Shadow: 0px 4px 12px rgba(0,0,0,0.08)
- Padding: 16px

**Navigation Bar:**
- Height: 64px
- Background: #FFFFFF
- Shadow: 0px 2px 8px rgba(0,0,0,0.06)

---

## 📱 Part 2: Design Wireframes

### Screens to Design (3 screens minimum):

#### 1. Home Page (Landing/Dashboard)
**Layout:**
- Top Navigation Bar (Logo, Search, Cart, Profile)
- Hero Banner (Promotional offers)
- Category Icons (8 categories in grid: Pizza, Burger, Sushi, etc.)
- Featured Restaurants (Horizontal scroll)
- Popular Dishes (Grid 2 columns)
- Bottom Navigation (Home, Search, Orders, Profile)

**Components:**
- Search bar with filter icon
- Category card (Icon + Name)
- Restaurant card (Image, Name, Rating, Delivery time, Distance)
- Food card (Image, Name, Price, Add button)

#### 2. Restaurant Detail Page
**Layout:**
- Back button + Share button
- Restaurant cover image
- Restaurant info (Name, Rating, Delivery fee, Time)
- Tab navigation (Menu, Info, Reviews)
- Menu categories (Sticky scroll)
- Food items list (Image, Name, Description, Price)

**Components:**
- Rating badge
- Info pill (Delivery time, Distance)
- Food item card
- Add to cart floating button

#### 3. Food Detail Page
**Layout:**
- Full-screen food image
- Close button
- Food name + rating
- Description
- Size/Options selector (Radio buttons)
- Quantity selector (-, number, +)
- Special instructions textarea
- Add to cart button with total price

**Components:**
- Image carousel
- Radio button group
- Quantity stepper
- Price calculator display

### Wireframe Requirements:
- ✅ Use clear and logical layout
- ✅ Apply the Style Guide created
- ✅ Include basic navigation elements
- ✅ Show at least 3 screens/pages

---

## 🧩 Part 3: Create Components in Figma

### Required Components (minimum 3):

#### 1. **Button Component**
**Variants:**
- Primary (Orange background)
- Secondary (White background, Orange border)
- Disabled (Gray)

**States for each variant:**
- Default
- Hover
- Pressed
- Disabled

**Properties:**
- Size: Small (32px), Medium (40px), Large (48px)
- Full width: Boolean
- Icon: Optional (Before/After text)

#### 2. **Food Card Component**
**Structure:**
- Food image (160x160px)
- Food name (H3)
- Restaurant name (Small text)
- Price (Body text, Bold)
- Rating badge (Star icon + number)
- Add button (+ icon)

**Variants:**
- Vertical card (Default)
- Horizontal card (For lists)

**States:**
- Default
- Added (with quantity badge)

#### 3. **Navigation Bar Component**
**Top Navigation:**
- Logo (Left)
- Search bar (Center)
- Cart icon with badge (Right)
- Profile icon (Right)

**Bottom Navigation:**
- 4 tabs: Home, Search, Orders, Profile
- Icon + Label
- Active state indicator (Orange)

#### 4. **Product Item Component** (Bonus)
**Structure:**
- Checkbox/Radio for selection
- Product image (80x80px)
- Product name + description
- Price
- Quantity stepper

**Variants:**
- Selectable (Checkbox)
- Single choice (Radio)

### Component Requirements:
- ✅ Create as main component
- ✅ Use instances of the component in your wireframes
- ✅ Reuse components consistently across screens
- ✅ Use auto-layout for responsive design

---

## 🖼️ Part 4: Image Processing in Photoshop

### Select 2-3 images for your design:

**Image Requirements:**
1. **Hero Banner Image** (1200x400px)
   - Food photography (burger, pizza, etc.)
   - Crop to 3:1 ratio
   - Adjust brightness +10%, Contrast +15%
   - Add subtle vignette effect
   - Export as PNG (for transparency) or JPG (for smaller size)

2. **Restaurant Cover Image** (800x300px)
   - Restaurant interior or food spread
   - Resize to fit mobile screen
   - Enhance colors (Saturation +10%)
   - Sharpen slightly
   - Export as JPG (quality 85%)

3. **Food Product Images** (400x400px, 5-10 images)
   - Individual food items
   - Crop to square 1:1 ratio
   - Remove background (if needed)
   - Adjust white balance
   - Export as PNG with transparency

### Photoshop Steps:
1. Open image in Photoshop
2. Crop to desired dimensions
3. Adjustments:
   - Image > Adjustments > Brightness/Contrast
   - Image > Adjustments > Hue/Saturation
   - Filter > Sharpen > Unsharp Mask (if needed)
4. Export:
   - File > Export > Export As
   - Choose format (PNG/JPG)
   - Set quality settings
5. Save exported images to `lab4/images/` folder

### After editing, import images into your Figma designs.

---

## 📤 Submission Requirements

**Students must submit:**

1. **Figma File** containing:
   - ✅ Style Guide page
   - ✅ Wireframes (3 screens)
   - ✅ Components page (showing all components)

2. **Photoshop Files (.PSD)** - Original files with layers

3. **Exported Images Folder** - All processed images

### Folder Structure:
```
lab4/
├── README.md (This file)
├── style-guide.md (Color palette, typography details)
├── template.html (Reference HTML template)
├── template.css (Reference CSS template)
├── images/
│   ├── original/ (Original images before processing)
│   └── processed/ (Photoshop edited images)
├── photoshop/
│   └── *.psd (Photoshop source files)
└── figma-link.txt (Link to your Figma file)
```

---

## 🎯 Tips for Success

### Figma Tips:
1. **Use Figma Community**: Search for "Food delivery UI kit" for inspiration
2. **Use Grids**: Enable 8px grid for consistent spacing
3. **Use Constraints**: Make components responsive with constraints
4. **Name Layers**: Use clear naming (e.g., "btn-primary", "card-food")
5. **Use Plugins**: Try "Unsplash" plugin for free food images

### Design Tips:
1. **Consistency**: Use the same spacing, colors, fonts throughout
2. **Hierarchy**: Make important elements (CTA buttons) stand out
3. **White Space**: Don't overcrowd screens
4. **Mobile First**: Design for mobile (375x812px - iPhone X)
5. **Accessibility**: Ensure good color contrast (4.5:1 ratio)

### Image Tips:
1. **Free Stock Photos**: Use Unsplash, Pexels for food images
2. **Resolution**: Use high-res images (at least 2x size needed)
3. **Optimization**: Compress images before importing to Figma
4. **Consistency**: Use similar photography style across all images

---

## 📚 Resources

**Figma:**
- Figma Tutorial: https://www.figma.com/resources/learn-design/
- Figma Community: https://www.figma.com/community

**Design Inspiration:**
- Dribbble: https://dribbble.com/tags/food-delivery
- Behance: https://www.behance.net/search/projects?search=food%20app

**Free Images:**
- Unsplash: https://unsplash.com/s/photos/food
- Pexels: https://www.pexels.com/search/food/

**Color Tools:**
- Coolors: https://coolors.co
- Adobe Color: https://color.adobe.com

**Typography:**
- Google Fonts: https://fonts.google.com
- Font Pair: https://www.fontpair.co

---

## ✅ Checklist Before Submission

- [ ] Style Guide completed (Typography, Colors, UI Elements)
- [ ] 3 Wireframes designed (Home, Restaurant, Food Detail)
- [ ] At least 3 Components created and used
- [ ] Components are reusable and have variants
- [ ] 2-3 images processed in Photoshop
- [ ] Photoshop .PSD files saved
- [ ] All images exported and organized
- [ ] Figma file shared with public link
- [ ] README.md updated with your Figma link
- [ ] All files pushed to GitHub

---

## 🚀 Next Steps

1. Create Figma account (if you don't have one)
2. Read this README carefully
3. Check the template HTML/CSS files for reference
4. Start with Style Guide in Figma
5. Design wireframes using the style guide
6. Create components from wireframe elements
7. Process images in Photoshop
8. Import images into Figma designs
9. Share Figma link and submit

**Good luck! 🎨🍔**
