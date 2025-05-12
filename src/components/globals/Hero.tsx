'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function Hero({
  title,
  subtitle,
  description,
  staticLocale,
}: {
  title: string
  subtitle: string
  description: string
  staticLocale?: string
}) {
  let locale
  if (staticLocale) {
    locale = staticLocale
  } else {
    locale = useLocale()
  }

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="label">{subtitle}</span>
          <h1 className="hero__title">{title}</h1>
          <p className="lead">{description}</p>
          {/* <CommonDownloadButtons /> */}
        </div>
        <div className="hero__image-wrapper">
          <Image
            src={locale === 'de' ? '/iphone-de.png' : '/iphone-en.png'}
            alt="iPhone"
            width="1668"
            height="2284"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}
