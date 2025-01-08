import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import StyledComponentsRegistry from '@/lib/registry'
import Theme from '@/components/Theme'
import { roboto_condensed } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'astray',
  description: 'Узнайте о самых красивых и интересных достопримечательностях городов по всему миру!',
  robots: 'index, follow',
  openGraph: {
    title: 'astray',
    description: 'Узнайте о самых красивых и интересных достопримечательностях городов по всему миру!',
    url: '',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <head>
        <link rel='icon' href='./favicon.ico' sizes='any' />
      </head>
      <body className={roboto_condensed.className}>
        <Theme>
          <StyledComponentsRegistry>
            {children}
            <Analytics />
            <SpeedInsights />
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  )
}