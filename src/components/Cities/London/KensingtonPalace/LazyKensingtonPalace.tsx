import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/KensingtonPalace/1.jpg'
import Img2 from '../../../../data/images/cities/London/KensingtonPalace/2.jpg'
import Img3 from '../../../../data/images/cities/London/KensingtonPalace/3.jpg'
import Img4 from '../../../../data/images/cities/London/KensingtonPalace/4.jpg'
import Img5 from '../../../../data/images/cities/London/KensingtonPalace/5.jpg'

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
    title: 'Kensington Palace',
    address: 'Kensington Gardens, London W8 4PX',
    link: 'https://www.hrp.org.uk/kensington-palace',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Кенсингтонский дворец - это историческое здание в Лондоне, Чехам-сквер, являющееся одним из королевских резиденций. Здесь располагаются жилые и официальные помещения для членов королевской семьи. Архитектурный стиль дворца - поздний георгианский, с элементами викторианской архитектуры. Внутри можно увидеть различные выставки и музейные коллекции. Кенсингтонский дворец также окружен прекрасным парком, который является популярным местом отдыха для лондонцев и туристов.',
    history: 'Кенсингтонский дворец был построен в конце XVII века для Уильяма III и Мэри II. Он был разработан архитектором Сиром Кристофером Реном в палладианском стиле. В течение XVIII века дворец использовался различными членами королевской семьи. В Кенсингтонском дворце проживала принцесса Анна, а затем здесь жила королева Каролина. В начале XIX века Кенсингтонский дворец стал домом для принцессы Виктории (позднее королевы Виктории) и ее матери, герцогини Кентской. Его стали называть "Королевским Дворцом". В XX веке Кенсингтонский дворец продолжил оставаться резиденцией для различных членов королевской семьи. Здесь проживала принцесса Маргарет и принцесса Диана. Сегодня Кенсингтонский дворец имеет большую историческую и культурную ценность, и по-прежнему служит одной из резиденций для членов королевской семьи.',
    view: 'Архитектура Кенсингтонского дворца является примером палладианского стиля, который был популярен в конце XVII века. Кенсингтонский дворец отличается выразительной симметрией в своем дизайне. Фасад здания разделен на равные части с использованием колонн и других декоративных элементов. Один из визуальных центров дворца - портик с колоннами в стиле дорического портик. Он придает зданию величественность и классический вид. Над портиком находится треугольный фронтон, который является обязательным элементом палладианского стиля и символизирует античное влияние в архитектуре. Огромное количество окон с арочными или прямоугольными откосами добавляют света и воздушности в интерьеры дворца.',
    other: 'Кенсингтонский дворец имеет важное историческое значение для Британии. Он является одним из королевских дворцов в Лондоне и в прошлом служил домом для многих членов королевской семьи, включая принцессу Диану. Сегодня, Кенсингтонский дворец является резиденцией многих членов королевской семьи, включая герцога и герцогиню Кембриджских. Также в здании расположены музеи, например, Виктория и Альберт музей, и оно продолжает быть символом королевской истории и культуры.'
  }
]

const LazyKensingtonPalace = () => {
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

export default LazyKensingtonPalace