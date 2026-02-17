# Footer Navigation Update Guide

## Quick Fix Required

All `<Footer />` components in `/App.tsx` need to include the `onNavigate` prop for footer links to work.

### Find & Replace

**Search for:**
```tsx
<Footer />
```

**Replace with:**
```tsx
<Footer onNavigate={(page) => setCurrentPage(page as PageView)} />
```

### Pages That Need Updating

Run this search/replace in `/App.tsx` for all these page conditions:

1. ✅ `currentPage === 'home'` - DONE
2. ✅ `currentPage === 'checkout'` - DONE  
3. ✅ `currentPage === 'women'` - DONE
4. `currentPage === 'men'`
5. `currentPage === 'kids'`
6. `currentPage === 'curve'`
7. `currentPage === 'baby'`
8. `currentPage === 'shoes'`
9. `currentPage === 'jewelry'`
10. `currentPage === 'newin'`
11. `currentPage === 'hotdeals'`
12. `currentPage === 'sale'`
13. `currentPage === 'wishlist'`
14. `currentPage === 'cart'`
15. `currentPage === 'profile'`
16. `currentPage === 'product-detail'`
17. `currentPage === 'shop-the-look'`
18. `currentPage === 'search'`
19. `currentPage === '404'`
20. `currentPage === 'order-confirmation'`
21. `currentPage === 'sitemap'`
22. `currentPage === 'login'`
23. `currentPage === 'signup'`
24. `currentPage === 'guest'`
25. All policy pages (about, contact, track-order, shipping, returns, size-guide, privacy, terms)

### Alternative: Bulk Text Replace

Use your editor's "Replace All" function:

1. Open `/App.tsx`
2. Find: `<Footer />`  
3. Replace: `<Footer onNavigate={(page) => setCurrentPage(page as PageView)} />`
4. Click "Replace All"

This will update approximately 30 instances throughout the file.

### Verification

After updating, verify by:
1. Run the app
2. Navigate to any page
3. Click any footer link
4. Confirm navigation works

All footer links should now navigate to their respective pages!
