# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three confirmed audiences, in current priority order:
1. **Academic hiring/search committees** — evaluating Pratush for postdoc positions; the site must read as credible, rigorous evidence of an independent research program.
2. **Collaborators and fellow researchers** — other scientists who might co-author, share data, or invite talks; need to quickly grasp the research questions and study systems.
3. **General public / science-curious readers** — journalists, students, or the public discovering the work; need accessibility without jargon.

Pratush is finishing his PhD and actively applying to postdoc positions. The site's primary job over the next 6–12 months is to support those applications and job talks.

## Product Purpose

Personal academic portfolio for Pratush Brahma, a behavioural ecologist and theoretician (PhD candidate, University of Florida). It presents his research program, publications, and career trajectory to search committees, connects him with collaborators, and makes his work legible to a broader audience. Success in the near term is measured by whether it effectively supports postdoc applications.

## Positioning

Studies how individual animals make decisions — allocating time and energy to competing, caring, and foraging — and how those decisions scale up into population-level and evolutionary outcomes. Works across both field ecology and computational/theoretical biology, spanning strikingly different systems (invasive African jewelfish in Florida waterways, jumping spiders in the Western Ghats of India, rock agamas, microhylid frogs, and cancer-angiogenesis mouse models) unified by one recurring question about decision-making under shifting conditions. This dual field-and-theory range, applied to one throughline question, is the mechanism a narrower single-system researcher could not truthfully claim.

## Operating Context

- Field and lab work spans Florida waterways, the Western Ghats (India), and University of Florida (including Taylor lab collaborations in Arizona/Florida).
- The site is maintained directly by Pratush, non-technically, via plain HTML/CSS/JS edits — no build step. [EDITING-GUIDE.md](EDITING-GUIDE.md) documents this workflow already in place and must keep working after any change.
- CV, thesis, manuscripts, and publication PDFs live alongside the site and are linked from the Contact and Publications pages.

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS, no framework, no build tooling. This is a confirmed constraint, not an open decision — preserve it unless Pratush decides otherwise.
- Current sections: About, Research (project cards), Publications (filterable list), Experience, News, Contact (with CV download). Field Notes was removed sitewide (2026-08-24) — the homepage's interactive field map is now the sole gateway into Research. The standalone Gallery page and homepage nav-card grid were both removed (2026-08-25) — the site owner does not plan to maintain a growing photo gallery.
- Image pipeline is pre-wired to specific filenames under `images/{hero,about,critters}/`. Some slots are already filled with real photos (hero, portrait, several study species); others (`about/portrait`, `critters/`) are still placeholder slots awaiting real photos.
- Terminology pairs common names with species names (e.g., "African jewelfish", *Stenaelurillus lesserti*) — keep this convention.

## Brand Commitments

- Identity: Pratush Brahma, rendered as "Pratush Brahma, PhD" in the nav mark.
- Standing tagline: "Behavioural ecology · evolution · natural history."
- No institutional branding constraints beyond the University of Florida affiliation being current and accurate.

## Evidence on Hand

- Real assets in the repo: CV (`Brahma_CV.pdf`), thesis draft (`Brahma_Pratush_Thesis.docx`), a manuscript in prep, two publication PDFs, two collaboration-project PDFs, and a resume.
- About-page stats currently claimed: 2 papers published, 5 manuscripts in prep. The homepage and About page's "countries worked in" stat was removed (2026-08-25). Keep these synced to reality as they change — do not round up or embellish.
- Real photography exists for the hero, portrait, and several study species (jewelfish, jumping spider, rock agamas). The `about/portrait` and `critters/` image slots are still unfilled placeholders — future work must not fabricate images for these gaps; leave the placeholder behavior intact until real photos are supplied.

## Product Principles

1. Credibility first — every claim, stat, and piece of evidence must be real and verifiable; the primary audience is hiring committees, not casual visitors.
2. One question, many systems — the throughline is "how do animals make decisions," not the reverse; content should keep reinforcing that unifying frame across disparate species.
3. Field-and-theory duality — preserve the framing of Pratush as working across both hands-on fieldwork and computational/theoretical modelling; neither should crowd out the other.
4. Low-friction self-maintenance — the site must stay editable by Pratush alone via plain text/HTML edits, without reintroducing a build step or a dependency he can't maintain solo.
5. Serves three audiences without forking — committees, collaborators, and the public should each find what they need without a separate site per audience.

## Accessibility & Inclusion

No project-specific requirement beyond the standard web accessibility practices already present in the codebase (skip link, `aria-label`/`aria-current`, alt-text conventions) — preserve these.
