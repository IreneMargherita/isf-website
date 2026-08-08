/* =====================================================================
 *  ISF — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE COPY
 * ---------------------------------------------------------------------
 *  Every headline, paragraph, label, list, story and event on the site
 *  is defined here. Pages and components import from this file, so you
 *  can update wording WITHOUT touching component code.
 *
 *  TONE GUIDE (matches the ISF postcard):
 *   ISF is a pre-evangelism club. The website leads with FRIENDSHIP and
 *   AMERICAN CULTURE. Faith is mentioned honestly but never as the
 *   headline — the postcard line is the standard:
 *     "We exist to help students build friendships with Americans and
 *      fellow students, learn about American culture, and explore
 *      following Jesus."
 *   Avoid insider words a first-time visitor would not use: ministry,
 *   gospel, Christ-centered, fellowship night, outreach, testimony.
 *   Prefer: club, community, dinners, hangouts, stories, friends.
 *
 *  HOW TO EDIT:
 *   - Change any text by editing the strings below.
 *   - Items marked  // TODO  are placeholders to replace with real info
 *     (Facebook group link, leader names/photos, resource URLs, photos).
 *   - After editing, run `npm run build`.
 * ===================================================================== */

export interface Cta {
  label: string
  /** internal route (React Router) */
  to?: string
  /** external/tel/sms link */
  href?: string
}

export interface NavItem {
  label: string
  to: string
}

/* ----------------------------- SITE ------------------------------ */
export const site = {
  name: 'International Student Fellowship',
  shortName: 'ISF',
  tagline: 'Friendship, American culture, and a place to belong at CSULB.',
  university: 'California State University, Long Beach',
  universityShort: 'CSULB',
  location: 'Long Beach, California',
  /** Straight from the postcard — this is the official mission line. */
  missionStatement:
    'We exist to help students build friendships with Americans and fellow students, learn about American culture, and explore following Jesus.',
  clubNote: 'International Student Fellowship is a recognized CSULB club.',

  /* ---- Real contact channels (from the Fall 2025 postcard) ---- */
  contacts: {
    instagram: {
      label: 'Instagram',
      handle: '@isf.beach',
      href: 'https://www.instagram.com/isf.beach/',
    },
    facebook: {
      label: 'Facebook group',
      handle: 'International Student Fellowship at CSULB',
      // TODO: replace with the direct group URL (facebook.com/groups/XXXX).
      // Until then this opens a Facebook search for the group by name.
      href: 'https://www.facebook.com/search/groups/?q=International%20Student%20Fellowship%20at%20CSULB',
    },
    whatsapp: {
      label: 'WhatsApp group',
      handle: 'DM 562-606-6160 for the link',
      href: 'https://wa.me/15626066160',
    },
    phones: [
      { name: 'Arthur', display: '562-606-6160', tel: 'tel:+15626066160', sms: 'sms:+15626066160' },
      { name: 'Bob', display: '562-212-9522', tel: 'tel:+15622129522', sms: 'sms:+15622129522' },
    ],
  },

  /** Footer/social row. */
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/isf.beach/', icon: 'instagram' },
    {
      label: 'Facebook group',
      href: 'https://www.facebook.com/search/groups/?q=International%20Student%20Fellowship%20at%20CSULB',
      icon: 'facebook',
    },
    { label: 'WhatsApp', href: 'https://wa.me/15626066160', icon: 'whatsapp' },
  ],
}

/* ----------------------------- NAV ------------------------------- */
export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/gallery' },
  { label: 'Stories', to: '/testimonials' },
  { label: 'Connect', to: '/connection' },
  { label: 'Resources', to: '/resources' },
]

/* --------------------------- IMPACT MAP -------------------------- */
/* x / y are percentage positions on the stylized map (0–100).
   `emphasis: true` draws a larger ruby pin with a label. */
export const impactMap = {
  eyebrow: 'A global group of friends',
  title: 'Students from many nations',
  description:
    'Students from all over the world find friends at ISF. Our group especially welcomes students from India, China, Japan, and across Europe — alongside friends from every other corner of the map.',
  note: 'Illustrative map — pin positions are approximate.',
  regions: [
    { name: 'Europe', x: 49, y: 33, emphasis: true },
    { name: 'India', x: 69, y: 55, emphasis: true },
    { name: 'China', x: 77, y: 44, emphasis: true },
    { name: 'Japan', x: 85, y: 43, emphasis: true },
    { name: 'South Korea', x: 82, y: 46, emphasis: false },
    { name: 'Vietnam', x: 77, y: 59, emphasis: false },
    { name: 'Middle East', x: 58, y: 49, emphasis: false },
    { name: 'Nigeria', x: 49, y: 60, emphasis: false },
    { name: 'Brazil', x: 33, y: 71, emphasis: false },
    { name: 'Mexico', x: 20, y: 53, emphasis: false },
  ],
}

