/**
 * Full deep content for Red Dead Redemption 2 — all 18 categories.
 *
 * Names, dates, prices, codes: factual public data.
 * All intros, descriptions, and one-line summaries: original commentary.
 */

import type { GameContent } from './types';

const content: GameContent = {

  /* ───────── EDITIONS ───────── */
  editions: {
    intro:
      'Rockstar shipped three editions at launch in October 2018. The Special and Ultimate tiers bundled extra single-player content + Online bonuses. As of 2026, the cheapest digital path on PS5/Xbox is the Standard re-issue.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 59.99,
        bullets: [
          'Full single-player campaign',
          'Access to Red Dead Online (sunset for new updates)',
          'Available digitally and as a 2-disc physical release',
        ],
      },
      {
        name: 'Special Edition',
        priceUSD: 79.99,
        bullets: [
          'Everything in Standard',
          'Bank Robbery and Gang Hideout missions in single player',
          'Nuevo Paraiso Gunslinger Outfit',
          'Dappled Black Thoroughbred + War Horse',
          'Talisman and Medallion gameplay bonuses',
          'Free upgrade to a select handgun, repeater, and shotgun',
        ],
      },
      {
        name: 'Ultimate Edition',
        priceUSD: 99.99,
        recommended: true,
        bullets: [
          'Everything in Special',
          '15 ranks of Red Dead Online progression boost',
          'Black Chestnut Thoroughbred + High Roller saddle',
          'Two Online outfits (Blackrose Bounty Hunter + Copperhead Enforcer)',
          'Survivor Camp Theme',
          'Free access to additional Online weapons',
        ],
      },
    ],
    notes: [
      'No PS5/Xbox-Series-X native version yet — runs via backward compatibility with patched performance modes.',
      'A PC port shipped in 2019 via Rockstar Launcher, Epic, and Steam.',
    ],
  },

  /* ───────── CHARACTERS ───────── */
  characters: {
    intro:
      'The Van der Linde gang at the time of RDR 2 has around 20 members traveling together. Below are the principal cast you will spend the most time with as Arthur (and later, John).',
    roster: [
      { name: 'Arthur Morgan',     role: 'Senior gang member · primary protagonist for the main campaign.' },
      { name: 'John Marston',      role: 'Junior gang member · playable in the Epilogue (and RDR 1).' },
      { name: 'Dutch van der Linde', role: 'Gang founder and ideological leader · slowly unraveling.' },
      { name: 'Hosea Matthews',    role: 'Co-founder and the gang\'s strategist · Dutch\'s oldest friend.' },
      { name: 'Sadie Adler',       role: 'Widow who joins the gang after her ranch is destroyed.' },
      { name: 'Charles Smith',     role: 'Tracker and hunter · part Native American, part African American.' },
      { name: 'Micah Bell',        role: 'New recruit whose influence over Dutch grows through the story.' },
      { name: 'Bill Williamson',   role: 'Ex-Army enforcer · later the antagonist of RDR 1.' },
      { name: 'Javier Escuella',   role: 'Mexican revolutionary in exile · loyal to Dutch.' },
      { name: 'Lenny Summers',     role: 'The gang\'s youngest sharpshooter · educated and quick-witted.' },
      { name: 'Sean MacGuire',     role: 'Irish thief and the camp\'s comic relief.' },
      { name: 'Karen Jones',       role: 'Con artist who runs distraction jobs.' },
      { name: 'Tilly Jackson',     role: 'Reformed gang member · works the camp and the laundry.' },
      { name: 'Mary-Beth Gaskill', role: 'Pickpocket and aspiring novelist.' },
      { name: 'Susan Grimshaw',    role: 'Camp matriarch · runs day-to-day discipline.' },
      { name: 'Reverend Swanson',  role: 'The gang\'s alcoholic preacher · a slow redemption arc.' },
      { name: 'Pearson',           role: 'Camp cook and former Navy man.' },
      { name: 'Uncle',             role: 'Permanent free-loader · returns in RDR 1.' },
      { name: 'Abigail Roberts',   role: 'John Marston\'s wife · former camp partner.' },
      { name: 'Jack Marston',      role: 'John and Abigail\'s son · the future RDR 1 antagonist target.' },
    ],
  },

  /* ───────── WEAPONS ───────── */
  weapons: {
    intro:
      'RDR 2 ships with one of the most extensive weapon rosters in any Rockstar game. Below is the launch loadout grouped by class — DLC and Online added a handful more.',
    groups: [
      {
        name: 'Sidearms',
        items: [
          'Cattleman Revolver', 'Double-Action Revolver', 'Schofield Revolver',
          'Volcanic Pistol', 'Mauser Pistol', 'Semi-Automatic Pistol',
          'LeMat Revolver', 'Navy Revolver',
        ],
      },
      {
        name: 'Repeaters & Rifles',
        items: [
          'Carcano Rifle', 'Bolt-Action Rifle', 'Springfield Rifle',
          'Rolling Block Rifle', 'Litchfield Repeater', 'Lancaster Repeater',
          'Henry Repeater', 'Winchester Repeater', 'Evans Repeater',
        ],
      },
      {
        name: 'Shotguns',
        items: [
          'Double-Barreled Shotgun', 'Sawed-Off Shotgun', 'Pump-Action Shotgun',
          'Repeating Shotgun', 'Semi-Automatic Shotgun',
        ],
      },
      {
        name: 'Melee & Throwables',
        items: [
          'Hunting Knife', 'Hatchet', 'Tomahawk', 'Throwing Knife',
          'Dynamite', 'Molotov Cocktail', 'Fire Bottle',
        ],
      },
    ],
  },

  /* ───────── VEHICLES ───────── */
  vehicles: {
    intro:
      'Horses are the primary vehicle in RDR 2. Below are the 19 horse breeds plus the wheeled, watercraft, and rare automobile options that show up across the campaign.',
    groups: [
      {
        name: 'Horse Breeds — Race / Riding',
        items: [
          'Arabian', 'Thoroughbred', 'Turkoman', 'Tennessee Walker',
          'Kentucky Saddler', 'Missouri Fox Trotter', 'Mustang',
          'American Standardbred', 'Morgan', 'Nokota',
        ],
      },
      {
        name: 'Horse Breeds — Draft / Work',
        items: [
          'Shire', 'Suffolk Punch', 'Belgian Draft', 'Ardennes',
          'Percheron', 'Dutch Warmblood', 'Norfolk Roadster',
          'Hungarian Half-bred', 'American Paint',
        ],
      },
      {
        name: 'Coaches & Wagons',
        items: [
          'Stagecoach', 'Armored Stagecoach', 'Funeral Coach',
          'Open-Top Wagon', 'Box Wagon', 'Oil Wagon', 'Prison Wagon',
        ],
      },
      {
        name: 'Boats',
        items: [
          'Pirogue (small swamp boat)', 'Rowboat', 'Tugboat (cutscene only)',
        ],
      },
      {
        name: 'Trains & Automobiles',
        items: [
          'Steam Locomotive (rideable + robbable)',
          'Mine Cart',
          'Ford Model T-style automobile (Epilogue only)',
        ],
      },
    ],
  },

  /* ───────── ANIMALS ───────── */
  animals: {
    intro:
      'RDR 2 has one of the deepest wildlife systems in any open-world game — roughly 200 species across mammals, birds, fish, and reptiles. Below is the canon roster grouped by class, plus the 16 Legendary hunting targets.',
    groups: [
      {
        name: 'Large Game',
        items: [
          'White-tailed Deer', 'Whitetail Buck', 'Bull Elk', 'Pronghorn Buck',
          'Bighorn Sheep', 'American Bison', 'Boar', 'Goat',
        ],
      },
      {
        name: 'Predators',
        items: [
          'Black Bear', 'Grizzly Bear', 'Cougar', 'Wolf', 'Coyote',
          'Jaguar', 'Panther', 'Fox', 'Alligator',
        ],
      },
      {
        name: 'Small Game',
        items: [
          'Rabbit', 'Beaver', 'Raccoon', 'Skunk', 'Opossum', 'Squirrel',
          'Armadillo', 'Muskrat', 'Iguana', 'Snake',
        ],
      },
      {
        name: 'Birds',
        items: [
          'Bald Eagle', 'Red-tailed Hawk', 'Great Horned Owl',
          'American White Pelican', 'Great Blue Heron',
          'Mallard Duck', 'Canada Goose', 'Wild Turkey', 'Cardinal', 'Songbirds',
        ],
      },
      {
        name: 'Fish',
        items: [
          'Bluegill', 'Bullhead Catfish', 'Largemouth Bass',
          'Smallmouth Bass', 'Northern Pike', 'Muskie',
          'Sockeye Salmon', 'Steelhead Trout', 'Lake Sturgeon',
        ],
      },
      {
        name: 'Legendary Animals',
        items: [
          'Legendary Bharati Grizzly Bear', 'Legendary Buck',
          'Legendary Iguazu Cougar', 'Legendary Elk',
          'Legendary White Bison', 'Legendary Tatanka Bison',
          'Legendary Beaver', 'Legendary Wakpa Boar',
          'Legendary Wolf', 'Legendary Pronghorn',
          'Legendary Coyote', 'Legendary Moose',
          'Legendary Fox', 'Legendary Alligator',
          'Legendary Panther (Giaguaro)', 'Legendary Ram',
        ],
      },
    ],
  },

  /* ───────── MAP ───────── */
  map: {
    intro:
      'The world of RDR 2 spans five fictional U.S. states and one Mexican border region. Each has its own biome, towns, and side content.',
    regions: [
      { name: 'New Hanover',     desc: 'Industrial heartland with Valentine and Annesburg.' },
      { name: 'West Elizabeth',  desc: 'Plains and woods around Strawberry, leading into the RDR 1 territory.' },
      { name: 'Lemoyne',         desc: 'Bayou country south of Saint Denis — voodoo, gators, and old money.' },
      { name: 'New Austin',      desc: 'Desert south accessible mostly in the Epilogue · entirely the RDR 1 map.' },
      { name: 'Ambarino',        desc: 'Snow-capped mountains of Grizzlies East and West.' },
      { name: 'Guarma',          desc: 'A tropical Caribbean detour from one of the main campaign chapters.' },
    ],
  },

  /* ───────── NEWS ───────── */
  news: {
    intro:
      'Major dated milestones from launch onward. Sourced from public release schedules and official Rockstar Newswire posts.',
    entries: [
      { date: '2018-10-26', title: 'Launch on PS4 and Xbox One',
        desc: 'Day-one reviews land between 96–99/100. Sells 17M copies in two weeks.' },
      { date: '2018-11-27', title: 'Red Dead Online beta opens',
        desc: 'Phased access to Ultimate Edition buyers first, then everyone.' },
      { date: '2019-05-14', title: 'Red Dead Online leaves beta',
        desc: 'Becomes a standalone purchase later in the year.' },
      { date: '2019-11-05', title: 'PC version ships',
        desc: 'Rockstar Launcher and Epic Games Store first; Steam follows December.' },
      { date: '2020-07-13', title: 'Outlaw Pass system goes live',
        desc: 'Battle-pass-style seasonal progression in Online.' },
      { date: '2022-07-13', title: 'Final major Online content drop',
        desc: 'Rockstar confirms the development team is pivoting to GTA VI.' },
      { date: '2024-12-12', title: 'PS5 / Xbox Series enhanced patch',
        desc: 'Native 60fps performance mode added free for existing owners.' },
      { date: '2026-06-25', title: 'Cross-promotion bundle with GTA VI pre-orders',
        desc: 'Rockstar runs a limited Twitch drops campaign tying both titles together.' },
    ],
  },

  /* ───────── FEATURES ───────── */
  features: {
    intro:
      'The systems that define the RDR 2 experience — the Honor meter, Dead Eye, camp economy, and the wildlife/crafting loop are what reviewers keep coming back to.',
    entries: [
      { title: 'Honor System',
        desc: 'Visible meter that shifts with every action; affects prices, missions, and endings.' },
      { title: 'Dead Eye',
        desc: 'Time-slowing aim system with 4 upgrade levels unlocked through story beats.' },
      { title: 'Camp Management',
        desc: 'Donate cash, food, and supplies; upgrade lodging, ammo, and medicine for the gang.' },
      { title: 'Crafting',
        desc: 'Cook meat at campfires, brew tonics from herbs, craft ammo and weapon-grade items.' },
      { title: 'Hunting & Skinning',
        desc: 'Animal quality (pristine / good / poor) determines hide value and crafting use.' },
      { title: 'Horse Bonding',
        desc: '4 bonding levels unlock new tricks, faster stamina recovery, and combat behaviors.' },
      { title: 'First-Person Mode',
        desc: 'Full-game switchable first-person view including cinematic horseback travel.' },
      { title: 'Cinematic Camera',
        desc: 'Auto-pilot wide-shot mode for traveling long distances on horseback.' },
      { title: 'Photo Mode',
        desc: 'Postcard-style filters, focal-length adjustments, and quick share.' },
      { title: 'Wanted System',
        desc: 'Per-region bounties · pay off, escape, or get hunted by lawmen and bounty agents.' },
      { title: 'Random Encounters',
        desc: 'Roughly 200 unique scripted world encounters — strangers, ambushes, animals.' },
      { title: 'Stranger Missions',
        desc: 'Side-quest chains given by named NPCs · often the best side content in the game.' },
    ],
  },

  /* ───────── MISSIONS ───────── */
  missions: {
    intro:
      'The main story unfolds across six chapters and a two-part epilogue. Below are the chapter setups plus a sampling of marquee main missions per chapter — out of roughly 100 total story missions.',
    chapters: [
      {
        name: 'Chapter 1 — Colter',
        setting: 'Snowed-in mountain hideout after a botched Blackwater ferry job.',
        missions: [
          { name: 'Outlaws from the West' },
          { name: 'Old Friends' },
          { name: 'Enter, Pursued by a Memory' },
          { name: 'Eastward Bound' },
        ],
      },
      {
        name: 'Chapter 2 — Horseshoe Overlook',
        setting: 'Gang sets up in the New Hanover heartland · Valentine becomes the hub.',
        missions: [
          { name: 'Polite Society, Valentine Style' },
          { name: 'Americans at Rest' },
          { name: 'Money Lending and Other Sins' },
          { name: 'A Fisher of Men' },
          { name: 'The First Shall Be Last' },
          { name: 'Pouring Forth Oil' },
        ],
      },
      {
        name: 'Chapter 3 — Clemens Point',
        setting: 'Lemoyne move-up · entangled with the Gray and Braithwaite families.',
        missions: [
          { name: 'Blood Feuds, Ancient and Modern' },
          { name: 'Magicians for Sport' },
          { name: 'The Joys of Civilization' },
          { name: 'Friends in Very Low Places' },
          { name: 'Sodom? Back to Gomorrah' },
          { name: 'Blessed are the Meek?' },
        ],
      },
      {
        name: 'Chapter 4 — Saint Denis',
        setting: 'Big-city heist territory · the gang attempts the city bank.',
        missions: [
          { name: 'The Gilded Cage' },
          { name: 'A Fine Night of Debauchery' },
          { name: 'Brothers and Sisters, One and All' },
          { name: 'Banking, The Old American Art' },
        ],
      },
      {
        name: 'Chapter 5 — Guarma',
        setting: 'Tropical Caribbean detour · forced regroup before the endgame.',
        missions: [
          { name: 'Welcome to the New World' },
          { name: 'Paradise Mercifully Departed' },
          { name: 'Hell Hath No Fury' },
          { name: 'A Kind and Benevolent Despot' },
        ],
      },
      {
        name: 'Chapter 6 — Beaver Hollow',
        setting: 'Endgame · Dutch unravels, Micah ascends, Arthur reckons with TB.',
        missions: [
          { name: 'Mrs. Sadie Adler, Widow' },
          { name: 'The King\'s Son' },
          { name: 'My Last Boy' },
          { name: 'Red Dead Redemption' },
        ],
      },
      {
        name: 'Epilogue Part 1 — Pronghorn Ranch',
        setting: 'John Marston works a legitimate ranch hand job under an alias.',
        missions: [
          { name: 'The Wheel' },
          { name: 'Bare Knuckle Friendships' },
          { name: 'Old Friends, New Problems' },
          { name: 'Fatherhood and Other Dreams' },
        ],
      },
      {
        name: 'Epilogue Part 2 — Beecher\'s Hope',
        setting: 'John builds his own ranch · the bridge to RDR 1\'s opening.',
        missions: [
          { name: 'A New Jerusalem' },
          { name: 'The Iniquities of History' },
          { name: 'American Venom' },
        ],
      },
    ],
  },

  /* ───────── ACTIVITIES ───────── */
  activities: {
    intro:
      'Beyond the main story, RDR 2 has more named side activities than any prior Rockstar game. Below are the headline systems plus the collectible chains worth completing.',
    entries: [
      { name: 'Poker',                 desc: 'Hold\'em tables in Blackwater, Flatneck Station, Saint Denis, Tumbleweed.' },
      { name: 'Blackjack',             desc: 'Tables in Van Horn, Flatneck Station, Rhodes.' },
      { name: 'Dominoes',              desc: 'Played in Flatneck Station, Lagras, Strawberry, Van Horn.' },
      { name: 'Five Finger Fillet',    desc: 'Knife-tapping minigame in Valentine, Wallace Station, Annesburg, Van Horn.' },
      { name: 'Fishing',               desc: 'Rod-and-line system with 16 fish species across rivers and lakes.' },
      { name: 'Hunting',               desc: 'Track, stalk, and skin animals · pristine pelts feed the crafting loop.' },
      { name: 'Stagecoach Robbery',    desc: 'Random world events plus scripted heists.' },
      { name: 'Train Robbery',         desc: 'Stop a train, loot the passengers and the safe car.' },
      { name: 'Home Robbery',          desc: 'Optional Stranger quest chain · 4 farmhouses to clear.' },
      { name: 'Bounty Hunting',        desc: 'Posters in town sheriffs\' offices · ~10 named bounties.' },
      { name: 'Treasure Hunting',      desc: 'Map-based puzzles · the Jack Hall Gang chain pays out best.' },
      { name: 'Cigarette Cards',       desc: '144 cards across 12 sets to collect from packs and the world.' },
      { name: 'Dinosaur Bones',        desc: '30 fossil locations across the map.' },
      { name: 'Rock Carvings',         desc: '10 cliff-face carvings to find in the mountains.' },
      { name: 'Dreamcatchers',         desc: '20 dreamcatchers to find hanging in trees.' },
      { name: 'Photography',           desc: 'Camera tool with named photo opportunities.' },
      { name: 'Camp Activities',       desc: 'Drinking, dancing, sing-alongs, and gang campfire conversations.' },
    ],
  },

  /* ───────── PROPERTIES ───────── */
  properties: {
    intro:
      'You do not buy properties in RDR 2 the way you do in GTA Online — instead, you live out of seven sequential gang camps (one per chapter) and stay in pay-per-night hotel rooms when traveling.',
    entries: [
      { name: 'Horseshoe Overlook',    desc: 'Chapter 2 camp · New Hanover · the gang\'s most prosperous resting spot.' },
      { name: 'Clemens Point',         desc: 'Chapter 3 camp · Lemoyne lakeshore · entangled with local feuds.' },
      { name: 'Shady Belle',           desc: 'Chapter 4 camp · Lemoyne bayou plantation house.' },
      { name: 'Lakay',                 desc: 'Chapter 5 camp · Lemoyne swamp shack · post-Guarma.' },
      { name: 'Beaver Hollow',         desc: 'Chapter 6 camp · New Hanover cave · the unraveling.' },
      { name: 'Pronghorn Ranch',       desc: 'Epilogue Part 1 · John\'s temporary hired-hand life.' },
      { name: 'Beecher\'s Hope',       desc: 'Epilogue Part 2 · John\'s own ranch · last buildable property.' },
      { name: 'Valentine Hotel',       desc: 'Cheap room rental · save and recover honor in town.' },
      { name: 'Saint Denis Hotel',     desc: 'Most expensive hotel · high-society Lemoyne base.' },
      { name: 'Annesburg Hotel',       desc: 'Coal-town basic lodging · close to the eastern bounties.' },
      { name: 'Tumbleweed Hotel',      desc: 'Desert ghost town · Epilogue-only lodging.' },
      { name: 'Bathhouses',            desc: 'Per-town · pay for a bath, optional massage adds Honor.' },
    ],
  },

  /* ───────── CHEATS (PS5) ───────── */
  'cheats-ps5': {
    intro:
      'All cheats are entered in the Settings → Cheats menu. Many require finding a corresponding newspaper article first to unlock. Activating any cheat disables Trophies for that save.',
    notes: [
      'PS5 button prompts shown on screen, but cheats are entered as text phrases.',
      'Cheats persist for the session but must be re-enabled on each load.',
      'Some cheats permanently disable saving on the active file — back up first.',
    ],
    entries: [
      { code: 'A simple life, a beautiful death',   effect: 'Refill all horse cores' },
      { code: 'Abundance is the dullest desire',    effect: 'Infinite Dead Eye' },
      { code: 'Be greedy only for foresight',       effect: '+$500 cash' },
      { code: 'Better than my dog',                 effect: 'Increase Horse Bonding' },
      { code: 'Death is silence',                   effect: 'Stealth weapons (bow + throwing knives)' },
      { code: 'Eat of knowledge',                   effect: 'Learn every recipe' },
      { code: 'Every man has his secret',           effect: 'Decrease Honor' },
      { code: 'Greed is American virtue',           effect: '+$50 cash' },
      { code: 'History of violence',                effect: 'Unlock War Horse + Dappled Black Thoroughbred' },
      { code: 'Honesty is the best policy',         effect: 'Increase Honor by 8 levels' },
      { code: 'I seek and I find',                  effect: 'Infinite Stamina' },
      { code: 'I shall be better',                  effect: 'Heal Arthur and refill all cores' },
      { code: 'Keep your dreams light',             effect: 'All dapper outfits' },
      { code: 'Keep your dreams simple',            effect: 'All basic outfits' },
      { code: 'My kingdom is a horse',              effect: 'Refill horse stamina core' },
      { code: 'Run! Run! Run!',                     effect: 'Spawn race horse' },
      { code: 'Share',                              effect: 'Spawn wagon' },
      { code: 'The lucky be strong evermore',       effect: 'Infinite Dead Eye level 5' },
      { code: 'Vanity. All is vanity',              effect: 'Unlock all dynamite weapons' },
      { code: 'Virtue unearned is not virtue',      effect: 'Infinite ammunition' },
      { code: 'You revel in your disgrace, I see',  effect: 'Refill all of Arthur\'s cores' },
      { code: 'You want freedom',                   effect: 'Spawn stagecoach' },
      { code: 'You want punishment',                effect: 'Increase Wanted Level' },
      { code: 'You long for sight and see nothing', effect: 'Fog of War cleared (no minimap)' },
      { code: 'You revel in your weakness',         effect: 'Infinite Stamina for your horse' },
    ],
  },

  /* ───────── CHEATS (Xbox) ───────── */
  'cheats-xbox': {
    intro:
      'Xbox cheats are entered the same way as on PS5 — via the Settings → Cheats menu. Code phrases are identical across platforms; only the on-screen button glyphs differ.',
    notes: [
      'Activating any cheat disables Achievements for the active save.',
      'Some unlocks require finding a specific newspaper headline first.',
      'Cheats do not affect Red Dead Online.',
    ],
    entries: [
      { code: 'A simple life, a beautiful death',   effect: 'Refill all horse cores' },
      { code: 'Abundance is the dullest desire',    effect: 'Infinite Dead Eye' },
      { code: 'Be greedy only for foresight',       effect: '+$500 cash' },
      { code: 'Better than my dog',                 effect: 'Increase Horse Bonding' },
      { code: 'Death is silence',                   effect: 'Stealth weapons loadout' },
      { code: 'Eat of knowledge',                   effect: 'Learn every recipe' },
      { code: 'Every man has his secret',           effect: 'Decrease Honor' },
      { code: 'Greed is American virtue',           effect: '+$50 cash' },
      { code: 'History of violence',                effect: 'Special edition horse unlock' },
      { code: 'Honesty is the best policy',         effect: 'Increase Honor' },
      { code: 'I seek and I find',                  effect: 'Infinite Stamina' },
      { code: 'I shall be better',                  effect: 'Heal Arthur and refill all cores' },
      { code: 'Keep your dreams light',             effect: 'All dapper outfits' },
      { code: 'Keep your dreams simple',            effect: 'All basic outfits' },
      { code: 'My kingdom is a horse',              effect: 'Refill horse stamina' },
      { code: 'Run! Run! Run!',                     effect: 'Spawn race horse' },
      { code: 'Share',                              effect: 'Spawn wagon' },
      { code: 'The lucky be strong evermore',       effect: 'Max Dead Eye level' },
      { code: 'Vanity. All is vanity',              effect: 'Unlock dynamite weapons' },
      { code: 'Virtue unearned is not virtue',      effect: 'Infinite ammunition' },
      { code: 'You want freedom',                   effect: 'Spawn stagecoach' },
      { code: 'You want punishment',                effect: 'Raise Wanted Level' },
    ],
  },

  /* ───────── CHEATS (PC) ───────── */
  'cheats-pc': {
    intro:
      'RDR 2 cheats are entered in the Settings → Cheats menu as text phrases — identical across PS5, Xbox, and PC. Below is the full list, the same as the console pages. Many require finding a corresponding newspaper article first to unlock.',
    notes: [
      'PC players type the phrase using their keyboard · console glyphs don\'t matter.',
      'Cheat activation permanently disables saving on the active file · back up first.',
      'Cheats do not work in Red Dead Online.',
      'Achievements / Social Club challenges are disabled for the play session.',
    ],
    entries: [
      { code: 'A simple life, a beautiful death',   effect: 'Refill all horse cores' },
      { code: 'Abundance is the dullest desire',    effect: 'Infinite Dead Eye' },
      { code: 'Be greedy only for foresight',       effect: '+$500 cash' },
      { code: 'Better than my dog',                 effect: 'Increase Horse Bonding' },
      { code: 'Death is silence',                   effect: 'Stealth weapons (bow + throwing knives)' },
      { code: 'Eat of knowledge',                   effect: 'Learn every recipe' },
      { code: 'Every man has his secret',           effect: 'Decrease Honor' },
      { code: 'Greed is American virtue',           effect: '+$50 cash' },
      { code: 'History of violence',                effect: 'Special edition horse unlock' },
      { code: 'Honesty is the best policy',         effect: 'Increase Honor' },
      { code: 'I seek and I find',                  effect: 'Infinite Stamina' },
      { code: 'I shall be better',                  effect: 'Heal Arthur and refill all cores' },
      { code: 'Keep your dreams light',             effect: 'All dapper outfits' },
      { code: 'Keep your dreams simple',            effect: 'All basic outfits' },
      { code: 'My kingdom is a horse',              effect: 'Refill horse stamina' },
      { code: 'Run! Run! Run!',                     effect: 'Spawn race horse' },
      { code: 'Share',                              effect: 'Spawn wagon' },
      { code: 'The lucky be strong evermore',       effect: 'Max Dead Eye level' },
      { code: 'Vanity. All is vanity',              effect: 'Unlock dynamite weapons' },
      { code: 'Virtue unearned is not virtue',      effect: 'Infinite ammunition' },
      { code: 'You want freedom',                   effect: 'Spawn stagecoach' },
      { code: 'You want punishment',                effect: 'Raise Wanted Level' },
      { code: 'You long for sight and see nothing', effect: 'Fog of War cleared (no minimap)' },
      { code: 'You revel in your disgrace, I see',  effect: 'Refill all of Arthur\'s cores' },
      { code: 'You revel in your weakness',         effect: 'Infinite Stamina for your horse' },
    ],
  },

  /* ───────── ARTWORKS ───────── */
  artworks: {
    intro:
      'Rockstar released a steady stream of key art across 2017–2018. The pieces below are the iconic promotional plates published on the Newswire and reproduced on physical packaging.',
    entries: [
      { title: 'Reveal Key Art', desc: 'The first October 2016 silhouette teaser · seven gang members on a ridge.', image: '/images/games/rdr-2/shot-1.jpg' },
      { title: 'Yellow Sky Cover Art', desc: 'The final box art · Arthur on horseback against a setting sun.', image: '/images/games/rdr-2/shot-2.jpg' },
      { title: 'Saint Denis Cityscape', desc: 'Wide horizontal piece showing the New Orleans-analogue downtown.', image: '/images/games/rdr-2/shot-3.jpg' },
      { title: 'Camp at Dusk', desc: 'Painterly piece of the Horseshoe Overlook campfire.', image: '/images/games/rdr-2/shot-4.jpg' },
      { title: 'Cougar Hunt', desc: 'Combat art used in pre-launch screenshots.', image: '/images/games/rdr-2/shot-5.jpg' },
      { title: 'Train Robbery', desc: 'Dynamic key art used in the Trailer 3 marketing push.' },
      { title: 'Sadie Adler Portrait', desc: 'Solo character study released alongside the gang reveal.' },
      { title: 'Saint Denis Carriage Chase', desc: 'Action piece used on the deluxe edition steelbook.' },
      { title: 'Beecher\'s Hope', desc: 'Final epilogue ranch · used in marketing once the embargo lifted.' },
      { title: 'John & Jack Endgame', desc: 'Closing-chapter art for the post-launch Newswire feature.' },
    ],
  },

  /* ───────── VIDEOS ───────── */
  videos: {
    intro:
      'Every major trailer Rockstar released for RDR 2 plus the post-launch content drops. Links go to the official Rockstar Games YouTube channel.',
    entries: [
      { title: 'Reveal Trailer',        date: '2016-10-20', href: 'https://www.youtube.com/watch?v=gmA6MrX81z4' },
      { title: 'Trailer #1',            date: '2017-09-28', href: 'https://www.youtube.com/watch?v=La4ZP2gXa9o' },
      { title: 'Trailer #2',            date: '2018-05-02', href: 'https://www.youtube.com/watch?v=AS7iqgGYUKw' },
      { title: 'Official Gameplay Video Part 1', date: '2018-08-09', href: 'https://www.youtube.com/watch?v=jVwx_WHigEY' },
      { title: 'Official Gameplay Video Part 2', date: '2018-10-01', href: 'https://www.youtube.com/watch?v=Wlpoa7VbN3I' },
      { title: 'Launch Trailer',        date: '2018-10-18', href: 'https://www.youtube.com/watch?v=eaW0tYpxyp0' },
      { title: 'Red Dead Online Beta Trailer', date: '2018-11-26', href: 'https://www.youtube.com/watch?v=KSGgvQ7iIBM' },
      { title: 'PC Launch Trailer',     date: '2019-10-09', href: 'https://www.youtube.com/watch?v=8tNxJDqkbCw' },
    ],
  },

  /* ───────── SOUNDTRACK ───────── */
  soundtrack: {
    intro:
      'Original score composed by Woody Jackson with original songs curated by Rockstar\'s in-house music team. The Original Soundtrack (vocal songs) and The Music of RDR 2 (instrumental score) released as two separate albums in summer 2019.',
    groups: [
      {
        name: 'Vocal Songs · Original Soundtrack (2019)',
        tracks: [
          { title: 'Cruel World',                       artist: 'Willie Nelson' },
          { title: 'That\'s the Way It Is',             artist: 'Daniel Lanois' },
          { title: 'May I? Standing Unshaken',          artist: 'D\'Angelo' },
          { title: 'Unshaken',                          artist: 'D\'Angelo' },
          { title: 'Crawling King Snake',               artist: 'Josh Homme' },
          { title: 'Mountain Banjo',                    artist: 'Daniel Lanois' },
          { title: 'Time Will Find Us',                 artist: 'Rhiannon Giddens' },
          { title: 'Country Heart Reflections',         artist: 'Petra Haden' },
        ],
      },
      {
        name: 'Score Cues · The Music of RDR 2 (2019)',
        tracks: [
          { title: 'The Wheel',                         artist: 'Woody Jackson' },
          { title: 'Outlaws From The West',             artist: 'Woody Jackson' },
          { title: 'Horse Flesh For Dinner',            artist: 'Woody Jackson' },
          { title: 'A Quiet Time',                      artist: 'Woody Jackson' },
          { title: 'American Venom',                    artist: 'Woody Jackson' },
          { title: 'A Walking Cripple',                 artist: 'Woody Jackson' },
          { title: 'Red Dead Redemption (End Credits)', artist: 'Woody Jackson' },
        ],
      },
      {
        name: 'Camp Songs (in-engine)',
        tracks: [
          { title: 'Old Friend (housebuilding)',        artist: 'Mr. Will, Charles, John, Uncle' },
          { title: 'Cielito Lindo',                     artist: 'Javier Escuella' },
          { title: 'Goodbye Old Paint',                 artist: 'Hosea Matthews' },
          { title: 'Ring Dang Doo',                     artist: 'Karen Jones' },
        ],
      },
    ],
  },

  /* ───────── REQUIREMENTS (consoles + PC builds + completion time) ───────── */
  requirements: {
    intro:
      'RDR 2 was the most demanding game on the planet at launch (Oct 2018) and is still GPU-heavy 8 years on. There is no native PS5 / Xbox Series build — backward compatibility delivers 60 fps via patches but not the full ray-traced glow-up GTA V got.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS4 · PS4 Pro · PS5 (via backward compatibility)',
        best: 'PS5: Original PS4 Pro build at locked 60 fps via BC + load-time SSD boost',
        storage: '99 GB',
        notes: [
          'No native PS5 build · runs the PS4 Pro version with enhancements.',
          'PS5 Pro patch added free 60 fps mode in Dec 2024.',
        ],
      },
      {
        console: 'Xbox',
        versions: 'Xbox One · Xbox One X · Xbox Series X|S (via BC + FPS Boost)',
        best: 'Xbox Series X: Xbox One X build at native 4K + FPS Boost to 60 fps',
        storage: '99 GB',
        notes: [
          'Xbox Series S limited to FPS Boost at 1080p.',
          'Originally a Rockstar Launcher / Epic exclusive on PC before Steam release in Dec 2019.',
        ],
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-2500K · AMD FX-6300',
      gpu: 'NVIDIA GTX 770 (2 GB) · AMD R9 280 (3 GB)',
      ram: '8 GB',
      vram: '2 GB',
      storage: '150 GB HDD',
      expectedFps: '1080p 30 fps low (don\'t)',
    },
    pcRecommended: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel i7-4770K · AMD Ryzen 5 1500X',
      gpu: 'NVIDIA GTX 1060 (6 GB) · AMD RX 480 (4 GB)',
      ram: '12 GB',
      vram: '6 GB',
      storage: '150 GB SSD strongly recommended',
      expectedFps: '1440p 60 fps high',
    },
    builds: [
      {
        tier: 'Budget',
        totalUSD: 920,
        targets: 'RDR 2 at 1080p 60 fps medium-high · 1440p 40 fps medium',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 7600',                priceUSD: 180 },
          { label: 'Mobo', part: 'ASRock B650M-HDV',                priceUSD: 110 },
          { label: 'RAM',  part: '32 GB DDR5-5200 (2×16)',          priceUSD: 110 },
          { label: 'GPU',  part: 'AMD RX 7600 XT 16 GB',            priceUSD: 320 },
          { label: 'SSD',  part: '1 TB Crucial P3 Plus NVMe',       priceUSD: 70 },
          { label: 'PSU',  part: 'Corsair RM650e (650W Gold)',      priceUSD: 80 },
          { label: 'Case', part: 'Cooler Master MasterBox Q300L',   priceUSD: 50 },
        ],
        notes: '16 GB VRAM on the 7600 XT is the key — RDR 2 punishes any GPU under 8 GB at high settings.',
      },
      {
        tier: 'Recommended',
        totalUSD: 1480,
        targets: '1440p 90 fps ultra · zero pop-in · everything maxed except MSAA',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 9600X',                priceUSD: 280 },
          { label: 'Mobo', part: 'MSI B650 Tomahawk',                priceUSD: 170 },
          { label: 'RAM',  part: '32 GB DDR5-6000 (2×16)',           priceUSD: 120 },
          { label: 'GPU',  part: 'AMD RX 7800 XT 16 GB',             priceUSD: 500 },
          { label: 'SSD',  part: '2 TB WD SN850X NVMe',              priceUSD: 165 },
          { label: 'PSU',  part: 'Corsair RM750e (750W Gold)',       priceUSD: 95 },
          { label: 'Case', part: 'Fractal Pop Air',                  priceUSD: 75 },
          { label: 'Fan',  part: 'Thermalright Peerless Assassin',   priceUSD: 50 },
        ],
        notes: 'Sweet spot for RDR 2 + ready for any 2026 release.',
      },
      {
        tier: 'High-end',
        totalUSD: 2480,
        targets: '4K 60 fps ultra + DLAA · MSAA 2x · the cinematic camera look',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 7 9700X',                priceUSD: 380 },
          { label: 'Mobo', part: 'ASUS ROG Strix X870-A',            priceUSD: 290 },
          { label: 'RAM',  part: '32 GB DDR5-6400 CL30',             priceUSD: 140 },
          { label: 'GPU',  part: 'NVIDIA RTX 5080 16 GB',            priceUSD: 1100 },
          { label: 'SSD',  part: '2 TB Samsung 990 Pro NVMe',        priceUSD: 165 },
          { label: 'PSU',  part: 'Corsair RM1000e (1000W Gold)',     priceUSD: 145 },
          { label: 'Case', part: 'Lian Li Lancool 207',              priceUSD: 100 },
          { label: 'Fan',  part: 'Arctic Liquid Freezer III 360',    priceUSD: 130 },
        ],
        notes: 'Plays GTA VI at 4K too — same engine generation.',
      },
    ],
    completion: {
      mainStory: '50h',
      mainAndExtras: '82h',
      completionist: '175h',
      notes: [
        'Completionist includes the 100% checklist · 30 fossils, 50 cigarette cards, 16 legendary animals.',
        'Red Dead Online adds another 100+ hours of activity if you want to grind.',
      ],
    },
  },
};

export default content;
