# 🚀 Quick Start Guide - Lab 4

## ⏱️ Timeline: 8-10 hours total

### Week 1 (Days 1-3): Research & Style Guide
- **Day 1:** Read requirements, create Figma account, explore food app examples
- **Day 2:** Create Style Guide in Figma (colors, typography, components)
- **Day 3:** Review and finalize style guide

### Week 2 (Days 4-6): Wireframes
- **Day 4:** Design Home Page wireframe
- **Day 5:** Design Restaurant Detail + Food Detail pages  
- **Day 6:** Refine all wireframes, add real content

### Week 3 (Days 7-9): Components & Images
- **Day 7:** Create reusable components in Figma
- **Day 8:** Process images in Photoshop
- **Day 9:** Import images, final polish

### Day 10: Submission
- Export Figma link
- Push to GitHub
- Double-check submission

---

## 📝 Step-by-Step Checklist

### ✅ Phase 1: Setup (30 mins)
- [ ] Create Figma account at https://figma.com
- [ ] Read `README.md` completely
- [ ] Read `style-guide.md` for design reference
- [ ] Open `template.html` in browser to see reference

### ✅ Phase 2: Style Guide in Figma (2 hours)
- [ ] Create new Figma file: "FoodHub - Lab 4"
- [ ] Create Page 1: "Style Guide"
- [ ] Add Typography samples (H1, H2, H3, Body, Button text)
- [ ] Create Color Palette swatches (Primary, Secondary, Grayscale, Semantic)
- [ ] Design basic UI elements:
  - [ ] Primary Button
  - [ ] Secondary Button
  - [ ] Input Field
  - [ ] Card example

### ✅ Phase 3: Wireframes (4-5 hours)
- [ ] Create Page 2: "Wireframes"
- [ ] Create Frame 1: Home Page (375x812px)
  - [ ] Top Navigation Bar
  - [ ] Hero Banner
  - [ ] Categories Grid (8 items)
  - [ ] Featured Restaurants (horizontal scroll)
  - [ ] Popular Dishes Grid
  - [ ] Bottom Navigation
- [ ] Create Frame 2: Restaurant Detail (375x812px)
  - [ ] Back button
  - [ ] Restaurant cover image
  - [ ] Restaurant info (name, rating, delivery)
  - [ ] Tab navigation (Menu, Info, Reviews)
  - [ ] Food items list
- [ ] Create Frame 3: Food Detail (375x812px)
  - [ ] Full-screen food image
  - [ ] Close button
  - [ ] Food name + rating
  - [ ] Description
  - [ ] Size/Options selector
  - [ ] Quantity stepper
  - [ ] Add to cart button

### ✅ Phase 4: Components (2 hours)
- [ ] Create Page 3: "Components"
- [ ] Create Button Component
  - [ ] Add variants: Primary, Secondary, Disabled
  - [ ] Add states: Default, Hover, Pressed
  - [ ] Make it auto-layout
- [ ] Create Food Card Component
  - [ ] Add all elements (image, name, price, rating, add button)
  - [ ] Create variants: Vertical, Horizontal
  - [ ] Use auto-layout
- [ ] Create Restaurant Card Component
  - [ ] Add all elements
  - [ ] Make responsive with constraints
- [ ] Create Navigation Bar Component (Bottom)
  - [ ] 4 tabs with icons
  - [ ] Active state indicator
- [ ] Replace all instances in wireframes with components

### ✅ Phase 5: Photoshop (2 hours)
- [ ] Download 2-3 food images from Unsplash/Pexels
- [ ] Save originals to `lab4/images/original/`
- [ ] Open Image 1 in Photoshop:
  - [ ] Crop to 1200x400px (Hero banner)
  - [ ] Adjust brightness +10, contrast +15
  - [ ] Save .PSD to `lab4/photoshop/hero-banner.psd`
  - [ ] Export JPG to `lab4/images/processed/hero-banner.jpg`
- [ ] Open Image 2 in Photoshop:
  - [ ] Crop to 800x300px (Restaurant cover)
  - [ ] Enhance colors (Saturation +10)
  - [ ] Sharpen slightly
  - [ ] Save .PSD and export JPG
- [ ] Open Images 3-10 in Photoshop:
  - [ ] Crop to 400x400px square (Food products)
  - [ ] Remove background (if needed)
  - [ ] Adjust colors and sharpen
  - [ ] Save .PSD files
  - [ ] Export PNG (with transparency) or JPG

