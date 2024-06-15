import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/TowerBridge/1.jpg'
import Img2 from '../../../../data/images/cities/London/TowerBridge/2.jpg'
import Img3 from '../../../../data/images/cities/London/TowerBridge/3.jpg'
import Img4 from '../../../../data/images/cities/London/TowerBridge/4.jpg'
import Img5 from '../../../../data/images/cities/London/TowerBridge/5.jpg'

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
    title: 'Tower Bridge',
    address: 'Tower Bridge Rd, London SE1 2UP',
    link: 'https://www.towerbridge.org.uk',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Тауэрский мост, или Тауэр Бридж, — это один из самых узнаваемых символов Лондона и Великобритании в целом. Этот величественный разводной мост, пересекающий реку Темзу, расположен недалеко от Лондонского Тауэра, который дал свое название мосту. Построенный в конце 19 века, он соединяет центральные районы города и является важным элементом транспортной сети Лондона.',
    history: 'Строительство Тауэрского моста началось в 1886 году и продолжалось восемь лет, закончившись в 1894 году. Мост был спроектирован Горацио Джонсом и Джоном Барри и представляет собой впечатляющее инженерное сооружение, сочетающее в себе функции подвесного и разводного моста. Отличительной чертой моста являются две массивные неоготические башни высотой 65 метров каждая, соединенные между собой двумя горизонтальными пешеходными галереями и центральным пролетом.',
    view: 'Тауэрский мост выполнен в викторианском неоготическом стиле, что придает ему романтичный и одновременно величественный вид. Башни и промежуточные конструкции облицованы портлендским камнем и гранитом, что подчеркивает их архитектурную элегантность и придает строению монументальность.',
    other: 'Одна из ключевых функций моста — это возможность разведения его центрального пролета для пропуска высоких судов, следующих по реке Темзе. Первоначально развод механизма моста осуществлялся благодаря гидравлической системе на паровых машинах, но с 1976 года они были заменены на современное электрическое оборудование. Мост поднимается около 1000 раз в год, что добавляет ему особого очарования и динамичности.'
  }
]

const LazyTowerBridge = () => {
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
              <span className="attraction__wrapper--el--title">Развод моста</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyTowerBridge