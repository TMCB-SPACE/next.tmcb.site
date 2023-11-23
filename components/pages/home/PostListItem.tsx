import type { PortableTextBlock } from '@portabletext/types'
import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { ShowcasePost } from '@/types'

interface PostProps {
  post: ShowcasePost
  odd: number
}

export function PostListItem(props: PostProps) {
  const { post, odd } = props

  return (
    <div
      className={clsx([
        'border-b p-6',
        'border-slate-500 hover:bg-white',
        'dark:border-black dark:hover:bg-black',
        odd && ''
      ])}
    >
      <h2 className={clsx([
        'text-xl font-extrabold tracking-tight p-5',
      ])}>{post.title} {post.publishedAt?.toString()}</h2>

      <div className={clsx([
        'p-5 text-xl font-sans',
      ])}>
        <CustomPortableText value={post.body?.slice(0,3) as PortableTextBlock[]} />
      </div>

    </div>
  )
}
