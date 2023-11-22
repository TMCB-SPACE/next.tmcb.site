import clsx from 'clsx'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={clsx([
      'font-mono',
      centered ? 'text-center p-8 border-b border-slate-500 dark:border-black' : 'w-5/6 lg:w-4/6'
    ])}>
      {/* Title */}
      {title && <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>}
      {/* Description */}
      {description && (
        <div className="my-8 font-sans text-xl md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
