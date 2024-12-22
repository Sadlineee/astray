'use client'

import Image from 'next/image'
import { Header } from '@/components'
import { homeImage } from '@images/home'
import { AnimatedLine, HomeBox, HomeButton, LeftSection, PrimaryText, RightSection, SecondaryText } from './Home.styled'

export default function Home() {
  return (
    <>
      <Header />
      <HomeBox>
        <LeftSection>
          <PrimaryText>
            В каждом уголке мира ждет открытие новых чудес
          </PrimaryText>
          <AnimatedLine />
          <SecondaryText>
            Кликните ниже и начните исследовать Мир с главной страницы нашего сайта!
          </SecondaryText>
          <HomeButton href='/cities'>Вперёд!</HomeButton>
        </LeftSection>
        <RightSection>
          <Image src={homeImage} alt='home' fill={true} quality={70} style={{ filter: 'drop-shadow(-12px -12px 0 #86C232)' }} />
        </RightSection>
      </HomeBox>
    </>
  )
}