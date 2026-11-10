---
title: Running AI on the WTO's own servers, with every output on record
short: Sovereign AI platform
client: World Trade Organization, Geneva
sector: Public sector · AI governance
tags: [On-prem LLMs, vLLM, Observability, Governance]
summary: The World Trade Organization handles sensitive information. It now runs its language models, search and storage entirely in-house, with every AI interaction logged for audit and one standard way to bring new models online.
metrics:
  - value: "100%"
    label: of AI activity logged and auditable
  - value: "0"
    label: external AI providers receiving the organization's data
order: 2
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: The selected model delivered the highest throughput of all candidates on the organization's own hardware"
architecture:
  caption: "TODO: Every application shares one in-house platform, and every call is logged on the way through"
---

## The WTO wanted AI, but could not send its data outside

The WTO handles sensitive information and wanted to use large language models across its work. Sending that data to an external provider was not an option. Any AI it used had to run on its own infrastructure, and leadership had to be able to answer, at any time, what an AI system did, for whom, and why.

## Without a shared platform, every team would build its own

The number of AI applications was growing quickly. Left alone, each team would have improvised its own hosting setup, with no common view of what the systems were doing in production. Governance requirements (auditability, access control, safe outputs) would then have to be retrofitted application by application, which rarely works.

## We built one in-house platform that every application runs on

- **Chose models on evidence.** We tested candidate open models on the organization's own hardware and selected the one that served the most requests for the workload, so capacity decisions rest on data rather than reputation.
- **Brought the whole stack in-house.** The language model, search components and document storage all run on the organization's servers, so no step depends on an outside service.
- **Recorded everything.** Every prompt, retrieval and answer from every application is logged and available for audit.
- **Set governance once, for all.** Safety and governance controls apply across all AI projects by default, not one application at a time.
- **Made it repeatable.** A standard operating procedure means each new model is deployed the same way, by any team.

## AI can now scale across the organization without new risk

Every AI interaction is on record, and no data leaves the organization. New applications join a platform that is already governed rather than starting from scratch, and model hosting has moved from one-off engineering to a routine, documented process. The result is an AI capability that can grow as fast as demand does, and still hold up in an audit.
