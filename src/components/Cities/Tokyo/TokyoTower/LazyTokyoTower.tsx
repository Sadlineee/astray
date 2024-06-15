import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Tokyo/TokyoTower/1.jpg'
import Img2 from '../../../../data/images/cities/Tokyo/TokyoTower/2.jpg'
import Img3 from '../../../../data/images/cities/Tokyo/TokyoTower/3.jpg'
import Img4 from '../../../../data/images/cities/Tokyo/TokyoTower/4.jpg'
import Img5 from '../../../../data/images/cities/Tokyo/TokyoTower/5.jpg'

interface Attraction {
  id: number
  title: string
  address: string
  link: string
  image: string[]
  description: string
  history: string
  view: string
  other: string
}

const attraction: Attraction[] = [
  { 
    id: 1,
    title: '東京タワ',
    address: '4-2-8 Shibakoen, Minato-ku, Tokyo, 105-0011',
    link: 'https://www.tokyotower.co.jp',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Токийская башня (Tokyo Tower) — это знаковая телевизионная башня и туристическая достопримечательность, расположенная в районе Минато города Токио, Япония. Высота башни составляет 333 метра, что делает её одной из самых высоких сооружений в стране.',
    history: 'Была построена в 1958 году, как символ возрождения Японии после Второй мировой войны и свидетельство её быстрого экономического роста. Башня была спроектирована архитектором Татсу Наитой и вдохновлена Эйфелевой башней в Париже, но отличается своим характерным ярко-оранжевым и белым цветом. Изначально башня была построена для вещания телевидения и радио, так как по мере роста популярности телевидения в Японии возникла потребность в мощной телебашне. В 1961 году на башне был установлен первый передатчик цветного телевидения в Японии. ',
    view: 'Башня высотой 333 метра, что на 13 метров выше Эйфелевой башни, выполнена в ярко-оранжевом и белом цветах, что соответствует авиационным стандартам безопасности. Её стальной каркас весит около 4000 тонн, что значительно легче по сравнению с её парижским прототипом, благодаря использованию новейших технологий и материалов.',
    other: 'Одной из самых уникальных особенностей Токийской башни является её ночная подсветка. Басима оснащена сложной системой освещения, которая меняется в зависимости от времени года и специальных событий.'
  }
]

const LazyTokyoTower = () => {
  return(
    <div className="page">
      <div style={{ overflow: 'hidden' }}>
        {attraction.map((el) => (
          <div className="image" key={el.id}>
            {[...el.image, ...el.image].map((img, index) => (
              <img className="image__el" src={img} key={`${el.id}-${index}`} alt="image" />
            ))}
          </div>
        ))}
      </div>
      {attraction.map((el) => (
        <div className="attraction" key={el.id}>
          <span className="attraction__title">{el.title}</span>
          <address className="attraction__address">{el.address}</address>
          <Link className="attraction__link" to={el.link} >Visit official website</Link>
          <div className="attraction__wrapper">
            <div className="attraction__wrapper--el">
              <span className="attraction__wrapper--el--title">Описание</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.description}</p>
            </div>
            <div className="attraction__wrapper--el">
              <span className="attraction__wrapper--el--title">История</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.history}</p>
            </div>
          </div>
          <div className="attraction__wrapper">
            <div className="attraction__wrapper--el">
              <span className="attraction__wrapper--el--title">Архитектура и интерьеры</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.view}</p>
            </div>
            <div className="attraction__wrapper--el">
              <span className="attraction__wrapper--el--title">Особенность</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyTokyoTower