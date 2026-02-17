# Side Menu - Quick Test Guide

## How to Test the Side Menu

### 1. Open the Menu

**Method 1**: Click the hamburger menu icon (☰)
- Located: Left side of header, next to SHEIN logo
- Action: Single click
- Expected: Drawer slides in from left, overlay appears

**Method 2**: Keyboard
- Press `Tab` until menu button is focused
- Press `Enter` or `Space`

### 2. Navigate Through Main Categories

**Test Each Category**:

1. **Women** → Has chevron (▶) → Click to see subcategories
2. **Men** → Has chevron (▶) → Click to see subcategories
3. **Kids** → Has chevron (▶) → Click to see subcategories
4. **Baby** → Has chevron (▶) → Click to see subcategories
5. **Curve** → Has chevron (▶) → Click to see subcategories
6. **Shoes** → Has chevron (▶) → Click to see subcategories
7. **Jewelry & Accessories** → Has chevron (▶) → Click to see subcategories
8. **Sale** → No chevron → Navigates directly to Sale page
9. **New In** → No chevron → Navigates directly to New In page

**Expected Behavior**:
- Hover: Light gray background (#F9FAFB)
- Click (with chevron): Panel slides left, subcategories appear
- Click (no chevron): Navigate to page, menu closes

### 3. Navigate Subcategories

**Example: Click "Women"**

Subcategories shown:
- Tops
- Dresses
- Jeans
- Shorts
- Skirts
- Co-ords
- Activewear
- Loungewear
- Outerwear
- Accessories
- **View All Women** (bold)

**Test Actions**:
1. Click "◀ Back" → Returns to main menu (slides right)
2. Click any subcategory → Navigates to Women page, menu closes
3. Click "View All Women" → Navigates to Women page, menu closes

### 4. Use Quick Links

At the bottom of the menu:

1. **Profile Icon** → Click → Navigate to Profile page
2. **Wishlist (Heart) Icon** → Click → Navigate to Wishlist page

### 5. Close the Menu

**Method 1**: Click X button (top-right)
**Method 2**: Click overlay (outside drawer)
**Method 3**: Navigate to any page
**Method 4**: Press `Escape` key

**Expected**: Drawer slides out to left, overlay fades out

### 6. Test Responsive Behavior

**Mobile (< 768px)**:
- Menu should be full width
- All touch targets easily clickable
- Scrolling works if content overflows

**Desktop (≥ 768px)**:
- Menu width: 70% of viewport (max 400px)
- Hover states visible
- Mouse interactions smooth

### 7. Test Across Pages

Open menu from:
- ✅ Home page
- ✅ Women category page
- ✅ Men category page
- ✅ Product detail page
- ✅ Cart page
- ✅ Wishlist page
- ✅ Profile page
- ✅ Checkout page
- ✅ Sale page
- ✅ Hot Deals page

**Expected**: Menu works identically on all pages

### 8. Test Animations

**Check**:
- Opening: Smooth slide from left (300ms)
- Closing: Smooth slide to left (300ms)
- Overlay: Smooth fade in/out (300ms)
- Subcategories: Smooth slide left (300ms)
- Back: Smooth slide right (300ms)
- No stuttering or jank

**Tips**:
- Watch in slow motion (Chrome DevTools > Settings > Animations)
- All animations should be 300ms ease-in-out

### 9. Test Scroll Lock

**Test Steps**:
1. Go to Home page (has scrollable content)
2. Scroll down the page
3. Open the side menu
4. Try scrolling the page behind the menu
5. **Expected**: Background page should NOT scroll
6. Close the menu
7. **Expected**: Page scrolling should work again

### 10. Accessibility Tests

**Keyboard Navigation**:
1. Tab through all menu items
2. Use Arrow keys to navigate list
3. Press Enter to activate items
4. Press Escape to close menu

**Screen Reader** (if available):
1. Turn on screen reader
2. Open menu
3. Navigate through items
4. Verify all items are announced correctly

## Visual Checklist

### Layout
- [ ] Menu appears from left
- [ ] Header shows "SHEIN" logo and X button
- [ ] Search bar present and styled
- [ ] Categories listed vertically
- [ ] Divider lines between categories
- [ ] Quick links at bottom (Profile, Wishlist)

### Typography
- [ ] All text uses Arial font
- [ ] Category names are bold (16px)
- [ ] Subcategories regular weight (16px)
- [ ] "View All" items are bold
- [ ] Text is black on white background

### Colors
- [ ] Background: white
- [ ] Text: black
- [ ] Hover: light gray (#F9FAFB)
- [ ] Dividers: light gray (#F3F4F6)
- [ ] Overlay: dark with blur (rgba(0,0,0,0.4))

### Spacing
- [ ] Adequate padding around all elements
- [ ] Items not too cramped
- [ ] Easy to tap/click
- [ ] Proper alignment

### Icons
- [ ] Chevron (▶) on categories with subcategories
- [ ] Back arrow (◀) on subcategory panel
- [ ] X icon for close button
- [ ] Search icon in search bar
- [ ] Profile and Wishlist icons at bottom

## Common Issues & Solutions

### Issue: Menu doesn't open
**Check**:
- Click handler connected? (`onMenuClick` prop)
- State updating? (`setShowMenu(true)`)
- SideMenu component rendered in App?

### Issue: Animations are jerky
**Check**:
- Using Motion/Framer correctly?
- GPU acceleration enabled?
- No heavy operations during animation?

### Issue: Can scroll background when menu open
**Check**:
- Body scroll lock implemented?
- `document.body.style.overflow = 'hidden'` when open?
- Cleanup on unmount?

### Issue: Categories don't show subcategories
**Check**:
- Category has `subcategories` array?
- Array has items?
- Click handler checking `subcategories.length > 0`?

### Issue: Navigation doesn't work
**Check**:
- `onNavigate` prop passed correctly?
- Page ID matches PageView type?
- `setCurrentPage` updating in App?

## Success Criteria

All tests pass when:
- ✅ Menu opens/closes smoothly
- ✅ All animations at 300ms
- ✅ Subcategories slide in/out correctly
- ✅ Navigation works to all pages
- ✅ Menu closes after navigation
- ✅ Body scroll locks when menu open
- ✅ Responsive on mobile and desktop
- ✅ Keyboard accessible
- ✅ No console errors
- ✅ Works on all pages consistently

## Performance Benchmarks

**Target Metrics**:
- Menu open time: < 300ms
- Menu close time: < 300ms
- Panel transition: < 300ms
- No dropped frames during animation
- Smooth 60fps animations

**How to Test**:
1. Open Chrome DevTools
2. Go to Performance tab
3. Record while opening/closing menu
4. Check FPS and frame drops

## Conclusion

If all tests pass, the side menu is **production-ready**! ✅

Report any issues with:
- Screenshot/video
- Steps to reproduce
- Expected vs actual behavior
- Browser and device info
