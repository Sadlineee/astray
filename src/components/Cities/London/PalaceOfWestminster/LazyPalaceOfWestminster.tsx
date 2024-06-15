import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/PalaceOfWestminster/1.jpg'
import Img2 from '../../../../data/images/cities/London/PalaceOfWestminster/2.jpg'
import Img3 from '../../../../data/images/cities/London/PalaceOfWestminster/3.jpg'
import Img4 from '../../../../data/images/cities/London/PalaceOfWestminster/4.jpg'
import Img5 from '../../../../data/images/cities/London/PalaceOfWestminster/5.jpg'

interface Attraction {
  id: number,
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
    title: 'Palace of Westminster',
    address: 'Parliament Square, Westminster, London, SW1A 0AA',
    link: 'https://www.parliament.uk',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Вестминстерский дворец (Palace of Westminster), также известный как Дом Парламента (Houses of Parliament), является одним из самых знаменитых архитектурных и исторических памятников Великобритании. Расположенный на берегу реки Темзы в центре Лондона, он служит местом заседаний двух палат Парламента Великобритании: Палаты общин и Палаты лордов.',
    history: 'История Вестминстерского дворца насчитывает более тысячи лет. Изначально на этом месте находилось королевское жилье, которое использовалось с XI века, когда Эдуард Исповедник построил здесь свой дворец. В 1265 году здания начали использоваться для заседаний Парламента. В 1834 году большая часть старого дворца была разрушена в результате сильного пожара. Сразу после пожара, в 1840 году, началось строительство нового здания по проекту архитектора Чарльза Бэрри, которому помогал Август Пьюджин, специалист по готической архитектуре. Строительство завершилось в 1870 году, и новый дворец стал выдающимся образом неоготической архитектуры.',
    view: 'Архитектурный стиль Вестминстерского дворца представляет собой яркий пример неоготики. Здание возвышается величественностями своими башнями и фасадами, украшенными элементами готической архитектуры. Башня Виктории (Victoria Tower) – это самая высокая башня дворца, которая достигает 98,5 метров и служит официальным входом в Парламент. Башня Биг-Бен (Elizabeth Tower) – одна из наиболее узнаваемых архитектурных достопримечательностей в мире. Название "Биг-Бен" в народе присвоено главным часам и их колоколу. Зал Святого Стефана – просторный и торжественный зал, в котором проводятся церемонии и важные государственные мероприятия. Со своими 1100 комнатами, 100 лестницами и 3,2 километрами коридоров Вестминстерский дворец представляет собой сложный и многоуровневый архитектурный ансамбль.',
    other: 'Вестминстерский дворец является сердцем британской демократии, местом, где принимаются важнейшие решения, влияющие на жизнь страны и мира. Здесь проходили и продолжают проходить исторические события и важные государственные мероприятия, такие как открытие сессий парламента королевой. Кроме своей политической функции, Вестминстерский дворец привлекает тысячи туристов ежегодно, благодаря своим историческим и архитектурным достоинствам. Здание входит в список объектов Всемирного наследия ЮНЕСКО с 1987 года, что подчеркивает его культурную и историческую значимость не только для Великобритании, но и для всего мира.'
  }
]

const LazyPalaceOfWestminster = () => {
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
              <span className="attraction__wrapper--el--title">Роль и значимость</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyPalaceOfWestminster