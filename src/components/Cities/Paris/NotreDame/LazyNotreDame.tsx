import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Paris/NotreDame/1.jpg'
import Img2 from '../../../../data/images/cities/Paris/NotreDame/2.jpg'
import Img3 from '../../../../data/images/cities/Paris/NotreDame/3.jpg'
import Img4 from '../../../../data/images/cities/Paris/NotreDame/4.jpg'
import Img5 from '../../../../data/images/cities/Paris/NotreDame/5.jpg'

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
    title: 'Notre-Dame de Paris',
    address: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France',
    link: 'https://www.notredamedeparis.fr',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Нотр-Дам де Пари (фр. Notre-Dame de Paris), также известный как Собор Парижской Богоматери, — это один из наиболее значимых и узнаваемых архитектурных памятников Франции и всего мира. Расположенный на острове Сите в самом центре Парижа, этот великолепный готический собор является ярким символом французской культуры и истории.',
    history: 'Строительство Нотр-Дам де Пари началось в 1163 году по указу епископа Мориса де Сюлли и продолжалось почти два века, окончательно завершившись в 1345 году. За это время собор претерпел множество изменений и расширений, что отразилось на его архитектурном облике и стиле. В разные периоды своей долгой истории Нотр-Дам переживал радости и трудности, включая серьёзные повреждения во время Французской революции и восстановительные работы в XIX веке под руководством архитектора Эжена Виолле-ле-Дюка.',
    view: 'Нотр-Дам де Пари является одним из лучших примеров готической архитектуры. Его высокие арки, витражи, окружающие стены, и изящные контрфорсы придают собору величественный, но при этом лёгкий и воздушный облик. Главный фасад украшен тремя богато декорированными порталами и тремя роскошными розетками, которые вместе с многочисленными скульптурными элементами рассказывают библейские истории и привносят мистическую атмосферу. Одна из самых известных и впечатляющих особенностей Нотр-Дам — это его знаменитые гаргульи и химеры, которые стали символом собора и его защитниками. Эти закрученные каменные фигурки украшение не только декоративное, но и функциональное, так как они выполняют роль водостоков, отводя дождевую воду от стен здания.',
    other: 'Нотр-Дам де Пари остаётся не только важным религиозным и историческим памятником, но и источником вдохновения для художников, писателей и музыкантов. Его образ встречается в литературных произведениях, фильмах, операх и музыкальных композициях. Это воплощение готического искусства и символ Парижа, который продолжает привлекать к себе внимание и восхищение людей со всего мира.'
  }
]

const LazyNotreDame = () => {
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
              <span className="attraction__wrapper--el--title">Значение и наследие</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyNotreDame