'use client'

import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('Footer')
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__social-title">
            <strong>{t('followUs')}</strong>
          </span>
          <nav>
            <ul className="menu menu--social">
              <li>
                <Link
                  href="https://www.instagram.com/cappic.app"
                  target="_blank"
                  className="button button--icon"
                >
                  <Image src="/instagram.svg" alt="Instagram" width={22} height={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/@cappic.app"
                  target="_blank"
                  className="button button--icon"
                >
                  <Image src="/tiktok.svg" alt="TikTok" width={22} height={22} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <span className="footer__byline">
            <strong>&copy; {new Date().getFullYear()} cappic</strong>
          </span>
          <nav>
            <ul className="menu menu--footer">
              <li className={isActive('/imrint') ? 'is-active' : ''}>
                <Link href="/imprint">{t('imprint')}</Link>
              </li>
              <li className={isActive('/privacy-policy') ? 'is-active' : ''}>
                <Link href="/privacy-policy">{t('privacyPolicy')}</Link>
              </li>
              <li className={isActive('/terms-and-conditions') ? 'is-active' : ''}>
                <Link href="/terms-and-conditions">{t('TermsAndConditions')}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
