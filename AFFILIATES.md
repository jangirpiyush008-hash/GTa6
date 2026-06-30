# Updating Affiliate Links

All affiliate links on GTAVI.GUIDE live in **one** file:

> [`lib/links.ts`](lib/links.ts)

Change them there and every button, banner, and CTA across the site updates automatically. No grep needed, no per-file edits.

---

## TL;DR — the 5 placeholders

| Key in `lib/links.ts` | Where it appears                                                                 | Default value                |
| --------------------- | -------------------------------------------------------------------------------- | ---------------------------- |
| `standard`            | Hero "Pre-order Now" button, Editions card, Deadline banner, Blog inline CTA     | `#affiliate-standard`        |
| `ultimate`            | Editions "Recommended" card, Blog inline CTA                                     | `#affiliate-ultimate`        |
| `ps5`                 | Reserved for future use (PS5 console affiliate)                                  | `#affiliate-ps5`             |
| `xbox`                | Reserved for future use (Xbox Series X affiliate)                                | `#affiliate-xbox`            |
| `guide`               | Hero "Get the Full Guide" button, GuideProduct section, Blog inline CTA          | `https://gumroad.com/l/gtavi-guide` |

---

## Step-by-step

### 1. Open the central links file
```bash
code lib/links.ts
```
or via your editor — same path either way.

### 2. Sign up for the relevant programs
Most-used options for game pre-orders (pick what you’re approved for):

| Program                  | Sign-up                                              | Cookie | Typical commission |
| ------------------------ | ---------------------------------------------------- | ------ | ------------------ |
| **Amazon Associates**    | https://affiliate-program.amazon.com                 | 24h    | 1–4 % (games)      |
| **PlayStation Direct**   | via Rakuten Advertising / Impact                     | 1–14d  | 1–3 %              |
| **Microsoft / Xbox**     | via Awin                                             | 7d     | 1–5 %              |
| **Best Buy**             | via Impact                                           | 1d     | 0.5–2 %            |
| **Green Man Gaming**     | via Awin                                             | 30d    | 5–10 % (PC titles) |
| **GameStop**             | via Impact                                           | 1d     | 1–4 %              |
| **Gumroad** (the guide)  | https://gumroad.com — no affiliate, you sell direct  | n/a    | 100 % minus fees   |

### 3. Generate your tagged URLs
Each program gives you a link generator. Examples:

```text
# Amazon
https://www.amazon.com/dp/B0XXXXXXXX/?tag=YOURTAG-20

# Best Buy via Impact
https://www.bestbuy.com/site/PRODUCT-ID?irclickid=...&irpid=...

# Microsoft via Awin
https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=YYYY&p=PRODUCT-URL
```

### 4. Replace the placeholder strings
Open `lib/links.ts` and paste your URLs in:

```ts
export const LINKS = {
  standard: 'https://www.amazon.com/dp/B0CHEEXAMPLE/?tag=gtaviguide-20',
  ultimate: 'https://www.amazon.com/dp/B0CHEEXAMPLE2/?tag=gtaviguide-20',
  ps5:      'https://www.amazon.com/dp/B0BCNKKZ91/?tag=gtaviguide-20',
  xbox:     'https://www.amazon.com/dp/B08H75RTZ8/?tag=gtaviguide-20',
  guide:    'https://gumroad.com/l/gtavi-guide',   // your real Gumroad slug
};
```

> **Tip:** keep `?tag=…` (or whatever the program uses) intact when you copy. Stripping it strips your commission.

### 5. Rebuild and preview
```bash
npm run dev    # http://localhost:3000  ← verify clicks open the right product
npm run build  # production build
```

That's it. No code changes anywhere else — every CTA on every page now points to the new URL.

---

## Adding **new** links

If you want a *new* CTA (say, a "Pre-order on Best Buy" button):

1. Add a key to `LINKS`:
   ```ts
   export const LINKS = {
     ...,
     standardBestBuy: 'https://www.bestbuy.com/...&irclickid=...',
   };
   ```
2. Use it in any component:
   ```tsx
   import { LINKS } from '@/lib/links';

   <a href={LINKS.standardBestBuy} className="btn btn-pink">Buy on Best Buy</a>
   ```

---

## A/B testing different programs

If you want to test which retailer converts best, swap a single `href` and watch the click-through rate in your affiliate dashboard. Run for 7 days minimum. Don't change two variables at once.

A simple split: send half your traffic to Amazon, half to PlayStation Direct, by varying only the `standard` URL in `lib/links.ts` and watching the side-by-side commission reports.

---

## Disclosure requirements

The FTC (US) and ASA (UK) both require visible affiliate disclosure. The footer on every page of GTAVI.GUIDE already includes:

> *This site contains affiliate links. We may earn a commission if you purchase through our links at no extra cost to you.*

Don't remove it. If you launch in new geographies (Germany, India, Australia), check local disclosure laws and update the footer language in [`components/Footer.tsx`](components/Footer.tsx).

---

## Tracking conversions

By default, links are plain anchor tags. To track clicks before they hit the affiliate URL:

### Option A — UTM tagging on the affiliate URL
Append `?utm_source=gtaviguide&utm_medium=hero_cta` so your analytics tool counts each click. Amazon strips UTMs, but Impact, Awin, and Rakuten preserve them as sub-IDs.

### Option B — Client-side event before redirect
Wrap each CTA in a small handler that fires a Plausible / PostHog event, then navigates:

```tsx
'use client';
import { LINKS } from '@/lib/links';

function track(name: string, href: string) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(name, { props: { href } });
  }
}

<a
  href={LINKS.standard}
  onClick={() => track('pre_order_standard_click', LINKS.standard)}
  className="btn btn-pink"
>
  Pre-order Standard
</a>
```

---

## Quick checklist before going live

- [ ] All 5 placeholders in `lib/links.ts` replaced with real tagged URLs
- [ ] `npm run build` passes with no errors
- [ ] Click each CTA in `npm run dev` — confirm it opens the right product and your tag is in the URL
- [ ] First test commission lands in your affiliate dashboard (usually 24–72h)
- [ ] Footer disclosure is still visible at the bottom of every page
- [ ] `robots.txt` and `sitemap.xml` allow indexing of `/blog/*` (add a sitemap before launch)
