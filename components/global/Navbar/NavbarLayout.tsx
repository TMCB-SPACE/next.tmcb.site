import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { MenuItem, SettingsPayload } from 'types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-black/70 dark:bg-white/70 text-white/90 dark:text-black/90 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={`text-lg md:text-xl text-white dark:text-black hover:text-blue-300 dark:hover:text-blue-700 ${
                menuItem?._type === 'home' ? 'font-extrabold' : ''
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
