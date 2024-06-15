import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/HydePark/1.jpg'
import Img2 from '../../../../data/images/cities/London/HydePark/2.jpg'
import Img3 from '../../../../data/images/cities/London/HydePark/3.jpg'
import Img4 from '../../../../data/images/cities/London/HydePark/4.jpg'
import Img5 from '../../../../data/images/cities/London/HydePark/5.jpg'

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
    title: 'Hyde Park',
    address: 'Hyde Park, London W2 2UH',
    link: 'https://www.royalparks.org.uk/visit/parks/hyde-park',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Гайд-парк — один из самых больших и известных городских парков Лондона, а также центральный объект культурной и общественной жизни столицы Великобритании. Расположенный в западной части центрального Лондона, парк занимает площадь около 140 гектаров и привлекает миллионы посетителей каждый год благодаря своей богатой истории, живописным пейзажам и многочисленным активностям.',
    history: 'История Гайд-парка начинается в 1536 году, когда король Генрих VIII захватил этот участок земли у Вестминстерского аббатства и превратил его в королевские охотничьи угодья. В 1637 году парк был открыт для публики по распоряжению Карла I, и с тех пор он стал важным местом для отдыха и развлечений для горожан.',
    view: 'Гайд-парк славится своими обширными зелеными лужайками, тенистыми аллеями и живописными водоемами. Центральной достопримечательностью парка является озеро Серпентайн, которое разделяет Гайд-парк на две части. На берегах озера находятся пляжи, прокат лодок и кафе, что делает его популярным местом для пикников и активного отдыха.',
    other: 'Еще одной важной особенностью парка является "Спикерс Корнер" ("Уголок ораторов"), расположенный на северо-востоке парка, недалеко от Марбл Арч. Этот уголок стал знаменитым местом для публичных выступлений и обсуждений, начиная с середины 19 века. Здесь любой желающий может встать на импровизированную трибуну и высказать свои мысли на самые разнообразные темы, от политики до философии.'
  }
]

const LazyHydePark = () => {
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
              <span className="attraction__wrapper--el--title">Благоустройство</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.view}</p>
            </div>
            <div className="attraction__wrapper--el">
              <span className="attraction__wrapper--el--title">Спикерс Корнер</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyHydePark