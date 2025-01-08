import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/Moscow'

export const MoscowData: AttractionProps[] = [
  
  {
    id: 1,
    link: 'MoscowKremlin',
    image: attractionImage.MoscowKremlinImage,
    title: 'Московский Кремль',
    rating: 4.8
  },

  {
    id: 2,
    link: 'StBasilsCathedral',
    image: attractionImage.StBasilsCathedralImage,
    title: 'Храм Василия Блаженного',
    rating: 4.8
  },

  {
    id: 3,
    link: 'ZaryadyePark',
    image: attractionImage.ZaryadyeParkImage,
    title: 'Парк «Зарядье»',
    rating: 4.5 
  },

  {
    id: 4,
    link: 'MoscowCity',
    image: attractionImage.MoscowCityImage,
    title: 'Москва-Сити',
    rating: 4.7
  },

  {
    id: 5,
    link: 'MoscowStateUniversity',
    image: attractionImage.MoscowStateUniversityImage,
    title: 'Московский государственный университет',
    rating: 4.9 
  }
]