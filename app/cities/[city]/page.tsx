'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { NotFound } from '@/components'
import { AmsterdamData, LondonData, NewYorkData, ParisData, RioDeJaneiroData, RomeData } from '@data/cities'
import { roboto_condensed } from '@/fonts/fonts'
import { AttractionButton, AttractionCard, AttractionImage, AttractionLine, AttractionRating, AttractionTitle, CityBox, StarIcon } from './City.styled'

const cityDataMap: Record<string, typeof LondonData> = {
  London: LondonData,
  Paris: ParisData,
  NewYork: NewYorkData,
  Rome: RomeData,
  RioDeJaneiro: RioDeJaneiroData,
  Amsterdam: AmsterdamData
}

export default function City() {
  const { city } = useParams()

  if (typeof city !== 'string') {
    return <NotFound>404</NotFound>
  }

  const cityData = cityDataMap[city]

  if (!cityData) {
    return <NotFound>404</NotFound>
  }

  return (
    <CityBox>
      {cityData.map((el) => (
        <AttractionCard href={`${city}/${el.link}`} key={el.id}>
          <AttractionImage>
            <Image src={el.image} alt={`${el.title}`} fill={true} quality={70} loading='lazy' />
          </AttractionImage>
          <AttractionTitle>{el.title}</AttractionTitle>
          <AttractionLine /> 
          <AttractionRating> 
            {el.rating} 
            <StarIcon /> 
          </AttractionRating>
          <AttractionButton className={roboto_condensed.className}>ПЕРЕЙТИ</AttractionButton>
        </AttractionCard>
      ))}
    </CityBox>
  )
}