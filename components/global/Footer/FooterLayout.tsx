import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { SettingsPayload } from 'types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  return (
    <footer className="bg-gray-800 dark:bg-gray-200 mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg-py-8">
        <div className="flex flex-row flex-wrap">
          <div className="basis-1/2 text-left flex px-2">
            <a href="#" className="inline-flex flex-row">
              <img src="/logo-animated.gif" alt="Logo" className="w-32 h-32" />
            </a>
            <div className="inline-flex flex-row flex-1 p-2 text-gray-200 dark:text-gray-800">
              {footer && (
                <CustomPortableText
                  paragraphClasses="text-md md:text-xl"
                  value={footer}
                />
              )}
            </div>
          </div>
          <div className="basis-1/4">
            <h3 className="text-gray-100 dark:text-gray-900 font-bold">
              Company
            </h3>
            <ul className="flex flex-wrap m-0">
              <li className="w-full">
                <a
                  href="#"
                  className="block text-gray-400 dark:text-gray-600 hover:text-gray-100 dark:hover:text-gray-900 font-bold"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="block text-gray-400 dark:text-gray-600 hover:text-gray-100 dark:hover:text-gray-900 font-bold"
                >
                  Legal
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="block text-gray-400 dark:text-gray-600 hover:text-gray-100 dark:hover:text-gray-900 font-bold"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <h3 className="text-gray-100 dark:text-gray-900 font-bold">
              Social links
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 dark:bg-gray-100 text-center py-4 sm:py-6 lg-py-8">
        <p className="text-sm text-gray-100 dark:text-gray-900">
          &copy; 2023 My Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
