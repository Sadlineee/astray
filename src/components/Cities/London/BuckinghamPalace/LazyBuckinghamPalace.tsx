import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/BuckinghamPalace/1.jpg'
import Img2 from '../../../../data/images/cities/London/BuckinghamPalace/2.jpg'
import Img3 from '../../../../data/images/cities/London/BuckinghamPalace/3.jpg'
import Img4 from '../../../../data/images/cities/London/BuckinghamPalace/4.jpg'
import Img5 from '../../../../data/images/cities/London/BuckinghamPalace/5.jpg'

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
    title: 'Buckingham Palace',
    address: 'Buckingham Palace, London SW1A 1AA',
    link: 'https://www.rct.uk/visit/buckingham-palace',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Букингемский дворец — это величественная резиденция британской монархии в Лондоне, олицетворяющая историю и традиции Великобритании. Расположенный в Вестминстере, этот великолепный дворец является официальным домом короля или королевы и используется для важных государственных мероприятий, торжественных приемов и иных официальных церемоний.',
    history: 'История дворца начинается в 1703 году, когда его построили для герцога Букингема. В 1761 году король Георг III приобрел это здание для своей супруги, королевы Шарлотты, и с тех пор оно стало королевской резиденцией. В течение 19-го века дворец значительно расширяли и перестраивали, чтобы придать ему современный облик, включая знаменитый фасад, спроектированный Эштоном Уэббом в 1913 году.',
    view: 'Букингемский дворец известен своим впечатляющим внешним видом, великолепными внутренними интерьерами и обширными, прекрасно ухоженными садами. Внутри дворца можно найти изысканные залы, такие как Тронный зал, Балконный зал и Зал аудиенций, которые украшены произведениями искусства, роскошной мебелью и антиквариатом. В Государственных апартаментах, которые открыты для посетителей в летние месяцы, демонстрируются роскошные реликвии королевской семьи.',
    other: 'Букингемский дворец также славится своими садами, раскинувшимися на территории в 39 акров. В садах находятся живописные озера, ухоженные лужайки и цветущие клумбы, что делает их прекрасным местом для прогулок и спокойного отдыха.'
  }
]

const LazyBuckinghamPalace = () => {
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
              <span className="attraction__wrapper--el--title">Сады дворца</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyBuckinghamPalace