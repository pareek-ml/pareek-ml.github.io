---
title: Recommending HS codes in under three seconds
client: International organization, Geneva
sector: Public sector · Trade classification
tags: [RAG, Hybrid retrieval, Classification, Evaluation]
summary: A retrieval-augmented recommender that suggests the right HS 2022 code from a free-text product description, reaching 0.97 recall@5 with sub-3-second responses, on a versioned index ready for the next HS revision.
metrics:
  - value: "0.95"
    label: MRR@5
  - value: "0.97"
    label: recall@5
  - value: "<3 s"
    label: response time
order: 3
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: recall@k curve from k = 1 to 5"
architecture:
  caption: "TODO: retrieval pipeline (description → hybrid retrieval over versioned HS index → candidate codes → LLM ranking → top five)"
---

## Context

Every member government has to map products to Harmonized System (HS) codes. It takes expertise: the nomenclature is large, descriptions are often ambiguous, and getting it wrong affects everything downstream. Doing it by hand costs each member time and resources, and results vary from person to person.

## Challenge

- A very large label space in which many codes differ only by fine detail.
- Users describe products in their own words, not in the vocabulary of the nomenclature.
- The HS is revised periodically, so a system built on one edition must not become obsolete with the next.
- The tool had to be fast enough to use interactively, and accurate enough that experts would trust it.

## Approach

1. **Index HS 2022, with versioning.** Built the retrieval index on the HS 2022 nomenclature as a versioned asset, so a future revision can be loaded without re-engineering the system.
2. **Retrieve candidates.** Combined retrieval methods to surface the most plausible codes for a description.
3. **Rank and recommend.** Used an LLM over the retrieved candidates to return a ranked top five, so experts choose from a short list instead of searching the full nomenclature.
4. **Measure it properly.** Evaluated with ranking metrics (MRR@5, recall@5) on a labeled test set, and tuned for latency alongside accuracy.

## Impact

- The correct code appears in the top five 97% of the time (recall@5 = 0.97).
- It is usually ranked first or second (MRR@5 = 0.95).
- Results return in under three seconds, fast enough for interactive use.
- Saves each member government time and resources on classification work.
- Versioned design means the next HS revision is a data update, not a rebuild.

## What I'd do next

- Capture expert selections as feedback to keep improving ranking.
- Add explanations that cite the nomenclature text behind each suggestion.
- Monitor performance by HS chapter to find weak spots.
