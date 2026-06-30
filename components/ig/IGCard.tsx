import type { IGCard as IGCardType } from '@/lib/ig-cards';
import HeadlineCard from './cards/HeadlineCard';
import ComparisonCard from './cards/ComparisonCard';
import ListCard from './cards/ListCard';
import QuoteCard from './cards/QuoteCard';
import CountdownCard from './cards/CountdownCard';
import CtaCard from './cards/CtaCard';
import CoverCard from './cards/CoverCard';

export default function IGCard({ card }: { card: IGCardType }) {
  switch (card.type) {
    case 'headline':   return <HeadlineCard card={card} />;
    case 'comparison': return <ComparisonCard card={card} />;
    case 'list':       return <ListCard card={card} />;
    case 'quote':      return <QuoteCard card={card} />;
    case 'countdown':  return <CountdownCard card={card} />;
    case 'cta':        return <CtaCard card={card} />;
    case 'cover':      return <CoverCard card={card} />;
    default:           return <HeadlineCard card={card} />;
  }
}
