---
title: Monitoring the world's new trade measures continuously, not by hand
short: Trade-measure monitoring
client: World Trade Organization, Geneva
sector: Public sector · Trade policy
tags: [Multi-agent systems, Information extraction, Cost optimization]
summary: The World Trade Organization now tracks new tariffs, export restrictions and subsidies across 16+ sources automatically, with 17% lower AI model usage, and analysts review findings instead of hunting for them.
metrics:
  - value: "16+"
    label: sources monitored continuously
  - value: "17%"
    label: lower AI model usage, by removing duplicates first
  - value: "100%"
    label: of records traceable to their original source
order: 1
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: Duplicates are removed before any AI model runs, cutting model usage by 17%"
architecture:
  caption: "TODO: Each item passes four filters before an analyst sees it: collect, deduplicate, triage, extract"
---

## Trade measures were tracked by hand, across a growing number of sources

Governments announce new trade measures (tariffs, export restrictions, subsidies, licensing rules) in official gazettes, on ministry websites and through the press, in many languages. Analysts were finding them by reading these sources one by one. Coverage depended on who had time that week, and every new source meant more manual reading.

## Automating the search was not enough on its own

Three things made a simple "send everything to an AI model" approach unworkable:

- **Most content is noise.** The large majority of what gets published is not a trade measure. Processing all of it would be expensive and would bury analysts in false alarms.
- **The same news appears many times.** One measure is reported by dozens of outlets, often word for word, which multiplies both cost and duplicate records.
- **Every record has to stand up to scrutiny.** The output feeds policy monitoring, so each finding must point back to where it came from.

## We built a pipeline that filters before it spends

The system works like a series of increasingly expensive checkpoints, so costly steps only run on material that has earned them:

1. **Collect** new content from public, government and news sources on a schedule.
2. **Remove duplicates** before any AI model is involved, so the same story is never paid for twice.
3. **Triage** each item and pass on only those that describe a trade measure.
4. **Extract** the essentials (measure type, country, products, dates) into a standard record, with the source attached.
5. **Hand to analysts** for confirmation, so people validate findings rather than compile them.

## Coverage now grows by adding sources, not people

The WTO monitors 16+ sources continuously and can add more without adding headcount. Removing duplicates up front cut AI model usage by 17%, and every record arrives with its source, so analysts can confirm it in seconds. The team's time has moved from searching for measures to judging them, which is where its expertise matters most.
