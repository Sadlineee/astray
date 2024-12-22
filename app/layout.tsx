import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import StyledComponentsRegistry from '@/lib/registry'
import Theme from '@/components/Theme'
import { roboto_condensed } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'astray'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={roboto_condensed.className}>
        <Theme>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Analytics />
          <SpeedInsights />
        </Theme>
      </body>
    </html>
  )
}