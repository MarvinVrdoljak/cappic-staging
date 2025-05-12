'use client'

import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

const PrivacyContent = () => {
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
            {' '}
            <h1>Datenschutzerklärung</h1>
            <p>
              <strong>Stand:</strong> März 2025
            </p>
            <p>
              Wir freuen uns über dein Interesse an unserer App und Webseite „cappic“. Der Schutz
              deiner personenbezogenen Daten ist uns ein wichtiges Anliegen. Im Folgenden
              informieren wir dich über die Verarbeitung deiner Daten gemäß der
              Datenschutz-Grundverordnung (DSGVO).
            </p>
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung im Rahmen der Nutzung der App und Webseite
              ist:
            </p>
            <p>
              Marvin Vrdoljak
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten, Deutschland
              <br />
              E-Mail: <a href="mailto:info@cappic.app">info@cappic.app</a>
            </p>
            <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <h3>2.1 Rechtsgrundlagen der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt auf Basis folgender Rechtsgrundlagen
              gemäß DSGVO:
            </p>
            <ul>
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung): Verarbeitung, die für die Nutzung
                der App erforderlich ist.
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse): Analyse der App-Nutzung zur
                Verbesserung der Benutzerfreundlichkeit.
              </li>
              <li>
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Falls eine ausdrückliche Zustimmung zur
                Verarbeitung (z. B. für Tracking) gegeben wird.
              </li>
            </ul>
            <h3>2.2 Nutzerkonto</h3>
            <p>Für die Nutzung der App ist eine Registrierung erforderlich. Dabei erheben wir:</p>
            <ul>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Passwort (verschlüsselt gespeichert)</li>
              <li>Optional: Alter</li>
            </ul>
            <p>
              Das Nutzerkonto kann jederzeit gelöscht werden. Mit der Löschung werden alle
              personenbezogenen Daten entfernt.
            </p>
            <h3>2.3 Hochgeladene Inhalte</h3>
            <p>
              Das Avatar-Bild eines Nutzers ist öffentlich sichtbar.
              <br />
              Bilder, die in den Challenge-Decks hochgeladen werden, sind nur für die Nutzer:innen
              sichtbar, die an dieser Challenge teilnehmen.
            </p>
            <h2>3. Speicherung und Löschung von Daten</h2>
            <p>
              Daten werden gespeichert, solange das Nutzerkonto aktiv ist.
              <br />
              Nach einer Löschung des Kontos werden alle personenbezogenen Daten vollständig
              entfernt.
              <br />
              Backups können temporär bestehen bleiben, bevor sie automatisch gelöscht werden.
              <br />
              Bestelldaten (Fotobuchkäufe) werden mindestens 6 Jahre gespeichert (steuerliche &
              gesetzliche Aufbewahrungspflichten).
            </p>
            <h2>4. Tracking und Analysetools</h2>
            <p>
              Unsere App und Webseite verwenden Google Analytics, um das Nutzerverhalten zu
              analysieren.
            </p>
            <ul>
              <li>
                Opt-in erforderlich: Tracking wird erst aktiviert, wenn Nutzer:innen ausdrücklich
                zustimmen.
              </li>
              <li>
                IP-Anonymisierung: Google Analytics speichert keine vollständigen IP-Adressen.
              </li>
              <li>
                Erhobene Daten: Besuchte Seiten, Verweildauer, Geräteinformationen, IP-Adressen
                (gekürzt).
              </li>
              <li>
                Datenübertragung außerhalb der EU: Google kann Daten außerhalb der EU speichern. Es
                gelten Standardvertragsklauseln (SCCs).
              </li>
              <li>
                Deaktivierungsmöglichkeit: Tracking kann jederzeit über die Cookie-Einstellungen
                oder Browser-Plugins deaktiviert werden.
              </li>
            </ul>
            <h2>5. Zahlung & Bestellungen von Fotobüchern</h2>
            <p>Mehr Informationen in Kürze.</p>
            {/* <h3>5.1 Zahlungsabwicklung über Stripe</h3>
          <p>Für Käufe innerhalb der App nutzen wir den Zahlungsanbieter Stripe.</p>
          <ul>
            <li>
              Zahlungsdaten wie Kreditkartennummern werden nicht von uns gespeichert, sondern direkt
              von Stripe verarbeitet.
            </li>
            <li>
              Stripe erhebt Zahlungsdaten (z. B. Kreditkarteninformationen, Rechnungsadresse) zur
              Abwicklung der Transaktionen.
            </li>
            <li>
              Die Verarbeitung dieser Daten erfolgt durch Stripe Payments Europe, Ltd., eine nach
              DSGVO regulierte Einheit mit Sitz in Irland.
            </li>
          </ul>*/}
            <p>
              Weitere Informationen findest du in der Datenschutzerklärung von Stripe:{' '}
              <a href="https://stripe.com/de/privacy" target="_blank">
                https://stripe.com/de/privacy
              </a>
            </p>
            <h3>5.2 Speicherung von Bestelldaten</h3>
            <p>
              Für steuerliche & rechtliche Zwecke speichern wir Bestelldaten (Artikel, Preis,
              Rechnungsdetails) für mindestens 6 Jahre.
              <br />
              Rechnungen können jederzeit per Anfrage an{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a> angefordert werden.
            </p>
            <h2>6. Versand & Druck von Fotobüchern</h2>
            <p>Mehr Informationen in Kürze.</p>
            {/* <h2>6. Versand & Druck von Fotobüchern (Prodigi)</h2>
          <p>
            Die Produktion und der Versand der Fotobücher erfolgen durch unseren Partner Prodigi
            Group Ltd.
          </p>
          <p>
            Dazu werden Bestelldaten (Name, Lieferadresse, bestellte Produkte) an Prodigi
            weitergegeben.
            <br />
            Prodigi verarbeitet diese Daten zur Herstellung & Lieferung der Fotobücher.
            <br />
            Die Verarbeitung erfolgt gemäß der Datenschutzrichtlinie von Prodigi:{' '}
            <a href="https://www.prodigi.com/legal/privacy" target="_blank">
              https://www.prodigi.com/legal/privacy
            </a>
            <br />
            Falls du Fragen zur Datenverarbeitung durch Prodigi hast, kannst du dich direkt an uns
            wenden.
          </p> */}
            <h2>7. Widerrufsrecht für Fotobücher</h2>
            <p>
              Da Fotobücher individuell angefertigt werden, besteht kein Widerrufsrecht nach
              Produktionsbeginn.
            </p>
            <p>
              Falls ein Fotobuch fehlerhaft oder beschädigt geliefert wird, kontaktiere uns unter{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>, um eine Lösung zu finden.
            </p>
            <h2>8. Altersbeschränkung</h2>
            <p>
              Die Nutzung der App ist ab 12 Jahren erlaubt (je nach App-Store-Richtlinien).
              <br />
              Kinder unter 16 Jahren benötigen die Zustimmung der Erziehungsberechtigten, wenn
              personenbezogene Daten verarbeitet werden.
              <br />
              Eltern und Erziehungsberechtigte sind verantwortlich für die Nutzung durch
              minderjährige Personen.
            </p>
            <h2>9. Nutzerrechte nach DSGVO</h2>
            <p>Nutzer:innen haben folgende Rechte:</p>
            <ul>
              <li>Auskunft über gespeicherte Daten erhalten</li>
              <li>Berichtigung unrichtiger Daten verlangen</li>
              <li>Löschung der Daten beantragen</li>
              <li>Widerspruch gegen die Verarbeitung einlegen</li>
              <li>Datenübertragbarkeit verlangen</li>
            </ul>
            <p>
              Anfragen hierzu können per E-Mail an{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a> gestellt werden.
            </p>
            <h2>10. Cookies und lokale Speicherung</h2>
            <p>
              Unsere Webseite verwendet Cookies zur Analyse und Speicherung von Nutzereinstellungen.
              <br />
              Tracking-Cookies werden erst nach Zustimmung (Opt-in) gesetzt.
              <br />
              Die App nutzt keine eigenen Tracking-Cookies, aber das Betriebssystem kann
              Analysefunktionen enthalten, die deaktiviert werden können.
            </p>
            <h2>11. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden, um neue gesetzliche
              Anforderungen oder App-Funktionen zu berücksichtigen. Die aktuelle Version ist
              jederzeit auf unserer Webseite abrufbar.
            </p>
            <h2>12. Allgemeine Geschäftsbedingungen (AGB)</h2>
            <p>
              Die Nutzung der App „cappic“ unterliegt unseren Allgemeinen Geschäftsbedingungen
              (AGB).
              <br />
              Die AGB enthalten Informationen zu:
            </p>
            <ul>
              <li>Nutzungsvoraussetzungen der App</li>
              <li>Regelungen für kostenpflichtige Inhalte (Fotobücher)</li>
              <li>Haftungsausschluss</li>
              <li>Widerrufsrecht & Stornierungen</li>
              <li>Rechte & Pflichten der Nutzer:innen</li>
            </ul>
            <p>
              Die vollständigen AGB sind jederzeit <Link href="/terms-and-conditions">hier</Link>{' '}
              abrufbar.
            </p>
          </>
        )}
        {locale === 'en' && (
          <>
            <h1>Privacy Policy</h1>
            <p>
              <strong>Last updated:</strong> March 2025
            </p>

            <p>
              We appreciate your interest in our app and website “cappic.” Protecting your personal
              data is important to us. Below, we inform you about how your data is processed in
              accordance with the General Data Protection Regulation (GDPR).
            </p>

            <h2>1. Responsible Entity</h2>
            <p>
              The entity responsible for data processing in connection with the use of the app and
              website is:
            </p>
            <p>
              Marvin Vrdoljak
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten, Germany
              <br />
              Email: <a href="mailto:info@cappic.app">info@cappic.app</a>
            </p>

            <h2>2. Collection and Processing of Personal Data</h2>
            <h3>2.1 Legal Basis for Data Processing</h3>
            <p>
              The processing of personal data is carried out based on the following legal grounds
              under GDPR:
            </p>
            <ul>
              <li>
                Article 6(1)(b) GDPR (Contract Performance): Processing necessary for using the app.
              </li>
              <li>
                Article 6(1)(f) GDPR (Legitimate Interest): Analyzing app usage to improve user
                experience.
              </li>
              <li>
                Article 6(1)(a) GDPR (Consent): If explicit consent is given for processing (e.g.,
                tracking).
              </li>
            </ul>

            <h3>2.2 User Account</h3>
            <p>Registration is required to use the app. We collect the following data:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Password (encrypted storage)</li>
              <li>Optional: Age</li>
            </ul>
            <p>
              The user account can be deleted at any time. Upon deletion, all personal data will be
              removed.
            </p>

            <h3>2.3 Uploaded Content</h3>
            <p>
              A user’s avatar image is publicly visible.
              <br />
              Images uploaded in challenge decks are only visible to users participating in that
              challenge.
            </p>

            <h2>3. Data Storage and Deletion</h2>
            <p>
              Data is stored as long as the user account is active.
              <br />
              Upon account deletion, all personal data is completely removed.
              <br />
              Backups may temporarily persist before being automatically deleted.
              <br />
              Order data (photo book purchases) is stored for at least six years due to tax and
              legal retention requirements.
            </p>

            <h2>4. Tracking and Analytics</h2>
            <p>Our app and website use Google Analytics to analyze user behavior.</p>
            <ul>
              <li>Opt-in required: Tracking is only activated with explicit user consent.</li>
              <li>IP anonymization: Google Analytics does not store full IP addresses.</li>
              <li>
                Collected data: Visited pages, time spent, device information, truncated IP
                addresses.
              </li>
              <li>
                Data transfer outside the EU: Google may store data outside the EU under Standard
                Contractual Clauses (SCCs).
              </li>
              <li>
                Opt-out option: Tracking can be disabled via cookie settings or browser plugins.
              </li>
            </ul>

            <h2>5. Payment & Photo Book Orders</h2>
            <p>More information coming soon.</p>
            {/* <h3>5.1 Payment Processing via Stripe</h3>
          <p>For in-app purchases, we use the payment provider Stripe.</p>
          <ul>
            <li>
              Payment details such as credit card numbers are not stored by us but processed
              directly by Stripe.
            </li>
            <li>
              Stripe collects payment data (e.g., credit card details, billing address) to process
              transactions.
            </li>
            <li>
              Data processing is handled by Stripe Payments Europe, Ltd., an entity regulated under
              GDPR in Ireland.
            </li>
          </ul>
          <p>
            For more information, see Stripe’s Privacy Policy:{' '}
            <a href="https://stripe.com/privacy" target="_blank">
              https://stripe.com/privacy
            </a>
          </p> */}

            <h3>5.2 Order Data Storage</h3>
            <p>
              Order data (items, prices, billing details) is stored for at least six years for tax
              and legal reasons.
              <br />
              Invoices can be requested anytime via{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>.
            </p>

            <h2>6. Shipping & Printing of Photo Books</h2>
            <p>More information coming soon.</p>
            {/* <h2>6. Shipping & Printing of Photo Books (Prodigi)</h2>
          <p>
            Production and shipping of photo books are handled by our partner Prodigi Group Ltd.
          </p>
          <p>
            Order details (name, shipping address, ordered products) are shared with Prodigi for
            fulfillment.
            <br />
            Prodigi processes these details for production and delivery.
            <br />
            Data is processed in accordance with Prodigi’s Privacy Policy:{' '}
            <a href="https://www.prodigi.com/legal/privacy" target="_blank">
              https://www.prodigi.com/legal/privacy
            </a>
            <br />
            For questions about data processing by Prodigi, please contact us.
          </p>

          <h2>7. Right of Withdrawal for Photo Books</h2>
          <p>
            Since photo books are custom-made, no withdrawal rights apply once production begins.
          </p>
          <p>
            If a photo book arrives damaged or defective, please contact us at{' '}
            <a href="mailto:info@cappic.app">info@cappic.app</a> for a solution.
          </p> */}

            <h2>8. Age Restrictions</h2>
            <p>
              The app is available for users aged 12+ (subject to app store policies).
              <br />
              Users under 16 require parental consent if personal data is processed.
              <br />
              Parents/guardians are responsible for supervising minors’ app usage.
            </p>

            <h2>9. User Rights under GDPR</h2>
            <p>Users have the following rights:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request information about stored data.
              </li>
              <li>
                <strong>Correction:</strong> Request rectification of incorrect data.
              </li>
              <li>
                <strong>Deletion:</strong> Request data removal.
              </li>
              <li>
                <strong>Objection:</strong> Object to data processing.
              </li>
              <li>
                <strong>Data portability:</strong> Request transfer of data to another provider.
              </li>
            </ul>
            <p>
              Requests can be sent via email to <a href="mailto:info@cappic.app">info@cappic.app</a>
              .
            </p>

            <h2>10. Cookies and Local Storage</h2>
            <p>
              Our website uses cookies for analytics and user preference storage.
              <br />
              Tracking cookies are only set with explicit consent (opt-in).
              <br />
              The app does not use its own tracking cookies, but the operating system may have
              analytics features that can be disabled.
            </p>

            <h2>11. Changes to this Privacy Policy</h2>
            <p>
              This privacy policy may be updated to reflect new legal requirements or app features.
              The latest version is always available on our website.
            </p>

            <h2>12. Terms & Conditions (T&C)</h2>
            <p>
              Using the “cappic” app is subject to our Terms & Conditions (T&C).
              <br />
              The T&C cover:
            </p>
            <ul>
              <li>Conditions for app usage</li>
              <li>Rules for paid content (photo books)</li>
              <li>Liability disclaimers</li>
              <li>Withdrawal & cancellation policies</li>
              <li>User rights & obligations</li>
            </ul>
            <p>
              The full T&C can be accessed <Link href="/terms-and-conditions">here</Link>.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default PrivacyContent
