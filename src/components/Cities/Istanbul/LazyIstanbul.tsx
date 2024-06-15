import React from 'react'
import { Link } from 'react-router-dom'

import Ayasofya from '../../../data/images/cities/Istanbul/Ayasofya/1.jpg'
import Balat from '../../../data/images/cities/Istanbul/Balat/1.jpg'
import GalataKulesi from '../../../data/images/cities/Istanbul/GalataKulesi/5.jpg'
import SultanahmetCamii from '../../../data/images/cities/Istanbul/SultanahmetCamii/5.jpg'
import YerebatanSarnıcı from '../../../data/images/cities/Istanbul/YerebatanSarnıcı/2.jpg'

interface Attractions {
  id: number
  image: string
  title: string
  translation: string,
  rating: number
}

const attractions: Attractions [] = [
  { 
    id: 1,
    image: Ayasofya,
    title: 'Собор Святой Софии',
    translation: 'Ayasofya',
    rating: 4.8
  },

  { 
    id: 2,
    image: Balat,
    title: 'Балат',
    translation: 'Balat',
    rating: 4.5
  },

  { 
    id: 3,
    image: GalataKulesi,
    title: 'Галатская башня',
    translation: 'Galata Kulesi',
    rating: 4.7
  },

  { 
    id: 4,
    image: SultanahmetCamii,
    title: 'Голубая мечеть',
    translation: 'Sultanahmet Camii',
    rating: 4.7
  },

  { 
    id: 5,
    image: YerebatanSarnıcı,
    title: 'Цистерна Базилика',
    translation: 'Yerebatan Sarnıcı',
    rating: 4.6
  }
]

const Istanbul = () => {
  return(
    <div className="city">
      {attractions.map((el) => (
        <Link className="city__place" to={`/home/2/${el.id}`} key={el.id}>
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

export default Istanbul