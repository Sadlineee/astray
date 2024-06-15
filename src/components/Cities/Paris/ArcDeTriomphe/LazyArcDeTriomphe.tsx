import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Paris/ArcDeTriomphe/1.jpg'
import Img2 from '../../../../data/images/cities/Paris/ArcDeTriomphe/2.jpg'
import Img3 from '../../../../data/images/cities/Paris/ArcDeTriomphe/3.jpg'
import Img4 from '../../../../data/images/cities/Paris/ArcDeTriomphe/4.jpg'
import Img5 from '../../../../data/images/cities/Paris/ArcDeTriomphe/5.jpg'

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
    title: 'Arc de Triomphe',
    address: 'Pl. Charles de Gaulle, 75008 Paris, France',
    link: 'https://www.paris-arc-de-triomphe.fr/en',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Триумфальная арка в Париже (фр. Arc de Triomphe) является одним из самых известных монументов во Франции и выдающимся примером неоклассической архитектуры. Эта величественная арка была возведена по приказу императора Наполеона Бонапарта в начале XIX века в честь побед его армии и находится на площади Шарля де Голля (ранее известной как площадь Звезды), где сходятся 12 проспектов, включая знаменитую Елисейские поля.',
    history: 'Строительство Триумфальной арки началось в 1806 году, после победы Наполеона в битве при Аустерлице, и завершилось только спустя 30 лет в 1836 году, уже при короле Луи-Филиппе. Проект был создан архитектором Жаном Шальгреном, который черпал вдохновение из римской архитектуры древности. Арка была задумана как символ военной мощи Франции и дань уважения солдатам, которые сражались за Родину.',
    view: 'Триумфальная арка имеет впечатляющие размеры: её высота составляет 50 метров, ширина - 45 метров, а глубина - 22 метра. Фасады арки украшены многочисленными барельефами и скульптурами, которые изображают важные исторические события и сцены сражений. Среди них выделяются такие произведения, как "Отправление добровольцев 1792 года" Франсуа Рюда и "Мир 1815 года" Антуана-Этекса. Внутри арки расположены 284 ступени, ведущие на смотровую площадку с великолепным видом на Париж.',
    other: 'Триумфальная арка в Париже представляет собой глубокий символ национального единства и военной славы. Это монументальная дань уважения тем, кто боролся и жертвовал своей жизнью за Францию, и напоминание о событиях, оставивших след в истории. Арка также отражает богатое культурное и архитектурное наследие Франции и продолжает вдохновлять поколения людей со всего мира своим могуществом и красотой.'
  }
]

const LazyArcDeTriomphe = () => {
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
              <span className="attraction__wrapper--el--title">Значение</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyArcDeTriomphe