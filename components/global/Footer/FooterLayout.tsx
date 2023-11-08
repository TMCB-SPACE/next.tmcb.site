'use client'

import { Icon } from '@iconify-icon/react'
import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import Image from 'next/image'
import Link from 'next/link'
import type { FooterItem, SettingsPayload, SocialLink } from 'types'

import { resolveHref } from '../../../lib/sanity.links'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const footerItems = data?.footerItems || ([] as FooterItem[])
  const socialLinks = data?.socialLinks || ([] as SocialLink[])
  const home = data?.home

  return (
    <footer className="mt-4">
      <div className="bg-gray-100 dark:bg-stone-700">
        <div className="container px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg-py-8 mx-auto">
          <div className="flex flex-row flex-wrap">
            <div className="basis-1/2 text-left flex px-2">
              <Link href={resolveHref(home?._type) ?? '/'} className="inline-flex flex-row">
                <Image
                  width={128}
                  height={128}
                  src={'/logo-animated.gif'}
                  alt={`Logo`}
                  className="w-32 h-32"/>
              </Link>
              <div className="inline-flex flex-row flex-1 p-2">
                {footer && <CustomPortableText paragraphClasses="text-md" value={footer} />}
              </div>
            </div>
            <div className="basis-1/4">
              <h3 className="font-bold">Company</h3>
              {footerItems && (
                <ul className="flex flex-wrap m-0">
                  {footerItems.map((footerItem, key) => {
                    const href = resolveHref(footerItem?._type, footerItem?.slug)
                    if (!href) {
                      return null
                    }
                    return (
                      <li className="w-full" key={key}>
                        <Link
                          className={`inline-block hover:text-sky-700 dark:hover:text-sky-300 font-bold ${
                            footerItem?._type === 'home' ? 'font-extrabold' : ''
                          }`}
                          href={href}
                        >
                          {footerItem.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="basis-1/4">
              <h3 className="font-bold">Social links</h3>
              {socialLinks && (
                <ul className="flex flex-wrap m-0">
                  {socialLinks.map((socialLink, key) => {
                    return (
                      <li className="w-full" key={key}>
                        <a
                          className='inline-block hover:text-sky-700 dark:hover:text-sky-300 font-bold text-md'
                          href={socialLink.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          title={socialLink.tooltip ?? socialLink.title}
                        >
                          <Icon icon={socialLink.icon ?? 'uil:'} className="text-xl align-text-top mr-1"/>
                          {socialLink.title ?? socialLink.tooltip ?? socialLink.url}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 sm:py-6 lg-py-8">
        <p className="text-md">&copy; 2023 {process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE}. All rights reserved.</p>
      </div>
    </footer>
  )
}
