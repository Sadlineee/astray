import React from 'react'

import Img1 from '../../../../data/images/cities/Tokyo/Sensoji/1.jpg'
import Img2 from '../../../../data/images/cities/Tokyo/Sensoji/2.jpg'
import Img3 from '../../../../data/images/cities/Tokyo/Sensoji/3.jpg'
import Img4 from '../../../../data/images/cities/Tokyo/Sensoji/4.jpg'
import Img5 from '../../../../data/images/cities/Tokyo/Sensoji/5.jpg'

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
    title: '浅草寺',
    address: '2-chōme-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Sensoji, также известный как Asakusa Kannon Temple, представляет собой один из старейших и наиболее посещаемых буддийских храмов в Токио, Япония. Основанный в 645 году, Sensoji имеет богатую историю и является центральной религиозной и туристической достопримечательностью в районе Асакуса.',
    history: 'Основанный в 628 году, он был построен в честь богини милосердия Каннон после того, как два брата выловили её статуэтку из реки Сумида. В период Эдо (1603-1868) храм получил покровительство сёгунов Токугава и стал культурным и торговым центром. Во время Второй мировой войны Sensoji был разрушен, но позже тщательно восстановлен. Сегодня храм привлекает миллионы туристов и паломников, оставаясь важным религиозным и культурным символом Японии.',
    view: 'Архитектура Sensoji, одного из старейших буддийских храмов Токио, представляет собой великолепный пример традиционного японского храмового строительства, совмещающего элементы различных стилей и эпох. На протяжении веков храм переживал многочисленные реставрации и реконструкции, каждая из которых добавляла новые архитектурные элементы, сохраняя при этом уважение к первоначальному дизайну.',
    other: 'Sensoji остаётся действующим буддийским храмом, где проводятся разнообразные религиозные обряды и ритуалы. Жители Токио и туристы приходят сюда, чтобы помолиться, совершить ритуал очищения и привлечь удачу, вытянив омиикудзи (бумажные предсказания).'
  }
]

const LazySensoji = () => {
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
              <span className="attraction__wrapper--el--title">Религиозное значение</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazySensoji