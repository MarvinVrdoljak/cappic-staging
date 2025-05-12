'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function LangSwitch() {
  const locale = useLocale()

  return (
    <nav>
      <ul className="menu menu--lang">
        <li className={locale === 'en' ? 'is-active' : ''}>
          <Link href={'/en'} locale="en">
            EN
          </Link>
        </li>
        <li className={locale === 'de' ? 'is-active' : ''}>
          <Link href={'/de'} locale="de">
            DE
          </Link>
        </li>
      </ul>
    </nav>
  )
}
