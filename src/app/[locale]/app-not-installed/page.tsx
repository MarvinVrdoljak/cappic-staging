'use client'

import { Metadata } from 'next'
import getRequestConfig from '@/i18n/request'
import { useTranslations } from 'next-intl'
import Hero from '@/components/globals/Hero'

export default function ImprintPage() {
  const t = useTranslations('AppNotInstalled')

  return (
    <>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
      />
    </>
  )
}
