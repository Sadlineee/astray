import React from 'react'

import Img1 from '../../../../data/images/cities/Istanbul/GalataKulesi/1.jpg'
import Img2 from '../../../../data/images/cities/Istanbul/GalataKulesi/2.jpg'
import Img3 from '../../../../data/images/cities/Istanbul/GalataKulesi/3.jpg'
import Img4 from '../../../../data/images/cities/Istanbul/GalataKulesi/4.jpg'
import Img5 from '../../../../data/images/cities/Istanbul/GalataKulesi/5.jpg'

interface Attraction {
  id: number
  title: string
  address: string
  image: string[]
  description: string
  history: string
  view: string
  other: string
}

const attraction: Attraction[] = [
  { 
    id: 1,
    title: 'Galata Kulesi',
    address: 'Bereketzade Mh. Galata Kulesi Beyoğlu, Istanbul, Turkey',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Галатская башня (тур. Galata Kulesi) — это одна из самых знаковых и старинных структур Стамбула, находящаяся на северной стороне Золотого Рога в районе Галата (ныне это часть района Бейоглу). Башня является одним из символов города и привлекает множество туристов благодаря своему историческому значению и захватывающим видом на весь Стамбул.',
    history: 'Галатская башня была построена в 1348 году генуэзцами как часть их оборонительной системы. Первоначально она называлась "Башней Иисуса" и служила важным укреплением во время многочисленных осад и битв за власть в регионе. В последующие годы башня неоднократно перестраивалась и восстанавливалась после пожаров и землетрясений.',
    view: 'Галатская башня выполнена в романском стиле и имеет 9 этажей. Общая высота башни составляет около 67 метров, а диаметр — примерно 16 метров. Ее массивные каменные стены и узкие окна придают ей внушительный и загадочный вид. На вершине башни находится смотровая площадка, с которой открывается панорамный вид на Старый город, пролив Босфор, Золотой Рог и район Бейоглу.',
    other: 'Галатская башня богата легендами и мифами. Одна из самых известных историй связана с османским ученым Хезарфеном Ахметом Челеби, который в XVII веке якобы совершил полет с вершины Галатской башни с помощью созданных им крыльев и приземлился на другой стороне Босфора.'
  }
]

const LazyGalataKulesi = () => {
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
          <div className="attraction__link">-</div>
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
              <span className="attraction__wrapper--el--title">Мифы</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyGalataKulesi