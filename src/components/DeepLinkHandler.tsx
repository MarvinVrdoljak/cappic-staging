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
      pathname?.includes('/sign-up')
    ) {
      const param = window.location.hash || window.location.search
      const deepLink = `cappic-app-prev://${pathname}${param}`
      window.location.href = deepLink
    }
  }, [pathname])

  return null
}
