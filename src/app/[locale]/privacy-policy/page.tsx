import { Metadata } from 'next'
import getRequestConfig from '@/i18n/request'
import PrivacyContent from './PrivacyContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const localeConfig = await getRequestConfig({ requestLocale: Promise.resolve(locale) })

  return {
    title: localeConfig.messages?.metadata?.privacy?.title || 'Privacy Policy - cappic',
    description:
      localeConfig.messages?.metadata?.privacy?.description ||
      'Information about how we handle your data',
    openGraph: {
      title: localeConfig.messages?.metadata?.privacy?.title || 'Privacy Policy - cappic',
      description:
        localeConfig.messages?.metadata?.privacy?.description ||
        'Information about how we handle your data',
      locale: localeConfig.locale,
      type: 'website',
    },
  }
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
