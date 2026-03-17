export interface Committee {
  name: string
  summary: string
  duties: string[]
}

const committeesData: Committee[] = [
  {
    name: 'Programme Committee',
    summary:
      'This committee is responsible for organizing academic events such as workshops, seminars, conferences, and webinars that keep research scholars engaged with current ideas and expert perspectives in management studies.',
    duties: [
      'Organize workshops, seminars, conferences, and webinars on relevant topics in management and interdisciplinary research.',
      'Curate event topics and develop agendas that align with member interests and current industry trends.',
      'Identify and invite guest speakers, industry experts, and researchers for forum events.',
      'Oversee logistics including venue selection, registration processes, and technical support.',
      'Gather participant feedback after events to evaluate outcomes and improve future programmes.',
      'Document committee activities regularly and communicate updates to the Editorial Committee.',
    ],
  },
  {
    name: 'Career and Placement Committee',
    summary:
      'This committee focuses on connecting members with industry opportunities through networking, skill-building sessions, mentorship, and placement support that strengthen career readiness.',
    duties: [
      'Build and maintain relationships with companies, organizations, and industry professionals to facilitate job opportunities.',
      'Organize workshops on resume writing, interview preparation, and professional networking.',
      'Coordinate placement drives and job fairs to connect scholars with employers and internship opportunities.',
      'Establish mentorship initiatives that connect members with experienced professionals for career and personal development.',
      'Provide job listings, internship opportunities, and career-related resources for members.',
      'Document committee activities regularly and communicate updates to the Editorial Committee.',
    ],
  },
  {
    name: 'Editorial Committee',
    summary:
      'This committee oversees the creation and dissemination of publications that highlight the forum’s achievements, activities, and member research while strengthening internal and external communication.',
    duties: [
      'Develop and curate content for newsletters, reports, and promotional materials.',
      'Oversee periodic publications featuring research achievements, forum events, and key updates.',
      'Review and edit member submissions for clarity, coherence, and academic quality before publication.',
      'Promote members’ research findings and forum activities through relevant communication channels.',
      'Develop and implement communication strategies to effectively share the forum’s initiatives.',
      'Curate and maintain documentation received from other committees.',
    ],
  },
  {
    name: 'Social and Welfare Committee',
    summary:
      'This committee promotes member well-being and a strong sense of community through social engagement, wellness initiatives, inclusion-focused activities, and peer support.',
    duties: [
      'Organize social events, leisure activities, and team-building exercises that strengthen community and camaraderie.',
      'Implement wellness programmes focused on physical and mental well-being, including stress management and recreational activities.',
      'Promote diversity and inclusion through events and initiatives that ensure members feel welcome and valued.',
      'Act as a support contact for members facing personal or academic concerns.',
      'Create informal networking opportunities that help members build relationships across disciplines.',
      'Document committee activities regularly and communicate updates to the Editorial Committee.',
    ],
  },
]

export default committeesData
