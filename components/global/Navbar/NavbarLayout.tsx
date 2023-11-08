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
    <div className="sticky top-0 z-10 flex justify-between items-center bg-gray-100/90 dark:bg-stone-700/90 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {home && (
        <Link
          key={'homepage-nav-link'}
          className={`text-lg md:text-xl hover:text-sky-700 dark:hover:text-sky-300 font-extrabold`}
          href={resolveHref(home?._type) ?? '/'}
        >
          {home.title}
        </Link>
      )}

      <ul className="list-none flex items-center gap-x-4">
        {menuItems && menuItems.length > 0 && menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <li key={key}>
              <Link
                className={`text-lg md:text-xl hover:text-sky-700 dark:hover:text-sky-300 ${
                  menuItem?._type === 'home' ? 'font-extrabold' : ''
                }`}
                href={href}
              >
                {menuItem.title}
              </Link>
            </li>
          )
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  )
}
