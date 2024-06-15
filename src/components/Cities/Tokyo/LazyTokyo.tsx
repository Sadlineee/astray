import React from 'react'
import { Link } from 'react-router-dom'

import Sensoji from '../../../data/images/cities/Tokyo/Sensoji/2.jpg'
import TokyoTower from '../../../data/images/cities/Tokyo/TokyoTower/2.jpg'
import Akihabara from '../../../data/images/cities/Tokyo/Akihabara/4.jpg'

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
    image: Sensoji,
    title: 'Сэнсодзи',
    translation: '浅草寺',
    rating: 4.5
  },

  { 
    id: 2,
    image: TokyoTower,
    title: 'Токийская телебашня',
    translation: '東京タワ',
    rating: 4.5
  },

  { 
    id: 3,
    image: Akihabara,
    title: 'Акихабара',
    translation: '秋葉原',
    rating: 4.0
  }
]

const LazyTokyo = () => {
  return(
    <div className="city">
      {attractions.map((el) => (
        <Link className="city__place" to={`/home/4/${el.id}`} key={el.id}>
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

export default LazyTokyo