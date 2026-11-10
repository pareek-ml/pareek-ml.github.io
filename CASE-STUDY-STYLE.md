# Case study style guide

Every case study on /work follows the same shape, so a visitor who reads one knows how to read them all. The model is how McKinsey writes client stories and decks: lead with the answer, tell the story as Situation → Complication → Resolution, and make every heading a sentence that carries its own point.

## The skim test

A reader who sees only the **title, summary, metric cards and the four section headings** should understand the whole story. If they don't, rewrite the headings before touching the body.

## Structure (fixed, in this order)

| Field / section | What it does | Rule |
|---|---|---|
| **Title** | The outcome | Say what changed for the client, not what you built. "Classifying products into customs codes in under three seconds", not "HS code RAG recommender". |
| **Summary** | The answer, first | One sentence: who, what is different now, the headline number. |
| **Metrics** | Proof | 2–3 outcomes a client cares about: scale, cost, speed, trust. The first two appear on cards. |
| **H2 1: Situation** | What the client faced | A sentence everyone would agree with. No technology. |
| **H2 2: Complication** | Why the obvious fix fails | The tension. 3 bullets max, each with a bold lead-in. |
| **H2 3: Resolution** | What we did | Steps in business language. One clause on *why* each step matters. |
| **H2 4: Impact** | What is now different | A short paragraph. Repeat the numbers in context and end on what it means for the client. |

## Voice

- Write about the client as the protagonist; use "we" for the work.
- Plain language over jargon. Tools and frameworks go in **Tags** (shown as "Focus" in the sidebar), not in the body.
- 300–400 words for the body. Cut anything a client leader would skip.

## Leave out

- "What I'd do next" or future work. It reads as unfinished.
- Headcount or FTE figures, team sizes, sprint details.
- Model metrics (MRR@5, recall@k, tokens). Translate them: recall@5 = 0.97 → "the right code is in the top five 97% of the time".
- Numbers that are not true or cannot be backed up. A missing metric is better than a soft one.

## Exhibits

Captions are action titles too: state the finding the chart proves ("Duplicates are removed before any AI model runs, cutting model usage by 17%"), not what it shows ("Token consumption chart"). Keep the `TODO:` prefix until the image exists; the figure stays hidden until then.

## The homepage uses the same rules

The homepage is one argument, told top-down:

1. **Hero: the governing thought.** What you deliver, in one line ("AI that holds up in production, and in an audit"), then who you do it with and how.
2. **Proof strip.** Three outcomes, one per case study, in plain language.
3. **Selected work.** The case studies themselves, the evidence.
4. **How I work.** Why the results are repeatable.
5. **Experience.** That this is a track record, not a one-off.
6. **What I bring.** Each capability starts with what it gets the client; tools come second.
7. **Contact.**

Every section has a small label and an **action title**, a sentence that makes the section's point (edit them in Site settings → Homepage section titles). Someone who reads only those titles should get the whole story. Writing appears on the homepage only once there are at least two posts.

## Who it is written for

Consulting (McKinsey, BCG X, Big Four) and forward-deployed engineering (FDE) roles. Both reward the same signals, so lean on them: embedded with the people who own the problem, prototype to production, outcomes over activity, the judgment to stop a weak project early, and a system the client can run without you.
