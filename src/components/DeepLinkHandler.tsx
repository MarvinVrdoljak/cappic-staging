'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DeepLinkHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (
      pathname?.includes('/login') ||
      pathname?.includes('/reset-password') ||
      pathname?.includes('/invite') ||
      pathname?.includes('/sign-up') ||
      pathname?.includes('/auth/callback')
    ) {
      console.log('deepLink')
      const hash = window.location.hash
      const deepLink = `cappic-app-prev://${pathname}${hash}`
      console.log('deepLink', deepLink, hash)
      window.location.href = deepLink
    }
  }, [pathname])

  return null
}
