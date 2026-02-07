interface Initiatives {
  title: string
  description: string
  category: string
  cadence: string
  lead: string
  impact: string
  status: 'Ongoing' | 'Annual' | 'Seasonal'
  href?: string
  imgSrc?: string
}

const initiativesData: Initiatives[] = [
  {
    title: 'Doctoral Colloquium',
    description:
      'Our flagship research forum where scholars present work-in-progress, receive structured feedback, and refine publication-ready outputs.',
    category: 'Academic',
    cadence: 'Annual',
    lead: 'Programme Committee',
    impact: 'Strengthens research quality through peer review and faculty mentoring.',
    status: 'Annual',
    imgSrc: '/static/images/colloquium.jpg',
    href: '/updates',
  },
  {
    title: 'Research Methods Workshop Series',
    description:
      'Hands-on sessions on quantitative and qualitative methods, academic writing standards, and journal submission strategy.',
    category: 'Capacity Building',
    cadence: 'Monthly',
    lead: 'Programme Committee',
    impact: 'Builds methodological rigor and publication confidence among scholars.',
    status: 'Ongoing',
    imgSrc: '/static/images/sem-workshop.jpg',
    href: '/updates',
  },
  {
    title: 'Quarterly Research Newsletter',
    description:
      'A curated publication highlighting scholar milestones, conference participation, publication wins, and upcoming opportunities.',
    category: 'Communication',
    cadence: 'Quarterly',
    lead: 'Editorial Committee',
    impact: 'Improves visibility of scholar achievements inside and outside SMS.',
    status: 'Ongoing',
    imgSrc: '/static/images/SMS.jpg',
    href: '/updates',
  },
  {
    title: 'Career and Placement Connect',
    description:
      'Structured industry and academic engagement to connect researchers with internship, visiting, and placement opportunities.',
    category: 'Career Development',
    cadence: 'Bi-Monthly',
    lead: 'Career & Placement Committee',
    impact: 'Bridges doctoral talent with relevant academic and industry pathways.',
    status: 'Ongoing',
    imgSrc: '/static/images/sms_cusat.jpg',
    href: '/about',
  },
  {
    title: 'Synopsis Support Clinics',
    description:
      'Mentored clinics for topic scoping, advisor alignment, and timeline planning before synopsis submission.',
    category: 'Research Support',
    cadence: 'As Needed',
    lead: 'Research Coordinators',
    impact: 'Reduces rework and improves first-round synopsis quality.',
    status: 'Ongoing',
    imgSrc: '/static/images/smslogo.jpg',
    href: '/synopsis',
  },
  {
    title: 'Iftar Meet and Scholar Wellbeing Circle',
    description:
      'Community events that strengthen scholar wellbeing, peer support, and inclusive campus culture.',
    category: 'Community',
    cadence: 'Seasonal',
    lead: 'Social & Welfare Committee',
    impact: 'Builds belonging and healthy collaboration across scholar cohorts.',
    status: 'Seasonal',
    imgSrc: '/static/images/iftar.jpg',
    href: '/about',
  },
]

export default initiativesData
