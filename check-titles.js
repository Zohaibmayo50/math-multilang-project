const fs = require('fs');
const path = require('path');

// Check ALL title sources
console.log('=== COMPREHENSIVE TITLE LENGTH AUDIT ===\n');
let totalOver = 0;
const TEMPLATE_SUFFIX = 15; // " | Mathematives"
const MAX_TITLE = 45; // 60 - 15

// 1. Root layout default title (no template applied)
console.log('--- Root Layout (app/layout.tsx) ---');
const layout = fs.readFileSync('app/layout.tsx', 'utf8');
const defaultMatch = layout.match(/default:\s*'([^']+)'/);
if (defaultMatch) {
  console.log(`  Default: "${defaultMatch[1]}" [${defaultMatch[1].length}ch] ${defaultMatch[1].length > 60 ? '*** OVER ***' : 'OK'}`);
}

// 2. Root page title (template applied)
console.log('\n--- Root Page (app/page.tsx) ---');
const rootPage = fs.readFileSync('app/page.tsx', 'utf8');
const rootMatch = rootPage.match(/title:\s*'([^']+)'/);
if (rootMatch) {
  const total = rootMatch[1].length + TEMPLATE_SUFFIX;
  console.log(`  "${rootMatch[1]}" [${rootMatch[1].length}ch + 15 = ${total}] ${total > 60 ? '*** OVER ***' : 'OK'}`);
  if (total > 60) totalOver++;
}

// 3. Hub page titles (template applied)
console.log('\n--- Hub Pages (app/[lang]/page.tsx) ---');
const hubPage = fs.readFileSync('app/[lang]/page.tsx', 'utf8');
const hubMatches = hubPage.matchAll(/title:\s*'([^']+)'/g);
for (const m of hubMatches) {
  const total = m[1].length + TEMPLATE_SUFFIX;
  if (total > 60) {
    console.log(`  OVER: "${m[1]}" [${m[1].length}ch + 15 = ${total}]`);
    totalOver++;
  }
}
console.log('  (only showing over-60)');

// 4. Topic page titles
console.log('\n--- Topic Pages (app/[lang]/[topic]/page.tsx) ---');
const topicPage = fs.readFileSync('app/[lang]/[topic]/page.tsx', 'utf8');
const topicMatches = [...topicPage.matchAll(/title:\s*'([^']+)'/g)];
let topicOver = 0;
for (const m of topicMatches) {
  const total = m[1].length + TEMPLATE_SUFFIX;
  if (total > 60) {
    console.log(`  OVER: "${m[1]}" [${m[1].length}ch + 15 = ${total}]`);
    topicOver++;
    totalOver++;
  }
}
console.log(`  ${topicOver} over-60 out of ${topicMatches.length} titles`);

// 5. Slug page titles (range + guide metadata)
console.log('\n--- Slug Page Range/Guide Titles ---');
const slugPage = fs.readFileSync('app/[lang]/[topic]/[slug]/page.tsx', 'utf8');
const slugLines = slugPage.split('\n');
let slugOver = 0;
let slugTotal = 0;
let inMeta = false;
for (let i = 0; i < slugLines.length; i++) {
  const t = slugLines[i].trim();
  if (t.match(/^const\s+(range|guide)Metadata/)) inMeta = true;
  if (inMeta && t === '}') inMeta = false;
  if (inMeta && t.startsWith('title:')) {
    const m = t.match(/title:\s*'([^']+)'/);
    if (m) {
      slugTotal++;
      const total = m[1].length + TEMPLATE_SUFFIX;
      if (total > 60) {
        console.log(`  OVER L${i+1}: "${m[1]}" [${m[1].length}ch + 15 = ${total}]`);
        slugOver++;
        totalOver++;
      }
    }
  }
}
console.log(`  ${slugOver} over-60 out of ${slugTotal} range/guide titles`);

// 6. Number metadata files
console.log('\n--- Number Metadata Files ---');
const metaFiles = fs.readdirSync('lib').filter(f => f.startsWith('number-metadata') && f.endsWith('.ts'));
let numOver = 0;
let numTotal = 0;
for (const file of metaFiles) {
  const content = fs.readFileSync(path.join('lib', file), 'utf8');
  const lines = content.split('\n');
  let inTitle = false;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.match(/^export\s+const\s+numberTitles/)) inTitle = true;
    if (t.match(/^export\s+const\s+(rangeMetadata|guideMetadata)/)) inTitle = true;
    if (inTitle && t === '}') inTitle = false;
    
    // Check loop template
    const loopM = t.match(/numberTitles\w*\[i\]\s*=\s*`([^`]+)`/);
    if (loopM) {
      const tmpl = loopM[1].replace(/\$\{i\}/g, '100');
      numTotal++;
      if (tmpl.length + TEMPLATE_SUFFIX > 60) {
        console.log(`  OVER ${file}:${i+1}: "${tmpl}" [${tmpl.length}+15=${tmpl.length+15}]`);
        numOver++;
        totalOver++;
      }
    }
    
    if (inTitle) {
      let m = t.match(/^\d+:\s*['"]([^'"]+)['"]/);
      if (!m) m = t.match(/^'[^']+'\s*:\s*{\s*$/) ? null : t.match(/title:\s*'([^']+)'/);
      if (m) {
        numTotal++;
        const total = m[1].length + TEMPLATE_SUFFIX;
        if (total > 60) {
          console.log(`  OVER ${file}:${i+1}: "${m[1]}" [${m[1].length}+15=${total}]`);
          numOver++;
          totalOver++;
        }
      }
    }
  }
}
console.log(`  ${numOver} over-60 out of ${numTotal} entries across ${metaFiles.length} files`);

console.log(`\n=== TOTAL OVER 60: ${totalOver} ===`);
