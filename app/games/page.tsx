import type { Metadata } from 'next';
import MegaNav from '@/components/MegaNav';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';
import { upcomingGames, releasedGames, games } from '@/lib/games';
import { Sparkles, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Games · GTAVI.GUIDE',
  description:
    'Every trending game on PS5, Xbox Series, and PC — 20 released hits plus 10 upcoming releases. Pre-order guides, editions, news.',
  alternates: { canonical: '/games' },
};

export default function GamesIndexPage() {
  return (
    <main>
      <MegaNav />

      <section className="section pb-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
            GTAVI.GUIDE / All Games
          </div>
          <h1 className="display text-5xl sm:text-7xl text-white mt-3">
            Every <span className="text-gradient-pink">trending</span> game.
          </h1>
          <p className="mt-4 text-white/65 max-w-2xl">
            {games.length} games across the catalog — {releasedGames.length}{' '}
            currently-trending releases plus {upcomingGames.length} confirmed
            upcoming launches. PS5, Xbox Series, PC, Switch 2.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-5 w-5 text-neon-pink" />
            <h2 className="display text-3xl text-white">Upcoming</h2>
            <span className="ml-auto text-xs uppercase tracking-widest text-white/40">
              {upcomingGames.length} confirmed
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {upcomingGames.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="h-5 w-5 text-neon-cyan" />
            <h2 className="display text-3xl text-white">Released &amp; trending</h2>
            <span className="ml-auto text-xs uppercase tracking-widest text-white/40">
              {releasedGames.length} games
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {releasedGames.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