/* ----------------------------- HOME ------------------------------ */
export const home = {
  hero: {
    eyebrow: 'A recognized CSULB club · Everyone welcome',
    title: 'Good Food, Good Friends, and a Place to Belong',
    subtitle:
      'International Student Fellowship helps students at Cal State Long Beach build friendships with Americans and fellow students, learn about American culture, and explore following Jesus. Free, open to everyone, and no pressure.',
    primaryCta: { label: 'Come to an event', to: '/gallery' },
    secondaryCta: { label: 'Say hello', to: '/connection' },
    floatingTags: ['Free dinners', 'Beach & surf', 'Many nations', 'Real friendship'],
    stats: [
      { value: 'Weekly', label: 'Dinners & hangouts' },
      { value: 'Free', label: 'Always, for students' },
      { value: 'CSULB', label: 'Recognized club' },
    ],
  },
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'A warm welcome, far from home',
    body: [
      'Moving to a new country is exciting — and it can also be lonely. ISF exists so that no international student at Cal State Long Beach has to figure it out alone.',
      'We are students, alumni, and local families who cook dinner, drive to the beach, answer questions about American life, and stick around long enough to become real friends. You are welcome here exactly as you are.',
    ],
    points: [
      {
        title: 'You belong here',
        text: 'Students of every nation, language, background, and belief are warmly welcomed.',
      },
      {
        title: 'Real friendships',
        text: 'We build genuine friendships, not programs to get through. No sign-ups, no attendance sheet.',
      },
      {
        title: 'No pressure, ever',
        text: 'Come for the food and the friends. Conversations about faith happen only if you want them.',
      },
    ],
  },
  weeklyRhythm: {
    eyebrow: 'What we actually do',
    title: 'Life together, week by week',
    description:
      'Every week brings simple, easy ways to belong — a shared table, a good laugh, a new friend, and a break from a busy semester. Vegetarian food options are always available, and we can give you a ride.',
    items: [
      {
        title: 'Home dinners',
        text: 'Free home-cooked meals in the homes of volunteer families — the real thing, not a cafeteria.',
        icon: 'home',
      },
      {
        title: 'Games & snacks on campus',
        text: 'Drop-in afternoons with free snacks and games between classes.',
        icon: 'game',
      },
      {
        title: 'Culture & conversation',
        text: 'Talk Time dinners, holidays explained, slang decoded, and questions about American life answered.',
        icon: 'globe',
      },
      {
        title: 'Beach & outdoors',
        text: 'Surf and body board lessons, pool parties, bonfires, hikes, camping, and trips around SoCal.',
        icon: 'wave',
      },
    ],
  },
  missionPreview: {
    eyebrow: 'Our heart',
    title: 'Friendship first — always',
    body:
      'ISF exists to help students build friendships with Americans and fellow students, learn about American culture, and explore following Jesus. The first two are where almost everything happens: dinners, beach days, and long conversations. The third is an open door, never a push — if you are curious about faith, we are glad to talk; if you are not, you are just as welcome at our table.',
    cta: { label: 'Read our story', to: '/about' },
  },
  studentInvite: {
    eyebrow: 'For international students',
    title: 'New here? Come as you are.',
    body:
      'Whether you arrived last week or last year, there is a seat for you. Nothing to pay, nothing to join, nobody keeping track — just a friendly group that is genuinely glad you came.',
    bullets: [
      'Make friends from around the world and across the U.S.',
      'Eat free home-cooked meals (vegetarian options always available)',
      'Get help with school, paperwork, transportation, and everyday American life',
      'Need a ride? Text us and we will pick you up',
    ],
    cta: { label: 'Get in touch', to: '/connection' },
  },
  volunteerInvite: {
    eyebrow: 'For local friends & families',
    title: 'Open your home and your calendar',
    body:
      'You do not need to be an expert on anything — just willing to welcome someone. Host a dinner, share a hobby, give a ride, or simply show up and be a friend. Small things change a student’s whole year.',
    bullets: [
      'Host a meal or help at a campus hangout',
      'Help with rides, errands, and practical needs',
      'Come along to a beach day, surf morning, or holiday gathering',
    ],
    cta: { label: 'Find a way to help', to: '/connection' },
  },
  finalCta: {
    title: 'There is always room for one more',
    description:
      'Come share a meal, make a friend, and see what it feels like to be expected somewhere. We would love to meet you.',
    primaryCta: { label: 'See upcoming events', to: '/gallery' },
    secondaryCta: { label: 'Message us', to: '/connection' },
  },
}

/* ----------------------------- ABOUT ----------------------------- */
export const about = {
  hero: {
    eyebrow: 'About ISF',
    title: 'A home away from home at Cal State Long Beach',
    subtitle:
      'A recognized CSULB club that helps international students build friendships with Americans and fellow students, learn about American culture, and explore following Jesus.',
  },
  intro: [
    'International Student Fellowship (ISF) started with a simple conviction: every international student who arrives at Cal State Long Beach should be met with a welcome, not with loneliness.',
    'We are a group of students, alumni, and local families who open our homes and our weekends to students from around the world. We share meals, celebrate each other’s cultures, walk through the hard parts of student life, and offer the steady friendship that makes a new place start to feel like home.',
  ],
  whyStudentsMatter: {
    title: 'Why international students matter to us',
    body: [
      'Every year, thousands of students travel across the world to study in the United States. They arrive full of hope — and often run straight into culture shock, language barriers, homesickness, and the work of building an entire life from scratch, far from family.',
      'International students are some of the most courageous, capable people we know. Doing that takes nerve. Welcoming them well is a privilege, and honestly, it is the best part of our week.',
    ],
  },
  approach: {
    title: 'How we do things',
    body: [
      'Friendship comes first, and it is not a tactic. We show up, we cook, we drive, we listen — because that is what friends do, and because a real welcome should not come with conditions attached.',
      'ISF is run by Christians, and we are open about that. Some students get curious and want to talk about faith or read the Bible with us; we love those conversations. Many students never do, and they stay just as welcome, just as included, for as long as they are here. Your answer changes nothing about your seat at the table.',
    ],
    steps: [
      {
        title: 'Show up',
        text: 'Be there week after week, learn your name, and remember what you said last time.',
      },
      {
        title: 'Help out',
        text: 'Rides, meals, errands, paperwork, and the everyday needs of student life in a new country.',
      },
      {
        title: 'Trade cultures',
        text: 'We explain American holidays and slang — and we would rather hear about yours.',
      },
      {
        title: 'Leave the door open',
        text: 'Curious about Jesus or the Bible? We are glad to explore it together. Not curious? Nothing changes.',
      },
    ],
  },
  hospitality: {
    title: 'Why we cook so much',
    body: [
      'A meal is more than food — it is making space for someone to belong. Around our tables, students are not guests to impress but friends to enjoy.',
      'A shared dinner, a long conversation, a holiday you would otherwise have spent alone in a dorm room — these simple things say something a brochure cannot: you are seen, you are wanted, you are not alone here.',
    ],
  },
  csulb: {
    title: 'Part of CSULB student life',
    body: [
      'ISF is a recognized club at California State University, Long Beach, and we meet students right where they already are — on campus, near campus, and around the Long Beach community.',
      'We come alongside the international student experience with friendship and practical support, complementing the university’s own programs and helping students thrive in their new home.',
    ],
  },
  pledge: {
    title: 'What you can expect from us',
    body: [
      'You will never be pressured, recruited, guilted, or put on a list. Nobody will chase you if you stop coming, and you will be welcomed back the moment you return.',
      'You do not have to share our beliefs to belong here. You do not have to explain yourself. Come hungry, bring a friend, and let us know if you need a ride.',
    ],
    line: 'Everyone welcome. Always free. No pressure, ever.',
  },
}

