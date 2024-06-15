import React from 'react'
import { Link } from 'react-router-dom'

import TourEiffel from '../../../data/images/cities/Paris/TourEiffel/2.jpg'
import ArcDeTriomphe from '../../../data/images/cities/Paris/ArcDeTriomphe/4.jpg'
import Louvre from '../../../data/images/cities/Paris/Louvre/4.jpg'
import NotreDame from '../../../data/images/cities/Paris/NotreDame/5.jpg'
import ChateauDeVersailles from '../../../data/images/cities/Paris/ChateauDeVersailles/2.jpg'

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
    image: TourEiffel,
    title: 'Эйфелева башня',
    translation: 'Tour Eiffel',
    rating: 4.7
  },

  { 
    id: 2,
    image: ArcDeTriomphe,
    title: 'Триумфальная арка',
    translation: 'Arc de Triomphe',
    rating: 4.7
  },

  { 
    id: 3,
    image: Louvre,
    title: 'Лувр',
    translation: 'Musée du Louvre',
    rating: 4.7
  },

  { 
    id: 4,
    image: NotreDame,
    title: 'Нотр-Дам-де-Пари',
    translation: 'Notre-Dame de Paris',
    rating: 4.7
  },

  { 
    id: 5,
    image: ChateauDeVersailles,
    title: 'Версаль',
    translation: 'Château de Versailles',
    rating: 4.6
  }
]

const LazyParis = () => {
  return(
    <div className="city">
      {attractions.map((el) => (
        <Link className="city__place" to={`/home/3/${el.id}`} key={el.id}>
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

export default LazyParis