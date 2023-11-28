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
        // 'gap-y-1 p-1 pb-2 md:px-2 md:py-1.5 group hover:bg-white focus-visible:bg-white',
        'relative border -m-[0.5px] p-12 flex flex-row gap-4',
        'border-slate-500 hover:bg-white focus-visible:bg-white',
        'dark:border-black dark:hover:bg-black dark:focus-visible:bg-black',
        odd && ''
      ])}
    >
      <div className='basis-1/4'>
        <ImageBox
          width={363}
          height={204}
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
          'flex gap-3 flex-row items-center',
        ])}>
          <div className={clsx([
            'w-16',
          ])}>
            <ImageBox
              width={64}
              height={64}
              image={post.author?.coverImage}
              alt={`Cover image from ${post.author?.title?.replace(/[\u200B-\u200D\uFEFF]/g, '')}`}
              classesWrapper='px-0.5px flex shrink-0 grow-0 w-10 relative rounded-full aspect-[1/1]'
            />
          </div>

          <div className='font-mono text-sm leading-mono font-normal uppercase text-gray-dark'>
            by {post.author?.title}
          </div>

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
      </div>

      <div className={clsx([
        'p-5 text-xl font-sans',
      ])}>
        <CustomPortableText value={post.overview as PortableTextBlock[]} />
      </div>
    </div>
  )
}
