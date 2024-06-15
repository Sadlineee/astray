import React from 'react'

import Img1 from '../../../../data/images/cities/Istanbul/Ayasofya/1.jpg'
import Img2 from '../../../../data/images/cities/Istanbul/Ayasofya/2.jpg'
import Img3 from '../../../../data/images/cities/Istanbul/Ayasofya/3.jpg'
import Img4 from '../../../../data/images/cities/Istanbul/Ayasofya/4.jpg'
import Img5 from '../../../../data/images/cities/Istanbul/Ayasofya/5.jpg'

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
    title: 'Ayasofya',
    address: 'Sultan Ahmet, Ayasofya Meydanı No:1, Istanbul 34122 Turkey',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Собор Святой Софии, также известный как Айя-София (Hagia Sophia), расположен в сердце Стамбула и является одним из самых значимых и величественных архитектурных памятников мира. Это сооружение обладает богатой и разнообразной историей, отражающей переходы культур и религий на протяжении веков.',
    history: 'Айя-София была построена в 537 году по приказу византийского императора Юстиниана I. Над проектом работали выдающиеся архитекторы Анфемий из Тралл и Исидор из Милета. Собор изначально предназначался для главного христианского храма Византийской империи и служил этой цели почти 1000 лет. После захвата Константинополя Османской империей в 1453 году, султан Мехмед II приказал преобразовать собор в мечеть. Мозаики с христианской символикой были покрыты штукатуркой, и были добавлены элементы ислама: минареты, михраб и минбар. В 1935 году Айя-София была преобразована в музей по инициативе Мустафы Кемаля Ататюрка, основателя современной Турции. В 2020 году собору был возвращен статус мечети.',
    view: 'Айя-София знаменита своей массивной купольной крышей, которая на момент постройки была техническим чудом и остается одним из крупнейших куполов в мире. Купол имеет диаметр около 31 метра и взмывает на высоту 55 метров. Внутреннее убранство храма богато украшено мозаиками, мраморными колоннами и портиками, создавая непревзойденную атмосферу величественности и духовности.',
    other: 'Сегодня Айя-София является активным религиозным и туристическим объектом, привлекающим миллионы посетителей каждый год. Вход свободный, но следует помнить, что Айя-София снова функционирует как мечеть, и необходимо уважать религиозные традиции, такие как соблюдение дресс-кода и снятие обуви перед входом.'
  }
]

const LazyAyasofya = () => {
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
              <span className="attraction__wrapper--el--title">Текущее состояние</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyAyasofya