import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allUpdates } from 'contentlayer/generated'
import Main from './Main'
import DeadlineExtensionModal from '@/components/DeadlineExtensionModal'

export default async function Page() {
  const sortedPosts = sortPosts(allUpdates)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <DeadlineExtensionModal />
      <Main posts={posts} />
    </>
  )
}
