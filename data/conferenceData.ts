type ConferenceRegistrationFee = {
  label: string
  value: string
  note?: string
}

type ConferenceContact = {
  label: string
  value: string
  href?: string | null
}

export const conferenceTracks = [
  {
    slug: 'finance',
    title: 'Finance',
    subtitle: 'Digital Transformation of Financial Systems',
    description:
      'Digital technologies are reshaping financial markets, inclusion, and regulation. This track welcomes work on how finance responds to technological disruption while promoting responsible innovation, transparency, and sustainable growth.',
    topics: [
      'FinTech innovations and digital financial ecosystems',
      'Blockchain, cryptocurrencies, and decentralized finance',
      'Artificial intelligence, big data, and analytics in financial decision-making',
      'Digital payments, mobile banking, and cashless economies',
      'Financial inclusion through digital technologies',
      'Cybersecurity, fraud detection, and risk management in digital finance',
      'RegTech and governance of digital financial systems',
      'Sustainable and green finance in the digital economy',
      'Digital transformation of banking and financial institutions',
      'Emerging business models in financial services',
    ],
  },
  {
    slug: 'human-resources',
    title: 'Human Resources',
    subtitle: 'The Future of Work',
    description:
      'This track focuses on how organizations can build inclusive, ethical, and future-ready workplaces in digitally transformed environments.',
    topics: [
      'Artificial intelligence and automation in human resource management',
      'People analytics, data-driven HR, and workforce decision-making',
      'Workforce transformation, reskilling, and continuous learning',
      'Hybrid work, remote work, and digital collaboration',
      'Employee well-being, work-life balance, and mental health in digital workplaces',
      'Ethical HR practices, algorithmic fairness, and responsible AI use in HR',
      'Talent management and leadership development in the digital era',
      'Diversity, equity, and inclusion in technology-driven workplaces',
      'Organizational culture and employee engagement in virtual work environments',
      'HR strategies for agile, adaptive, and future-ready organizations',
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    subtitle: 'Marketing in Digital Consumer Ecosystems',
    description:
      'This track explores how digital platforms, data, and evolving consumer behavior are transforming contemporary marketing strategy.',
    topics: [
      'Artificial intelligence and automation in marketing strategy',
      'Social commerce, influencer ecosystems, and creator economies',
      'Customer analytics, big data, and predictive marketing',
      'Consumer behaviour in digital and emerging market contexts',
      'Omnichannel marketing and digital customer experience',
      'Platform-based marketing and digital marketplace strategies',
      'Personalization, recommendation systems, and data-driven engagement',
      'Ethical and responsible marketing in algorithmic environments',
      'Digital branding, community building, and online engagement',
      'Marketing innovation in the digital economy',
    ],
  },
  {
    slug: 'operations',
    title: 'Operations and Interdisciplinary Research in Management',
    subtitle: 'Operations, Supply Chains, and Industry Transformation',
    description:
      'This track examines how AI, IoT, automation, and analytics are driving operational efficiency, resilience, and interdisciplinary management innovation.',
    topics: [
      'Digital operations and smart supply chain systems',
      'Artificial intelligence, automation, and robotics in operations management',
      'Industry 4.0 and technology-enabled manufacturing and services',
      'Supply chain resilience, risk management, and disruption preparedness',
      'Data analytics and digital platforms in operations and logistics',
      'Service operations and digital service transformation',
      'Sustainable and green supply chain management',
      'Internet of Things and real-time supply chain visibility',
      'Technology-driven operational efficiency and performance improvement',
      'Interdisciplinary approaches to operations and industry transformation',
    ],
  },
  {
    slug: 'organizational-behaviour',
    title: 'Organizational Behaviour',
    subtitle: 'Leadership, Culture, and Change in the Digital Era',
    description:
      'This track focuses on the behavioural and leadership dimensions of digital transformation across hybrid and technology-driven workplaces.',
    topics: [
      'Digital leadership and leadership in technology-driven organizations',
      'Organizational culture and climate in digital work environments',
      'Employee adaptation and technology adoption behaviour',
      'Human-AI collaboration and the future of human-technology interaction',
      'Change management in digital transformation initiatives',
      'Leadership for innovation, agility, and organizational resilience',
      'Employee engagement, motivation, and well-being in digital workplaces',
      'Ethical leadership and responsible organizational transformation',
      'Managing organizational change in hybrid and remote work settings',
      'Behavioral dynamics of technology adoption and organizational learning',
    ],
  },
  {
    slug: 'strategy',
    title: 'Strategy',
    subtitle: 'Innovation and Emerging Business Models in the Digital Economy',
    description:
      'This track looks at how firms rethink innovation, competition, and value creation in response to technological change and digital disruption.',
    topics: [
      'Artificial intelligence and technology-driven innovation',
      'Platform-based business models and digital ecosystems',
      'Digital entrepreneurship and startup innovation',
      'Strategic management in technology-driven industries',
      'Emerging business models in the digital economy',
      'Sustainable strategy and responsible innovation',
      'Business model innovation in emerging and developing markets',
      'Innovation ecosystems, open innovation, and collaborative networks',
      'Strategic agility, dynamic capabilities, and organizational adaptation',
      'Industry disruption and competitive strategy in the digital era',
    ],
  },
] as const

export const conference2026 = {
  slug: 'conference-2026',
  shortTitle: "Conference '26",
  title: 'International Conference and Doctoral Colloquium 2026',
  subtitle:
    'A flagship academic platform from SMS Research Forum for scholars, faculty, and practitioners to present emerging work, exchange ideas, and build meaningful research collaborations.',
  tagline: 'Ignite the Research Aptitude',
  theme: 'Digital Futures: Reimagining Social and Business Models',
  heroImage: '/static/images/conference26.jpeg',
  registrationLink: null as string | null,
  submissionInterestLink:
    'mailto:researchforumsms@gmail.com?subject=Abstract%20Submission%20Interest%20-%20International%20Conference%20and%20Colloquium%2026',
  abstractSubmissionDeadline: '10 April 2026',
  eventDates: '15-16 May 2026',
  venue: 'School of Management Studies, CUSAT',
  formatSummary:
    'International Conference presentations will be allowed in hybrid mode, while the Doctoral Colloquium will be conducted offline at SMS, CUSAT.',
  description: [
    'Building on the success of the forum’s earlier edition, the SMS Research Forum at the School of Management Studies, Cochin University of Science and Technology is organizing its second International Conference and Doctoral Colloquium on 15-16 May 2026.',
    'This edition brings together scholars, journal editors, and practitioners to discuss how digital technologies are reshaping organizations, markets, and social systems, while creating space for high-quality research presentations, collaboration, and publication-oriented dialogue.',
  ],
  callForAbstracts:
    'The conference invites the academic community and industry professionals to contribute papers, white papers, and doctoral research discussions aligned with the theme of Digital Futures: Reimagining Social and Business Models.',
  tracks: conferenceTracks,
  keyDates: [
    { label: 'Last date to submit abstract', value: '10 April 2026', isTentative: false },
    { label: 'Abstract acceptance', value: 'Within 3-5 days of submission', isTentative: false },
    { label: 'Early bird registration closes', value: '15 April 2026', isTentative: false },
    { label: 'Last date to submit full papers', value: '30 April 2026', isTentative: false },
    { label: 'Registration closes', value: '10 May 2026', isTentative: false },
    { label: 'Conference dates', value: '15-16 May 2026', isTentative: false },
  ],
  registrationFees: [
    { label: 'Early Bird (before 15 April)', value: 'INR 2,360 including GST' },
    { label: 'Post Early Bird (after 15 April)', value: 'INR 2,950 including GST' },
    {
      label: 'Online Paper Presentation',
      value: 'INR 1,888 including GST',
      note: 'Applicable only to conference paper presenters joining virtually, not to the doctoral colloquium.',
    },
  ] satisfies ConferenceRegistrationFee[],
  highlights: [
    'Academic paper presentations',
    'Policy and industry white paper sessions',
    'Doctoral research colloquium',
    'Meet the editors',
    'Technical research sessions',
    'Best paper and young researcher awards',
    'Publication opportunities in Q1 and Q2 ABDC outlets',
    'Value-added qualitative and quantitative workshops',
    'Cultural evening and networking dinner',
  ],
  doctoralColloquium: {
    eligibility:
      'For advanced PhD/FPM scholars registered with recognized institutions in India or abroad who have completed at least one year of doctoral research.',
    stageRequirement:
      'Submissions should be based on work that has progressed at least to the conceptual framework stage.',
    abstractIncludes: [
      'Title',
      'Research background and problem statement',
      'Objectives',
      'Conceptual framework',
      'Methodology',
      'Key findings and insights, if available',
    ],
    format:
      'Word limit 2000-3000 words, PDF or Word format, Times New Roman, size 12, 1.5 line spacing.',
    focusAreas: [
      'Digital transformation and emerging business models',
      'Innovation, strategy, and entrepreneurship in the digital economy',
      'Leadership, organizational behavior, and the future of work',
      'Marketing and digital consumer ecosystems',
      'Finance, fintech, and digital financial systems',
      'Operations, supply chains, and industry transformation',
      'Interdisciplinary approaches to management research',
    ],
  },
  contacts: [
    {
      label: 'Conference Email',
      value: 'researchforumsms@gmail.com',
      href: 'mailto:researchforumsms@gmail.com?subject=International%20Conference%20and%20Colloquium%2026',
    },
    {
      label: 'Conference Coordinator',
      value: 'Muhammed Irshad K.V | +91 95676 46717 | irshad@cusat.ac.in',
      href: 'mailto:irshad@cusat.ac.in?subject=Conference2026_Enquiry',
    },
  ] satisfies ConferenceContact[],
  submissionGuidelines: [
    'Prepare an original abstract aligned with one of the listed conference tracks or themes.',
    'Doctoral colloquium submissions should reflect work progressed at least to the conceptual framework stage.',
    'Keep your contact details ready so the organizing team can notify you once the submission link goes live.',
  ],
  submissionFormatNote:
    'Abstract and full paper submission links are yet to be published. Until then, this page serves as the official conference information hub.',
  conferenceIntro:
    'This conference section is designed to help participants, authors, and doctoral scholars quickly find theme details, track information, participation guidance, and colloquium expectations.',
} as const

export type ConferenceData = typeof conference2026
