import React from 'react'

import Img1 from '../../../../data/images/cities/Istanbul/YerebatanSarnıcı/1.jpg'
import Img2 from '../../../../data/images/cities/Istanbul/YerebatanSarnıcı/2.jpg'
import Img3 from '../../../../data/images/cities/Istanbul/YerebatanSarnıcı/3.jpg'
import Img4 from '../../../../data/images/cities/Istanbul/YerebatanSarnıcı/4.jpg'
import Img5 from '../../../../data/images/cities/Istanbul/YerebatanSarnıcı/5.jpg'

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
    title: 'Yerebatan Sarnıcı',
    address: 'Yerebatan Cad. Alemdar Mah. 1/3 34410 Sultanahmet-Fatih / Istanbul, Turkey',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Цистерна Базилика, также известная как Йеребатан Сарныджы (тур. Yerebatan Sarnıcı), представляет собой одно из самых удивительных и мистических инженерных сооружений древнего Константинополя, современного Стамбула. Она расположена в самом сердце исторического района Султанахмет, неподалеку от Айя-Софии и Голубой мечети, и представляет собой подземное водохранилище, созданное в эпоху Византийской империи.',
    history: 'Цистерна была построена в VI веке при императоре Юстиниане I и завершена в 532 году. Основное назначение этого гигантского подземного резервуара заключалось в хранении пресной воды, необходимой для жителей города и Великого дворца Константинополя. Вода в цистерну поступала по акведукам из близлежащего водоема в Белградском лесу, на расстоянии примерно в 19 км от города.',
    view: 'Цистерна Базилика впечатляет своими размерами и архитектурным исполнением. Это гигантское подземное помещение размером 140 на 70 метров, с общей площадью около 9800 квадратных метров, способное вместить до 100 000 тонн воды. Внутри цистерны расположены 336 мраморных колонн высотой около 9 метров каждая, сформированных в 12 рядов по 28 колонн. Многие из этих колонн были повторно использованы из более древних античных зданий, что придает цистерне особую историческую ценность.',
    other: 'Одной из самых известных и загадочных частей цистерны является колонна с головой Медузы. Две головы Медузы служат основанием для двух колонн и располагаются в дальнем углу цистерны. Одна из голов установлена вверх ногами, а другая – на боку. Точное происхождение и назначение этих голов остаются загадкой для историков, но они добавляют мистицизма этому величественному месту.'
  }
]

const LazyYerebatanSarnıcı = () => {
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
              <span className="attraction__wrapper--el--title">Особенности</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyYerebatanSarnıcı