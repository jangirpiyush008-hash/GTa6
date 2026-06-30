# @gtavi.guide — Instagram Content Strategy

A pre-launch playbook for building the audience that pre-orders through
your affiliate links and buys the $4.99 guide. Tuned for the 5 months
between now and **November 19, 2026**.

---

## 1. Positioning

**Who you are:** the dependable English-language source for GTA VI
pre-launch info. Not a leaker. Not a meme account. A clean, useful,
neon-branded reference feed.

**Why this works:**
- Hardcore leak accounts get suspended.
- Meme accounts plateau because they have nothing to sell.
- A guide-style account converts to affiliate clicks and PDF sales.

**Voice:** direct, opinionated, no hype words. "Here is what changes,
here is what doesn't, here is what to do." Never use words like
*insane*, *crazy*, or *mind-blowing*.

---

## 2. Content pillars (use ~40 / 35 / 25 split)

| Pillar              | % of feed | Format                          | Goal                       |
| ------------------- | --------- | ------------------------------- | -------------------------- |
| **Pre-order guide** | 40 %      | Carousels, comparisons, lists   | Affiliate clicks           |
| **News + facts**    | 35 %      | Headline cards, countdown stickers | Authority + saves        |
| **Deep dives**      | 25 %      | Long carousels, quote cards     | Profile follows, link-in-bio traffic |

Avoid: leaks, rumours, AI-generated character faces, anything that
risks a Take-Two DMCA. Stay in the editorial / commentary lane.

---

## 3. Posting cadence

5 posts per week works. Don't do daily — the algorithm punishes empty
posts more than it punishes gaps.

| Day | Slot | Format                                   |
| --- | ---- | ---------------------------------------- |
| Mon | 7 PM IST / 9 AM EST | News headline card             |
| Tue | 7 PM IST            | Carousel deep dive             |
| Wed | 7 PM IST            | Comparison card (PS5/Xbox or editions) |
| Thu | 7 PM IST            | Countdown sticker (Reel-ready) |
| Fri | 7 PM IST            | CTA card — pre-order push, link in bio |
| Sat | —                   | Repost top story to Stories    |
| Sun | —                   | Engage in comments only        |

Always cross-post Stories ~30 min after the feed post hits. Engagement
in the first hour decides reach for the next 24 hours.

---

## 4. Templates already built (in `/studio`)

All cards live at `http://localhost:3000/studio` once dev is running.
Open any card → "Screenshot this" → posts ready in seconds.

| Template       | Best for                                              |
| -------------- | ----------------------------------------------------- |
| **Headline**   | "X happens on Y date" news bites with image background |
| **Comparison** | Standard vs Ultimate, PS5 vs Xbox                      |
| **List**       | "6 regions in 1 map", "What you get for $80"          |
| **Quote**      | Editorial verdict (our take on Ultimate worth it, etc.) |
| **Countdown**  | Days-until-launch sticker (auto-computed)              |
| **CTA**        | Pre-order push, link-in-bio reminder                   |
| **Cover**      | First slide of every carousel                          |

Add new posts by editing `lib/ig-cards.ts` — they appear in the
studio automatically.

---

## 5. The 30-post pre-launch plan

### Week 1 — Authority
1. **HEADLINE** · "GTA VI launches November 19, 2026" — release date stamp post
2. **CAROUSEL (6)** · "5 things you MUST know before pre-ordering"
3. **COMPARISON** · "Standard vs Ultimate"
4. **COUNTDOWN** · Days remaining sticker
5. **QUOTE** · "If you played 200 hours of GTA V…"

### Week 2 — Map + world
6. **HEADLINE** · "The State of Leonida = Florida-sized open world"
7. **CAROUSEL (7)** · "Leonida map — 6 regions in 7 slides"
8. **LIST** · "6 regions in the new GTA VI map"
9. **HEADLINE** · "Vice City returns — and it's bigger than 2002"
10. **COMPARISON** · "GTA V map vs GTA VI map" (size + scope)

### Week 3 — Editions deep dive
11. **CAROUSEL (5)** · "Standard vs Ultimate — line by line"
12. **HEADLINE** · "The Vintage Vice City Pack disappears Nov 19"
13. **LIST** · "Every Vintage Vice City Pack item"
14. **COMPARISON** · "Physical vs digital — physical is a code"
15. **CTA** · "Pre-order today — link in bio"

### Week 4 — Characters + story
16. **HEADLINE** · "Jason + Lucia: first playable couple in GTA"
17. **CAROUSEL (4)** · "What we know about Jason Duval"
18. **CAROUSEL (4)** · "What we know about Lucia Caminos"
19. **QUOTE** · "GTA VI is a love story disguised as a crime story"
20. **HEADLINE** · "You can switch protagonists mid-mission"

### Week 5 — PC / console
21. **HEADLINE** · "GTA VI on PC — when, realistically?"
22. **COMPARISON** · "PS5 vs Xbox Series X"
23. **LIST** · "Best gaming setup recs for GTA VI"
24. **QUOTE** · "For most players the difference is invisible"
25. **CTA** · "Console picker — link in bio"

### Week 6+ — Repeat with fresh data
26. **COUNTDOWN** · Refresh days remaining (re-export)
27. **HEADLINE** · "Reaction to the latest Rockstar trailer / drop"
28. **CAROUSEL (6)** · "Day 1 checklist — what to do first"
29. **HEADLINE** · "GTA V vs GTA VI — 10 things that changed"
30. **CTA** · Final pre-order push 7 days before launch

---

## 6. Caption formula

A caption that converts on this account looks like this:

```
HOOK            (1 line, under 60 chars — most readers see only this)
EMPTY LINE
BODY            (3–5 short lines, the actual info)
EMPTY LINE
CTA             (1 line, tells them what to do)
EMPTY LINE
HASHTAGS        (8–12 tags, mix big + niche)
```

### Example — release-date card

```
GTA VI is locked in for November 19, 2026.

PS5 and Xbox Series X|S only at launch.
No PC. No prior-gen. Pre-orders are live now.

Full edition breakdown + map guide — link in bio.

#GTAVI #GTA6 #VICECITY #GTA6PREORDER
#PS5 #XBOXSERIESX #ROCKSTARGAMES
#GTAVICITY #GTANEWS #LEONIDA
```

### Example — Standard vs Ultimate comparison

```
Standard $79.99 vs Ultimate $99.99 — which one?

If you'll log 200+ hours, Ultimate pays for itself.
6 exclusive vehicles + 4 exclusive weapons +
the PTT Youngin$ side mission never come back.

Save this post for launch day.

#GTAVIULTIMATE #GTA6EDITIONS #GTA6
#GTAVI #PREORDER #VICECITY #PS5GAMES
#XBOXSERIESX #GAMINGNEWS #GTAGUIDE
```

---

## 7. Hashtag sets (rotate, don't repeat)

### Big-tag set (millions of posts, low conversion)
`#GTA6 #GTAVI #ROCKSTARGAMES #VICECITY #PS5 #XBOXSERIESX`

### Mid-tag set (best conversion zone, 50k–500k)
`#GTA6news #GTA6trailer #GTAVIRelease #GTA6Map #LeonidaState
#GTA6Online #Jason #Lucia #GTASeries`

### Niche-tag set (small but hot audience)
`#GTA6preorder #GTAVIUltimate #VintageViceCity #GTAGuide
#GTAcommunity #GTA6day1 #GTA6countdown`

**Rule:** every post = 4 big + 4 mid + 4 niche. Never repeat the same
12-tag block two posts in a row — Instagram flags it.

---

## 8. Stories — daily, fast

Stories don't need a designed card. Use these formats native to IG:

- **Polls** — "Standard or Ultimate?" / "PS5 or Xbox?"
- **Countdown sticker** — pinned to Nov 19, 2026 launch
- **Question box** — "What do you want explained next?"
- **Repost** — your latest feed post, with one extra line of context
- **Link sticker** — direct to `gtavi.guide/blog/<post>` for the
  longer write-up

Aim for **3–5 stories per day**. They build the daily ritual the feed
can't.

---

## 9. Reels (optional, high ceiling)

You don't need them for v1. When you're ready:

- 7–15 second loops of a card animating in (recordable from `/studio`)
- Voiceover-free, music-driven
- One bold caption overlay matching the card

Use Reels for the **countdown** and the **CTA** posts only — those
have the simplest visual hook.

---

## 10. Setup checklist

- [ ] Instagram Business or Creator account on `@gtavi.guide`
- [ ] Link in bio: a Linktree or short page with **3 links**:
      1. Pre-order GTA VI (your `LINKS.standard`)
      2. Read the full guide (`gtavi.guide/blog`)
      3. Get the $4.99 PDF (`LINKS.guide`)
- [ ] First 9 grid posts shot before launching the account — never
      launch with a half-empty grid
- [ ] Saved Stories highlight: "Pre-order", "Editions", "Map",
      "FAQ" — covers should match your brand colours
- [ ] Verified email + 2FA on the account
- [ ] Disclosure in bio: "Fan account · contains affiliate links"

---

## 11. Exporting cards to PNG

```bash
# one-time setup
npm install --save-dev puppeteer

# run dev server in one terminal
npm run dev

# in another terminal — export all cards to public/exports/ig/*.png
npm run export-ig

# export a single card
npm run export-ig -- --only=release-date-hard-locked

# if dev runs on a non-default port
PORT=3737 npm run export-ig
```

Files land in `public/exports/ig/` and are sized exactly 1080×1080
(square) or 1080×1350 (portrait). Upload straight to Instagram.

---

## 12. Measuring what works

Once you have 200+ followers, track these every Sunday in a one-line
note (not a spreadsheet — that's a procrastination trap):

| Metric                  | Target after 4 weeks   |
| ----------------------- | ---------------------- |
| Followers               | 500+                   |
| Avg saves per post      | 25+                    |
| Avg shares per post     | 8+                     |
| Link-in-bio clicks/week | 50+                    |
| Pre-order conversions   | First commission lands |
| Top-performing template | (let the data tell you) |

After 4 weeks, **double down on the single template that performed
best**. Drop the worst-performing one. Repeat monthly. That's the
whole game.
