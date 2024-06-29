import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/CoventGarden/1.jpg'
import Img2 from '../../../../data/images/cities/London/CoventGarden/2.jpg'
import Img3 from '../../../../data/images/cities/London/CoventGarden/3.jpg'
import Img4 from '../../../../data/images/cities/London/CoventGarden/4.jpg'
import Img5 from '../../../../data/images/cities/London/CoventGarden/5.jpg'

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
    title: 'Covent Garden',
    address: 'Covent Garden, London WC2E 9DD',
    link: 'https://www.coventgarden.london',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Covent Garden - знаменитый район Лондона, известный своими театрами, кафе, ресторанами, магазинами и уличными артистами. В Covent Garden также находится Рояльная опера и музей транспорта Лондона. Этот культурный район привлекает туристов своей атмосферой, уличными выступлениями и возможностью насладиться шопингом и кулинарными изысками.',
    history: 'Имеет богатую историю, начиная с того времени, когда это место было огородами и пастбищами средневекового монастыря. В 17 веке Covent Garden стал центром коммерции и развлечений, а затем превратился в популярный торговый рынок Лондона. В 19 веке Covent Garden стал одним из крупнейших и самых оживленных рыночных районов города. В середине 20 века Covent Garden был в упадке, но благодаря реставрации и реконструкции в конце 20 века, стал снова популярным местом для шопинга, развлечений и культурных мероприятий. Сегодня Covent Garden продолжает привлекать множество посетителей своей богатой историей и живописной атмосферой.',
    view: 'Архитектура представляет собой уникальное сочетание стилей и эпох. Здесь можно увидеть характерные старинные здания, сочетающие элементы георгианской, викторианской и эдуардианской архитектуры. Особенно выделяется Covent Garden Piazza, который окружен зданиями в стиле палладианской архитектуры. Здания в этом районе впечатляют своими колоннами, фасадами с узорчатой резьбой и декоративными элементами. Covent Garden также известен своими театрами и культурными учреждениями, расположенными в старинных зданиях, создающих особую атмосферу и привлекая любителей искусства со всего мира.',
    other: 'Covent Garden известен своим разнообразием магазинов, кафе и ресторанов. Среди самых значимых можно выделить: Apple Market: популярный рынок, где можно приобрести уникальные изделия ручной работы и сувениры. Covent Garden Market Building: здесь можно найти множество магазинов, предлагающих одежду, аксессуары, украшения и многое другое. Piazza Cafes: рядом с Covent Garden Piazza находится множество уютных кафе, где можно насладиться чашечкой кофе или вкусным завтраком. Rules: один из старейших ресторанов Лондона, предлагающий традиционную британскую кухню. Эти места представляют собой лишь малую часть богатого выбора заведений Covent Garden, которые радуют посетителей своим разнообразием и атмосферой.'
  }
]

const LazyCoventGarden = () => {
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
              <span className="attraction__wrapper--el--title">Куда зайти</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyCoventGarden