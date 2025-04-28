import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      {/* <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout> */}

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">About SMS Research Forum</h2>
            <p className="text-lg text-gray-600">
              Empowering scholars at the School of Management Studies, CUSAT, through academic
              excellence, collaborative research, career development, and industry engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Who We Are</h3>
              <p className="mb-6 text-gray-700">
                The SMS Research Forum is a vibrant platform dedicated to nurturing research
                excellence, interdisciplinary collaboration, and professional growth. We connect
                scholars with resources, mentorship, and industry opportunities, preparing them to
                lead academic and professional innovation.
              </p>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Our Activities</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Quarterly Newsletters showcasing achievements and opportunities</li>
                <li>Monthly workshops and skill development sessions</li>
                <li>Career and Placement support initiatives</li>
                <li>Annual Doctoral Colloquium for scholarly exchange</li>
                <li>Leisure and community-building events</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Vision</h3>
              <p className="mb-6 text-gray-700">
                To create a dynamic research community responsive to the evolving needs of academia,
                industry, and society.
              </p>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Mission</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Empower scholars through collaboration and mentorship</li>
                <li>Facilitate impactful academia-industry engagement</li>
                <li>Promote interdisciplinary research initiatives</li>
                <li>Support career development and leadership</li>
                <li>Foster a culture of innovation and continuous learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