/* -------------------------- TESTIMONIALS ------------------------- */
export const testimonials = {
  hero: {
    eyebrow: 'Student stories',
    title: 'In their own words',
    subtitle:
      'A real welcome leaves a mark. Here are the kinds of stories we hope every student gets to tell.',
  },
  intro: [
    'The quotes below are sample stories that reflect the heart of ISF. They are placeholders — ready to be swapped for real student voices as they are shared and approved.',
  ],
  // TODO: Replace these placeholder stories with real (approved) student stories.
  stories: [
    {
      quote: 'I found a family away from home. ISF gave me people who actually care how my week is going.',
      name: 'Student from East Asia',
      country: 'Placeholder story',
      context: 'Graduate student',
    },
    {
      quote:
        'They helped me understand American culture — holidays, small talk, all of it — without ever making me feel stupid for asking.',
      name: 'Student from South Asia',
      country: 'Placeholder story',
      context: 'Undergraduate',
    },
    {
      quote: 'The dinners made me feel welcomed. I walked in a stranger and left feeling like I belonged.',
      name: 'Student from Europe',
      country: 'Placeholder story',
      context: 'Exchange student',
    },
    {
      quote:
        'Nobody tried to convince me of anything. They just kept inviting me, and after a while these were my closest friends here.',
      name: 'Student from the Middle East',
      country: 'Placeholder story',
      context: 'Graduate student',
    },
    {
      quote:
        'When I was homesick, this group showed up for me. Beach days and shared meals got me through a hard semester.',
      name: 'Student from Southeast Asia',
      country: 'Placeholder story',
      context: 'Undergraduate',
    },
    {
      quote: 'I came for the free dinner and stayed for the friendships. These are people I will keep for life.',
      name: 'Student from Latin America',
      country: 'Placeholder story',
      context: 'Graduate student',
    },
  ],
  note: 'Have a story to share? We would love to hear it — reach out on our Connect page.',
}

/* --------------------------- CONNECTION -------------------------- */
export const connection = {
  hero: {
    eyebrow: 'Get in touch',
    title: 'Come say hello',
    subtitle:
      'The fastest way to reach us is to call or text. Ask us anything — where the next dinner is, whether you need to bring something, or if we can pick you up.',
  },
  intro: [
    'You do not need an invitation and you do not need to know anyone. Message one of us and we will tell you exactly where to go and what to expect.',
  ],
  /** Big, obvious contact cards — mirrors the postcard. */
  channels: [
    {
      title: 'Call or text us',
      text: 'The quickest way to reach a real person. Ask about an event, or tell us you need a ride.',
      items: [
        { label: 'Arthur', value: '562-606-6160', href: 'sms:+15626066160' },
        { label: 'Bob', value: '562-212-9522', href: 'sms:+15622129522' },
      ],
      icon: 'phone',
    },
    {
      title: 'Join the WhatsApp group',
      text: 'Where we post last-minute plans, rides, and reminders. DM 562-606-6160 for the invite link.',
      items: [{ label: 'WhatsApp', value: 'Message 562-606-6160', href: 'https://wa.me/15626066160' }],
      icon: 'whatsapp',
    },
    {
      title: 'Follow us online',
      text: 'Photos from recent events and what is coming up next.',
      items: [
        { label: 'Instagram', value: '@isf.beach', href: 'https://www.instagram.com/isf.beach/' },
        {
          label: 'Facebook group',
          value: 'International Student Fellowship at CSULB',
          href: 'https://www.facebook.com/search/groups/?q=International%20Student%20Fellowship%20at%20CSULB',
        },
      ],
      icon: 'social',
    },
  ],
  paths: [
    {
      audience: 'For international students',
      title: 'Come make some friends',
      text: 'New to CSULB or just looking for people to hang out with? Text us and we will get you to your first dinner or event.',
      cta: { label: 'Text us', href: 'sms:+15626066160' },
    },
    {
      audience: 'For local friends & volunteers',
      title: 'Help us welcome students',
      text: 'Host a meal, share a hobby, give a ride, or just come and be friendly. We will help you find a place to jump in.',
      cta: { label: 'Get involved', href: 'sms:+15626066160' },
    },
    {
      audience: 'For families & supporters',
      title: 'Keep it free for students',
      text: 'Groceries, gas, and event costs are covered by local friends and families so students never pay a cent.',
      cta: { label: 'Start a conversation', href: 'sms:+15622129522' },
    },
  ],
  rides: {
    title: 'Need a ride? Just ask.',
    body: 'If you need a ride to an event, text us. Pickup is from the International House Dorm steps (parking lot #1) or the Beverly Plaza Shuttle Stop parking lot, 30 minutes before the event starts.',
  },
  interests: [
    {
      title: 'Coming to a dinner?',
      text: 'Let us know and we will save you a seat. Vegetarian options are always available — just tell us.',
    },
    {
      title: 'Interested in an event?',
      text: 'Pool parties, surf lessons, beach days, camping, culture nights — tell us what sounds fun and we will keep you posted.',
    },
  ],
  form: {
    title: 'Or send us a message',
    // TODO: This form is a VISUAL PLACEHOLDER. It does not submit anywhere yet.
    // Connect it later to Formspree, Google Forms, Netlify Forms, or another
    // service. See README ("Connecting the forms") for step-by-step options.
    note: 'This form is a visual placeholder and does not send yet. Until it is connected, please call, text, or DM us using the options above — we answer quickly.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', placeholder: 'First and last name', required: true },
      { name: 'email', label: 'Email or phone', type: 'text', placeholder: 'However you prefer we reply', required: true },
      {
        name: 'role',
        label: 'I am a…',
        type: 'select',
        placeholder: '',
        required: false,
        options: ['International student', 'CSULB student', 'Local volunteer', 'Just curious'],
      },
      {
        name: 'interest',
        label: 'I am interested in…',
        type: 'select',
        placeholder: '',
        required: false,
        options: ['A weekly dinner', 'An upcoming event', 'Helping out', 'A ride to an event', 'Something else'],
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Tell us a little about yourself…',
        required: false,
      },
    ],
    submitLabel: 'Send message',
  },
}

/* ---------------------------- RESOURCES -------------------------- */
export const resources = {
  hero: {
    eyebrow: 'Resources',
    title: 'Helpful links for your first year',
    subtitle:
      'A starting point for settling in, figuring out American life, and getting practical help around Long Beach.',
  },
  intro: [
    'These resources are here to make life a little easier. The links below are placeholders — replace them with the specific pages, offices, and services you recommend.',
  ],
  // TODO: Replace the placeholder '#' links with real, trusted URLs.
  sections: [
    {
      title: 'New international students',
      text: 'First steps for arriving and settling in at CSULB.',
      links: [
        { label: 'CSULB Center for International Education', href: '#', note: 'TODO: official link' },
        { label: 'New student arrival checklist', href: '#', note: 'TODO' },
        { label: 'Visa & immigration basics', href: '#', note: 'TODO' },
      ],
    },
    {
      title: 'American culture',
      text: 'Friendly guides to customs, holidays, and everyday life.',
      links: [
        { label: 'Understanding U.S. holidays', href: '#', note: 'TODO' },
        { label: 'Everyday customs & etiquette', href: '#', note: 'TODO' },
        { label: 'Slang & small talk guide', href: '#', note: 'TODO' },
      ],
    },
    {
      title: 'Making friends',
      text: 'Ways to meet people and stop eating dinner alone.',
      links: [
        { label: 'ISF events & weekly dinners', href: '/gallery' },
        { label: 'Campus clubs & student orgs', href: '#', note: 'TODO' },
        { label: 'Conversation & language partners', href: '#', note: 'TODO' },
      ],
    },
    {
      title: 'Getting around Long Beach',
      text: 'Transport, groceries, and the practical setup stuff.',
      links: [
        { label: 'Public transit & getting around', href: '#', note: 'TODO' },
        { label: 'Groceries & international markets', href: '#', note: 'TODO' },
        { label: 'Banking & phone plans', href: '#', note: 'TODO' },
      ],
    },
    {
      title: 'Emergency & practical needs',
      text: 'Important contacts to keep close.',
      links: [
        { label: 'Emergency services: 911', href: '#', note: 'In any emergency, call 911.' },
        { label: 'CSULB campus safety', href: '#', note: 'TODO' },
        { label: 'Student health & counseling', href: '#', note: 'TODO' },
      ],
    },
    {
      title: 'Curious about faith?',
      text: 'Only if you want it — no pressure, no follow-up list.',
      links: [
        { label: 'Questions about Jesus or the Bible', href: '/connection' },
        { label: 'Read the Bible online in your language', href: '#', note: 'TODO' },
      ],
    },
  ],
  note: 'Need something that is not here? Ask us and we will do our best to help you find it.',
}

