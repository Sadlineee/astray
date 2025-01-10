'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { Schema } from '@/components'
import { citiesData } from '@data/cities/citiesData'
import { roboto_condensed } from '@/fonts/fonts'
import { CitiesBox, CityButton, CityCard, CityCountry, CityFlag, CityImage, CityTitle } from './Cities.styled'

export default function Cities() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': citiesData.map((el) => ({
      '@type': 'ListItem',
      'position': el.id,
      'item': {
        '@type': 'Place',
        'name': el.title,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': el.title,
          'addressCountry': el.country
        },
        'url': `https://astray.site/cities/${el.link}`,
        'image': el.image
      }
    }))
  }

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
      <Schema schemaData={ schemaData } />
    </CitiesBox>
  )
}