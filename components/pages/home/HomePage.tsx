import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { clsx } from 'clsx'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  return (
    <div className={clsx([
      'p-0'
    ])}>
      {title && <Header centered title={title} description={overview} />}

      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem]">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
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
