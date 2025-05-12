import { Metadata } from 'next'
import getRequestConfig from '@/i18n/request'
import TermsContent from './TermsContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const localeConfig = await getRequestConfig({ requestLocale: Promise.resolve(locale) })

  return {
    title: localeConfig.messages?.metadata?.terms?.title || 'Terms & Conditions - cappic',
    description:
      localeConfig.messages?.metadata?.terms?.description ||
      'General Terms and Conditions for using cappic',
    openGraph: {
      title: localeConfig.messages?.metadata?.terms?.title || 'Terms & Conditions - cappic',
      description:
        localeConfig.messages?.metadata?.terms?.description ||
        'General Terms and Conditions for using cappic',
      locale: localeConfig.locale,
      type: 'website',
    },
  }
}

export default function TermsPage() {
  return <TermsContent />
}
