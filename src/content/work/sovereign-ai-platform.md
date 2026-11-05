---
title: A sovereign AI platform with full auditability
client: International organization, Geneva
sector: Public sector · AI governance
tags: [On-prem LLMs, vLLM, Observability, Governance]
summary: A fully on-prem AI stack (LLM, embeddings, reranker, vector store) with an observability layer that logs every trace of every AI application, so the organization can run AI on its own infrastructure and account for every output.
metrics:
  - value: "100%"
    label: of AI application traces logged
  - value: "100%"
    label: on-prem (LLM, embeddings, reranker, vector store)
  - value: "Best"
    label: throughput of all models tested
order: 2
featured: true
draft: false
links: []
exhibit:
  caption: "TODO: aiperf throughput comparison of candidate models, with the selected model highlighted"
architecture:
  caption: "TODO: platform diagram (applications → guardrails → vLLM / embedding / reranker; Weaviate and MinIO as data layer; Langfuse tracing alongside every call)"
---

## Context

An international organization handling sensitive information wanted to use LLMs without sending data to external providers. That meant hosting every model on its own infrastructure, and being able to explain what any AI system did, for whom, and why.

## Challenge

- No standard way to host and serve models on premises, so each team would otherwise improvise its own setup.
- AI applications were growing in number, with no shared view of what they were doing in production.
- Governance requirements (auditability, access control, safe outputs) had to apply to every application, not just the first one.

## Approach

1. **Benchmark before choosing.** Benchmarked candidate open models on the organization's hardware with aiperf and selected the one with the highest throughput for the workload.
2. **Serve it on prem.** Deployed vLLM as the inference engine, alongside self-hosted embedding and reranker models.
3. **Host the data layer too.** Ran Weaviate as the vector database and MinIO for object storage, so no part of a retrieval pipeline depends on an external service.
4. **Make everything observable.** Deployed Langfuse so every trace of every AI application (prompts, retrievals, tool calls, outputs) is logged, giving complete auditability.
5. **Govern by default.** Applied guardrails and governance controls across all AI projects, rather than per application.
6. **Codify it.** Wrote the standard operating procedure for on-prem model hosting, so new models are deployed the same way every time.

## Impact

- 100% of AI application traces logged in Langfuse and available for audit.
- The full stack (LLM, embeddings, reranker, vector store, storage) runs on the organization's own infrastructure.
- Model choice is backed by throughput benchmarks, making capacity and cost decisions defensible.
- A documented SOP turns model hosting from one-off engineering into a repeatable process.

## What I'd do next

- Run automated evaluations on logged traces to detect quality drift.
- Publish a self-service onboarding path so new teams join the platform without bespoke setup.
- Track cost and utilization per application to guide capacity planning.
