import { AttractionProps } from '@/types/AttractionProps'
import * as attractionImage from '@images/cities/Paris'

export const ParisData: AttractionProps[] = [
  
  { 
    id: 1,
    link: 'EiffelTower',
    image: attractionImage.EiffelTowerImage,
    title: 'Эйфелева башня',
    rating: 4.7
  },

  { 
    id: 2,
    link: 'Louvre',
    image: attractionImage.LouvreImage,
    title: 'Лувр',
    rating: 4.7
  },

  { 
    id: 3,
    link: 'ArcDeTriomphe',
    image: attractionImage.ArcDeTriompheImage,
    title: 'Триумфальная арка',
    rating: 4.7
  },

  { 
    id: 4,
    link: 'SainteChapelle',
    image: attractionImage.SainteChapelleImage,
    title: 'Сент-Шапель',
    rating: 4.6
  },

  { 
    id: 5,
    link: 'JardinDesTuileries',
    image: attractionImage.JardinDesTuileriesImage,
    title: 'Сад Тюильри',
    rating: 4.6
  },

  { 
    id: 6,
    link: 'PlaceDesVosges',
    image: attractionImage.PlaceDesVosgesImage,
    title: 'Площадь Вогезов',
    rating: 4.6
  },

  { 
    id: 7,
    link: 'NotreDameDeParis',
    image: attractionImage.NotreDameDeParisImage,
    title: 'Нотр-Дам-де-Пари',
    rating: 4.7
  },

  { 
    id: 8,
    link: 'JardinDuLuxembourg',
    image: attractionImage.JardinDuLuxembourgImage,
    title: 'Люксембургский сад',
    rating: 4.7
  }
]