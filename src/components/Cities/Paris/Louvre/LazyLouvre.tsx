import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Paris/Louvre/1.jpg'
import Img2 from '../../../../data/images/cities/Paris/Louvre/2.jpg'
import Img3 from '../../../../data/images/cities/Paris/Louvre/3.jpg'
import Img4 from '../../../../data/images/cities/Paris/Louvre/4.jpg'
import Img5 from '../../../../data/images/cities/Paris/Louvre/5.jpg'

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
    title: 'Musée du Louvre',
    address: 'Louvre Museum, 93 Rue de Rivoli, 75001 Paris. France',
    link: 'https://www.louvre.fr/en/visit/map-entrances-directions',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Лувр (фр. Musée du Louvre) — один из крупнейших и наиболее значимых музеев мира, который находится в центре Парижа. Это сооружение обладает не только впечатляющей коллекцией произведений искусства, но и богатой историей, уходящей корнями в глубину веков. Лувр представляет собой культурное сердце Парижа и является обязательным для посещения не только для поклонников искусства, но и для тех, кто хочет прикоснуться к живой истории.',
    history: 'Изначально Лувр был возведен в качестве крепости в конце XII века при короле Филиппе Августе для защиты Парижа от атак врагов. На протяжении веков он неоднократно перестраивался и расширялся, служив в разное время и королевской резиденцией, и административным зданием. В период Французской революции, в 1793 году Лувр был преобразован в государственный музей, доступный для широкой публики.',
    view: 'Архитектурный комплекс Лувра состоит из нескольких величественных сооружений, выстроенных в различных архитектурных стилях от Средневековья до Нового времени, что придаёт ему особое очарование. В 1989 году в центральном дворе (Кур Наполеон) была установлена знаменитая стеклянная пирамида, спроектированная китайско-американским архитектором Йо Мин Пеем. Эта смелая и соверemенная конструкция стала символом Лувра и вызвала значительные обсуждения, но быстро завоевала признание и стала неотъемлемой частью музея.',
    other: 'Лувр — дом для многих знаковых произведений искусства, таких как: Мона Лиза: Знаменитая картина Леонардо да Винчи, также известная как "Джоконда", привлекает миллионы посетителей благодаря своей загадочной улыбке. Венера Милосская: Древнегреческая статуя богини любви и красоты Афродиты, известная своей элегантностью и идеальными пропорциями. Портрет мадам Рекамье: Работа Жака-Луи Давида, икона неоклассического стиля. Свобода, ведущая народ: Картина Эжена Делакруа, запечатлевшая дух Французской революции.'
  }
]

const LazyLouvre = () => {
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
              <span className="attraction__wrapper--el--title">Шедевры</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyLouvre