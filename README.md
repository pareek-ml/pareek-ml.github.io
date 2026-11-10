# ypareek.ch

Personal site of Yash Pareek, built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages at <https://ypareek.ch>.

## Develop

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type-checks the code and content schemas
```

## Where content lives

| Content | Location |
| --- | --- |
| Case studies | `src/content/work/*.md` |
| Posts | `src/content/writing/*.md` |
| Name, headline, proof metrics, email, socials, CV path | `src/content/site.yaml` |
| Experience, education, capabilities, approach steps | `src/content/{experience,education,capabilities,approach}.yaml` |
| About page text | `src/content/about.md` |
| CV | `public/files/cv.pdf` |

The schemas are in `src/content.config.ts`. A build fails if a file doesn't match its schema. If you change a schema, change `public/admin/config.yml` to match. Entries in the YAML lists appear in file order.

## Add a case study

### As a file

Create `src/content/work/my-project.md`. The filename becomes the URL: `/work/my-project/`.

```md
---
title: Cutting claims triage time for a European insurer   # The outcome, not the technology
client: European insurer           # Anonymize as needed
sector: Insurance
tags: [RAG, Evaluation]
summary: The answer first. Who, what changed for them, and the headline number.
metrics:                           # Optional. Cards show the first two.
  - { value: 40%, label: faster triage }
order: 7                           # Sets the position on /work/ and previous/next
featured: true                     # Shows it under "Selected work" on the home page
draft: false                       # Drafts appear in `npm run dev` only
links:                             # Optional
  - { label: Code, url: https://github.com/you/repo }
exhibit:                           # Optional business exhibit
  image: ../../assets/work/my-project/exhibit.png
  alt: What the chart shows, for screen readers.
  caption: The finding it proves, as a full sentence.
architecture:                      # Optional architecture diagram
  image: ../../assets/work/my-project/architecture.png
  alt: What the diagram shows, for screen readers.
  caption: The finding it proves, as a full sentence.
---

## Situation: one sentence on what the client faced

## Complication: one sentence on why the obvious fix would not work

## Resolution: one sentence on what we built, in business terms

## Impact: one sentence on what is now different for the client
```

Every case study uses these four sections in this order, and each heading is a full sentence that makes its point on its own. [`CASE-STUDY-STYLE.md`](CASE-STUDY-STYLE.md) has the full rules, including what to leave out.

A figure with no image stays off the page, so you can hold a place for one:

```yaml
exhibit:
  caption: "TODO: what this exhibit should show"
```

When you add the image, also add `alt` and replace the caption. The build fails if an image has no alt text or still has a TODO caption.

Put images in `src/assets/work/my-project/`. Astro optimizes them and sets their dimensions at build time.

The exhibit appears above the body and the architecture diagram below it. Other images can go anywhere in the body as `![Alt text](../../assets/work/my-project/chart.png)`.

Keep the home page grid even by featuring an even number of case studies.

### Through /admin

1. Open <https://ypareek.ch/admin/> and sign in (see below).
2. Choose **Case studies**, then **New**.
3. Fill in the fields and write the body. Upload images in the exhibit and architecture fields.
4. Save. The CMS commits the file to `main`, which triggers a deploy. The change is live in a couple of minutes.

## Add a post

Create `src/content/writing/my-post.md`, or use **Writing** in `/admin`. The fields are `title`, `date`, `summary`, `tags`, `draft` and an optional `external_url`.

- With a body, the post gets its own page, and `external_url` shows as a link to the original.
- With an empty body, the post links straight to `external_url`.

## GitHub sign-in for /admin

`/admin` is [Sveltia CMS](https://sveltiacms.app/en/docs). It commits to this repository with your GitHub account, so anyone signing in needs write access to the repo.

### Quick option: a personal access token

Choose **Sign In Using Access Token** on the login screen and follow the link it gives you. A fine-grained token needs only this repository, with **Contents: Read and write**. The token is stored in that browser's local storage.

### Full option: GitHub OAuth

GitHub's OAuth flow needs a server-side step that GitHub Pages can't host, so it runs on a small free Cloudflare Worker.

1. **Deploy the worker.** Use the [deploy button](https://deploy.workers.cloudflare.com/?url=https://github.com/sveltia/sveltia-cms-auth) for [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth). Copy its URL, which looks like `https://sveltia-cms-auth.<SUBDOMAIN>.workers.dev`.
2. **Register a GitHub OAuth app** at <https://github.com/settings/applications/new>.
   - Homepage URL: `https://ypareek.ch`
   - Authorization callback URL: `<WORKER_URL>/callback`
   - Generate a client secret, then copy it and the client ID.
3. **Configure the worker.** In Cloudflare, open the worker's **Settings > Variables** and add:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET` (encrypt it)
   - `ALLOWED_DOMAINS` set to `ypareek.ch`
4. **Point the CMS at the worker.** In `public/admin/config.yml`, uncomment `base_url` under `backend` and set it to the worker URL. Commit and deploy.

### Upgrading the CMS

The CMS version is pinned in `public/admin/index.html` because that page handles a GitHub token. To upgrade, change the version number in the script URL, then check that `/admin/` loads and can save an edit.

## Deployment

`.github/workflows/deploy.yml` builds and deploys every push to `main`. The repository's **Settings > Pages > Source** must be set to **GitHub Actions**. With Actions deployments, GitHub takes the custom domain from **Settings > Pages**, so keep `ypareek.ch` set there. `public/CNAME` records the same domain in the repo.

GitHub Pages can't send server redirects, so old URLs are small HTML pages in `public/` that forward to the new location: `projects/breast.html`, `blogs/blogs.html` and `blogs/chatgpt-boost-code.html`.

## Regenerating the social image

`public/og.png` (1200×630) is a screenshot of the home page hero. Retake it if the headline changes.
