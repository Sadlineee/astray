import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/Prague'

export const PragueData: AttractionProps[] = [

  { 
    id: 1,
    link: 'CharlesBridge',
    image: attractionImage.CharlesBridgeImage,
    title: 'Карлов мост',
    rating: 4.8
  },

  { 
    id: 2,
    link: 'OldTownSquare',
    image: attractionImage.OldTownSquareImage,
    title: 'Староместская площадь',
    rating: 4.8
  },

  { 
    id: 3,
    link: 'PragueCastle',
    image: attractionImage.PragueCastleImage,
    title: 'Пражский Град',
    rating: 4.7
  }
]