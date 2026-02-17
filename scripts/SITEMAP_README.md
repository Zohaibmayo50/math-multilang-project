# Sitemap System Documentation

## Overview

This directory contains the sitemap generation system for mathematives.com, a multilingual educational platform supporting 12 languages.

## Architecture

### Structure
```
/public
  ├── sitemap.xml                  # Sitemap index (main entry point)
  └── /sitemaps
      ├── sitemap-tr.xml           # Turkish sitemap
      ├── sitemap-es.xml           # Spanish sitemap
      ├── sitemap-de.xml           # German sitemap
      ├── sitemap-cs.xml           # Czech sitemap
      ├── sitemap-uk.xml           # Ukrainian sitemap
      ├── sitemap-fi.xml           # Finnish sitemap
      ├── sitemap-fr.xml           # French sitemap
      ├── sitemap-sv.xml           # Swedish sitemap
      ├── sitemap-pt.xml           # Portuguese sitemap
      ├── sitemap-en.xml           # English sitemap
      ├── sitemap-pl.xml           # Polish sitemap
      └── sitemap-id.xml           # Indonesian sitemap
```

### URLs Per Language Sitemap

Each language sitemap contains **115 URLs**:

- **1 URL** - Language hub page (`/{lang}`)
- **1 URL** - Topic homepage (`/{lang}/multiplication-tables`)
- **10 URLs** - Range pages (`/{lang}/multiplication-tables/1-10` through `91-100`)
- **100 URLs** - Number pages (`/{lang}/multiplication-tables/1` through `100`)
- **3 URLs** - Guide pages (`for-students`, `for-teachers`, `for-parents`)

**Total across all 12 languages: 1,380 URLs**

## Page Type Priorities

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Language hub | 0.9 | monthly |
| Topic homepage | 1.0 | weekly |
| Range pages | 0.8 | monthly |
| Number pages | 0.7 | monthly |
| Guide pages | 0.6 | monthly |

## Hreflang Implementation

Every URL entry includes:
- **x-default** pointing to `https://mathematives.com/`
- **12 language alternates** with proper hreflang tags

Example:
```xml
<url>
  <loc>https://mathematives.com/en/multiplication-tables/7</loc>
  <lastmod>2026-02-17</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://mathematives.com/" />
  <xhtml:link rel="alternate" hreflang="tr" href="https://mathematives.com/tr/carpim-tablosu/7" />
  <xhtml:link rel="alternate" hreflang="es" href="https://mathematives.com/es/tablas-de-multiplicar/7" />
  <!-- ... all 12 languages -->
</url>
```

## Usage

### Generate Sitemaps

Run the generator script:

```bash
npm run generate-sitemaps
```

Or directly:

```bash
node scripts/generate-sitemaps.js
```

### When to Regenerate

Regenerate sitemaps when:
- Adding a new language
- Adding new page types (topics, guides)
- Changing URL structures
- Before major deployments

### Automated Integration

To automatically regenerate sitemaps during build:

1. Add to `package.json`:
```json
"scripts": {
  "prebuild": "npm run generate-sitemaps",
  "build": "next build"
}
```

2. Or in CI/CD pipeline:
```yaml
- name: Generate Sitemaps
  run: npm run generate-sitemaps
- name: Build
  run: npm run build
```

## SEO Configuration

### robots.txt

The `public/robots.txt` file references the sitemap:

```
Sitemap: https://mathematives.com/sitemap.xml
```

### Search Console

Submit the sitemap index to search engines:
- **Google**: https://search.google.com/search-console
- **Bing**: https://www.bing.com/webmasters

URL to submit: `https://mathematives.com/sitemap.xml`

## Supported Languages

| Code | Language | Topic Slug |
|------|----------|------------|
| tr | Turkish | carpim-tablosu |
| es | Spanish | tablas-de-multiplicar |
| de | German | einmaleins |
| cs | Czech | nasobilka |
| uk | Ukrainian | tablycya-mnozhennya |
| fi | Finnish | kertotaulut |
| fr | French | table-de-multiplication |
| sv | Swedish | multiplikationstabeller |
| pt | Portuguese | tabuada |
| en | English | multiplication-tables |
| pl | Polish | tabliczki-mnozenia |
| id | Indonesian | tabel-perkalian |

## Maintenance

### Adding a New Language

1. Add language code to `LANGUAGES` array in `generate-sitemaps.js`
2. Add topic slug to `TOPIC_SLUGS` object
3. Add guide slugs to `GUIDES` object
4. Run `npm run generate-sitemaps`

### Adding New Page Types

Modify the `generateLanguageUrls()` function in `generate-sitemaps.js`:

```javascript
// Example: Adding a new page type
urls.push({
  url: `${BASE_URL}/${locale}/${topicSlug}/new-page`,
  priority: 0.8,
  changeFreq: 'monthly',
  pathFn: (l) => `${BASE_URL}/${l}/${TOPIC_SLUGS[l]}/new-page`,
})
```

### Validation

Validate generated sitemaps:
1. **XML Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. **Google Search Console**: Submit and check for errors
3. **Manual Check**: Verify file sizes (< 50MB, < 50,000 URLs per file)

## Technical Details

### Dependencies
- Node.js built-in modules only (`fs`, `path`)
- No external packages required

### File Sizes
- Each language sitemap: ~140 KB
- Sitemap index: ~1 KB
- Total size: ~1.7 MB

### Performance
- Generation time: < 1 second
- Static files served by CDN
- No runtime overhead

## Troubleshooting

### Issue: Sitemaps not updating
**Solution**: Run `npm run generate-sitemaps` and redeploy

### Issue: URLs not indexed
**Solution**: 
1. Verify sitemap is accessible at `/sitemap.xml`
2. Check robots.txt references correct sitemap
3. Submit to Search Console
4. Wait 24-48 hours for crawling

### Issue: Hreflang errors
**Solution**: Ensure all language variants exist and are accessible

## Future Enhancements

Possible improvements:
- [ ] Automatic lastmod dates per URL (based on file modification)
- [ ] Image sitemaps for visual content
- [ ] Video sitemaps for embedded videos
- [ ] News sitemaps for time-sensitive content
- [ ] Dynamic sitemap splitting if URLs exceed 50,000

## References

- [Sitemaps.org Protocol](https://www.sitemaps.org/protocol.html)
- [Google Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Hreflang Best Practices](https://developers.google.com/search/docs/specialty/international/localized-versions)
