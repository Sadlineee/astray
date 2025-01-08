import { staatliches } from '@/fonts/fonts'
import { AppTitle, HeaderBox } from './Header.styled'

export default function Header() {
  return (
    <HeaderBox>
      <AppTitle href='/' className={staatliches.className}>astray</AppTitle>
    </HeaderBox>
  )
}