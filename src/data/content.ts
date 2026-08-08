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
 *   headline. The postcard line is the standard:
 *     "We exist to help students build friendships with Americans and
 *      fellow students, learn about American culture, and explore
 *      following Jesus."
 *   Avoid insider words a first-time visitor would not use: ministry,
 *   gospel, Christ-centered, fellowship night, outreach, testimony.
 *   Prefer: club, community, dinners, hangouts, stories, friends.
 *
 *  WRITING RULES (Carol's note, 2026-08-07):
 *   - NO em dashes or en dashes anywhere in visible copy. They are the
 *     clearest tell that a machine wrote the sentence. Use a full stop,
 *     a comma, or the word "and".
 *   - Use contractions. "You're welcome here", not "You are welcome here".
 *   - Short sentences. Concrete nouns. Say the actual thing.
 *   - Skip the "not X, but Y" and "it's more than X, it's Y" shapes.
 *
 *  HOW TO EDIT:
 *   - Change any text by editing the strings below.
 *   - Items marked  // TODO  are placeholders to replace with real info.
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
  tagline: 'Free food, fun hangouts and real friends at CSULB.',
  university: 'California State University, Long Beach',
  universityShort: 'CSULB',
  location: 'Long Beach, California',
  /** Straight from the postcard. This is the official mission line. */
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

/* --------------------------- WORLD MAP --------------------------- */
/** Where every travel arc on the map lands. */
export const LONG_BEACH = { name: 'Long Beach, CA', lat: 33.77, lon: -118.19 }

export interface Origin {
  name: string
  lat: number
  lon: number
  /** Bigger pin, a label on the map, and a brighter arc. */
  emphasis?: boolean
  /** Nudge the map label so neighbours don't collide. Only needed in
   *  crowded corners like Western Europe and East Asia. */
  labelDx?: number
  labelDy?: number
}

/* Add a country by dropping its latitude and longitude in here. The map
   places the pin and draws the arc automatically, no component changes
   needed. Rough country-centre coordinates are fine. */
export const ORIGINS: Origin[] = [
  // ---- Asia ----
  { name: 'China', lat: 35.0, lon: 105.0, emphasis: true, labelDy: -6 },
  { name: 'India', lat: 22.0, lon: 79.0, emphasis: true, labelDx: -14, labelDy: 16 },
  { name: 'Japan', lat: 36.5, lon: 138.0, emphasis: true, labelDx: 16, labelDy: 20 },
  { name: 'South Korea', lat: 36.5, lon: 127.8, emphasis: true, labelDx: -6, labelDy: -14 },
  { name: 'Vietnam', lat: 15.5, lon: 107.5, emphasis: true, labelDx: -16, labelDy: 20 },
  { name: 'Taiwan', lat: 23.7, lon: 121.0 },
  { name: 'Indonesia', lat: -2.5, lon: 118.0 },
  { name: 'Thailand', lat: 15.0, lon: 101.0 },
  { name: 'Philippines', lat: 12.5, lon: 122.0 },
  { name: 'Singapore', lat: 1.4, lon: 103.8 },
  { name: 'Malaysia', lat: 4.2, lon: 102.0 },
  { name: 'Nepal', lat: 28.3, lon: 84.1 },
  { name: 'Bangladesh', lat: 23.7, lon: 90.3 },
  { name: 'Pakistan', lat: 30.0, lon: 70.0 },
  { name: 'Sri Lanka', lat: 7.8, lon: 80.7 },
  { name: 'Mongolia', lat: 46.8, lon: 103.8 },
  { name: 'Kazakhstan', lat: 48.0, lon: 67.0 },
  { name: 'Uzbekistan', lat: 41.4, lon: 64.5 },
  { name: 'Iran', lat: 32.4, lon: 53.7 },
  { name: 'Saudi Arabia', lat: 24.0, lon: 45.0 },
  { name: 'UAE', lat: 24.0, lon: 54.0 },
  { name: 'Turkey', lat: 39.0, lon: 35.2 },
  // ---- Europe ----
  { name: 'United Kingdom', lat: 54.0, lon: -2.5, emphasis: true, labelDx: -26, labelDy: -14 },
  { name: 'Germany', lat: 51.2, lon: 10.4, emphasis: true, labelDx: 30, labelDy: -6 },
  { name: 'France', lat: 46.6, lon: 2.4, emphasis: true, labelDx: -26, labelDy: 6 },
  { name: 'Spain', lat: 40.3, lon: -3.7, emphasis: true, labelDx: -18, labelDy: 20 },
  { name: 'Italy', lat: 42.8, lon: 12.6, emphasis: true, labelDx: 20, labelDy: 22 },
  { name: 'Netherlands', lat: 52.2, lon: 5.5 },
  { name: 'Sweden', lat: 62.0, lon: 15.0 },
  { name: 'Norway', lat: 61.0, lon: 8.5 },
  { name: 'Denmark', lat: 56.0, lon: 9.5 },
  { name: 'Poland', lat: 52.0, lon: 19.4 },
  { name: 'Czechia', lat: 49.8, lon: 15.5 },
  { name: 'Ukraine', lat: 48.9, lon: 31.3 },
  { name: 'Russia', lat: 57.0, lon: 55.0 },
  { name: 'Greece', lat: 39.0, lon: 22.0 },
  { name: 'Portugal', lat: 39.6, lon: -8.0 },
  { name: 'Switzerland', lat: 46.8, lon: 8.2 },
  { name: 'Austria', lat: 47.6, lon: 14.1 },
  { name: 'Ireland', lat: 53.3, lon: -8.0 },
  { name: 'Romania', lat: 45.9, lon: 25.0 },
  { name: 'Hungary', lat: 47.1, lon: 19.4 },
  // ---- Africa ----
  { name: 'Nigeria', lat: 9.1, lon: 8.7 },
  { name: 'Kenya', lat: 0.2, lon: 37.9 },
  { name: 'Egypt', lat: 26.8, lon: 30.8 },
  { name: 'Ghana', lat: 7.9, lon: -1.0 },
  { name: 'Ethiopia', lat: 9.1, lon: 40.5 },
  { name: 'South Africa', lat: -29.0, lon: 24.0 },
  { name: 'Morocco', lat: 31.8, lon: -7.1 },
  // ---- Americas ----
  { name: 'Mexico', lat: 23.6, lon: -102.5 },
  { name: 'Brazil', lat: -10.0, lon: -52.0 },
  { name: 'Colombia', lat: 4.6, lon: -74.3 },
  { name: 'Peru', lat: -9.2, lon: -75.0 },
  { name: 'Chile', lat: -33.0, lon: -71.0 },
  { name: 'Argentina', lat: -34.0, lon: -64.0 },
  { name: 'Canada', lat: 56.0, lon: -106.0 },
  // ---- Oceania ----
  { name: 'Australia', lat: -25.0, lon: 133.0 },
  { name: 'New Zealand', lat: -41.0, lon: 174.0 },
]

export const impactMap = {
  eyebrow: 'Where everyone comes from',
  title: 'Long flights, same destination',
  description:
    'Every semester students fly into Long Beach from all over the world, most of all from Asia and Europe. Follow the lines to see the trip they made to get here.',
  note: 'Illustrative map. Pin positions are approximate.',
  origins: ORIGINS,
}

/* ----------------------------- HOME ------------------------------ */
export const home = {
  hero: {
    eyebrow: 'A recognized CSULB club · Everyone welcome',
    title: 'Free Food, Fun Hangouts, and Friends Who Stick Around',
    subtitle:
      "We're Americans at Cal State Long Beach who help international students settle into life in the US. Come eat with us, come to a beach day, ask us anything. It's always free and everyone's welcome.",
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
      'Moving to a new country is exciting. It can also get lonely fast, especially the first few months. ISF exists so that no international student at Cal State Long Beach has to figure it all out on their own.',
      "We're American students, alumni and local families. We cook dinner, drive people to the beach, answer the questions nobody thinks to explain, and stick around long enough to become actual friends.",
    ],
    points: [
      {
        title: 'You belong here',
        text: "Students from every country, language and background are welcome. You don't have to be anything in particular.",
      },
      {
        title: 'Real friendships',
        text: 'No sign-up sheet and no attendance list. Just people who are glad when you show up.',
      },
      {
        title: 'No pressure, ever',
        text: 'Come for the food and the company. Faith only comes up if you want it to.',
      },
    ],
  },
  weeklyRhythm: {
    eyebrow: 'What we actually do',
    title: 'What a normal week looks like',
    description:
      "There's an easy way to hang out every week. A home-cooked meal, a game night, a morning at the beach. Vegetarian options are always there, and if you need a ride we'll come get you.",
    items: [
      {
        title: 'Home dinners',
        text: "Free home-cooked meals at volunteer families' houses. Real home cooking, not cafeteria food.",
        icon: 'home',
      },
      {
        title: 'Games & snacks on campus',
        text: "Drop by between classes for free snacks and games. No need to tell us you're coming.",
        icon: 'game',
      },
      {
        title: 'Culture & conversation',
        text: "Talk Time dinners where we explain American holidays, decode slang, and answer whatever you've been wondering about.",
        icon: 'globe',
      },
      {
        title: 'Beach & outdoors',
        text: 'Surf and body board lessons, pool parties, bonfires, hikes, camping and road trips around Southern California.',
        icon: 'wave',
      },
    ],
  },
  missionPreview: {
    eyebrow: 'Our heart',
    title: 'Friendship first, always',
    body:
      "ISF helps students make friends with Americans and with each other, figure out how life works in the US, and explore following Jesus if they want to. The first two are most of what we actually do: dinners, beach days and long conversations. The third is an open door you can walk through or walk right past. Either way there's a seat for you at the table.",
    cta: { label: 'Read our story', to: '/about' },
  },
  studentInvite: {
    eyebrow: 'For international students',
    title: 'New here? Just come.',
    body: "Whether you landed last week or last year, there's a seat for you. Nothing to pay, nothing to sign, nobody keeping track of who shows up.",
    bullets: [
      'Make friends with Americans and with students from everywhere else',
      'Eat free home-cooked meals, with vegetarian options every time',
      'Get help with school, paperwork, buses, phone plans, all of it',
      "Need a ride? Text us and we'll come get you",
    ],
    cta: { label: 'Get in touch', to: '/connection' },
  },
  volunteerInvite: {
    eyebrow: 'For local friends & families',
    title: 'Open your home and your calendar',
    body: "You don't need to be an expert on anything. Host a dinner, share a hobby, give someone a ride, or just turn up and be friendly. Small things change a student's whole year.",
    bullets: [
      'Cook a meal or help out at a campus hangout',
      'Give rides, run errands, lend a hand',
      'Come along to a beach day, a surf morning or a holiday dinner',
    ],
    cta: { label: 'Find a way to help', to: '/connection' },
  },
  finalCta: {
    title: "There's always room for one more",
    description:
      "Come eat with us, make a friend, and find out what it feels like to be expected somewhere. We'd love to meet you.",
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
      'A recognized CSULB club where Americans and international students eat together, hang out and become friends.',
  },
  intro: [
    'ISF started with a simple idea. Every international student who arrives at Cal State Long Beach should be met by somebody, not by an empty room.',
    "So we cook. We drive. We show up. We're American students, alumni and local families who open our homes and our weekends to students from all over the world, and we stay in touch long after the semester ends.",
  ],
  whyStudentsMatter: {
    title: 'Why international students matter to us',
    body: [
      'Thousands of students cross the world every year to study in the United States. They arrive full of hope and then run straight into culture shock, language barriers, homesickness, and the job of building a whole life from nothing, thousands of miles from family.',
      'Doing that takes real nerve. The students we meet are some of the bravest, most capable people we know, and getting to welcome them is easily the best part of our week.',
    ],
  },
  approach: {
    title: 'How we do things',
    body: [
      "Friendship comes first, and it isn't a tactic. We show up, we cook, we drive, we listen, because that's what friends do. A real welcome shouldn't come with conditions attached.",
      "ISF is run by Christians and we're open about that. Some students get curious and want to talk about faith or read the Bible with us, and we love those conversations. Plenty of students never do, and they stay just as welcome for as long as they're here. Your answer changes nothing about your seat at the table.",
    ],
    steps: [
      {
        title: 'Show up',
        text: 'Be there week after week, learn your name, and remember what you said last time.',
      },
      {
        title: 'Help out',
        text: 'Rides, meals, errands, paperwork, and the everyday puzzles of student life in a new country.',
      },
      {
        title: 'Trade cultures',
        text: "We'll explain American holidays and slang. Honestly, we'd rather hear about yours.",
      },
      {
        title: 'Leave the door open',
        text: 'Curious about Jesus or the Bible? Happy to explore it together. Not curious? Nothing changes.',
      },
    ],
  },
  hospitality: {
    title: 'Why we cook so much',
    body: [
      "A meal buys you a couple of hours with somebody. That's really all it is. Around our tables students aren't guests to impress, they're friends to enjoy.",
      'A shared dinner, a long conversation, a holiday you would otherwise have spent alone in a dorm room. Those small things say what a brochure never could. You were expected. Somebody saved you a seat.',
    ],
  },
  csulb: {
    title: 'Part of CSULB student life',
    body: [
      'ISF is a recognized club at California State University, Long Beach, and we meet students where they already are. On campus, near campus, and around the city.',
      "We come alongside the international student experience with friendship and practical help. It's meant to complement what the university already offers, not compete with it.",
    ],
  },
  pledge: {
    title: 'What you can expect from us',
    body: [
      "You'll never be pressured, recruited, guilted, or added to a list. If you stop coming, nobody will chase you. If you come back, you'll be welcomed like nothing happened.",
      "You don't have to share our beliefs to belong here and you don't have to explain yourself. Come hungry, bring a friend, and tell us if you need a ride.",
    ],
    line: 'Everyone welcome. Always free. No pressure, ever.',
  },
}

/* -------------------------- TESTIMONIALS ------------------------- */
export const testimonials = {
  hero: {
    eyebrow: 'Student stories',
    title: 'In their own words',
    subtitle: 'A real welcome leaves a mark. These are the kinds of stories we hope every student gets to tell.',
  },
  intro: [
    'The quotes below are samples that reflect what ISF is like. They stay here as placeholders until real student voices replace them.',
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
        'They helped me understand American culture, holidays, small talk, all of it, without ever making me feel stupid for asking.',
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
        'When I was homesick this group showed up for me. Beach days and shared meals got me through a hard semester.',
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
  note: "Got a story to share? We'd love to hear it. Reach out on our Connect page.",
}

/* --------------------------- CONNECTION -------------------------- */
export const connection = {
  hero: {
    eyebrow: 'Get in touch',
    title: 'Come say hello',
    subtitle:
      'The fastest way to reach us is to call or text. Ask us anything. Where the next dinner is, whether to bring something, or if we can pick you up.',
  },
  intro: [
    "You don't need an invitation and you don't need to know anybody. Message one of us and we'll tell you exactly where to go and what to expect.",
  ],
  /** Big, obvious contact cards. Mirrors the postcard. */
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
      text: 'Where we post last-minute plans, rides and reminders. DM 562-606-6160 for the invite link.',
      items: [{ label: 'WhatsApp', value: 'Message 562-606-6160', href: 'https://wa.me/15626066160' }],
      icon: 'whatsapp',
    },
    {
      title: 'Follow us online',
      text: 'Photos from recent events and whatever is coming up next.',
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
      text: "New to CSULB, or just looking for people to hang out with? Text us and we'll get you to your first dinner.",
      cta: { label: 'Text us', href: 'sms:+15626066160' },
    },
    {
      audience: 'For local friends & volunteers',
      title: 'Help us welcome students',
      text: "Host a meal, share a hobby, give a ride, or just come and be friendly. We'll help you find a place to jump in.",
      cta: { label: 'Get involved', href: 'sms:+15626066160' },
    },
    {
      audience: 'For families & supporters',
      title: 'Keep it free for students',
      text: 'Groceries, gas and event costs get covered by local friends and families, so students never pay a cent.',
      cta: { label: 'Start a conversation', href: 'sms:+15622129522' },
    },
  ],
  rides: {
    title: 'Need a ride? Just ask.',
    body: 'Text us if you need a ride to an event. Pickup is from the International House Dorm steps in parking lot #1, or the Beverly Plaza Shuttle Stop parking lot, 30 minutes before the event starts.',
  },
  interests: [
    {
      title: 'Coming to a dinner?',
      text: "Let us know and we'll save you a seat. Vegetarian options are always available, just tell us.",
    },
    {
      title: 'Interested in an event?',
      text: "Pool parties, surf lessons, beach days, camping, culture nights. Tell us what sounds fun and we'll keep you posted.",
    },
  ],
  form: {
    title: 'Or send us a message',
    // TODO: This form is a VISUAL PLACEHOLDER. It does not submit anywhere yet.
    // Connect it later to Formspree, Google Forms, Netlify Forms, or another
    // service. See README ("Connecting the forms") for step-by-step options.
    note: "This form is a visual placeholder and doesn't send yet. Until it's connected, please call, text or DM us using the options above. We answer quickly.",
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
    subtitle: 'A starting point for settling in, working out how American life runs, and finding help around Long Beach.',
  },
  intro: [
    'These are here to make life a little easier. The links below are placeholders for now, ready to swap for the pages and offices you actually recommend.',
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
      text: 'Friendly guides to customs, holidays and everyday life.',
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
      text: 'Transport, groceries and the practical setup stuff.',
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
      text: 'Only if you want it. No pressure and no follow-up list.',
      links: [
        { label: 'Questions about Jesus or the Bible', href: '/connection' },
        { label: 'Read the Bible online in your language', href: '#', note: 'TODO' },
      ],
    },
  ],
  note: "Need something that isn't here? Ask us and we'll do our best to help you find it.",
}

