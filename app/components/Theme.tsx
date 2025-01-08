'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

type ThemeProps = {
  children: React.ReactNode
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}