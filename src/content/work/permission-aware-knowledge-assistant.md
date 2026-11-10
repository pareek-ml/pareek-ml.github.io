---
title: A knowledge assistant that only shows staff what they are cleared to see
client: International organization, Geneva
sector: Public sector · Knowledge management
tags: [Agentic RAG, Access control, Hybrid search]
summary: Staff can now ask questions across 5,400+ internal documents and get cited answers, with access rules enforced on every query and short, relevant notes no longer buried under 500-page reports.
metrics:
  - value: "5,400+"
    label: internal documents searchable through one assistant
  - value: "100%"
    label: of queries checked against the user's access rights
order: 4
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: After rebalancing, long reports no longer crowd short, relevant notes out of the results"
architecture:
  caption: "TODO: Access rights are checked before anything is searched, so the assistant never sees what the user cannot"
---

## Staff needed answers from thousands of internal documents

The organization's knowledge sits in more than 5,400 internal documents, from short notes to reports of several hundred pages. Staff were spending time searching for answers that already existed. An off-the-shelf chatbot was ruled out for one reason: documents carry different access levels, and an assistant that shows content to the wrong person is worse than no assistant at all.

## Search had to be secure, precise, and fair to short documents

- **Access first.** Permissions had to be enforced on every single question, not checked after the fact.
- **Two kinds of question.** Staff ask both for exact items (names, references, codes) and for broader concepts, and no single search method handles both well.
- **Length bias.** Long reports produce far more searchable text than short notes, so left alone they dominate the results simply by being long, not by being relevant.

## We built an assistant that checks permissions before it searches

- **Scoped every query to the user.** Each question is limited to the documents that person may see before any search runs, so the assistant never reads what the user cannot.
- **Let people narrow the field.** Users can filter by document type, date, source and other attributes.
- **Searched two ways at once.** Exact-term search and meaning-based search run together, and their results are combined.
- **Kept passages whole.** Documents are split along their natural sections, so each answer draws on complete, self-contained passages.
- **Levelled the field.** Results are rebalanced so a single long report cannot crowd out a short note that answers the question better.
- **Let the assistant work like a researcher.** It decides when to search again, refine the question, and cite its sources.

## Staff get cited answers in one place, without new access risk

More than 5,400 documents are now searchable through a single assistant, with access rules applied to every query. Answers cite their sources, so staff can verify them. Short but relevant documents now surface alongside long reports, so answers come from the best source rather than the biggest one.
