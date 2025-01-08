'use client'

import Image from 'next/image'
import { notFound, useParams } from 'next/navigation'
import { roboto_condensed } from '@/fonts/fonts'
import { cityMap } from './cityMap'
import { AttractionButton, AttractionCard, AttractionImage, AttractionLine, AttractionRating, AttractionTitle, CityBox, StarIcon } from './City.styled'

export default function City() {
  const { city } = useParams()

  if (typeof city !== 'string') {
    return notFound()
  }

  const cityData = cityMap[city]

  if (!cityData) {
    return notFound()
  }

  return (
    <CityBox>
      {cityData.map((el) => (
        <AttractionCard href={`${city}/${el.link}`} key={el.id}>
          <AttractionImage>
            <Image 
              src={el.image} 
              alt={`${el.title}`} 
              fill={true} 
              quality={80} 
              priority
            />
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