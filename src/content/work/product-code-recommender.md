---
title: Classifying products into customs codes in under three seconds
short: Customs-code recommender
client: World Trade Organization, Geneva
sector: Public sector · Trade classification
tags: [RAG, Hybrid retrieval, Classification, Evaluation]
summary: Member governments describe a product in plain words and get a shortlist of five HS codes in under three seconds. In testing, the right code was on that list 97% of the time, and usually at the top.
metrics:
  - value: "97%"
    label: "in testing: the right code in the top five"
  - value: "<3 s"
    label: from product description to shortlist
order: 3
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: In testing, the correct code was in the shortlist 97% of the time, and usually ranked first"
architecture:
  caption: "TODO: A plain-language description becomes a ranked shortlist in four steps, on an index that can be swapped for the next HS edition"
---

## Assigning customs codes takes scarce expertise

Every member government has to classify traded products under the Harmonized System (HS), the international nomenclature behind customs tariffs and trade statistics. It is specialist work: the nomenclature is vast, product descriptions are often ambiguous, and a wrong code affects everything downstream. Doing it by hand costs time, and results vary from one person to the next.

## The tool had to be fast, trusted by experts, and built to last

- **Thousands of codes, many nearly identical.** Codes often differ only in fine detail, so close is not good enough.
- **People don't speak in nomenclature.** Users describe products in their own words, not in the official vocabulary.
- **The HS changes.** The system is revised periodically, so anything built on one edition risks becoming obsolete with the next.
- **Experts need to trust it.** The tool had to answer fast enough to use live, and be accurate enough that specialists would rely on it.

## We built a recommender that narrows thousands of codes to a shortlist of five

- **Matched meaning, not just words.** The system searches the nomenclature both by exact terms and by meaning, to find the most plausible codes for a plain-language description.
- **Ranked a shortlist.** An AI model weighs those candidates and returns the five most likely, so experts choose from a short list instead of searching the full nomenclature.
- **Measured what matters.** We tested accuracy on a labeled set of real classifications and tuned for speed alongside accuracy.
- **Designed for the next edition.** The nomenclature is loaded as versioned data, so a new HS edition is a data update rather than a rebuild.

## Classification now takes seconds, and will survive the next HS revision

In testing, the right code appeared in the top five 97% of the time, and was usually ranked first. Results arrive in under three seconds, fast enough to use during live work. Member governments save time and resources on routine classification, specialists can focus on the genuinely hard cases, and the tool is ready for the next revision of the nomenclature.
