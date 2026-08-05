# Content Debt

## Ukrainian (lib/number-content-uk.ts)
**Issue:** meanings/importance/patterns/mistakes/strategies content 
for numbers 1-20 is corrupted — Czech text with scattered Ukrainian 
words swapped in, not genuine Ukrainian.
**Scope:** All 5 functions, numbers 1-20 (the only entries that exist)
**Fix needed:** Full retranslation pass by a Ukrainian speaker
**Status:** AI-rewritten 2026-07-30 for numbers 1-20. 
NEEDS NATIVE SPEAKER REVIEW before considered production-ready.
Numbers 21-100 still return null — pending future content pass.

## German (lib/number-content-de.ts)
**Issue:** Spanish-language text bleeding into importance/patterns/
mistakes/strategies sections, far more extensively than first reported —
initial audits (regex-based, narrow keyword lists) undercounted the
scope twice before a full manual read of the strategies object revealed
the true extent (96 of 100 entries contaminated across patterns/
mistakes/strategies).
**Example:** mistakes[12] contains "docenas" (Spanish) in German content
**Fix needed:** Audit all entries, replace Spanish fragments with 
correct German
**Status:** Contaminated entries identified and rewritten 2026-07-30.
NEEDS NATIVE SPEAKER SPOT-CHECK. See inline comments for changed entries.

## French (lib/number-content-fr.ts)  
**Issue:** Spanish-language text bleeding into importance/patterns/
mistakes/strategies sections. patterns[2] confirmed entirely in Spanish.
Full audit (2026-07-30) found contamination is far more extensive than
originally reported — 277 of 400 possible entries across the four
functions (69% of the file), including importance which was not
previously flagged as affected.
**Example:** mistakes[12] contains "douzaines más que" (French/Spanish mix)
**Fix needed:** Audit all entries, replace Spanish fragments with 
correct French
**Status:** All 277 contaminated entries rewritten 2026-07-30.
NEEDS NATIVE SPEAKER SPOT-CHECK. 
See inline comments for all changed entries.

## Indonesian (lib/number-content-id.ts)
**Issue:** No per-number content at all — all 6 functions return null
**Decision:** Deliberate product decision documented in code comment
**Fix needed:** Full content authoring task covering all 100 numbers 
when Indonesian per-number content is prioritized

---
Last updated: 2026-07-30
