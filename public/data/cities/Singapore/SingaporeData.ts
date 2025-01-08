import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/Singapore'

export const SingaporeData: AttractionProps[] = [

  { 
    id: 1,
    link: 'CloudForest',
    image: attractionImage.CloudForestImage,
    title: 'Облачный лес',
    rating: 4.8
  },

  { 
    id: 2,
    link: 'MarinaBaySands',
    image: attractionImage.MarinaBaySandsImage,
    title: 'Марина Бей Сендс',
    rating: 4.7
  },

  { 
    id: 3,
    link: 'SupertreeGrove',
    image: attractionImage.SupertreeGroveImage,
    title: 'Роща сверхдеревьев',
    rating: 4.7
  },

  { 
    id: 4,
    link: 'JewelChangiAirport',
    image: attractionImage.JewelChangiAirportImage,
    title: 'Аэропорт Чанги',
    rating: 4.8
  },

  { 
    id: 5,
    link: 'SingaporeBotanicGardens',
    image: attractionImage.SingaporeBotanicGardensImage,
    title: 'Сингапурский ботанический сад',
    rating: 4.7
  }
]