// From "SMS Research Forum 2026-27: Committee Responsibilities, Duties & Instructions"

export interface DutyGroup {
  title?: string
  items: string[]
}

export interface Committee {
  name: string
  /** Committee heads for the year, from the 2026-27 committee list */
  heads: string[]
  members: string[]
  role: string
  summary: string
  duties: DutyGroup[]
  headInstructions: string[]
}

export const committeesYear = '2026–27'

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
    summary:
      'Plans and coordinates research programmes, workshops, seminars, expert talks, paper discussions and colloquia; prepares annual and monthly programme plans and coordinates speakers and participants.',
    duties: [
      {
        items: [
          'Prepare the annual/monthly Research Forum programme calendar.',
          'Identify suitable programmes, including research methodology workshops; research talks and expert sessions; research paper discussions; proposal/model development sessions; publishing and journal selection sessions; research skill-development programmes; and doctoral colloquia.',
          'Coordinate with resource persons, speakers and faculty members.',
          'Prepare programme schedules and session plans.',
          'Coordinate registration and participant management, working with the Technical Committee where digital forms or platforms are needed.',
          'Ensure the smooth conduct of programmes.',
          'Collect feedback after programmes and share relevant summaries with the Editorial Committee.',
          'Maintain a record of programmes conducted and participation.',
          'Coordinate with other committees whenever their support is required.',
        ],
      },
    ],
    headInstructions: [
      'Prepare the programme plan well in advance.',
      'Assign specific responsibilities to committee members.',
      'Maintain a programme-wise checklist.',
      'Coordinate with the Research Forum Coordinator and obtain necessary approval before finalising programmes.',
      'Provide accurate programme details, speaker information and schedules to the Editorial Committee in time for content preparation.',
      'Inform the Technical Committee early about equipment, platform, design and digital support requirements.',
      'Submit a brief report after every programme, providing the relevant information to the Editorial Committee for publication and record-keeping.',
    ],
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
    summary:
      'Prepares content for publicity and communications, drafts reports and newsletter material, maintains written publication records, and coordinates alumni relations, placement information and career-related activities.',
    duties: [
      {
        title: 'Content creation and communication',
        items: [
          'Prepare the written content for publicity materials, posters, invitations, announcements and social media posts.',
          'Draft programme descriptions, event announcements, speaker profiles, captions and other communication materials.',
          'Prepare the content for Google Forms, including registration forms, feedback forms, certificates and other programme-related forms.',
          'Prepare programme reports, news updates, summaries and other written documentation.',
          'Coordinate with the Programme Committee to obtain accurate programme details, speaker information, schedules and other relevant content.',
          'Prepare content for the quarterly Research Forum newsletter, including research activities, scholar achievements, publications, awards and other academic developments.',
          'Collect and verify information about research scholars’ achievements, subject to the required approval.',
          'Coordinate with the Technical Committee to ensure that prepared content is incorporated into posters, digital publications, social media materials and other outputs in a timely manner.',
        ],
      },
      {
        title: 'Documentation and publications',
        items: [
          'Prepare written reports after major Research Forum activities.',
          'Compile information for the quarterly newsletter and annual Research Forum report.',
          'Collect programme details, attendance information, feedback summaries and other relevant inputs from the concerned committees.',
          'Maintain the written content and publication records required for Research Forum activities.',
          'Ensure the accuracy, clarity and consistency of all prepared content.',
          'Coordinate with the Technical Committee for the design, formatting, digital production and archiving of documents and publications.',
        ],
      },
      {
        title: 'Placement and alumni coordination',
        items: [
          'Maintain an updated and verified database of SMS alumni who may support placement and career-related activities.',
          'Establish and maintain communication with the Alumni Group.',
          'Identify alumni working in universities and colleges, corporates, research organisations, government institutions, consultancy and other relevant sectors.',
          'Collect and circulate verified information about job openings, internships, research opportunities and academic positions.',
          'Coordinate alumni interaction sessions, career talks and networking opportunities.',
          'Invite alumni and recruiters for career-oriented sessions, where appropriate and with the necessary approval.',
          'Coordinate with the institutional Placement Committee whenever required.',
          'Maintain records of opportunities circulated, alumni interactions and career-related activities.',
          'Submit periodic updates on placement and alumni activities.',
        ],
      },
    ],
    headInstructions: [
      'Assign members specific roles for content writing, newsletter preparation, documentation, and alumni/placement coordination.',
      'Establish a timely content-submission workflow with the Programme and Technical Committees.',
      'Verify the accuracy of content before submitting it for design or publication.',
      'Ensure that official content and communications are released only after the required approval.',
      'Coordinate the preparation and publication of the quarterly newsletter.',
      'Ensure that alumni and placement information is authentic and that no commitments are made on behalf of SMS/CUSAT without approval.',
      'Ensure that relevant written content and records are handed over properly at the end of the committee’s term.',
    ],
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
    summary:
      'Promotes scholar interaction, welfare and peer support; organises social and interactive activities; and communicates common concerns of research scholars to the appropriate authority.',
    duties: [
      {
        items: [
          'Organise activities that promote interaction and bonding among research scholars.',
          'Identify and communicate common welfare concerns of scholars.',
          'Support new research scholars in becoming familiar with the department and Research Forum.',
          'Organise informal academic/social gatherings when appropriate.',
          'Coordinate celebrations and special observances related to the Research Forum.',
          'Encourage peer support among scholars.',
          'Promote a positive and inclusive research environment.',
          'Support scholars during major Research Forum programmes.',
          'Collect suggestions and concerns from scholars and communicate them to the appropriate authority.',
          'Organise social responsibility/community-oriented activities where feasible.',
        ],
      },
    ],
    headInstructions: [
      'Ensure participation is inclusive and voluntary.',
      'Maintain a positive and respectful environment.',
      'Give equal opportunity to committee members to contribute.',
      'Bring genuine welfare concerns to the Research Forum Coordinator or appropriate authority.',
      'Avoid taking administrative decisions without approval.',
    ],
  },
  {
    name: 'Technical Committee',
    heads: ['Agaja K B', 'Sreelakshmi P'],
    members: ['Albin P James', 'Balu R Krishna', 'Gavin John'],
    role: 'Digital design and production, publicity execution, digital record management, and technical assistance for Research Forum programmes and activities.',
    summary:
      'Handles design and digital production, digital publicity and platform management, photography and video, digital archiving, and technical support for in-person, online and hybrid programmes.',
    duties: [
      {
        title: 'Design and digital production',
        items: [
          'Design and produce posters, invitations, announcements and other publicity materials using content supplied by the Editorial Committee.',
          'Format and prepare social media materials, digital publications and newsletter layouts.',
          'Design templates for posters, reports, presentations, certificates and other Research Forum materials.',
          'Create and maintain standard visual formats for the Research Forum’s digital communications.',
          'Coordinate with the Editorial Committee to ensure approved content is presented accurately and professionally.',
          'Support the digital presentation and publication of research achievements, scholar publications, awards and other academic accomplishments, subject to approval.',
        ],
      },
      {
        title: 'Digital platforms and publicity execution',
        items: [
          'Manage authorised Research Forum WhatsApp groups, social media accounts and other digital communication platforms.',
          'Publish or circulate approved posters, announcements, newsletters and other digital materials.',
          'Coordinate with the Editorial Committee to ensure timely publication of programme-related information.',
          'Assist in creating and managing online registration and feedback forms, based on the content prepared by the Editorial Committee.',
          'Ensure that digital communications follow the required approval procedures.',
        ],
      },
      {
        title: 'Photography, digital records and archives',
        items: [
          'Take photographs and videos during Research Forum programmes.',
          'Maintain a systematic digital archive of posters and invitations; attendance records; photographs and videos; programme reports; feedback records; certificates; important communications; newsletters; and other digital publications.',
          'Ensure that digital files are properly labelled, organised and stored.',
          'Coordinate with the Editorial Committee to collect the final content and documentation required for archiving.',
          'Assist in maintaining the annual digital record of Research Forum activities.',
        ],
      },
      {
        title: 'Technical assistance',
        items: [
          'Arrange technical requirements for seminars, workshops and presentations, including projectors/displays, laptops/computers, microphones, speakers/audio, internet/connectivity and online meeting platforms.',
          'Provide technical support for hybrid and online programmes.',
          'Assist resource persons and participants with presentation requirements and digital tools.',
          'Conduct technical checks before every programme.',
          'Support online meeting platforms and digital resources of the Research Forum.',
          'Maintain a checklist of technical equipment and requirements.',
          'Identify possible technical problems in advance and keep alternatives ready.',
          'Coordinate early with the Programme Committee regarding technical requirements.',
          'Ensure that institutional equipment is handled responsibly.',
        ],
      },
    ],
    headInstructions: [
      'Conduct a technical check before every programme.',
      'Identify possible technical problems in advance and keep alternatives ready.',
      'Assign specific design, digital-platform, archive and technical responsibilities to committee members.',
      'Establish a workflow for receiving content from the Editorial Committee and converting it into finished digital materials.',
      'Ensure that designs and digital publications use approved content.',
      'Coordinate publication schedules with the Editorial Committee.',
      'Maintain consistent design templates and digital archive standards.',
      'Ensure that official materials are published only after the required approval.',
      'Coordinate early with the Programme Committee regarding technical requirements and handle institutional equipment responsibly.',
    ],
  },
  {
    name: 'Finance Committee',
    heads: ['Shetal Singh', 'Akshay Raj R'],
    members: ['Ambili S'],
    role: 'Financial planning, budgeting and maintaining transparent financial records.',
    summary:
      'Prepares programme budgets, coordinates approved financial requirements, maintains bills and records, and ensures compliance with institutional financial procedures.',
    duties: [
      {
        items: [
          'Prepare estimated budgets for Research Forum activities.',
          'Maintain records of approved expenditure.',
          'Coordinate financial requirements with the concerned authority.',
          'Maintain bills, receipts and supporting documents.',
          'Track programme-wise expenditure.',
          'Prepare expenditure statements wherever required.',
          'Assist in planning financially feasible programmes.',
          'Coordinate with other committees regarding their budget requirements.',
          'Ensure that the financial procedures of the University/Department are followed.',
        ],
      },
    ],
    headInstructions: [
      'No expenditure should be committed without prior approval.',
      'Obtain estimates/quotations where required by institutional procedures.',
      'Maintain proper bills and supporting documents.',
      'Keep financial records updated after every programme.',
      'Coordinate with the Research Forum Coordinator before finalising financial commitments.',
      'Submit expenditure details promptly after an activity.',
    ],
  },
]

/** General instructions for all committee heads. */
export const generalInstructions: { title: string; text: string }[] = [
  {
    title: 'Plan in advance',
    text: 'Every committee should prepare an activity plan for the academic year.',
  },
  {
    title: 'Delegate responsibilities',
    text: 'The Committee Head should not handle every task personally.',
  },
  {
    title: 'Maintain coordination',
    text: 'Committees should work together rather than function independently.',
  },
  {
    title: 'Seek approval',
    text: 'Activities, external invitations, expenditure and official communications should follow the required approval process.',
  },
  { title: 'Maintain records', text: 'Every activity should have proper documentation.' },
  {
    title: 'Meet periodically',
    text: 'Committee Heads should review progress with their members.',
  },
  {
    title: 'Submit reports',
    text: 'A brief report should be submitted after every major activity.',
  },
  {
    title: 'Avoid duplication',
    text: 'Before planning an activity, check whether another committee is already undertaking a similar initiative.',
  },
  {
    title: 'Communicate through the Coordinator',
    text: 'Communicate through the Research Forum Coordinator where decisions require departmental or institutional approval.',
  },
  {
    title: 'Ensure continuity',
    text: 'Important files, contacts, templates and records should be properly handed over to the next committee.',
  },
  {
    title: 'Maintain professional conduct',
    text: 'All communications with faculty, alumni, resource persons and external organisations should be professional.',
  },
  {
    title: 'Share team responsibility',
    text: 'The Committee Head is responsible for ensuring that assigned work is completed, but responsibilities should be shared among members.',
  },
]

export default committeesData
