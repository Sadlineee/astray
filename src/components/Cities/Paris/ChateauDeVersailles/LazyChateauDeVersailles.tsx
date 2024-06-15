import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Paris/ChateauDeVersailles/1.jpg'
import Img2 from '../../../../data/images/cities/Paris/ChateauDeVersailles/2.jpg'
import Img3 from '../../../../data/images/cities/Paris/ChateauDeVersailles/3.jpg'
import Img4 from '../../../../data/images/cities/Paris/ChateauDeVersailles/4.jpg'
import Img5 from '../../../../data/images/cities/Paris/ChateauDeVersailles/5.jpg'

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
    title: 'Château de Versailles',
    address: "Place d'Armes, 78000 Versailles, France",
    link: 'https://en.chateauversailles.fr/',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Версальский дворец, расположенный в 20 километрах к западу от Парижа, является одним из главных культурных и исторических достопримечательностей Франции. Это не только архитектурный шедевр, но и символ французской монархии, роскоши и власти. Дворец, изначально задуманный как охотничий замок для короля Людовика XIII, был значительно расширен его сыном, Людовиком XIV, и превратился в грандиозную резиденцию, достойную "Короля-Солнца".',
    history: 'Строительство Версаля началось в 1623 году и продолжалось в течение нескольких десятилетий. Работы по расширению и украшению дворца велись под руководством известных архитекторов, таких как Луи Лево и Жюль Ардуэн-Мансар, а также ландшафтного архитектора Андре Ленотра. Дворец стал официальной королевской резиденцией в 1682 году и оставался таковой до Французской революции в 1789 году.',
    view: 'Версальский дворец — это великолепный пример французского классицизма и барокко. Главный фасад дворца, обращенный к огромному двору, украшен колоннами, статуями и изысканными декоративными элементами. Центральная часть дворца включает Парадные апартаменты (Grands Appartements) — жилище короля и королевы, а также множество репрезентативных залов и салонов. Одной из самых знаменитых комнат дворца является Зеркальная галерея (Galerie des Glaces). Этот величественный зал, длиной 73 метра, украшен 357 зеркалами, хрустальными люстрами и фресками, прославляющими Людовика XIV. Зеркальная галерея служила местом для проведения приёмов, балов и других церемониальных мероприятий.',
    other: 'Неотъемлемой частью Версаля являются его великолепные сады, созданные Андре Ленотром. Они находятся на площади более 800 гектаров и включают в себя геометрически правильные аллеи, партеры с цветниками, фонтаны, статуи и пруды. Центральный канал длиной 1,5 километра создает эффект перспективы и добавляет грандиозности пейзажу. Сады Версаля славятся своими музыкальными фонтанами, которые в летние месяцы привлекают множество туристов. Вода взлетает в такт музыке, создавая впечатляющее зрелище.'
  }
]

const LazyChateauDeVersailles = () => {
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
              <span className="attraction__wrapper--el--title">Сады и парки</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyChateauDeVersailles