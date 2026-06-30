import { HelpCircle } from 'lucide-react';
import { faqLd, jsonLdScript, type FAQ } from '@/lib/jsonld';

/**
 * Renders an accordion-style FAQ list AND emits the FAQPage JSON-LD.
 *
 * SEO win: FAQ rich-result snippets in Google search.
 * GEO win: AI engines (ChatGPT / Perplexity / Claude) cite these answers
 *   directly because they are structured Q&A with factual prose.
 */
export default function FAQSection({
  title = 'Frequently asked questions',
  faqs,
  accent = '#FF006E',
}: {
  title?: string;
  faqs: FAQ[];
  accent?: string;
}) {
  if (!faqs?.length) return null;
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container-x px-5">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-5 w-5" style={{ color: accent }} />
          <div className="text-xs uppercase tracking-[0.35em]" style={{ color: accent }}>
            FAQ · most-searched questions
          </div>
        </div>
        <h2 id="faq-title" className="display text-3xl sm:text-5xl text-white leading-tight">
          {title}
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group glass rounded-xl border border-white/10 px-5 py-4 open:border-white/30 transition"
            >
              <summary
                className="cursor-pointer list-none flex items-start gap-3 text-white text-base sm:text-lg font-semibold"
              >
                <span
                  className="mt-1 h-2 w-2 rounded-full shrink-0"
                  style={{ background: accent }}
                />
                <span className="flex-1">{f.q}</span>
                <span
                  className="text-white/40 group-open:rotate-45 transition"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/75 leading-relaxed pl-5">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd(faqs)) }}
      />
    </section>
  );
}
