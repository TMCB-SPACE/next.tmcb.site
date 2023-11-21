import 'styles/index.css'

import { clsx } from 'clsx'
import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { token } from 'lib/sanity.fetch'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { ReactNode, Suspense } from 'react'

const PreviewProvider = dynamic(() => import('components/preview/PreviewProvider'))

export default async function IndexRoute({ children }: { children: ReactNode }) {
  const isDraftMode = draftMode().isEnabled

  const layout = (
    <div className="flex min-h-screen flex-col">
      {isDraftMode && <PreviewBanner />}
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
  )

  if (isDraftMode) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>
  }

  return layout
}
