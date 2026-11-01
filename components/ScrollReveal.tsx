'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Fades page sections (and the cards inside them) up as they scroll into view.
// Sections already on screen are left alone, so nothing flickers on load, and
// without JavaScript or with "reduce motion" everything simply shows.
// Any section that has reached the screen *or been scrolled past* is revealed,
// so jumping down the page (links, End key) never leaves a section hidden.
const SECTIONS = 'main section'
const CARDS = ':scope article, :scope ul.grid > li, :scope ol.grid > li'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pending: HTMLElement[] = []

    // A handful of sections per page, so checking on every scroll event is cheap
    const reveal = () => {
      if (!pending.length) return
      const line = window.innerHeight * 0.92
      pending = pending.filter((section) => {
        if (section.getBoundingClientRect().top > line) return true
        section.classList.add('is-revealed')
        return false
      })
    }

    const prepare = () => {
      document.querySelectorAll<HTMLElement>(SECTIONS).forEach((section) => {
        // Top-level page sections only (the whole site sits inside an outer <section>)
        if (section.dataset.reveal || section.parentElement?.closest('main section')) return
        if (section.getBoundingClientRect().top < window.innerHeight) {
          section.dataset.reveal = 'shown'
          return
        }
        section.dataset.reveal = 'pending'
        section.querySelectorAll<HTMLElement>(CARDS).forEach((card, i) => {
          card.dataset.revealItem = ''
          card.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 70}ms`)
        })
        pending.push(section)
      })
    }

    prepare()
    // Sections that render after hydration (such as the Next event card)
    const mutations = new MutationObserver(prepare)
    const main = document.querySelector('main')
    if (main) mutations.observe(main, { childList: true, subtree: true })
    window.addEventListener('scroll', reveal, { passive: true })
    window.addEventListener('resize', reveal)

    return () => {
      mutations.disconnect()
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('resize', reveal)
      // Never leave anything hidden when navigating away
      pending.forEach((section) => section.classList.add('is-revealed'))
    }
  }, [pathname])

  return null
}
