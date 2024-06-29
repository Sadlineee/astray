import React from 'react'
import { Link } from 'react-router-dom'

import Marienplatz from '../../../data/images/cities/Munich/Marienplatz/1.jpg'
import SchlossNymphenburg from '../../../data/images/cities/Munich/SchlossNymphenburg/5.jpg'

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
    image: Marienplatz,
    title: 'Мариенплац',
    translation: 'Marienplatz',
    rating: 4.7
  },

  { 
    id: 2,
    image: SchlossNymphenburg,
    title: 'Дворец Нимфенбург',
    translation: 'Schloss Nymphenburg',
    rating: 4.6
  },
]

const LazyMunich = () => {
  return(
    <div className="city">
      {attractions.map((el) => (
        <Link className="city__place" to={`/home/5/${el.id}`} key={el.id}>
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

export default LazyMunich