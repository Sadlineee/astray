import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/LondonEye/1.jpg'
import Img2 from '../../../../data/images/cities/London/LondonEye/2.jpg'
import Img3 from '../../../../data/images/cities/London/LondonEye/3.jpg'
import Img4 from '../../../../data/images/cities/London/LondonEye/4.jpg'
import Img5 from '../../../../data/images/cities/London/LondonEye/5.jpg'

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
    title: 'London Eye',
    address: 'Riverside Building, County Hall, London SE1 7PB',
    link: 'https://www.londoneye.com',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'London Eye - это одно из самых популярных туристических мест в Лондоне. Известное также как Миллениум-Колесо, представляет собой огромное наблюдательное колесо высотой около 135 метров. Пассажиры могут сесть в капсулу и наслаждаться панорамным видом на всю Лондонскую столицу. Оборудование колеса обеспечивает плавное вращение капсул, позволяя каждому пассажиру наслаждаться прекрасными видами на город.',
    history: 'История Лондонского глаза насчитывает более двадцати лет. Оно было открыто для посетителей 9 марта 2000 года ко дню Матери в Лондоне. London Eye, изначально известное как Millennium Wheel, было создано в честь наступления нового тысячелетия. Колесо обозрения было спроектировано и построено компанией British Airways, а затем передано в собственность Merlin Entertainments. Это стало одной из главных достопримечательностей Лондона, привлекающей миллионы туристов каждый год.',
    view: 'Само колесо выполнено в современном стиле и имеет эстетичный внешний вид, подчеркивающий его значимость как символ Лондона. Внутренние интерьеры капсул оформлены стильно и комфортно. Округлые капсулы оборудованы стеклянными стенами, что обеспечивает пассажирам великолепный обзор пейзажей Лондона. Внутри установлены сиденья и платформы, чтобы посетители могли свободно перемещаться и наслаждаться видом с разных точек.',
    other: 'Пассажиры в кабинах могут увидеть такие знаковые достопримечательности, как Биг Бен, Букингемский дворец, Тауэр и Лондонский мост. От высоты колеса обозрения также отлично видно реку Темзу, городские парки, архитектурные шедевры и современные здания Лондона. Поездка на London Eye предлагает уникальную перспективу на город и является одним из лучших способов насладиться панорамой Лондона.'
  }
]

const LazyLondonEye = () => {
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
              <span className="attraction__wrapper--el--title">Виды</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyLondonEye