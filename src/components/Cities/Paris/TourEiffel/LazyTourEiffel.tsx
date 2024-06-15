import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Paris/TourEiffel/1.jpg'
import Img2 from '../../../../data/images/cities/Paris/TourEiffel/2.jpg'
import Img3 from '../../../../data/images/cities/Paris/TourEiffel/3.jpg'
import Img4 from '../../../../data/images/cities/Paris/TourEiffel/4.jpg'
import Img5 from '../../../../data/images/cities/Paris/TourEiffel/5.jpg'

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
    title: 'Tour Eiffel',
    address: 'Av. Gustave Eiffel, 75007 Paris, France',
    link: 'https://www.toureiffel.paris/fr',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Эйфелева башня, которой часто называют просто "Ла Тур Эйфель" (фр. La Tour Eiffel), является одним из самых узнаваемых символов Парижа, Франции и одной из самых знаменитых достопримечательностей в мире. Эта впечатляющая железная конструкция высотой 330 метров (вместе с антенной) находится на Марсовом поле, рядом с рекой Сеной, и привлекает миллионы туристов ежегодно.',
    history: 'Строительство Эйфелевой башни началось в январе 1887 года и было завершено в марте 1889 года, всего за 26 месяцев. Башня была спроектирована выдающимся французским инженером Гюставом Эйфелем и его компанией для Всемирной выставки 1889 года, которая проводилась в Париже по случаю столетия Французской Революции. Первоначально башня вызвала смешанные реакции среди парижан, многие из которых считали её неэстетичной и излишне массивной. Однако, со временем, она стала синонимом архитектурного мастерства и инноваций.',
    view: 'Эйфелева башня была настоящим инженерным подвигом своего времени. Её конструкция состоит из 18 038 индивидуальных железных частей, соединенных более чем двумя с половиной миллионами заклепок. Башня имеет три уровня для посещения. Первый и второй уровень включают рестораны с панорамными видами, а третий уровень, который считается смотровой площадкой, предлагает потрясающие виды на Париж с высоты 276 метров.',
    other: 'Современная Эйфелева башня является одной из самых посещаемых платных достопримечательностей в мире. Здесь работают смотровые площадки, рестораны, музеи и сувенирные магазины. Подъем на башню возможен на лифте или по лестнице, что само по себе является захватывающим приключением. Кроме туристических маршрутов, башня используется для радиовещания и различных культурных и праздничных мероприятий.'
  }
]

const LazyTourEiffel = () => {
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
              <span className="attraction__wrapper--el--title">Современное использование</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyTourEiffel