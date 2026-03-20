type ConferenceRegistrationFee = {
  label: string
  value: string
  note?: string
}

type ConferenceContact = {
  label: string
  name?: string
  value?: string
  phone?: string
  email?: string
  href?: string | null
  note?: string
}

type ConferenceSubmissionSection = {
  title: string
  items: string[]
}

type ConferencePublicationOpportunity = {
  journal: string
  indexing: string
  publisher: string
}

type ConferenceRegistrationLink = {
  label: string
  href: string
  note: string
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
    title: 'Human Resources & Organizational Behaviour',
    subtitle: 'Leadership, culture and change in the Digital Era',
    description:
      'As organizations undergo rapid digital transformation, human resource practices and organizational behaviour are evolving to shape agile, inclusive, and technology-enabled workplaces.',
    topics: [
      'Digital leadership and leadership in technology-driven organizations',
      'Organizational culture and employee engagement in digital work environments',
      'Artificial intelligence and data-driven HR practices',
      'Workforce transformation, reskilling, and continuous learning',
      'Employee well-being and work-life balance in digital workplaces',
      'Change management and organizational adaptation in the digital era',
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
    slug: 'strategy',
    title: 'Strategy & Innovation',
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
  registrationLinks: [
    {
      label: 'Offline Participation Registration',
      href: 'https://forms.gle/ptcu3QdDZiCCDHVdA',
      note: 'For offline participants of the International Conference and Doctoral Colloquium 2026, including presenters and attendees.',
    },
    {
      label: 'Online Paper Presenter Registration',
      href: 'https://forms.gle/MNkpzhN2jw1kj5i49',
      note: 'For International Conference 2026 participants presenting papers online only.',
    },
  ] satisfies ConferenceRegistrationLink[],
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
  publicationOpportunities: {
    note: 'Selected full papers will be considered for publication in the above-mentioned journals.',
    journals: [
      {
        journal: 'Journal of Global Marketing',
        indexing: 'Scopus Q1, ABDC Ranking - B',
        publisher: 'Taylor & Francis',
      },
      {
        journal: 'Journal of Creative Communication',
        indexing: 'Scopus Q2, ABDC Ranking - C',
        publisher: 'SAGE',
      },
      {
        journal: 'SMS Journal of Business Management',
        indexing: 'Institutional journal publication opportunity',
        publisher: 'School of Management Studies',
      },
    ] satisfies ConferencePublicationOpportunity[],
  },
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
      note: 'General enquiries for the conference and doctoral colloquium.',
    },
    {
      label: 'Conference Coordinator',
      name: 'Muhammed Irshad K.V',
      phone: '+91 95676 46717',
      email: 'irshad@cusat.ac.in',
      note: 'Primary contact for conference and colloquium coordination.',
    },
    {
      label: 'Abstract Queries',
      name: 'Sreedev Soman',
      phone: '+91 9895375360',
      email: 'sreedev@cusat.ac.in',
      note: 'Contact for abstract-related questions and submission clarifications.',
    },
  ] satisfies ConferenceContact[],
  submissionGuidelines: {
    conference: [
      {
        title: 'Abstract Submission',
        items: [
          'The abstract should not exceed 250 words.',
          'The abstract must clearly include the purpose of the study, method or design, major findings, and the originality or contribution of the study.',
          'Authors should ensure the abstract concisely reflects the core contribution of the research.',
        ],
      },
      {
        title: 'Full Paper Submission',
        items: [
          'The full paper length should be between 2500 and 3000 words.',
          'Authors must follow APA guidelines.',
          'The manuscript must maintain academic integrity with plagiarism not exceeding 10%.',
          'Submissions should present original and unpublished work.',
          'The entire submission, including title, abstract, text, figures, graphs, tables, and references, must be contained in one document.',
        ],
      },
    ] satisfies ConferenceSubmissionSection[],
    colloquium: [
      {
        title: 'Extended Abstract',
        items: [
          'The extended abstract should be approximately 2500 words.',
          'It should provide sufficient detail about the background of the study, research objectives, methodology, key arguments or preliminary findings, and expected contribution.',
          'The entire submission, including title, abstract, text, figures, graphs, tables, and references, must be contained in one document.',
        ],
      },
      {
        title: 'Full Paper Submission',
        items: [
          'The full paper should range between 4000 and 6000 words.',
          'The papers must follow the latest APA academic writing and referencing style.',
          'The similarity or plagiarism index must not exceed 10%.',
          'Papers should demonstrate original research and scholarly contribution.',
          'The entire submission, including title, abstract, text, figures, graphs, tables, and references, must be contained in one document.',
        ],
      },
    ] satisfies ConferenceSubmissionSection[],
  },
  submissionFormatNote:
    'Abstract and full paper submission guidance is available in this conference section. Registration is now open through the published participation links.',
  conferenceIntro:
    'This conference section is designed to help participants, authors, and doctoral scholars quickly find theme details, track information, participation guidance, and colloquium expectations.',
} as const

export type ConferenceData = typeof conference2026
