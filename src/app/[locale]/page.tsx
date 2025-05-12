'use client'

import BlockFullText from '@/components/block/BlockFullText'
import Hero from '@/components/globals/Hero'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('Home')
  return (
    <>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
      />
      <BlockFullText>
        <h2>{t('introduction.title')}</h2>
        <p className="lead">{t('introduction.description')}</p>
      </BlockFullText>
    </>
  )
}

export default Page
