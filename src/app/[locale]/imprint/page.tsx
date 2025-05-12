import { Metadata } from 'next'
import getRequestConfig from '@/i18n/request'
import ImprintContent from './ImprintContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const localeConfig = await getRequestConfig({ requestLocale: Promise.resolve(locale) })

  return {
    title: localeConfig.messages?.metadata?.imprint?.title || 'Imprint - cappic',
    description:
      localeConfig.messages?.metadata?.imprint?.description ||
      'Legal information and contact details',
    openGraph: {
      title: localeConfig.messages?.metadata?.imprint?.title || 'Imprint - cappic',
      description:
        localeConfig.messages?.metadata?.imprint?.description ||
        'Legal information and contact details',
      locale: localeConfig.locale,
      type: 'website',
    },
  }
}

export default function ImprintPage() {
  return <ImprintContent />
}
