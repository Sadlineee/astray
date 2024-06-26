import React from 'react'
import { Link } from 'react-router-dom'

import BuckinghamPalace from '../../../data/images/cities/London/BuckinghamPalace/1.jpg'
import TowerBridge from '../../../data/images/cities/London/TowerBridge/4.jpg'
import HydePark from '../../../data/images/cities/London/HydePark/4.jpg'
import BritishMuseum from '../../../data/images/cities/London/BritishMuseum/4.jpg'
import PalaceOfWestminster from '../../../data/images/cities/London/PalaceOfWestminster/4.jpg'
import TowerOfLondon from '../../../data/images/cities/London/TowerOfLondon/4.jpg'
import LondonEye from '../../../data/images/cities/London/LondonEye/3.jpg'
import TrafalgarSquare from '../../../data/images/cities/London/TrafalgarSquare/1.jpg'
import CoventGarden from '../../../data/images/cities/London/CoventGarden/3.jpg'
import NationalGallery from '../../../data/images/cities/London/NationalGallery/3.jpg'
import KensingtonPalace from '../../../data/images/cities/London/KensingtonPalace/5.jpg'

interface Attractions {
  id: number
  image: string
  title: string
  translation: string
  rating: number
}

const attractions: Attractions [] = [
  { 
    id: 1,
    image: BuckinghamPalace,
    title: 'Букингемский дворец',
    translation: 'Buckingham Palace',
    rating: 4.5
  },

  { 
    id: 2,
    image: TowerBridge,
    title: 'Тауэрский мост',
    translation: 'Tower Bridge',
    rating: 4.8
  },

  { 
    id: 3,
    image: HydePark,
    title: 'Гайд-парк',
    translation: 'Hyde Park',
    rating: 4.7
  },

  { 
    id: 4,
    image: BritishMuseum,
    title: 'Британский музей',
    translation: 'British Museum',
    rating: 4.7
  },

  { 
    id: 5,
    image: PalaceOfWestminster,
    title: 'Вестминстерский дворец',
    translation: 'Palace of Westminster',
    rating: 4.6
  },

  { 
    id: 6,
    image: TowerOfLondon,
    title: 'Лондонский Тауэр',
    translation: 'Tower of London',
    rating: 4.6
  },

  { 
    id: 7,
    image: LondonEye,
    title: 'Лондонский глаз',
    translation: 'London Eye',
    rating: 4.5
  },

  { 
    id: 8,
    image: TrafalgarSquare,
    title: 'Трафальгарская площадь',
    translation: 'Trafalgar Square',
    rating: 4.6
  },

  { 
    id: 9,
    image: CoventGarden,
    title: 'Ковент-Гарден',
    translation: 'Covent Garden',
    rating: 4.5
  },

  {
    id: 10,
    image: NationalGallery,
    title: 'Национальная галерея',
    translation: 'National Gallery',
    rating: 4.8
  },

  {
    id: 11,
    image: KensingtonPalace,
    title: 'Кенсингтонский дворец',
    translation: 'Kensington Palace',
    rating: 4.4
  },
]

const LazyLondon = () => {
  return(
    <div className="city">
      {attractions.map((el) => (
        <Link className="city__place" to={`/home/1/${el.id}`} key={el.id}>
          <div className="city__place--image">
            <img className="city__place--image--el" src={el.image} alt="image" />
          </div>
          <span className="city__place--title">{el.title}</span>
          <span className="city__place--translation">{el.translation}</span>
          <hr className="city__place--hr" />
          <div className="city__place--rating">{el.rating}</div>
          <button className="city__place--button">ПЕРЕЙТИ</button>          
        </Link>
      ))}
    </div>
  )
}

export default LazyLondon