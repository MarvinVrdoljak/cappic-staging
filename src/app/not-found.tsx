'use client'

import Hero from '@/components/globals/Hero'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0]
    const langCode = userLang.split('-')[0] // z.B. "de" aus "de-DE"
    setLanguage(langCode)
  }, [])

  return (
    <section className="section">
      <div className="grid">
        <Hero
          title={language === 'de' ? 'App nicht installiert?' : 'App not installed?'}
          subtitle={language === 'de' ? 'cappic herunterladen' : 'Get cappic'}
          description={
            language === 'de'
              ? 'Bitte installiere die cappic App über einen der folgenden Stores.'
              : 'Please install the cappic app via one of the following stores.'
          }
          staticLocale={language}
        />
      </div>
    </section>
  )
}
