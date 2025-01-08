'use client'

import { notFound, useParams } from 'next/navigation'
import { attractionMap } from './attractionMap'
import ImageScroll from './components/ImageScroll'
import AttractionText from './components/AttractionText'
import { AttractionBox, AttractionTitle } from './Attraction.styled'

export default function Attraction() {
  const { attraction } = useParams()

  if (typeof attraction !== 'string') {
    return notFound()
  }

  const attractionData = attractionMap[attraction]

  if (!attractionData) {
    return notFound()
  }

  return (
    <div>
      {attractionData.map((el) => (
        <AttractionBox key={el.id}>
          <ImageScroll images={el.image} title={el.title} />
          <AttractionTitle>{el.title}</AttractionTitle>
          <AttractionText title='История' content={el.history} />
          <AttractionText title='Архитектура' content={el.architecture} />
        </AttractionBox>
      ))}
    </div>
  )
}