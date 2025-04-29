interface Initiatives {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const initativesData: Initiatives[] = [
  {
    title: 'Iftar Meet',
    description: `Organized by social and welfare committee.`,
    imgSrc: '/static/images/iftar.jpg',
    href: '/about',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/updates/the-time-machine',
  // },
]

export default initativesData
