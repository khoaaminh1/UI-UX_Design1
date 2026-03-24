# Style Guide - Food Ordering App

## 🎨 Design System Overview

This style guide defines the visual language for our Food Ordering App. Use these guidelines consistently across all screens and components.

---

## 📝 Typography

### Font Families
- **Primary Font**: Poppins (Headings, Buttons, Important text)
- **Secondary Font**: Inter (Body text, Descriptions)

### Type Scale

| Element | Font | Weight | Size | Line Height | Color |
|---------|------|--------|------|-------------|-------|
| H1 - Page Title | Poppins | Bold (700) | 32px | 40px | #1A1A1A |
| H2 - Section Title | Poppins | SemiBold (600) | 24px | 32px | #1A1A1A |
| H3 - Card Title | Poppins | Medium (500) | 18px | 24px | #1A1A1A |
| Body Large | Inter | Regular (400) | 16px | 24px | #4A4A4A |
| Body Regular | Inter | Regular (400) | 14px | 20px | #4A4A4A |
| Body Small | Inter | Regular (400) | 12px | 16px | #7A7A7A |
| Button Text | Poppins | SemiBold (600) | 16px | 24px | #FFFFFF |
| Caption | Inter | Regular (400) | 10px | 14px | #9E9E9E |

### Usage Examples
```
H1: "Discover Restaurants"
H2: "Popular Near You"
H3: "Spicy Chicken Pizza"
Body: "Delicious pizza with extra cheese and spicy chicken toppings"
Button: "Add to Cart"
Caption: "Delivery in 30 mins"
```

---

## 🎨 Color Palette

### Primary Colors

#### Orange (Primary)
```css
--primary-500: #FF6B35;  /* Main brand color */
--primary-400: #FF8355;  /* Hover state */
--primary-600: #E55D2E;  /* Pressed state */
--primary-100: #FFE5DC;  /* Background light */
--primary-50:  #FFF4F0;  /* Background very light */
```
**Usage:** Main CTA buttons, active states, brand elements

#### Yellow (Secondary)
```css
--secondary-500: #FFD93D;  /* Accent color */
--secondary-400: #FFE166;  /* Hover */
--secondary-600: #E6C437;  /* Pressed */
--secondary-100: #FFF9E0;  /* Background */
```
**Usage:** Badges, ratings, highlights, promotional elements

### Neutral Colors

#### Grayscale
```css
--gray-900: #1A1A1A;  /* Headings */
--gray-800: #2D2D2D;  /* Body text dark */
--gray-700: #4A4A4A;  /* Body text */
--gray-600: #5E5E5E;  /* Secondary text */
--gray-500: #7A7A7A;  /* Tertiary text */
--gray-400: #9E9E9E;  /* Disabled text */
--gray-300: #CCCCCC;  /* Borders */
--gray-200: #E0E0E0;  /* Dividers */
--gray-100: #F0F0F0;  /* Background light */
--gray-50:  #F8F9FA;  /* Background */
--white:    #FFFFFF;  /* Pure white */
```

### Semantic Colors

#### Success (Green)
```css
--success-500: #28C76F;  /* Main */
--success-400: #48D285;  /* Hover */
--success-100: #D4F4E2;  /* Background */
```
**Usage:** Success messages, order confirmed, available status

#### Error (Red)
```css
--error-500: #EA5455;  /* Main */
--error-400: #EE6B6C;  /* Hover */
--error-100: #FCDCDC;  /* Background */
```
**Usage:** Error messages, delete actions, unavailable items

#### Warning (Orange-Yellow)
```css
--warning-500: #FF9F43;  /* Main */
--warning-100: #FFE8D4;  /* Background */
```
**Usage:** Warning messages, low stock alerts

#### Info (Blue)
```css
--info-500: #00CFE8;  /* Main */
--info-100: #CCF5FA;  /* Background */
```
**Usage:** Information messages, tips, badges

---

## 🧱 Spacing System

