---
title: A knowledge assistant that respects who can see what
client: International organization, Geneva
sector: Public sector · Knowledge management
tags: [Agentic RAG, Access control, Hybrid search]
summary: An agentic chat assistant over 5,400+ internal documents that only retrieves what each user is allowed to see, and is calibrated so long documents don't crowd out short ones.
metrics:
  - value: "5,400+"
    label: documents indexed
  - value: "5–530"
    label: pages per document, rebalanced in retrieval
order: 4
featured: false
draft: false
links: []
exhibit:
  caption: "TODO: share of results per document, before and after recalibration"
architecture:
  caption: "TODO: query flow (user → access scope → metadata filter → hybrid search → length recalibration → agent → cited answer)"
---

## Context

Staff needed fast answers from a large body of internal documents. A generic chatbot was not an option: documents carry different access levels, and an assistant that leaks content to the wrong person is worse than none.

## Challenge

- Access control had to be enforced at retrieval time, for every query.
- Questions mix exact terms (names, references, codes) with conceptual questions, so no single search method was enough.
- The corpus ranged from 5-page notes to 530-page reports. A long document produces far more chunks, so left alone it dominates results simply by being long.

## Approach

1. **Scope by user.** Each query is filtered by the user's access scope before retrieval, so the model never sees content the user cannot.
2. **Filter by metadata.** Users and the agent can narrow results by document type, date, source and other attributes.
3. **Search two ways.** Lexical search catches exact terms; semantic search catches meaning. Results are combined.
4. **Chunk by meaning.** Semantic chunking keeps sections intact, so retrieved passages are self-contained.
5. **Recalibrate for document length.** Rebalanced retrieval so no single long document over-appears in results, keeping answers drawn from the most relevant sources rather than the biggest ones.
6. **Answer agentically.** The assistant decides when to search, refine and cite, rather than running a single fixed retrieval.

## Impact

- 5,400+ documents searchable through a single assistant, with access rules enforced on every query.
- Balanced retrieval across documents from 5 to 530 pages, so short but relevant sources are not drowned out.

## What I'd do next

- Add an evaluation set built from real user questions.
- Surface usage analytics to show which content is most needed.
