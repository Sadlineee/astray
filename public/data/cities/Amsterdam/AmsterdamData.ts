import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/Amsterdam'

export const AmsterdamData: AttractionProps[] = [

  { 
    id: 1,
    link: 'Rijksmuseum',
    image: attractionImage.RijksmuseumImage,
    title: 'Рейксмузеум',
    rating: 4.7
  },

  { 
    id: 2,
    link: 'Vondelpark',
    image: attractionImage.VondelparkImage,
    title: 'Парк Вондела',
    rating: 4.7
  },

  { 
    id: 3,
    link: 'DeWallen',
    image: attractionImage.DeWallenImage,
    title: 'Де Валлен',
    rating: 4.0
  },

  { 
    id: 4,
    link: 'VanGoghMuseum',
    image: attractionImage.VanGoghMuseumImage,
    title: 'Музей Ван Гога',
    rating: 4.6
  }
]