'use client'

import Image from 'next/image'
import LangSwitch from './LangSwitch'
import { Link } from '@/i18n/routing'
import NextLink from 'next/link'

export default function Header({ root }: { root?: boolean }) {
  return (
    <header className="header">
      <div className="header__inner">
        {root ? (
          <NextLink href={`/`} className="header__logo">
            <Image src="/logo.svg" alt="cappic Logo" width={150} height={50} />
          </NextLink>
        ) : (
          <>
            <Link href={`/`} className="header__logo">
              <Image src="/logo.svg" alt="cappic Logo" width={150} height={50} />
            </Link>
            <LangSwitch />
          </>
        )}
      </div>
    </header>
  )
}
