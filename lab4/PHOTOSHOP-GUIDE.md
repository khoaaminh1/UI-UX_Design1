# Photoshop Image Processing Guide

## Part 4: Image Processing Requirements

You need to process **2-3 images** for your Food Ordering App design.

---

## 📸 Images Needed:

### 1. Hero Banner Image (1200x400px)
**What to find:** Food photography (burger, pizza, spread of food)
**Where to find:** Unsplash, Pexels (search: "food photography", "burger hero")

### 2. Restaurant Cover Image (800x300px) 
**What to find:** Restaurant interior or food presentation
**Where to find:** Unsplash (search: "restaurant interior", "food spread")

### 3. Food Product Images (400x400px each, 5-10 images)
**What to find:** Individual food items with white/clean background
**Where to find:** Unsplash, Pexels (search specific: "burger white background", "pizza isolated")

---

## 🎨 Photoshop Processing Steps:

### Image 1: Hero Banner

1. **Open Image**
   - File > Open
   - Select your hero image

2. **Crop to Ratio**
   - Press `C` for Crop Tool
   - Set ratio: Width 3, Height 1 (3:1 ratio)
   - Adjust crop area to focus on food
   - Press Enter

3. **Resize**
   - Image > Image Size
   - Width: 1200px
   - Height: 400px
   - Resolution: 72 ppi
   - Resample: Automatic
   - Click OK

4. **Adjust Brightness & Contrast**
   - Image > Adjustments > Brightness/Contrast
   - Brightness: +10
   - Contrast: +15
   - Click OK

5. **Add Subtle Vignette** (Optional)
   - Select Elliptical Marquee Tool
   - Draw large oval covering most of image
   - Select > Inverse (Ctrl/Cmd + Shift + I)
   - Select > Modify > Feather: 100px
   - Image > Adjustments > Brightness/Contrast
   - Brightness: -15
   - Deselect (Ctrl/Cmd + D)

6. **Export**
   - File > Export > Export As
   - Format: JPG
   - Quality: 85%
   - Save to: `lab4/images/processed/hero-banner.jpg`

---

### Image 2: Restaurant Cover

1. **Open Image**
   - File > Open

2. **Crop & Resize**
   - Crop Tool (C)
   - Ratio: Width 8, Height 3 (8:3 ratio)
   - Image Size: 800x300px, 72ppi

3. **Enhance Colors**
   - Image > Adjustments > Hue/Saturation
   - Saturation: +10
   - Click OK

4. **Sharpen Slightly**
   - Filter > Sharpen > Unsharp Mask
   - Amount: 50%
   - Radius: 1.0 pixels
   - Threshold: 0 levels
   - Click OK

5. **Export**
   - Export As JPG, Quality 85%
   - Save to: `lab4/images/processed/restaurant-cover.jpg`

---

### Images 3-10: Food Products (Repeat for each)

1. **Open Image**
   - File > Open

2. **Remove Background** (if needed)
   - Select > Subject (Automatic selection)
   - Or use Quick Selection Tool (W)
   - Select > Select and Mask
   - Refine Edge: Radius 1px, Smooth 2
   - Output: New Layer with Layer Mask
   - Click OK

3. **Crop to Square**
   - Crop Tool (C)
   - Ratio: 1:1 (Square)
   - Center the food item
   - Press Enter

4. **Resize**
   - Image Size: 400x400px, 72ppi

5. **Adjust White Balance** (if needed)
   - Image > Adjustments > Auto Color
   - Or manually: Image > Adjustments > Color Balance

6. **Sharpen**
   - Filter > Sharpen > Unsharp Mask
   - Amount: 60%
   - Radius: 1.0px

7. **Export**
   - If background removed: Export As PNG (for transparency)
   - If background kept: Export As JPG, Quality 85%
   - Save to: `lab4/images/processed/food-burger.png` (example)

---

## 📋 Photoshop Checklist:

Before exporting each image:

- [ ] Image is cropped to correct dimensions
- [ ] Resolution is 72 ppi (for web)
- [ ] Brightness and contrast are adjusted
- [ ] Colors look natural (not over-saturated)
- [ ] Image is sharp but not over-sharpened
- [ ] File size is reasonable (<500KB for hero, <200KB for products)

---

## 💾 File Naming Convention:

```
hero-banner.jpg           (1200x400px)
restaurant-cover.jpg      (800x300px)
food-burger.png          (400x400px)
food-pizza.png           (400x400px)
food-sushi.png           (400x400px)
food-chicken.png         (400x400px)
food-salad.png           (400x400px)
```

---

## 📁 Folder Structure:

```
lab4/
├── images/
│   ├── original/
│   │   ├── hero-raw.jpg
│   │   ├── restaurant-raw.jpg
│   │   └── food-*.jpg
│   └── processed/
│       ├── hero-banner.jpg
│       ├── restaurant-cover.jpg
│       └── food-*.png
└── photoshop/
    ├── hero-banner.psd
    ├── restaurant-cover.psd
    └── food-products.psd
```

---

## 🎯 Tips:

1. **Save .PSD Files:** Always save your work as .PSD before exporting
2. **Non-Destructive Editing:** Use Adjustment Layers instead of direct adjustments
3. **Keep Originals:** Never edit your original images, always work on copies
4. **Consistent Style:** Process all food images with same settings for consistency
5. **File Size:** Compress images appropriately (JPG 85% quality is usually good)

---

## 🆓 Free Image Resources:

**Unsplash:** https://unsplash.com/s/photos/food
- Search: "food photography", "burger", "pizza", "restaurant"

**Pexels:** https://www.pexels.com/search/food/
- Search: "food isolated", "white background food"

**Freepik:** https://www.freepik.com/search?format=search&query=food
- Free vector illustrations (if you need icons)

---

## ✅ After Processing:

1. Save all .PSD files to `lab4/photoshop/`
2. Export processed images to `lab4/images/processed/`
3. Import images into your Figma design
4. Update README.md with image details
5. Push to GitHub

**Good luck! 📸🎨**
