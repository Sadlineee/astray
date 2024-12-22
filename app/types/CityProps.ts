import { StaticImageData } from 'next/image'

export interface CityProps {
  id: number
  link: string
  image: StaticImageData
  title: string
  country: string
  flag: StaticImageData
}