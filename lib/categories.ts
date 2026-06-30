/**
 * The 19 sub-categories every game page supports.
 * A game's `categoriesEnabled` array decides which are "deep" (real content)
 * vs. shown as "Coming soon" stubs in the navigation.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Book, Newspaper, Sparkles, Package, Image as ImageIcon, Map,
  Car, Crosshair, Users, PawPrint, ListChecks, Trophy,
  Home, Star, Gamepad2, Monitor, Brush, Video, Music,
} from 'lucide-react';

export type CategoryId =
  | 'overview' | 'news' | 'features' | 'editions' | 'screenshots'
  | 'map' | 'vehicles' | 'weapons' | 'characters' | 'animals'
  | 'missions' | 'activities' | 'properties'
  | 'cheats-ps5' | 'cheats-xbox' | 'cheats-pc'
  | 'artworks' | 'videos' | 'soundtrack';

export type Category = {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
  /** shown in the second column of the nav dropdown */
  column?: 1 | 2;
};

export const categories: Category[] = [
  { id: 'overview',    label: 'Overview',    icon: Book,        column: 1 },
  { id: 'news',        label: 'News',        icon: Newspaper,   column: 1 },
  { id: 'features',    label: 'Features',    icon: Sparkles,    column: 1 },
  { id: 'editions',    label: 'Game Editions', icon: Package,   column: 1 },
  { id: 'screenshots', label: 'Screenshots', icon: ImageIcon,   column: 1 },
  { id: 'map',         label: 'Map Locations', icon: Map,       column: 1 },
  { id: 'vehicles',    label: 'Vehicles',    icon: Car,         column: 1 },
  { id: 'weapons',     label: 'Weapons',     icon: Crosshair,   column: 1 },
  { id: 'characters',  label: 'Characters',  icon: Users,       column: 1 },
  { id: 'animals',     label: 'Animals',     icon: PawPrint,    column: 2 },
  { id: 'missions',    label: 'Missions',    icon: ListChecks,  column: 2 },
  { id: 'activities',  label: 'Activities',  icon: Trophy,      column: 2 },
  { id: 'properties',  label: 'Properties',  icon: Home,        column: 2 },
  { id: 'cheats-ps5',  label: 'Cheats PS5',  icon: Star,        column: 2 },
  { id: 'cheats-xbox', label: 'Cheats Xbox', icon: Gamepad2,    column: 2 },
  { id: 'cheats-pc',   label: 'Cheats PC',   icon: Monitor,     column: 2 },
  { id: 'artworks',    label: 'Artworks',    icon: Brush,       column: 2 },
  { id: 'videos',      label: 'Videos',      icon: Video,       column: 2 },
  { id: 'soundtrack',  label: 'Soundtrack',  icon: Music,       column: 2 },
];

export const categoriesById = Object.fromEntries(
  categories.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;
