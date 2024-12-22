import { StaticImageData } from 'next/image'

export interface AboutAttractionProps {
  id: number
  title: string
  image: StaticImageData[]
  history: string
  architecture: string
}