// Committees 2026-27. Detailed duties and instructions are in the guidelines PDF
// (committeeGuidelines below), not on the website.

export interface Committee {
  name: string
  /** Committee heads for the year, from the 2026-27 committee list */
  heads: string[]
  members: string[]
  role: string
}

export const committeesYear = '2026–27'

export const committeeGuidelines = {
  title: 'Committee Guidelines 2026–27',
  description:
    'Responsibilities, duties and instructions for each SMS Research Forum committee, including general instructions for committee heads.',
  href: '/static/files/committees/sms-research-forum-committee-guidelines-2026-27.pdf',
}

/** Scholar coordinators, above the committee heads */
export const forumCoordinators = [
  { title: 'Coordinators', names: ['Akshay M', 'Sruthy Gopinath'] },
  { title: 'Assistant Coordinators', names: ['Hasnath Hameed', 'Shahanas A M'] },
]

const committeesData: Committee[] = [
  {
    name: 'Programme Committee',
    heads: ['Navya M P', 'Jeeva Antony'],
    members: [
      'Ajith Purushothaman',
      'Ameera Abbas',
      'Balaji K S',
      'Devika K D',
      'Josy Mathew',
      'Lakshmi G',
      'Lekshmi B S',
      'Merin Johnson',
      'Midhunkrishna K M',
      'Mohammad Jazzar',
      'Nafia Mol K A',
      'Raghi T',
      'Renu Susan Thomas',
      'Sneha Rose George',
    ],
    role: 'Planning and conducting research-oriented programmes and academic activities.',
  },
  {
    name: 'Editorial Committee',
    heads: ['Muhammed Irshad K V', 'Shahanamol'],
    members: [
      'Adila Fathima',
      'Asmabi K K',
      'D R Adinath',
      'Foussia Azeez',
      'Iqbal K I',
      'Jomol K Paul',
      'Khadeeja Noushad',
      'Mary Manju',
      'Priya Raj A R',
      'Rimsha Fathima Sulaiman',
      'Sharon John',
      'Sreelakshmi Aneesh',
      'Syama P S',
      'Vishnu Priya O S',
    ],
    role: 'Preparation and coordination of content, communication materials, documentation, Research Forum publications, and alumni- and placement-related activities.',
  },
  {
    name: 'Social & Welfare Committee',
    heads: ['Anna Stephen', 'Liyana'],
    members: [
      'Afeef Abdul Sathar',
      'Ann Maria Kurian',
      'Arya V S',
      'Athira C',
      'Bhavana Balan',
      'Dhanya Mohan P',
      'Edwin Stanley',
      'J Hanoon Fatima',
      'Rawush Zafar',
      'Rohini R',
      'Safna Beegum A',
      'Sarath Krishna',
      'Shujaullah K H',
      'Ulfat Rasuli',
    ],
    role: 'Scholar welfare, interaction, inclusiveness and social activities.',
  },
  {
    name: 'Technical Committee',
    heads: ['Agaja K B', 'Sreelakshmi P'],
    members: ['Albin P James', 'Balu R Krishna', 'Gavin John'],
    role: 'Digital design and production, publicity execution, digital record management, and technical assistance for Research Forum programmes and activities.',
  },
  {
    name: 'Finance Committee',
    heads: ['Shetal Singh', 'Akshay Raj R'],
    members: ['Ambili S'],
    role: 'Financial planning, budgeting and maintaining transparent financial records.',
  },
]

export default committeesData
