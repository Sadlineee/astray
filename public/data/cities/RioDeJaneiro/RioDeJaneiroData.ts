import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/RioDeJaneiro'

export const RioDeJaneiroData: AttractionProps[] = [

  { 
    id: 1,
    link: 'ChristTheRedeemer',
    image: attractionImage.ChristTheRedeemerImage,
    title: 'Статуя Христа-Искупителя',
    rating: 4.8
  },

  { 
    id: 2,
    link: 'CopacabanaBeach',
    image: attractionImage.CopacabanaBeachImage,
    title: 'Пляж Копакабана',
    rating: 4.5
  },

  { 
    id: 3,
    link: 'EscadariaSelaron',
    image: attractionImage.EscadariaSelaronImage,
    title: 'Лестница Селарона',
    rating: 4.6
  },

  { 
    id: 4,
    link: 'ParqueLage',
    image: attractionImage.ParqueLageImage,
    title: 'Парк Энрике Лаге',
    rating: 4.6
  },

  { 
    id: 5,
    link: 'SugarloafMountain',
    image: attractionImage.SugarloafMountainImage,
    title: 'Сахарная голова',
    rating: 4.5
  }
]