/* ----------------------- GALLERY & EVENTS ------------------------ */
export const gallery = {
  hero: {
    eyebrow: 'Events & photos',
    title: 'What we get up to',
    subtitle:
      'Home dinners, surf mornings, pool parties and bonfires. Here is a look at what ISF is like and what is coming up next. Everything is free and everyone is welcome.',
  },
  intro: [
    'These tiles are placeholders for real photos. Drop your images into /public/gallery and update this page to bring the group to life.',
  ],
  // TODO: Replace placeholder tiles with real event photos (see README).
  categories: [
    { title: 'Home dinners', text: 'Free home-cooked meals around a welcoming table.', tone: 'coral' },
    { title: 'Beach days', text: 'Sun, sand and good conversation.', tone: 'sky' },
    { title: 'Surf & body board', text: 'Lessons for first timers along the SoCal coast.', tone: 'teal' },
    { title: 'Camping', text: "Campfires, s'mores and starry nights.", tone: 'sun' },
    { title: 'Culture nights', text: 'Celebrating the traditions we each bring.', tone: 'grape' },
    { title: 'Holiday gatherings', text: 'Thanksgiving, Lunar New Year and more.', tone: 'berry' },
    { title: 'Games & snacks', text: 'Drop-in afternoons on campus between classes.', tone: 'grass' },
  ],
  /** Practical notes lifted straight from the postcard. */
  eventNotes: [
    'Vegetarian food options are available at every meal.',
    'Need a ride? Text us. Pickup is from the International House Dorm steps in parking lot #1, or the Beverly Plaza Shuttle Stop parking lot, 30 minutes before the event.',
    'Everything is free unless we say otherwise. A few activities like surf lessons have a small cost.',
  ],
  // TODO: Update each semester with the real schedule (see the printed postcard).
  upcoming: [
    {
      title: 'Saturday Pool Party',
      date: 'Saturday, September 5, 2026 · 5 to 8pm',
      location: "Marty's House, 4455 Stanbridge Road, Long Beach 90808",
      text: 'Swim, eat and meet everyone at the first big hangout of the semester.',
      tag: 'Hangout',
    },
    {
      title: 'Free Snacks & Games',
      date: 'Wednesday, September 9, 2026 · 4 to 6pm',
      location: 'Nugget Grill Courtyard, near the CSULB bookstore',
      text: "Drop in between classes for free snacks and games. DM us and we'll come find you.",
      tag: 'On campus',
    },
    {
      title: 'Friday Talk Time Dinner',
      date: 'Friday, September 11, 2026 · 6 to 9pm',
      location: "Art & Jade's House, 3829 Gondar Avenue, Long Beach 90808",
      text: 'A home-cooked dinner and easy conversation. Great for practicing English and asking anything about American life.',
      tag: 'Dinner',
    },
    {
      title: 'Friday Games Dinner',
      date: 'Friday, September 18, 2026 · 6 to 9pm',
      location: 'Volunteer home, Long Beach',
      text: 'Dinner, then board games and a lot of laughing at each other.',
      tag: 'Dinner',
    },
    {
      title: 'Surf & Body Board Lessons',
      date: 'Saturday, September 26, 2026 · 8 to 11am',
      location: '95 1st Street, Seal Beach 90740, by the jetty near lifeguard tower #5',
      text: 'Never surfed before? Perfect. Boards and instruction provided. ($5 per person)',
      tag: 'Outdoors',
    },
  ],
  // TODO: Update with real past events.
  past: [
    { title: 'End-of-Semester Dinner', date: 'May 2026', text: 'Celebrating a year of friendship before summer break.' },
    { title: 'Surf Morning at Seal Beach', date: 'May 2026', text: 'First time surfers and seasoned riders shared the waves.' },
    { title: 'Spring Hike & Picnic', date: 'April 2026', text: 'A scenic trail, packed lunches and great company.' },
    { title: 'Lunar New Year Celebration', date: 'February 2026', text: 'Food, traditions and stories from across Asia.' },
  ],
  cta: {
    title: 'Want to be at the next one?',
    description:
      "Our events are open and free. Text us that you're coming and we'll save you a spot, plus a ride if you need one.",
    primaryCta: { label: 'Text us', href: 'sms:+15626066160' },
  },
}

/* ----------------------------- FOOTER ---------------------------- */
export const footer = {
  mission:
    'Helping international students at Cal State Long Beach make friends, settle into American life, and explore following Jesus.',
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
