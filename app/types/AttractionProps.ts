import { StaticImageData } from 'next/image'

export interface AttractionProps { 
  id: number
  link: string
  image: StaticImageData
  title: string
  rating: number
}