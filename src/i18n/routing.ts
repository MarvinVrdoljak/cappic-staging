import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'de'], // Define in this line the possible languages for translation
  defaultLocale: 'en', // Define in this line the default language to be shown
  localePrefix: 'always', // Define in this line the prefix to be used in the URL
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
