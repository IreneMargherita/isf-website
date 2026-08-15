/* =====================================================================
 *  ISF PHOTO COLLAGE
 * ---------------------------------------------------------------------
 *  Photos come from the "ISF Photos" folder in Google Drive. Each one is
 *  processed into four files:
 *
 *      public/gallery/thumb/<slug>.webp   ~640px wide, for the grid
 *      public/gallery/thumb/<slug>.jpg    fallback for older browsers
 *      public/gallery/full/<slug>.webp    ~1400px wide, for the lightbox
 *      public/gallery/full/<slug>.jpg     fallback
 *
 *  The grid only ever downloads the thumbs, and only the ones actually
 *  on screen. The big version is fetched when somebody clicks a photo.
 *
 *  TO ADD A PHOTO:
 *   1. Make the four files above (any image editor can do it; keep the
 *      thumb near 640px wide and the full near 1400px).
 *   2. Add an entry here with its `ratio` (width divided by height).
 *      The collage uses the ratio to reserve the right amount of space
 *      before the image loads, which is what stops the page jumping
 *      around while it fills in.
 *
 *  ABOUT `alt`: this is read aloud to blind visitors and shown if an
 *  image fails to load. Describe what is happening in the photo, not
 *  "photo of students". Never leave it empty here.
 * ===================================================================== */

export interface Photo {
  slug: string
  alt: string
  /** Shown on hover and under the photo in the lightbox. */
  caption: string
  /** width / height. Used to reserve space before the image loads. */
  ratio: number
  /** Optional era label shown in the lightbox. */
  year?: string
}

/* Ordered for the collage rather than by date: tall next to wide, busy
   next to calm, so the mosaic reads well as you scroll. */