/* ----------------------- GALLERY & EVENTS ------------------------ */
export const gallery = {
  hero: {
    eyebrow: 'Events & photos',
    title: 'What we get up to',
    subtitle:
      'From home dinners to surf mornings, here is a glimpse of life at ISF — and what is coming up next. Everything is free and everyone is welcome.',
  },
  intro: [
    'These tiles are placeholders for real photos. Drop your images into /public/gallery and update this page to bring the group to life.',
  ],
  // TODO: Replace placeholder tiles with real event photos (see README).
  categories: [
    { title: 'Home dinners', text: 'Free home-cooked meals around a welcoming table.', tone: 'ruby' },
    { title: 'Beach days', text: 'Sun, sand, and good conversation.', tone: 'ocean' },
    { title: 'Surf & body board', text: 'Lessons for first-timers along the SoCal coast.', tone: 'sage' },
    { title: 'Camping', text: 'Campfires, s’mores, and starry nights.', tone: 'gold' },
    { title: 'Culture nights', text: 'Celebrating the traditions we each bring.', tone: 'ocean' },
    { title: 'Holiday gatherings', text: 'Thanksgiving, Lunar New Year, and more.', tone: 'ruby' },
    { title: 'Games & snacks', text: 'Drop-in afternoons on campus between classes.', tone: 'sage' },
  ],
  /** Practical notes lifted straight from the postcard. */
  eventNotes: [
    'Vegetarian food options are available at every meal.',
    'Need a ride? Text us. Pickup is from the International House Dorm steps (parking lot #1) or the Beverly Plaza Shuttle Stop parking lot, 30 minutes before the event.',
    'Everything is free unless noted — occasional activities like surf lessons have a small cost.',
  ],
  // TODO: Update each semester with the real schedule (see the printed postcard).
  upcoming: [
    {
      title: 'Saturday Pool Party',
      date: 'Saturday, September 5, 2026 · 5–8pm',
      location: 'Marty’s House, 4455 Stanbridge Road, Long Beach 90808',
      text: 'Swim, eat, and meet everyone at the first big hangout of the semester.',
      tag: 'Hangout',
    },
    {
      title: 'Free Snacks & Games',
      date: 'Wednesday, September 9, 2026 · 4–6pm',
      location: 'Nugget Grill Courtyard, near the CSULB bookstore',
      text: 'Drop in between classes for free snacks and games. DM us and we will come find you.',
      tag: 'On campus',
    },
    {
      title: 'Friday Talk Time Dinner',
      date: 'Friday, September 11, 2026 · 6–9pm',
      location: 'Art & Jade’s House, 3829 Gondar Avenue, Long Beach 90808',
      text: 'A home-cooked dinner and easy conversation — great for practicing English and asking anything about American life.',
      tag: 'Dinner',
    },
    {
      title: 'Friday Games Dinner',
      date: 'Friday, September 18, 2026 · 6–9pm',
      location: 'Volunteer home, Long Beach',
      text: 'Dinner followed by board games and a lot of laughing at each other.',
      tag: 'Dinner',
    },
    {
      title: 'Surf & Body Board Lessons',
      date: 'Saturday, September 26, 2026 · 8–11am',
      location: '95 1st Street, Seal Beach 90740 — by the jetty, near lifeguard tower #5',
      text: 'Never surfed before? Perfect. Boards and instruction provided. ($5 per person)',
      tag: 'Outdoors',
    },
  ],
  // TODO: Update with real past events.
  past: [
    { title: 'End-of-Semester Dinner', date: 'May 2026', text: 'Celebrating a year of friendship before summer break.' },
    { title: 'Surf Morning at Seal Beach', date: 'May 2026', text: 'First-time surfers and seasoned riders shared the waves.' },
    { title: 'Spring Hike & Picnic', date: 'April 2026', text: 'A scenic trail, packed lunches, and great company.' },
    { title: 'Lunar New Year Celebration', date: 'February 2026', text: 'Food, traditions, and stories from across Asia.' },
  ],
  cta: {
    title: 'Want to be at the next one?',
    description: 'Our events are open and free. Text us that you are coming and we will save you a spot — and a ride if you need one.',
    primaryCta: { label: 'Text us', href: 'sms:+15626066160' },
  },
}

/* ----------------------------- FOOTER ---------------------------- */
export const footer = {
  mission:
    'Helping international students at Cal State Long Beach build friendships, learn about American culture, and explore following Jesus.',
  contactNote: 'Questions, or want a ride to an event? Call or text us anytime.',
  clubNote: 'A recognized club at California State University, Long Beach.',
}

/* Convenience aggregate (optional import) */
export const content = {
  site,
  nav,
  impactMap,
  home,
  about,
  testimonials,
  connection,
  resources,
  gallery,
  footer,
}

export default content
