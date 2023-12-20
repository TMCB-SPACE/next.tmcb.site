import clsx from 'clsx'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import GeometricContainer from '@/components/shared/GeometricContainer'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { formatTimeSince, resolveHref } from '@/sanity/lib/utils'
import type { PostPayload } from '@/types'

export interface PostProps {
  data: PostPayload | null
}

export function Post({ data }: PostProps) {
  const { body, publishedAt, title, author, categories } = data ?? {}
  const timeSince = formatTimeSince(publishedAt)
  const authorHref = resolveHref(author?._type, author?.slug)

  return (
    <>
      <GeometricContainer>
        <div
          className={clsx(['p-16 relative w-full-1 overflow-hidden', 'bg-neutral-100/90', 'dark:bg-neutral-900/90'])}
        >
          <div className={clsx(['max-w-[60rem] mx-auto [text-wrap:pretty]', 'tracking-wide font-serif text-xl'])}>
            <p
              className={clsx([
                'font-mono text-sm leading-mono last:mb-0 mb-1 px-1 font-normal uppercase text-gray-dark',
              ])}
            >{`${timeSince && `${timeSince.formattedDate} (about ${timeSince.timeSince})`}`}</p>

            <Header title={title} />

            <div className={clsx(['flex gap-[1rem] flex-row items-center px-1'])}>
              <div className={clsx(['w-[42px]'])}>
                <ImageBox
                  width={42}
                  height={42}
                  image={author?.coverImage}
                  alt={`Cover image from ${author?.title}`}
                  classesWrapper={clsx([
                    'flex shrink-0 grow-0 w-[42px] relative rounded-full aspect-[1/1] object-cover border',
                    'border-slate-500 hover:border-slate-800 focus-visible:border-slate-800',
                    'dark:border-black dark:hover:border-neutral-700 dark:focus-visible:border-neutral-700',
                  ])}
                />
              </div>

              <div className="font-mono text-sm leading-mono font-normal uppercase text-gray-dark">
                by{' '}
                <Link className={clsx(['underline'])} href={authorHref ?? '#'}>
                  {author?.title}
                </Link>
                {categories?.map((tag, key) => (
                  <span className="whitespace-nowrap" key={key}>
                    {' '}
                    • {tag}
                  </span>
                ))}
              </div>
            </div>

            <hr className={clsx(['border-neutral-300 dark:border-neutral-700 my-2 first:mt-0'])} />

            {body && <CustomPortableText value={body} />}
          </div>
        </div>
      </GeometricContainer>
    </>
  )
}

export default Post
