# Deployment Guide - Multilingual Architecture

## Pre-Deployment Checklist

### 1. Verify Build Locally
```powershell
# Clean install dependencies (optional but recommended)
Remove-Item -Path node_modules -Recurse -Force
npm install

# Build the project
npm run build

# Expected output: ~343 static pages generated
# Should complete without errors
```

### 2. Test Development Server
```powershell
npm run dev
```

Visit these URLs to verify:
- `http://localhost:3000/` - Language selector
- `http://localhost:3000/tr/carpim-tablosu` - Turkish homepage
- `http://localhost:3000/tr/carpim-tablosu/1-10` - Range page
- `http://localhost:3000/tr/carpim-tablosu/1` - Number page
- `http://localhost:3000/tr/carpim-tablosu/ogrenciler-icin` - Guide page
- `http://localhost:3000/es/tablas-de-multiplicar` - Spanish placeholder
- `http://localhost:3000/de/einmaleins` - German placeholder

### 3. Check for Errors
```powershell
# Run TypeScript check
npx tsc --noEmit

# Should show: No errors found
```

---

## Deployment to Vercel

### Option 1: Git Push (Recommended)

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Implement multilingual architecture with hierarchical URLs

- Migrate Turkish routes to /tr/carpim-tablosu/*
- Add Spanish and German placeholder structures
- Implement hreflang tags for all pages
- Update all internal links
- Generate multilingual sitemap
- Preserve all SEO metadata and schema markup"

# Push to your repository
git push origin main
```

Vercel will automatically:
- Detect the push
- Build the project
- Deploy to production
- Generate all 343 pages

### Option 2: Manual Deploy

If not using Git integration:
```powershell
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy
vercel --prod
```

---

## Post-Deployment Verification

### 1. Check Main Routes

Visit these URLs on your production domain:
- `https://carpimtablosu.com.tr/`
- `https://carpimtablosu.com.tr/tr/carpim-tablosu`
- `https://carpimtablosu.com.tr/tr/carpim-tablosu/1-10`
- `https://carpimtablosu.com.tr/tr/carpim-tablosu/1`

### 2. Verify Hreflang Tags

View page source on any Turkish page and check for:
```html
<link rel="alternate" hreflang="tr" href="https://carpimtablosu.com.tr/tr/carpim-tablosu/..." />
<link rel="alternate" hreflang="es" href="https://carpimtablosu.com.tr/es/tablas-de-multiplicar/..." />
<link rel="alternate" hreflang="de" href="https://carpimtablosu.com.tr/de/einmaleins/..." />
<link rel="alternate" hreflang="x-default" href="https://carpimtablosu.com.tr" />
```

### 3. Check Sitemap
- Visit `https://carpimtablosu.com.tr/sitemap.xml`
- Verify it contains ~343 URLs
- Check Turkish, Spanish, and German URLs are present

### 4. Test Navigation
- Click through header navigation links
- Test footer links
- Try learning path cards
- Navigate between number pages
- Check guide page links

### 5. Verify SEO
Use tools like:
- Google Search Console
- Screaming Frog SEO Spider
- Ahrefs Site Audit

Check:
- [ ] Canonical tags are correct
- [ ] Hreflang tags are present
- [ ] Meta descriptions intact
- [ ] Schema.org markup valid
- [ ] No broken internal links

---

## Monitoring Post-Deployment

### 1. Google Search Console
- Submit new sitemap
- Monitor indexing status
- Check for crawl errors
- Verify hreflang implementation

### 2. Analytics
- Confirm Google Analytics still tracking
- Check page view data
- Monitor bounce rates
- Track language selector usage

### 3. Performance
- Run Lighthouse audit
- Check Core Web Vitals
- Verify page load times
- Test on mobile devices

---

## Rollback Plan (If Needed)

If you encounter critical issues:

### Quick Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or restore old page.tsx
Move-Item -Path "c:\Users\Zohaib Meo\Desktop\math-multilang-project\app\page-old.tsx" -Destination "c:\Users\Zohaib Meo\Desktop\math-multilang-project\app\page.tsx" -Force
```

### Manual Rollback Steps
1. Restore `app/page-old.tsx` to `app/page.tsx`
2. Delete `app/[lang]` folder
3. Revert component changes (Header, Footer, etc.)
4. Revert sitemap.ts
5. Rebuild and redeploy

---

## Common Issues & Solutions

### Issue: Build Fails
**Solution**: Check TypeScript errors
```powershell
npx tsc --noEmit
```
Fix any type errors and rebuild.

### Issue: Links Don't Work
**Solution**: Verify internal links are updated
- Check Header.tsx, Footer.tsx components
- Ensure all `/path` changed to `/tr/carpim-tablosu/path`

### Issue: SEO Tags Missing
**Solution**: Check metadata in page.tsx files
- Verify `generateMetadata()` functions
- Check hreflang implementation

### Issue: Pages Not Found
**Solution**: Verify `generateStaticParams()`
- Ensure all route parameters generated
- Check lang/topic combinations

---

## Next Steps After Deployment

### Immediate (Day 1)
- [ ] Monitor Vercel deployment logs
- [ ] Test all critical user journeys
- [ ] Check analytics for errors
- [ ] Verify mobile experience

### Short-term (Week 1)
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor indexing status
- [ ] Check for 404 errors
- [ ] Review user feedback

### Medium-term (Month 1)
- [ ] Analyze traffic patterns
- [ ] Plan Spanish content translation
- [ ] Plan German content translation
- [ ] Optimize based on user data

---

## Support & Resources

### Documentation
- See `MIGRATION_COMPLETE.md` for full technical details
- See `ROUTING_CHANGES.md` for route mapping
- Check Next.js docs: https://nextjs.org/docs

### Vercel Support
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs
- Status: https://www.vercel-status.com

---

## Success Indicators

✅ Deployment successful when:
- Build completes without errors
- All routes accessible
- Hreflang tags present
- Analytics tracking
- No 404 errors
- Navigation working
- SEO tags intact

---

**Ready to Deploy!** 🚀

All migrations complete. Code is production-ready.
