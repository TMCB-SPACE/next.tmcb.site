import type { PortableTextBlock } from '@portabletext/types'
import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcasePost } from '@/types'

interface PostProps {
  post: ShowcasePost
  odd: number
}

export function PostListItem(props: PostProps) {
  const { post, odd } = props
  const formattedDate = new Date(post.publishedAt as string).toLocaleDateString('en-US')
  const daysAgo = Math.floor((new Date().getTime() - new Date(post.publishedAt as string).getTime()) / (1000 * 3600 * 24))

  return (
    <div
      className={clsx([
        'border-b p-12 flex flex-row gap-4',
        'border-slate-500 hover:bg-white',
        'dark:border-black dark:hover:bg-black',
        odd && ''
      ])}
    >
      <div className='basis-1/4'>
        <ImageBox
          image={post.coverImage}
          alt={`Cover image from ${post.title}`}
          classesWrapper='relative aspect-[16/9]'
        />
      </div>

      <div className={clsx([
        'p-5 basis-1/2'
      ])}>
        <p>{`${formattedDate} (${daysAgo} days ago)`}</p>

        <h2 className={clsx([
          'text-xl font-extrabold tracking-tight'
        ])}>{post.title}</h2>

        <div className={clsx([
          'flex flex-row gap-x-2 font-mono',
        ])}>
          {post.categories?.map((tag, key) => (
            <div className='text-md font-medium lowercase md:text-lg' key={key}>
              #{tag}
            </div>
          ))}
        </div>
      </div>

      <div className={clsx([
        'p-5 text-xl font-sans',
      ])}>
        <CustomPortableText value={post.overview as PortableTextBlock[]} />
      </div>
    </div>
  )
}
