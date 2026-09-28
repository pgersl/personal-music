---
name: write-work-article
description: Write the English and Czech article for a composition on music.pgersl.xyz (content/{en,cs}/works/**). Use when Petr adds a new piece, asks to write/rewrite the text for a work or opus number, or answers the work questionnaire.
---

# Writing a work article

Every composition page on the site carries a short first-person article by Petr about the piece. You write it from his answers to a questionnaire. The goal is a text that sounds like Petr talking about his music, not like AI-written program notes.

## Workflow

1. **Find the piece.** Locate the EN and CS files (`content/en/works/<category>/<Title>.md`, `content/cs/works/<category>/<Title>.md`). Read the front matter: opus, title, `length`, `show` (scoring), `written`, `audioTracks` (movements), `date`. If the files don't exist yet, copy the front matter shape from a neighbouring work and ask Petr for the missing facts.
2. **Send the questionnaire** (below), with the facts pre-filled and the required questions tailored to the piece: name the obvious precedents, the source material, related works in his catalogue. One message, no preamble.
3. **Draft the English article** in chat from his answers. Don't write to files yet.
4. **List only real open questions** under the draft: facts you had to assume, things you added that he didn't say (a quoted text, a historical detail, a date coincidence), style calls. Verify factual claims about other composers' works before stating them; if unsure, phrase around it and flag it.
5. **Revise** until he approves. Expect feedback on tone and on paragraph order.
6. **Write the Czech version.** It is not a line-by-line translation. Write it as natural Czech with the same content and tone, using Czech idioms where English ones don't carry over. Czech readers don't need translations of Czech texts (e.g. a quoted chorale line).
7. **Write both files.** Append the body after the front matter. Then run `hugo --quiet -d <scratchpad>/hugo-check` and confirm the build is clean and internal links resolve.
8. Show Petr the Czech text or point him to the file. Commit only when he asks.

## The questionnaire

Petr answers in any form (bullets, fragments, Czech or English, one long paragraph). Rough is fine; you do the writing.

**Facts** (pre-filled from front matter; he corrects): opus, title, duration, scoring, year, movements.

**Required**
1. **Spark.** What started it: an image, an event, a listening experience, a motif, an improvisation, a commission?
2. **What it's about.** A story, a program, a mood, or pure music?
3. **How it goes.** Walk through it roughly in order: sections, keys, themes, what happens where, what each instrument group does.
4. **One moment.** Which passage or decision would he point a listener to, and why?
5. **Influences.** Composers and specific works, including direct quotations.

**Optional** (this is where the human material comes from; always ask)
6. **Process.** What was hard, what almost failed, what did he compromise on, what surprised him?
7. **Anything incidental.** How the title came about, where he was, who was involved, how long it took.
8. **Place in the catalogue.** A farewell to a style, a first attempt, a link to another of his works?
9. **Anything else.**
10. **Vocal works: the text.**

If his answer leaves gaps that matter for the article (e.g. an instrument named in the scoring that he never mentions), ask about them in one short list. Don't ask for things the article doesn't need.

## Structure

Paragraphs follow one arc. Don't jump between topics.

1. **The spark.** How the piece began, told concretely.
2. **The source and context.** What the piece is built on or responds to, and how Petr's approach differs from others'. Set up anything the ending will pay off here (e.g. the chorale's words, which later justify a major-key ending).
3. **The walk through the music**, in order: opening, themes, sections, keys, instrumentation, the named influences where they appear. Don't interrupt it with side context.
4. **The ending, and why.** The key moment and his reasoning, merged into one argument.
5. **A short close.** Process and/or place in the catalogue. Plain, factual, no summarising flourish.

Short pieces compress this to one or two paragraphs; keep the order.

## Length

Scale to the piece's duration. These are guides; if he has a lot to say, let it run.

| Duration | Target |
|---|---|
| Under 3' | 60–150 words, 1–2 paragraphs |
| 3–10' | 200–400 words |
| 10–20' | 400–700 words |
| 20'+ or multi-movement | 600–1,000 words; may go movement by movement |

## Voice

First person. Knowledgeable but not academic: name keys, forms and techniques, and say what they do. Open about influences and quotations. A little poetic: the imagery comes from the music itself (a line "slowly sinking under the melody", "great blocks of sound", "the harmony laid bare"), never from stock phrases.

**Keep what sounds like Petr.** Concrete, slightly casual, willing to admit things:
- His sister naming *Three Rooms* in passing.
- "So I bought it." (the *Bouquet* drawing)
- *The Christmas Waltz* "kept me up at night."
- Nearly abandoning the last two movements of *Three Rooms*.
- The poem "I haven't read and frankly don't care much about."
- "The muse had other ideas."

Use his own words and turns of phrase from the answers where they work. Never invent anecdotes, feelings or plans he didn't mention.

**Avoid (these read as AI):**
- Em dashes. Use commas, colons, full stops, or semicolons instead.
- Groups of three ("the golden haze…, the gentle shimmer…, and the slow warmth…").
- "Not X, but Y" / "less X than Y" setups.
- Duality endings ("between light and shadow, sound and silence").
- A neat aphorism closing every paragraph.
- Stock words: *unfolds, resonate, invitation, profound, meticulous, tapestry, journey, testament, evoke, "In the end,"*.
- Praise with nothing behind it ("whose brilliance continues to spark creativity").
- Opening with "*Title* is a…" by default. Start with the spark instead.

The 2025–2026 texts on the site (Op. 38–52) show the content and structure Petr wants, but most were AI-written. Use them for what to say, not how to say it.

## Style

- Titles of works in italics, including the piece's own title: *Te Deum*, *Crown Imperial*.
- Keys in words: G minor, B-flat, C-sharp minor (not ♭/♯). Czech: g moll, G dur, b, cis moll.
- Proper names in full on first mention: Francis Poulenc, William Walton.
- British spelling (reharmonisation, colour, modelled).
- Straight apostrophes are fine; be consistent within a piece.
- Internal links to Petr's other works: EN `/en/works/<category>/<slug>`, CS `/works/<category>/<slug>` (no `/cs` prefix). Slug is the lower-cased, hyphenated filename (`Te Deum.md` → `te-deum`). Link when you mention one of his works.
- Vocal works end with `**Text**:` and the full text in italics, lines ending with `\`, stanzas separated by blank lines (see `content/en/works/vocal/Te Deum.md`).

## Reference example

`content/en/works/orchestral/Fantasy on Saint Wenceslas Chorale.md` (Op. 53, 11') and its Czech counterpart are the first articles written with this process and approved by Petr. Read both before drafting. Match their tone, arc and density.