export const PHOTOS: Photo[] = [
  {
    slug: 'welcome-week-booth',
    alt: 'Students standing at the ISF booth during Week of Welcome, behind a table of flyers and under a banner reading International Student Fellowship.',
    caption: 'Our booth at Week of Welcome',
    ratio: 1.332,
    year: 'Fall 2024',
  },
  {
    slug: 'crystal-cove',
    alt: 'A large group of students walking together along the sand at Crystal Cove beach.',
    caption: 'Beach day at Crystal Cove',
    ratio: 1.333,
    year: '2025',
  },
  {
    slug: 'lighthouse',
    alt: 'Students gathered on a hillside path at sunset with a lighthouse and the ocean behind them.',
    caption: 'Sunset at the lighthouse',
    ratio: 0.715,
    year: '2024',
  },
  {
    slug: 'home-dinner',
    alt: 'Students seated along a long table sharing a home-cooked meal, laughing and talking.',
    caption: 'Dinner around one long table',
    ratio: 1.499,
  },
  {
    slug: 'surf-morning',
    alt: 'A row of students on the beach holding brightly coloured body boards and surfboards.',
    caption: 'Surf and body board lessons',
    ratio: 2.45,
    year: '2025',
  },
  {
    slug: 'yosemite',
    alt: 'Students posing together in front of the granite cliffs of Yosemite Valley.',
    caption: 'Road trip to Yosemite',
    ratio: 1.333,
    year: '2025',
  },
  {
    slug: 'talk-time-1',
    alt: 'A small group of students sitting around a wooden table with mugs and cards, deep in conversation.',
    caption: 'Talk Time, where the questions get good',
    ratio: 1.499,
  },
  {
    slug: 'pool-party-2025',
    alt: 'Students standing in a circle holding hands beside a swimming pool.',
    caption: 'Pool party to start the semester',
    ratio: 1.499,
    year: 'Sept 2025',
  },
  {
    slug: 'graduation',
    alt: 'Four students in caps, gowns and honour stoles holding a diploma outside on graduation day.',
    caption: 'Graduation day at CSULB',
    ratio: 1.499,
    year: '2026',
  },
  {
    slug: 'thanksgiving-2025',
    alt: 'A round table set for Thanksgiving dinner, surrounded by students serving themselves.',
    caption: 'American Thanksgiving feast',
    ratio: 1.333,
    year: '2025',
  },
  {
    slug: 'palos-verdes',
    alt: 'A group of students on a hiking trail high above the coastline at Palos Verdes.',
    caption: 'Hiking the Palos Verdes coast',
    ratio: 1.499,
  },
  {
    slug: 'halloween-2025',
    alt: 'Students in Halloween costumes sitting behind carved pumpkins.',
    caption: 'Costumes and carved pumpkins',
    ratio: 2.56,
    year: '2025',
  },
  {
    slug: 'futsal',
    alt: 'A futsal team of students posing on a floodlit pitch after an evening game.',
    caption: 'Futsal under the lights',
    ratio: 1.333,
    year: '2024',
  },
  {
    slug: 'soularium',
    alt: 'Hands reaching across a table covered in photo cards spread out for a conversation game.',
    caption: 'Picking a card that says how your week went',
    ratio: 1.333,
  },
  {
    slug: 'easter-picnic',
    alt: 'Students sitting on blankets on the grass at a park picnic on a sunny day.',
    caption: 'Easter picnic in the park',
    ratio: 1.333,
    year: '2025',
  },
  {
    slug: 'san-diego',
    alt: 'A crowd of students standing together in front of a fountain on a day trip to San Diego.',
    caption: 'Day trip to San Diego',
    ratio: 1.5,
  },
  {
    slug: 'welcome-dinner',
    alt: 'Students and a host around a dining table covered in photo cards, mid conversation.',
    caption: 'Welcome dinner at a volunteer home',
    ratio: 1.499,
  },
  {
    slug: 'pool-party-2016',
    alt: 'A very large group of students seated around the edge of a swimming pool, waving at the camera.',
    caption: 'Pool party, back in 2016',
    ratio: 1.499,
    year: '2016',
  },
  {
    slug: 'valentines-group',
    alt: 'Students and host families standing together for a group photo at a Valentine dinner.',
    caption: 'Valentine dinner with host families',
    ratio: 1.499,
  },
  {
    slug: 'naples-lights',
    alt: 'Houses and boats along the Naples canals covered in Christmas lights, reflected in the water at night.',
    caption: 'Christmas lights on the Naples canals',
    ratio: 1.333,
  },
  {
    slug: 'recreation-day',
    alt: 'Students on a sports field holding brooms, mid game on a recreation afternoon.',
    caption: 'Whatever this game was, it worked',
    ratio: 1.499,
    year: '2025',
  },
  {
    slug: 'thanksgiving-2024',
    alt: 'Students standing around a Thanksgiving table laid with plates and candles.',
    caption: 'Thanksgiving, the year before',
    ratio: 1.499,
    year: '2024',
  },
  {
    slug: 'fourth-of-july',
    alt: 'Students and hosts holding small American flags outside a house on the Fourth of July.',
    caption: 'Fourth of July, explained in person',
    ratio: 1.499,
    year: '2025',
  },
  {
    slug: 'talk-time-2',
    alt: 'Students around a table with bowls of food, talking and smiling at the camera.',
    caption: 'Talk Time dinner',
    ratio: 1.583,
  },
  {
    slug: 'halloween-2023',
    alt: 'Six students in Halloween costumes posing together indoors.',
    caption: 'Halloween costumes',
    ratio: 1.499,
    year: '2023',
  },
  {
    slug: 'welcome-picnic',
    alt: 'Five students standing on a sports field holding brooms at the welcome picnic.',
    caption: 'Welcome picnic games',
    ratio: 1.499,
    year: '2025',
  },
  {
    slug: 'valentines-dinner',
    alt: 'Students seated at a decorated dinner table with flowers and place settings.',
    caption: 'Valentine dinner',
    ratio: 1.499,
    year: '2024',
  },
  {
    slug: 'band-concert',
    alt: 'A brass band playing to a big crowd seated on the grass in a Long Beach park.',
    caption: 'Municipal band concert in the park',
    ratio: 1.506,
  },
]
