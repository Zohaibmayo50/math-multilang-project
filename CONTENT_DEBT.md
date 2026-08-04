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
**Issue:** Spanish-language text bleeding into mistakes/patterns/
strategies sections within numbers 1-12 and beyond.
**Example:** mistakes[12] contains "docenas" (Spanish) in German content
**Fix needed:** Audit all entries, replace Spanish fragments with 
correct German
**Status:** Not touched — needs dedicated cleanup pass

## French (lib/number-content-fr.ts)  
**Issue:** Spanish-language text bleeding into patterns/mistakes/
strategies sections. patterns[2] confirmed entirely in Spanish.
**Example:** mistakes[12] contains "douzaines más que" (French/Spanish mix)
**Fix needed:** Audit all entries, replace Spanish fragments with 
correct French
**Status:** Not touched — needs dedicated cleanup pass

## Indonesian (lib/number-content-id.ts)
**Issue:** No per-number content at all — all 6 functions return null
**Decision:** Deliberate product decision documented in code comment
**Fix needed:** Full content authoring task covering all 100 numbers 
when Indonesian per-number content is prioritized

---
Last updated: 2026-07-30
