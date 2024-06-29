import React from 'react'

import Img1 from '../../../../data/images/cities/London/TrafalgarSquare/1.jpg'
import Img2 from '../../../../data/images/cities/London/TrafalgarSquare/2.jpg'
import Img3 from '../../../../data/images/cities/London/TrafalgarSquare/3.jpg'
import Img4 from '../../../../data/images/cities/London/TrafalgarSquare/4.jpg'
import Img5 from '../../../../data/images/cities/London/TrafalgarSquare/5.jpg'

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
    title: 'Trafalgar Square',
    address: 'Trafalgar Sq, London WC2N 5DS',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Трафальгарская площадь - это историческая площадь в Лондоне, известная своими памятниками и культурным значением. Расположена в центре города, площадь обрамлена знаковыми сооружениями, включая Нельсонову колонну и Национальную галерею. Трафальгарская площадь часто служит местом проведения различных мероприятий и праздников. Вокруг площади также расположены множество туристических достопримечательностей, делающие ее одним из самых популярных мест для посещения в Лондоне.',
    history: 'Имеет богатую историю, которая уходит корнями в 1820-е годы. Название площади происходит от морского сражения при мысе Трафальгар во время Наполеоновских войн. Площадь была создана по заказу короля Джорджа IV и возводилась на месте, где ранее находился малоиспользуемый часть Страфорд-Уайта. Дизайн площади включал Нельсонову колонну, увенчанную статуей адмирала Нельсона. С течением времени Трафальгарская площадь стала символом победы и национального единства для британцев, а также важным центром культурной жизни города Лондона.',
    view: 'Площадь имеет великолепную архитектуру. Основные характеристики включают в себя Нельсонову колонну, памятник адмиралу Нельсону, который был одним из ключевых героев военных действий Британии. Также на площади можно увидеть Национальную галерею, одно из крупнейших художественных музеев Лондона. Архитектура зданий вокруг площади отражает различные исторические периоды и стили, что делает эту локацию уникальной.',
    other: 'На площади есть несколько кафе и ресторанов, где можно насладиться разнообразными блюдами и напитками. Некоторые из популярных мест включают "The National Café" с видом на площадь и блюдами европейской кухни, "St. Martin`s Café" с выбором свежей выпечки и сэндвичей, а также кафе в самой Национальной галерее, где можно отдохнуть после посещения музея. Рестораны и кафе на Трафальгарской площади предлагают разнообразные варианты блюд и напитков для посетителей с разными предпочтениями.'
  }
]

const LazyTrafalgarSquare = () => {
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
              <span className="attraction__wrapper--el--title">Рестораны и кафе</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyTrafalgarSquare