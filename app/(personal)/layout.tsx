import 'styles/index.css'

import { toPlainText } from '@portabletext/react'
import clsx from 'clsx'
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { ReactNode,Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const VisualEditing = dynamic(() => import('@/sanity/loader/VisualEditing'))

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Suspense>
          <Navbar />
        </Suspense>
        <div className={clsx([
          'grid grid-cols-12 flex-grow',
        ])}>
          <div className={clsx([
            'col-start-2 col-end-12 border-x',
            'border-slate-500',
            'dark:border-black',
          ])}>
            <Suspense>{children}</Suspense>
          </div>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
      {draftMode().isEnabled && <VisualEditing />}
    </>
  )
}
