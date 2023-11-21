import { clsx } from 'clsx'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { SettingsPayload } from 'types'

import ThemeToggle from '../../shared/ThemeToggle'

interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || [];
  const home = data?.home;

  return (
    <div className={clsx([
      'sticky top-0 z-10 border-y grid grid-cols-12',
      'bg-gray-100/90 border-slate-500',
      'dark:bg-neutral-800/90 dark:border-black',
    ])}>
      <div className={clsx([
          'col-start-2 col-end-12 text-2xl',
          'flex justify-between items-center backdrop-blur border-x',
          'border-slate-500',
          'dark:border-black',
        ])}>
        {home && (
          <Link
            key={'homepage-nav-link'}
            className={clsx([
              'font-extrabold p-6 border-r',
              'border-slate-500 hover:bg-white',
              'dark:border-black dark:hover:bg-black',
            ])}
            href={resolveHref(home?._type) ?? '/'}
          >
            {home.title}
          </Link>
        )}

        <ul className="list-none flex items-center gap-x-0">
          {menuItems && menuItems.length > 0 && menuItems.map((menuItem, key) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }
            return (
              <li key={key}>
                <Link
                  className={clsx([
                    'p-6 border-l inline-block underline-offset-2 hover:underline',
                    'border-slate-500 hover:bg-white',
                    'dark:border-black dark:hover:bg-black',
                  ])}
                  href={href}
                >
                  {menuItem.title}
                </Link>
              </li>
            )
          })}
          <li className={clsx([
            'font-extrabold p-6 border-l',
            'border-slate-500 hover:bg-white',
            'dark:border-black dark:hover:bg-black',
          ])}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  )
}
