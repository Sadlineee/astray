import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/Rome'

export const RomeData: AttractionProps[] = [

  { 
    id: 1,
    link: 'Colosseum',
    image: attractionImage.ColosseumImage,
    title: 'Колизей',
    rating: 4.7
  },

  { 
    id: 2,
    link: 'Pantheon',
    image: attractionImage.PantheonImage,
    title: 'Пантеон',
    rating: 4.8
  },

  { 
    id: 3,
    link: 'ForoRomano',
    image: attractionImage.ForoRomanoImage,
    title: 'Римский форум',
    rating: 4.7
  },

  { 
    id: 4,
    link: 'PiazzaNavona',
    image: attractionImage.PiazzaNavonaImage,
    title: 'Пьяцца Навона',
    rating: 4.7
  },

  { 
    id: 5,
    link: 'TreviFountain',
    image: attractionImage.TreviFountainImage,
    title: 'Фонтан Треви',
    rating: 4.7
  }
]