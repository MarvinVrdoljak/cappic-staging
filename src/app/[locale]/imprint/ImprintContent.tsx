'use client'

import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

const ImprintContent = () => {
  const locale = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="section">
      <div className="grid">
        {locale === 'de' && (
          <>
            <h1>Impressum</h1>

            <p>
              <strong>Angaben gemäß § 5 TMG:</strong>
            </p>
            <p>
              Marvin Vrdoljak
              <br />
              Einzelunternehmen
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
              <br />
              Deutschland
            </p>

            <p>
              <strong>E-Mail:</strong> info@cappic.app
              <br />
              <strong>Website:</strong> cappic.app
            </p>

            <p>
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
              <br />
              Marvin Vrdoljak
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
            </p>

            <p>
              <strong>Hinweis gemäß § 19 UStG:</strong>
              <br />
              Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </>
        )}
        {locale === 'en' && (
          <>
            <h1>Imprint</h1>

            <p>
              <strong>Information in accordance with Section 5 TMG:</strong>
            </p>
            <p>
              Marvin Vrdoljak
              <br />
              Sole Proprietor
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
              <br />
              Germany
            </p>

            <p>
              <strong>Email:</strong> info@cappic.app
              <br />
              <strong>Website:</strong> cappic.app
            </p>

            <p>
              <strong>Responsible for content according to Section 55 (2) RStV:</strong>
              <br />
              Marvin Vrdoljak
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
            </p>

            <p>
              <strong>Note according to Section 19 of the German VAT Act (UStG):</strong>
              <br />
              As a small business in accordance with § 19 UStG, no VAT is charged.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default ImprintContent
