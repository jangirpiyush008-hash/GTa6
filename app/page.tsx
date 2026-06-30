import MegaNav from '@/components/MegaNav';
import NewsTicker from '@/components/NewsTicker';
import Hero from '@/components/Hero';
import CharacterMoment from '@/components/CharacterMoment';
import { getAllNews, daysUntilGTAVI } from '@/lib/news-feed';
import EditionsComparison from '@/components/EditionsComparison';
import DeadlineBanner from '@/components/DeadlineBanner';
import MapSection from '@/components/MapSection';
import Gallery from '@/components/Gallery';
import Characters from '@/components/Characters';
import Timeline from '@/components/Timeline';
import GuideProduct from '@/components/GuideProduct';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  const news = getAllNews();
  const days = daysUntilGTAVI();
  return (
    <main className="relative">
      <MegaNav />
      <NewsTicker items={news} daysToVI={days} />

      <Hero />

      <CharacterMoment
        image="/images/gta/screenshot-2.jpg"
        kicker="Two protagonists · one love story"
        title="Jason. Lucia. Vice City."
        subtitle="A romantic crime spree across the State of Leonida. Switch protagonists mid-mission. Two skill trees, two pasts, one future."
        tone="pink"
        align="left"
      />

      <EditionsComparison />

      <DeadlineBanner />

      <CharacterMoment
        image="/images/gta/screenshot-4.jpg"
        kicker="The State of Leonida"
        title="A whole new map."
        subtitle="Six regions. Roughly twice the surface area of San Andreas. Modern Florida re-imagined under Rockstar neon."
        tone="cyan"
        align="right"
      />

      <MapSection />

      <Gallery />

      <CharacterMoment
        image="/images/gta/screenshot-3.jpg"
        kicker="Vice City returns"
        title="Bigger than 2002. Brighter than ever."
        subtitle="The same neon coast that defined a generation — rebuilt on a current-gen engine, with crowds, weather, and chaos at scale."
        tone="pink"
        align="left"
      />

      <Characters />

      <Timeline />

      <GuideProduct />

      <FAQ />

      <Footer />
    </main>
  );
}
