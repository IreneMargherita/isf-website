/* =====================================================================
 *  ISF — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE COPY
 * ---------------------------------------------------------------------
 *  Every headline, paragraph, label, list, testimonial and event on the
 *  site is defined here. Pages and components import from this file, so
 *  you can update wording WITHOUT touching component code.
 *
 *  HOW TO EDIT:
 *   - Change any text by editing the strings below.
 *   - Items marked  // TODO  are placeholders to replace with real info
 *     (contact email, social links, leader names/photos, resource URLs,
 *     donation link, gallery photos, etc.).
 *   - After editing, run `npm run build` and re-upload the dist/ folder.
 * ===================================================================== */

export interface Cta {
  label: string
  /** internal route (React Router) */
  to?: string
  /** external/mailto link */
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
  tagline: 'Friendship, hospitality, and the love of Jesus for international students.',
  university: 'California State University, Long Beach',
  universityShort: 'CSULB',
  location: 'Long Beach, California',
  missionStatement:
    'We welcome international students at Cal State Long Beach into genuine friendship — sharing meals, culture, and the love of Jesus so that every student feels known, valued, and at home.',
  // TODO: replace with the ministry's real contact email.
  contactEmail: 'hello@isfcsulb.org',
  social: [
    // TODO: replace '#' with the real profile URLs (or remove unused ones).
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Email', href: 'mailto:hello@isfcsulb.org', icon: 'mail' },
  ],
}

/* ----------------------------- NAV ------------------------------- */
export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Curriculum', to: '/curriculum' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Stories', to: '/testimonials' },
  { label: 'Connect', to: '/connection' },
  { label: 'Prayer', to: '/prayer-request' },
  { label: 'Resources', to: '/resources' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Give', to: '/give' },
]

/* --------------------------- IMPACT MAP -------------------------- */
/* x / y are percentage positions on the stylized map (0–100).
   `emphasis: true` draws a larger ruby pin with a label. */
export const impactMap = {
  eyebrow: 'A global family',
  title: 'Students from many nations',
  description:
    'Students from many nations find friendship and hospitality through ISF. Our community especially welcomes students from India, China, Japan, and across Europe — alongside friends from every corner of the world.',
  note: 'Placeholder map — positions are illustrative, not exact.',
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
    eyebrow: 'Welcome to ISF · CSULB',
    title: 'Friendship, Hospitality, and the Love of Jesus for International Students',
    subtitle:
      'International Student Fellowship welcomes students at California State University, Long Beach through meals, friendship, cultural experiences, and Christ-centered hospitality.',
    primaryCta: { label: 'Get Connected', to: '/connection' },
    secondaryCta: { label: 'Explore Events', to: '/gallery' },
    floatingTags: ['Home dinners', 'Beach days', 'Many nations', 'Real friendship'],
    stats: [
      { value: 'Weekly', label: 'Dinners & fellowship' },
      { value: 'Many', label: 'Nations welcomed' },
      { value: 'CSULB', label: 'Right on campus' },
    ],
  },
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'A warm welcome, far from home',
    body: [
      'Moving to a new country is exciting — and it can also be lonely. International Student Fellowship exists to make sure no student at Cal State Long Beach has to figure it out alone.',
      'We are a faith-based Christian community that comes alongside international students with hospitality, friendship, and practical care. You are welcome here exactly as you are.',
    ],
    points: [
      { title: 'You belong here', text: 'Students of every nation, language, and background are warmly welcomed.' },
      { title: 'Real relationships', text: 'We build genuine friendships, not programs to get through.' },
      { title: 'Christ-centered care', text: 'We share the love of Jesus through how we treat one another.' },
    ],
  },
  weeklyRhythm: {
    eyebrow: 'Our weekly rhythm',
    title: 'Life together, week by week',
    description:
      'Every week brings simple, joyful ways to belong — a shared table, a good laugh, a new friend, and time to rest from a busy semester.',
    items: [
      { title: 'Home dinners', text: 'Shared meals in the homes of volunteer families — a real taste of welcome.', icon: 'home' },
      { title: 'Games & fellowship', text: 'Fellowship nights full of games, laughter, and good company.', icon: 'game' },
      { title: 'Cultural experiences', text: 'Conversations across cultures and a friendly introduction to American life.', icon: 'globe' },
      { title: 'Outdoor activities', text: 'Beach outings, surfing, hikes, camping, and trips around Southern California.', icon: 'wave' },
    ],
  },
  missionPreview: {
    eyebrow: 'Our heart',
    title: 'Pre-evangelism through genuine friendship',
    body: 'ISF is, at its heart, a pre-evangelism ministry. We build trust, serve practically, and share the love of Jesus through authentic relationships — never pressure. When students are curious, we are glad to talk about faith and explore the Bible together.',
    cta: { label: 'Read our story', to: '/about' },
  },
  studentInvite: {
    eyebrow: 'For international students',
    title: 'New here? Come as you are.',
    body: 'Whether you arrived last week or last year, there is a seat for you at our table. No cost, no pressure — just a friendly community ready to welcome you.',
    bullets: [
      'Make friends from around the world and across the U.S.',
      'Enjoy home-cooked meals and warm hospitality',
      'Get help adjusting to life, school, and culture in America',
    ],
    cta: { label: 'Connect with us', to: '/connection' },
  },
  volunteerInvite: {
    eyebrow: 'For volunteers & churches',
    title: 'Open your home and your heart',
    body: 'You do not need to be an expert — just willing to welcome. Host a dinner, share a hobby, give a ride, or simply be a friend. Small acts of hospitality change lives.',
    bullets: [
      'Host a meal or join a fellowship night',
      'Help with rides, errands, and practical needs',
      'Partner as a church or supporter of the ministry',
    ],
    cta: { label: 'Find a way to serve', to: '/connection' },
  },
  finalCta: {
    title: 'There is always room for one more',
    description:
      'Come share a meal, make a friend, and experience a welcome that feels like home. We would love to meet you.',
    primaryCta: { label: 'Get Connected', to: '/connection' },
    secondaryCta: { label: 'Support the Ministry', to: '/give' },
  },
}

/* ----------------------------- ABOUT ----------------------------- */
export const about = {
  hero: {
    eyebrow: 'About ISF',
    title: 'A home away from home at Cal State Long Beach',
    subtitle:
      'International Student Fellowship is a faith-based Christian ministry serving international students at CSULB through friendship, hospitality, and the love of Jesus.',
  },
  intro: [
    'International Student Fellowship (ISF) began with a simple conviction: that every international student who comes to Cal State Long Beach should be met with warmth, not loneliness.',
    'We are a community of volunteers, host families, and friends who open our homes and our lives to students from around the world. We share meals, celebrate cultures, walk through the ups and downs of student life, and offer the steady friendship that makes a new place feel like home.',
  ],
  whyStudentsMatter: {
    title: 'Why international students matter',
    body: [
      'Each year, thousands of students travel across the world to study in the United States. They arrive full of hope — and often face culture shock, language barriers, homesickness, and the challenge of building a brand-new life far from family.',
      'International students are some of the most courageous, capable people we know. They matter deeply — to their families, to our campus, and to God. Welcoming them well is a joy and a privilege.',
    ],
  },
  preEvangelism: {
    title: 'Pre-Evangelism Through Friendship',
    body: [
      'ISF is mainly a pre-evangelism ministry. That simply means we focus on building trust and genuine relationships first — long before any conversation about faith.',
      'We serve practically, introduce students to American culture, and love people the way Jesus loves us: patiently, generously, and without strings attached. When a student is curious about the Christian faith, we are glad to share, to answer questions, and to explore the Bible together. But the friendship is always real — never a means to an end.',
    ],
    steps: [
      { title: 'Build trust', text: 'Show up consistently, listen well, and become a dependable friend.' },
      { title: 'Serve practically', text: 'Help with rides, meals, errands, and the everyday needs of student life.' },
      { title: 'Share culture', text: 'Open our homes and traditions, and learn from each student’s culture too.' },
      { title: 'Share Jesus', text: 'When students are curious, gently share the gospel and the hope we have in Christ.' },
    ],
  },
  hospitality: {
    title: 'The heart of hospitality',
    body: [
      'Hospitality is more than a meal — it is making space for someone to belong. Around our tables, students are not guests to impress but family to enjoy.',
      'A shared dinner, a long conversation, a holiday spent together — these simple things tell a student: you are seen, you are wanted, you are not alone.',
    ],
  },
  csulb: {
    title: 'Connected to CSULB student life',
    body: [
      'ISF serves students right where they are — on and around the Cal State Long Beach campus and throughout the Long Beach community.',
      'We come alongside the international student experience with friendship and support, complementing the university’s own programs and helping students thrive in their new home.',
    ],
  },
  heart: {
    title: 'The heart behind the ministry',
    body: [
      'Everything we do flows from the love we have received from Jesus. We welcome others because we ourselves have been welcomed.',
      'Our prayer is simple: that every student would feel genuinely loved, find a true community, and encounter the hospitality of God through ordinary people who care.',
    ],
    verse: '“Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.” — Hebrews 13:2',
  },
}

/* --------------------------- CURRICULUM -------------------------- */
export const curriculum = {
  hero: {
    eyebrow: 'Faith & Culture Learning',
    title: 'Conversations That Matter',
    subtitle:
      'A relational, never-forced way to explore American culture, friendship, life’s big questions, and the Christian faith — together, at our own pace.',
  },
  intro: [
    'This is not a classroom and there are no exams. Think of it as the natural conversations that happen between friends — over dinner, on a walk, or around a bonfire.',
    'Below are the kinds of topics we love to explore together. Everything is optional, friendly, and led by relationship rather than a syllabus.',
  ],
  note: 'Relational, not academic. Come with questions, leave with friends — and explore as much or as little as you like.',
  tracks: [
    { tag: 'Welcome', title: 'American culture orientation', text: 'Friendly guidance on daily life in the U.S. — customs, holidays, food, slang, and the little things no one tells you.' },
    { tag: 'Belonging', title: 'Friendship & community', text: 'How to build real friendships across cultures, and where to find a community that feels like family.' },
    { tag: 'Table', title: 'Hospitality & shared meals', text: 'The heart of ISF: gathering around the table to share food, stories, and life together.' },
    { tag: 'Reflection', title: 'Life’s big questions', text: 'Honest conversations about purpose, identity, belonging, hope, and what makes life meaningful.' },
    { tag: 'Scripture', title: 'Bible-centered conversations', text: 'For those who are curious, a warm and open look at who Jesus is and what the Bible says.' },
    { tag: 'Faith', title: 'Exploring the Christian faith', text: 'A no-pressure space to ask anything about Christianity and explore faith at your own pace.' },
    { tag: 'Support', title: 'Practical support for students', text: 'Help navigating school, paperwork, transportation, and the practical needs of student life.' },
  ],
  approach: {
    title: 'How it works',
    body: [
      'There is no sign-up sheet and no commitment. These conversations happen naturally as we share life — at dinners, fellowship nights, and outings.',
      'You set the pace. Explore what interests you, ask hard questions, and know that you are always welcome whether or not you share our faith.',
    ],
  },
}

/* --------------------------- LEADERSHIP -------------------------- */
export const leadership = {
  hero: {
    eyebrow: 'Our team',
    title: 'The people behind the welcome',
    subtitle:
      'ISF is led by a caring team of staff, volunteers, host families, and student leaders who love welcoming international students.',
  },
  intro: [
    'Behind every shared meal and friendship is a team of real people who show up week after week. Meet a few of the faces who help make ISF feel like home.',
  ],
  // TODO: Replace placeholder names, roles, bios and add photos.
  // To add a photo: place an image in /public/leaders/ and set `image: "leaders/your-file.jpg"`.
  // (No leading slash needed — paths resolve through src/lib/asset.ts, which
  // handles the GitHub Pages sub-path automatically.)
  leaders: [
    { name: 'Leader Name', role: 'Ministry Director', focus: 'Vision & hospitality', bio: 'Short bio placeholder — share this leader’s heart for international students, their background, and what they love about ISF.', initials: 'LN', image: '' },
    { name: 'Leader Name', role: 'Student Care Coordinator', focus: 'Friendship & follow-up', bio: 'Short bio placeholder — describe how this leader walks alongside students and helps them feel at home.', initials: 'LN', image: '' },
    { name: 'Leader Name', role: 'Events & Outings Lead', focus: 'Beach days, trips & camping', bio: 'Short bio placeholder — highlight this leader’s gift for planning fun, welcoming events for the whole community.', initials: 'LN', image: '' },
    { name: 'Leader Name', role: 'Host Family Coordinator', focus: 'Home dinners', bio: 'Short bio placeholder — explain how this leader connects students with warm, welcoming host families.', initials: 'LN', image: '' },
    { name: 'Leader Name', role: 'Volunteer Coordinator', focus: 'Serving & rides', bio: 'Short bio placeholder — share how this leader equips volunteers to love and serve students well.', initials: 'LN', image: '' },
    { name: 'Leader Name', role: 'Student Leader', focus: 'Peer friendship', bio: 'Short bio placeholder — introduce a student leader who helps welcome and connect fellow international students.', initials: 'LN', image: '' },
  ],
  groups: [
    { title: 'Volunteers', text: 'Everyday friends who host meals, give rides, share hobbies, and simply show up for students.' },
    { title: 'Host families', text: 'Families who open their homes for dinners and holidays, offering a true taste of belonging.' },
    { title: 'Student leaders', text: 'International and local students who help welcome newcomers and build community from the inside.' },
    { title: 'Ministry partners', text: 'Churches, supporters, and friends who pray for, fund, and champion the work of ISF.' },
  ],
  note: 'Want to join the team? We would love to have you. Reach out through our Connect page.',
}

/* -------------------------- TESTIMONIALS ------------------------- */
export const testimonials = {
  hero: {
    eyebrow: 'Student stories',
    title: 'In their own words',
    subtitle:
      'Real welcome leaves a lasting mark. Here are the kinds of stories we hope every student gets to tell.',
  },
  intro: [
    'The quotes below are sample stories that reflect the heart of ISF. They are placeholders — ready to be replaced with real student voices as they are shared and approved.',
  ],
  // TODO: Replace these placeholder stories with real (approved) student testimonials.
  stories: [
    { quote: 'I found a family away from home. ISF gave me people who actually care how my week is going.', name: 'Student from East Asia', country: 'Placeholder story', context: 'Graduate student' },
    { quote: 'ISF helped me understand American culture — from holidays to small talk — without ever making me feel out of place.', name: 'Student from South Asia', country: 'Placeholder story', context: 'Undergraduate' },
    { quote: 'The dinners made me feel welcomed. I walked in a stranger and left feeling like I belonged.', name: 'Student from Europe', country: 'Placeholder story', context: 'Exchange student' },
    { quote: 'I experienced Christian hospitality for the first time. The kindness was real, and it made me curious about why.', name: 'Student from the Middle East', country: 'Placeholder story', context: 'Graduate student' },
    { quote: 'When I was homesick, this community showed up for me. Beach days and shared meals got me through a hard semester.', name: 'Student from Southeast Asia', country: 'Placeholder story', context: 'Undergraduate' },
    { quote: 'I came for the free dinner and stayed for the friendships. These are people I will keep for life.', name: 'Student from Latin America', country: 'Placeholder story', context: 'Graduate student' },
  ],
  note: 'Have a story to share? We would be honored to hear it — reach out through our Connect page.',
}

/* --------------------------- CONNECTION -------------------------- */
export const connection = {
  hero: {
    eyebrow: 'Get connected',
    title: 'Take the next step',
    subtitle:
      'However you would like to be part of ISF — as a student, a volunteer, or a supporter — we would love to hear from you.',
  },
  intro: [
    'Choose the path that fits you best below. The quickest way to reach us is by email, and the short form is ready to connect to a form service whenever you are.',
  ],
  paths: [
    {
      audience: 'For international students',
      title: 'Come make some friends',
      text: 'New to CSULB or just looking for community? Reach out and we will help you find your first dinner or event.',
      cta: { label: 'Email us', href: 'mailto:hello@isfcsulb.org?subject=I%20am%20a%20student%20who%20wants%20to%20connect' },
    },
    {
      audience: 'For volunteers',
      title: 'Help us welcome students',
      text: 'Host a meal, share a hobby, give a ride, or just be a friend. We will help you find a place to serve.',
      cta: { label: 'Volunteer with us', href: 'mailto:hello@isfcsulb.org?subject=I%20want%20to%20volunteer%20with%20ISF' },
    },
    {
      audience: 'For churches & supporters',
      title: 'Partner with the ministry',
      text: 'Churches and supporters help make this work possible through prayer, giving, and partnership.',
      cta: { label: 'Start a conversation', href: 'mailto:hello@isfcsulb.org?subject=Our%20church%20would%20like%20to%20partner' },
    },
  ],
  interests: [
    { title: 'Weekly dinner interest', text: 'Want a seat at an upcoming home dinner? Let us know and we will save you a spot.' },
    { title: 'Event interest', text: 'Beach days, surfing, camping, cultural nights — tell us what sounds fun and we will keep you posted.' },
  ],
  form: {
    title: 'Send us a message',
    // TODO: This form is a VISUAL PLACEHOLDER. It does not submit anywhere yet.
    // Connect it later to Formspree, Google Forms, Netlify Forms, or another
    // service. See README ("Connecting the forms") for step-by-step options.
    note: 'This form is a visual placeholder. Connect it later to Formspree, Google Forms, or another form service. In the meantime, the email buttons above reach us directly.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', placeholder: 'First and last name', required: true },
      { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', required: true },
      { name: 'role', label: 'I am a…', type: 'select', placeholder: '', required: false, options: ['International student', 'Volunteer', 'Church / supporter', 'Just curious'] },
      { name: 'interest', label: 'I am interested in…', type: 'select', placeholder: '', required: false, options: ['A weekly dinner', 'An upcoming event', 'Volunteering', 'Supporting ISF', 'Something else'] },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us a little about yourself…', required: false },
    ],
    submitLabel: 'Send message',
  },
}

/* ------------------------- PRAYER REQUEST ------------------------ */
export const prayer = {
  hero: {
    eyebrow: 'Prayer request',
    title: 'We would be honored to pray for you',
    subtitle:
      'Whatever you are carrying — a hard class, homesickness, a family need, or a quiet hope — you can share it with us.',
  },
  intro: [
    'Prayer is simply talking with God, and we believe He cares about every part of your life. You do not have to be a Christian to ask for prayer; our team would be glad to pray for you and with you.',
    'Share as much or as little as you like. Your request will be handled gently and with care.',
  ],
  privacyNote:
    'Your privacy matters. Prayer requests are read only by our prayer team and are never shared publicly without your permission. You may leave your name blank if you prefer to stay anonymous.',
  form: {
    title: 'Share a prayer request',
    // TODO: This form is a VISUAL PLACEHOLDER and does not submit anywhere yet.
    // Connect it later to Formspree, Google Forms, or another form provider.
    note: 'This form is a visual placeholder — it does not send yet. Until it is connected to a form service, please email us using the button below and we will pray right away.',
    fields: [
      { name: 'name', label: 'Your name (optional)', type: 'text', placeholder: 'You may stay anonymous', required: false },
      { name: 'email', label: 'Email (optional)', type: 'email', placeholder: 'Only if you would like a reply', required: false },
      { name: 'request', label: 'How can we pray for you?', type: 'textarea', placeholder: 'Share your prayer request here…', required: true },
    ],
    submitLabel: 'Submit prayer request',
  },
  emailCta: {
    label: 'Email a prayer request',
    href: 'mailto:hello@isfcsulb.org?subject=Prayer%20request',
  },
}

/* ---------------------------- RESOURCES -------------------------- */
export const resources = {
  hero: {
    eyebrow: 'Resources',
    title: 'Helpful links for your journey',
    subtitle:
      'A starting point for settling in, finding community, exploring faith, and getting practical help in Long Beach.',
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
      title: 'Friendship & community',
      text: 'Ways to meet people and build belonging.',
      links: [
        { label: 'ISF weekly gatherings', href: '/connection' },
        { label: 'Campus clubs & student orgs', href: '#', note: 'TODO' },
        { label: 'Conversation & language partners', href: '#', note: 'TODO' },
      ],
    },
    {
      title: 'Exploring Christianity',
      text: 'Gentle, no-pressure ways to learn more.',
      links: [
        { label: 'Who is Jesus? — an introduction', href: '#', note: 'TODO' },
        { label: 'Read the Bible online', href: '#', note: 'TODO' },
        { label: 'Ask a question about faith', href: '/connection' },
      ],
    },
    {
      title: 'Local CSULB & Long Beach help',
      text: 'Getting around and finding what you need nearby.',
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
  ],
  note: 'Need something that is not here? Reach out and we will do our best to help you find it.',
}

/* ----------------------------- GALLERY --------------------------- */
export const gallery = {
  hero: {
    eyebrow: 'Gallery & events',
    title: 'Moments of welcome',
    subtitle:
      'From home dinners to beach bonfires, here is a glimpse of life together at ISF — and what is coming up next.',
  },
  intro: [
    'These tiles are placeholders for real photos. Drop your images into /public/gallery and update this page to bring our community to life.',
  ],
  // TODO: Replace placeholder tiles with real event photos (see README).
  categories: [
    { title: 'Home dinners', text: 'Shared meals around welcoming tables.', tone: 'ruby' },
    { title: 'Beach days', text: 'Sun, sand, and good conversation.', tone: 'ocean' },
    { title: 'Surfing', text: 'Catching waves along the SoCal coast.', tone: 'sage' },
    { title: 'Camping', text: 'Campfires, s’mores, and starry nights.', tone: 'gold' },
    { title: 'Cultural nights', text: 'Celebrating the traditions we each bring.', tone: 'ocean' },
    { title: 'Holiday gatherings', text: 'Thanksgiving, Lunar New Year, and more.', tone: 'ruby' },
    { title: 'Games & fellowship', text: 'Laughter-filled evenings together.', tone: 'sage' },
  ],
  // TODO: Update with real upcoming events.
  upcoming: [
    { title: 'Fall Welcome Dinner', date: 'Friday, September 4, 2026', location: 'Volunteer home, Long Beach', text: 'A warm welcome-back meal to kick off the semester and meet new friends.', tag: 'Dinner' },
    { title: 'Beach Bonfire & S’mores', date: 'Saturday, September 19, 2026', location: 'Long Beach shoreline', text: 'Sunset, a crackling fire, and plenty of s’mores. Bring a friend.', tag: 'Outdoors' },
    { title: 'International Friendship Night', date: 'Friday, October 9, 2026', location: 'Near CSULB campus', text: 'Food, games, and a celebration of the cultures in our community.', tag: 'Cultural' },
    { title: 'Thanksgiving Gathering', date: 'Thursday, November 26, 2026', location: 'Host family homes', text: 'Experience a classic American Thanksgiving around a welcoming table.', tag: 'Holiday' },
  ],
  // TODO: Update with real past events.
  past: [
    { title: 'End-of-Semester Dinner', date: 'May 2026', text: 'Celebrating a year of friendship before summer break.' },
    { title: 'Surf Morning at the coast', date: 'May 2026', text: 'First-time surfers and seasoned riders shared the waves.' },
    { title: 'Spring Hike & Picnic', date: 'April 2026', text: 'A scenic trail, packed lunches, and great company.' },
    { title: 'Lunar New Year Celebration', date: 'February 2026', text: 'Food, traditions, and stories from across Asia.' },
  ],
  cta: {
    title: 'Want to be at the next one?',
    description: 'Our events are open and free. Tell us you are coming and we will save you a spot.',
    primaryCta: { label: 'Get Connected', to: '/connection' },
  },
}

/* ------------------------------ GIVE ----------------------------- */
export const give = {
  hero: {
    eyebrow: 'Give & support',
    title: 'Help welcome the world to Long Beach',
    subtitle:
      'Every meal, ride, and beach day is made possible by people like you. There are many ways to support the ministry of ISF.',
  },
  why: {
    title: 'Why support ISF?',
    body: [
      'International students arrive far from home, often without a support network. Your generosity helps us meet them with a warm meal, a friendly face, and a community that cares.',
      'Supporting ISF is an investment in real relationships — and in students who will carry that welcome with them for the rest of their lives, all over the world.',
    ],
  },
  supports: [
    { title: 'Meals', text: 'Groceries and home-cooked dinners that gather students around the table.' },
    { title: 'Transportation', text: 'Rides and gas to get students to events, errands, and gatherings.' },
    { title: 'Student events', text: 'Welcome nights, cultural celebrations, and fellowship gatherings.' },
    { title: 'Camping & trips', text: 'Outings, retreats, and adventures across Southern California.' },
    { title: 'Hospitality supplies', text: 'The cups, plates, decorations, and extras that make people feel cared for.' },
    { title: 'Outreach resources', text: 'Materials and tools that help us welcome and serve more students.' },
  ],
  ways: [
    { title: 'Pray', text: 'Pray for our students, volunteers, and the friendships God is building.', cta: { label: 'Share a prayer', to: '/prayer-request' } },
    { title: 'Volunteer', text: 'Give your time and presence — the most valuable gift of all.', cta: { label: 'Get involved', to: '/connection' } },
    { title: 'Host a dinner', text: 'Open your home and welcome students around your table.', cta: { label: 'Become a host', to: '/connection' } },
    { title: 'Give financially', text: 'A one-time or monthly gift fuels meals, rides, and events.', cta: { label: 'Give a gift', href: '#' } },
    { title: 'Partner as a church', text: 'Mobilize your congregation to welcome international students together.', cta: { label: 'Partner with us', to: '/connection' } },
  ],
  giving: {
    title: 'Make a gift',
    // TODO: Replace the placeholder button with your real donation link
    // (e.g., a church giving page, PayPal, Givebutter, Tithe.ly, or Stripe).
    note: 'Online giving is being set up. This button is a placeholder — connect it to your real donation link (church giving page, PayPal, Givebutter, etc.). Until then, email us and we will gladly share how to give.',
    primaryCta: { label: 'Give now (placeholder)', href: '#' },
    secondaryCta: { label: 'Email about giving', href: 'mailto:hello@isfcsulb.org?subject=I%20would%20like%20to%20support%20ISF' },
  },
}

/* ----------------------------- FOOTER ---------------------------- */
export const footer = {
  mission:
    'Welcoming international students at Cal State Long Beach into friendship, hospitality, and the love of Jesus.',
  contactNote: 'Have a question or want to connect? We would love to hear from you.',
  // TODO: add a mailing address or meeting location if you would like one shown.
}

/* Convenience aggregate (optional import) */
export const content = {
  site,
  nav,
  impactMap,
  home,
  about,
  curriculum,
  leadership,
  testimonials,
  connection,
  prayer,
  resources,
  gallery,
  give,
  footer,
}

export default content
