import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allUpdates } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allUpdates)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
