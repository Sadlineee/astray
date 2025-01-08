'use client'

import { Header } from '@/components'
import { homeImage } from '@images/home'
import { AnimatedLine, HomeBox, HomeButton, HomeImage, LeftSection, PrimaryText, RightSection, SecondaryText } from './Home.styled'

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
          <HomeImage 
            src={homeImage} 
            alt='home' 
            fill={true} 
            quality={80} 
            priority
          />
        </RightSection>
      </HomeBox>
    </>
  )
}