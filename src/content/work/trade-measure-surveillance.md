---
title: Agentic surveillance of global trade measures
client: International organization, Geneva
sector: Public sector · Trade policy
tags: [Multi-agent systems, Information extraction, Cost optimization]
summary: A multi-agent pipeline that monitors 16+ public sources for new trade measures, extracts them into structured records, and frees about two FTE of analyst effort every month.
metrics:
  - value: "16+"
    label: sources monitored continuously
  - value: "17%"
    label: fewer LLM tokens through deduplication
  - value: "~2 FTE"
    label: of analyst effort freed per month
order: 1
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: monthly analyst effort and token consumption, before and after"
architecture:
  caption: "TODO: pipeline diagram (sources → scrapers → normalize and hash → triage → extraction → analyst review → database)"
---

## Context

Governments announce new trade measures (tariffs, export restrictions, subsidies, licensing rules) across official gazettes, ministry sites, news outlets and media in many languages. Analysts tracked these sources by hand, which was slow, uneven in coverage and hard to scale as the volume of announcements grew.

## Challenge

- Coverage: heterogeneous sources, each with its own format and publishing rhythm.
- Signal-to-noise: most content is not a trade measure, so feeding everything to a large model is expensive and floods analysts with false positives.
- Repetition: the same measure is reported by many outlets, often word for word, which multiplies cost and creates duplicate records.
- Trust: extracted records feed policy monitoring, so every field has to trace back to its source.

## Approach

1. **Collect.** Scraping agents gather new content from public, government, news and media sources on a schedule.
2. **Deduplicate before spending.** Each item is normalized and hashed. Content already seen is dropped before any model call, so the expensive steps only run on genuinely new material.
3. **Triage.** A classification step decides whether an item describes a trade measure, routing only relevant items onward.
4. **Extract.** An extraction agent turns each relevant item into a structured record (measure type, implementing country, products affected, dates, source) against a fixed schema.
5. **Review.** Records reach analysts with their source attached, so a person confirms the output instead of compiling it.

## Impact

- 16+ sources monitored continuously, with coverage that grows by adding a source rather than adding headcount.
- 17% fewer LLM tokens consumed, because duplicates are removed before inference.
- About two FTE of analyst effort freed every month, shifting the team from searching for measures to validating them.

## What I'd do next

- Add near-duplicate detection (embedding similarity) to catch paraphrased reports that exact hashing misses, pushing token savings further.
- Feed analyst corrections back into triage and extraction to improve precision over time.
- Extend coverage to additional languages and source types.