Use 8px base grid system for consistent spacing:

```
xs:  4px   (0.5 units)
sm:  8px   (1 unit)
md:  16px  (2 units)
lg:  24px  (3 units)
xl:  32px  (4 units)
2xl: 48px  (6 units)
3xl: 64px  (8 units)
```

### Padding Guidelines
- Card padding: 16px
- Button padding: 12px 24px
- Input padding: 12px 16px
- Section padding: 24px
- Screen margin: 16px

### Gap/Spacing
- Between cards: 16px
- Between list items: 12px
- Between sections: 32px

---

## 🔘 Buttons

### Primary Button
```
Background: #FF6B35
Text: #FFFFFF (Poppins SemiBold 16px)
Border-radius: 12px
Padding: 12px 24px
Height: 48px
Shadow: 0px 4px 12px rgba(255, 107, 53, 0.3)

States:
- Hover: Background #FF8355
- Pressed: Background #E55D2E
- Disabled: Background #E0E0E0, Text #9E9E9E
```

### Secondary Button
```
Background: #FFFFFF
Text: #FF6B35 (Poppins SemiBold 16px)
Border: 2px solid #FF6B35
Border-radius: 12px
Padding: 10px 22px (adjusted for border)
Height: 48px

States:
- Hover: Background #FFF4F0
- Pressed: Background #FFE5DC
- Disabled: Border #E0E0E0, Text #9E9E9E
```

### Text Button
```
Background: Transparent
Text: #FF6B35 (Poppins SemiBold 16px)
Padding: 8px 16px

States:
- Hover: Text #FF8355
- Pressed: Text #E55D2E
```

### Icon Button
```
Size: 40x40px
Background: #F8F9FA
Border-radius: 50%
Icon: 20x20px, Color #4A4A4A

States:
- Hover: Background #F0F0F0
- Active: Background #FF6B35, Icon #FFFFFF
```

---

## 📝 Input Fields

### Text Input
```
Background: #FFFFFF
Border: 1px solid #E0E0E0
Border-radius: 8px
Padding: 12px 16px
Height: 48px
Font: Inter Regular 14px
Placeholder: #9E9E9E

States:
- Focus: Border #FF6B35, Shadow 0px 0px 0px 3px rgba(255, 107, 53, 0.1)
- Error: Border #EA5455
- Disabled: Background #F8F9FA, Text #9E9E9E
```

### Search Input
```
Same as Text Input but with:
- Icon (search) on left: 20x20px, margin-left 16px
- Icon (clear) on right: 16x16px, margin-right 16px
- Padding-left: 48px (for icon space)
```

### Textarea
```
Same as Text Input but:
- Min-height: 96px
- Resize: vertical
- Padding: 12px 16px
```

---

## 🃏 Cards

### Restaurant Card
```
Background: #FFFFFF
Border-radius: 16px
Padding: 12px
Shadow: 0px 4px 12px rgba(0, 0, 0, 0.08)
Width: Full container width
Min-height: 120px

Layout:
- Image: 96x96px, border-radius 12px
- Content: padding-left 12px
- Badge: position absolute, top-right

States:
- Hover: Shadow 0px 8px 20px rgba(0, 0, 0, 0.12)
- Pressed: Scale 0.98
```

### Food Card (Vertical)
```
Background: #FFFFFF
Border-radius: 16px
Padding: 12px
Shadow: 0px 4px 12px rgba(0, 0, 0, 0.08)
Width: (50% - 8px) for 2 columns

Layout:
- Image: 160x160px, border-radius 12px
- Content: padding-top 12px
- Add button: position absolute, bottom-right

States:
- Hover: Shadow 0px 8px 20px rgba(0, 0, 0, 0.12)
```

### Category Card
```
Background: #FFF4F0
Border: 1px solid #FFE5DC
Border-radius: 12px
Padding: 16px
Width: 80px
Height: 80px
Display: Flex column, center aligned

States:
- Active: Background #FF6B35, Text #FFFFFF
- Hover: Background #FFE5DC
```

