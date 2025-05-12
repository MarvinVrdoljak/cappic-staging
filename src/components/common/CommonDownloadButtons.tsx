'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function CommonDownloadButtons() {
  const locale = useLocale()

  return (
    <div className="download-buttons">
      <a href="#download" className="download-buttons__button">
        <Image
          src={locale === 'de' ? '/download-app-store-de.svg' : '/download-app-store-en.svg'}
          alt="iPhone"
          width="120"
          height="40"
        />
      </a>
      <a href="#download" className="download-buttons__button">
        <Image
          src={locale === 'de' ? '/download-google-play-de.svg' : '/download-google-play-en.svg'}
          alt="iPhone"
          width="646"
          height="121"
        />
      </a>
    </div>
  )
}
