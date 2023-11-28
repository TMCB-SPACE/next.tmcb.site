import { type EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'
import clsx from 'clsx'
import Link from 'next/link'

import { PostListItem } from '@/components/pages/home/PostListItem'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title = '', overview = [], showcaseProjects = [], showcasePosts = [] } = data ?? {}

  return (
    <div className={clsx([
      'p-0'
    ])}>
      {title && <Header data-sanity={encodeDataAttribute?.('title')} centered title={title} description={overview} />}

      {showcasePosts && showcasePosts.length > 0 && (
        <div className={clsx([
          '-m-[0.5px] grid grid-cols-1',
        ])} data-section="posts">
          <div>
            <Header centered title='Blog'/>
          </div>

          {showcasePosts.map((post, key) => {
            const href = resolveHref(post._type, post.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href} className={clsx([
                'block'
              ])}>
                <PostListItem post={post} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}

      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 flex-wrap gap-6 p-6" data-section="projects">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href} className={clsx([
                'block'
              ])}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