---

## 🏷️ Badges

### Rating Badge
```
Background: #FFD93D
Text: #1A1A1A (Inter SemiBold 12px)
Border-radius: 6px
Padding: 4px 8px
Icon: Star 12x12px
Gap: 4px between icon and text
```

### Status Badge
```
Border-radius: 12px (pill shape)
Padding: 4px 12px
Font: Inter Medium 11px

Variants:
- Open: Background #D4F4E2, Text #28C76F
- Closed: Background #FCDCDC, Text #EA5455
- Busy: Background #FFE8D4, Text #FF9F43
```

### Discount Badge
```
Background: #EA5455
Text: #FFFFFF (Poppins Bold 12px)
Border-radius: 6px
Padding: 4px 8px
Position: Absolute (top-left of image)
```

---

## 📊 Navigation

### Top Navigation Bar
```
Height: 64px
Background: #FFFFFF
Border-bottom: 1px solid #F0F0F0
Padding: 0 16px
Shadow: 0px 2px 8px rgba(0, 0, 0, 0.06)

Layout:
- Logo: 120px width
- Search bar: Flex-grow
- Icons: 40x40px each, gap 8px
```

### Bottom Navigation Bar
```
Height: 64px
Background: #FFFFFF
Border-top: 1px solid #F0F0F0
Shadow: 0px -2px 8px rgba(0, 0, 0, 0.06)
Padding: 8px 0

Layout:
- 4 tabs: Equal width
- Icon: 24x24px
- Label: Inter Medium 11px
- Active indicator: 3px height, full width, #FF6B35
```

---

## 🖼️ Images

### Guidelines
- **Aspect Ratios:**
  - Hero banner: 3:1 (1200x400px)
  - Restaurant cover: 8:3 (800x300px)
  - Food product: 1:1 (400x400px)
  - Category icon: 1:1 (80x80px)

- **Border Radius:**
  - Large images: 16px
  - Medium images: 12px
  - Small images/icons: 8px

- **Loading State:**
  - Background: #F0F0F0
  - Shimmer animation

---

## 🎯 Icons

### Icon Library
Use **Bootstrap Icons** or **Feather Icons**

### Size Scale
```
xs: 16x16px  (Small actions)
sm: 20x20px  (Buttons, inputs)
md: 24x24px  (Navigation, primary actions)
lg: 32x32px  (Feature highlights)
xl: 48x48px  (Empty states)
```

### Colors
- Primary actions: #FF6B35
- Secondary actions: #4A4A4A
- Disabled: #9E9E9E
- Success: #28C76F
- Error: #EA5455

---

## ✨ Effects

### Shadows
```css
--shadow-sm:  0px 2px 4px rgba(0, 0, 0, 0.06);
--shadow-md:  0px 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg:  0px 8px 20px rgba(0, 0, 0, 0.12);
--shadow-xl:  0px 12px 32px rgba(0, 0, 0, 0.16);
```

### Border Radius
```css
--radius-sm:  6px;   /* Badges */
--radius-md:  8px;   /* Inputs */
--radius-lg:  12px;  /* Buttons, small images */
--radius-xl:  16px;  /* Cards, large images */
--radius-full: 50%;  /* Circles */
```

### Transitions
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--mobile-sm:  320px;
--mobile:     375px;
--mobile-lg:  425px;
--tablet:     768px;
--desktop:    1024px;
--desktop-lg: 1440px;
```

---

## ♿ Accessibility

### Color Contrast Ratios
- Body text: Minimum 4.5:1
- Large text: Minimum 3:1
- UI components: Minimum 3:1

### Touch Targets
- Minimum size: 44x44px
- Recommended: 48x48px

### Focus States
- Visible focus indicator: 3px outline
- Color: #FF6B35 with 20% opacity

---

**Use this style guide as a reference when designing in Figma!** 🎨
