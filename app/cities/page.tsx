'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { citiesData } from '@data/cities/citiesData'
import { roboto_condensed } from '@/fonts/fonts'
import { CitiesBox, CityButton, CityCard, CityCountry, CityFlag, CityImage, CityTitle } from './Cities.styled'

export default function Cities() {
  const cities = useMemo(() => {
    return citiesData.map((el) => (
      <CityCard href={`cities/${el.link}`} key={el.id}>
        <CityImage>
          <Image 
            src={el.image} 
            alt={`${el.title}`} 
            fill={true} 
            quality={80}
            priority
          />
        </CityImage>
        <CityTitle>{el.title}</CityTitle>
        <CityCountry>{el.country}</CityCountry>
        <CityFlag>
          <Image 
            src={el.flag} 
            alt={`${el.country}`} 
            fill={true} 
            quality={80} 
            priority
          />
        </CityFlag>
        <CityButton className={roboto_condensed.className}>ПЕРЕЙТИ</CityButton>
      </CityCard>
    ))
  }, [citiesData])

  return (
    <CitiesBox>
      {cities}
    </CitiesBox>
  )
}