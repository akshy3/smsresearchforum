export const newsletters = [
  {
    title: 'SMS Research Forum Newsletter - Issue 2',
    issue: 'Issue 2',
    dateLabel: 'July 2026',
    description:
      'The July 2026 issue of the SMS Research Forum newsletter, featuring forum updates, research activities, and scholar highlights.',
    href: '/static/files/newsletters/sms-research-forum-newsletter-issue-2-july-2026.pdf',
  },
  {
    title: 'SMS Research Forum Newsletter - Issue 1',
    issue: 'Issue 1',
    dateLabel: '2026',
    description:
      'The first issue of the SMS Research Forum newsletter, documenting forum activities, research engagement, and community updates.',
    href: '/static/files/newsletters/sms-research-forum-newsletter-issue-1.pdf',
  },
] as const

export type Newsletter = (typeof newsletters)[number]
