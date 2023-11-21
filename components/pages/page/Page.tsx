import { clsx } from 'clsx'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import type { PagePayload } from 'types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div className={clsx([
      'p-8'
    ])}>
      <Header title={title} description={overview} />

      <div className={clsx([
        'w-5/6 lg:w-4/6'
      ])}>
        {body && <CustomPortableText paragraphClasses="font-serif text-xl" value={body} />}
      </div>
    </div>
  )
}

export default Page