### ✅ Phase 6: Import & Polish (1 hour)
- [ ] Import processed images into Figma
- [ ] Replace placeholder images in wireframes
- [ ] Check all screens look good with real images
- [ ] Ensure consistent spacing and alignment
- [ ] Check responsive constraints

### ✅ Phase 7: Submission (30 mins)
- [ ] Share Figma file:
  - [ ] Click "Share" button
  - [ ] Set to "Anyone with the link can view"
  - [ ] Copy link
- [ ] Update `figma-link.txt` with your Figma URL
- [ ] Push all files to GitHub:
  ```bash
  cd /Users/tranminhkhoa/UI-UX_Design1
  git add lab4/
  git commit -m "Add Lab 4: Food Ordering App Design System"
  git push origin main
  ```
- [ ] Verify submission on GitHub
- [ ] Submit on VanLang portal

---

## 🎯 Key Success Criteria:

### Style Guide Must Have:
- ✅ At least 5 colors defined
- ✅ Typography scale (H1, H2, H3, Body, Button)
- ✅ Button styles (Primary, Secondary)
- ✅ Input field example
- ✅ Card example

### Wireframes Must Have:
- ✅ 3 complete screens (Home, Restaurant Detail, Food Detail)
- ✅ Consistent style guide applied
- ✅ Clear navigation elements
- ✅ Mobile-first design (375x812px)
- ✅ Real content (not just "Lorem ipsum")

### Components Must Have:
- ✅ At least 3 reusable components
- ✅ Variants and states
- ✅ Used in wireframes (not just standalone)
- ✅ Auto-layout enabled
- ✅ Proper naming

### Images Must Have:
- ✅ 2-3 images processed in Photoshop
- ✅ .PSD source files saved
- ✅ Exported images in correct formats
- ✅ Images imported and used in Figma

---

## 💡 Pro Tips:

1. **Start with Style Guide** - It makes designing faster later
2. **Use 8px Grid** - Turn on grid in Figma (Shift + G)
3. **Use Auto-Layout** - Makes components responsive automatically
4. **Name Layers Clearly** - "btn-primary", "card-food-vertical"
5. **Use Components** - Don't copy-paste, use instances
6. **Save Often** - Figma auto-saves but refresh browser occasionally
7. **Get Feedback** - Share with friends before final submission
8. **Check Mobile View** - Test on actual phone size (375px width)

---

## 🆘 Common Issues & Solutions:

**Problem:** Can't find good food images  
**Solution:** Use Unsplash with specific searches: "burger white background", "pizza isolated"

**Problem:** Components not updating everywhere  
**Solution:** Make sure you created a Component (not just grouped layers)

**Problem:** Images too large for Figma  
**Solution:** Compress in Photoshop (Export JPG at 85% quality)

**Problem:** Text looks blurry  
**Solution:** Use Google Fonts (Poppins, Inter) - they're crisp

**Problem:** Can't share Figma file  
**Solution:** Click Share > Change "Only people invited" to "Anyone with the link"

---

## 📚 Helpful Resources:

**Figma Basics:**
- https://www.youtube.com/watch?v=Cx2dkpBxst8 (UI Design Tutorial)
- https://www.figma.com/best-practices/ (Best Practices)

**Design Inspiration:**
- https://dribbble.com/search/food-delivery-app
- https://mobbin.com (Mobile app designs)

**Free Images:**
- https://unsplash.com/s/photos/food
- https://www.pexels.com/search/food/

**Photoshop Tutorials:**
- https://www.youtube.com/watch?v=IyR_uYsRdPs (Basic Photo Editing)

---

## ⏰ Time Estimates:

| Task | Time |
|------|------|
| Setup & Research | 30 mins |
| Style Guide | 2 hours |
| Wireframe 1 (Home) | 2 hours |
| Wireframe 2 (Restaurant) | 1.5 hours |
| Wireframe 3 (Food Detail) | 1 hour |
| Components | 2 hours |
| Photoshop Processing | 2 hours |
| Import & Polish | 1 hour |
| Submission | 30 mins |
| **TOTAL** | **~12 hours** |

Spread over 2 weeks = 1 hour per day! 🎯

---

**Let's get started! Good luck! 🚀🎨**
