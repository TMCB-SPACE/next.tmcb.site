'use client';

import clsx from 'clsx'
import { Highlight, themes } from 'prism-react-renderer'

interface HighlightCodeProps {
  code: string
  language: string
}

export function HighlightCode(props: HighlightCodeProps) {
  const { code, language } = props

  return (
    <Highlight code={code} language={language} theme={themes.oneDark}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <figure className={clsx([
          'block bg-white text-black border -m-[0.5px] relative w-full-1 rounded-xl overflow-hidden',
          'dark:bg-black dark:text-white max-w-[60rem] mx-auto',
        ])}>
          <figcaption className={clsx([
            'bg-putty text-black dark:text-white border -mx-[1px] -mt-[1px] flex justify-between',
            'dark:bg-charcoal ',
          ])}>
            <div className={clsx([
              'font-body text-base tracking-wide leading-normal font-normal normal-case py-[0.5rem] px-[0.5rem]'
            ])}>{language}</div>

            <button className={clsx([
              'relative group/button inline-block -m-[1px] font-mono text-sm leading-mono font-normal uppercase',
            ])}>
              <span
                className="opacity-100 pointer-events-auto col-start-1 row-start-1 flex items-center justify-center">
                <svg
                  width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="mr-0.5">
                  <rect x="3.5" y="3.5" width="12" height="14" className="stroke-current" vectorEffect="non-scaling-stroke"></rect>
                  <path d="M3.5 14.5H0.5V0.5H12.5V3.5" className="stroke-current" vectorEffect="non-scaling-stroke"></path>
                </svg>
                <span className="sr-only">Copy Icon</span>
                Copy
              </span>
            </button>
          </figcaption>

          <pre style={style} className={clsx([
            'overflow-x-scroll px-[0.875rem] max-h-[42rem] overflow-y-scroll py-0'
          ])}>
            <div className={clsx([
              'sticky top-0 h-[0.5rem] mb-[0.5rem] bg-gradient-to-b from-black z-10'
            ])}></div>

            <code className={clsx([
              'font-mono leading-code normal-case max-w-full text-sm [counter-reset:linenumber]',
            ])}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className={clsx([
                  `[padding-left:calc(0.875rem+2ch)]`
                ])}>
                  <span className={clsx([
                    '[counter-increment:linenumber] inline-block w-0',
                    `before:whitespace-nowrap before:content-[counter(linenumber)] relative text-right inline-block w-[2ch] [left:calc(-0.875rem-2ch)]`
                  ])}></span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>

            <div className={clsx([
              'sticky bottom-0 h-[0.5rem] mt-[0.5rem] bg-gradient-to-t from-black z-10'
            ])}></div>
          </pre>
        </figure>
      )}
    </Highlight>
  );
}

export default HighlightCode
