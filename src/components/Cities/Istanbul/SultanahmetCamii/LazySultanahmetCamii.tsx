import React from 'react'

import Img1 from '../../../../data/images/cities/Istanbul/SultanahmetCamii/1.jpg'
import Img2 from '../../../../data/images/cities/Istanbul/SultanahmetCamii/2.jpg'
import Img3 from '../../../../data/images/cities/Istanbul/SultanahmetCamii/3.jpg'
import Img4 from '../../../../data/images/cities/Istanbul/SultanahmetCamii/4.jpg'
import Img5 from '../../../../data/images/cities/Istanbul/SultanahmetCamii/5.jpg'

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
    title: 'Sultanahmet Camii',
    address: 'Binbirdirek, At Meydanı Cd No:10, 34122 Fatih/İstanbul, Turkey',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Голубая мечеть, официально известная как Султанахмет Джами, является одной из самых знаменитых и величественных мечетей Стамбула. Она расположена в историческом районе Султанахмет, напротив Айя-Софии и неподалеку от Босфорского пролива. Голубая мечеть является не только религиозным центром, но и важным архитектурным памятником и символом города.',
    history: 'Строительство Голубой мечети было начато в 1609 году по указу султана Ахмеда I и завершено в 1616 году. Архитектором проекта был Седефкар Мехмет Ага, ученик великого Мимара Синана. Мечеть была построена на месте бывшего византийского императорского дворца, и ее строительство имело целью подчеркнуть мощь и величие Османской империи.',
    view: 'Голубая мечеть выполнена в классическом османском стиле с элементами византийской архитектуры. Она имеет шесть минаретов, что является уникальной особенностью, так как большинство мечетей того времени имели четыре или меньше минаретов. Центральный купол мечети достигает высоты 43 метров и поддерживается четырьмя массивными колоннами, известными как "ноги слона".',
    other: 'Сегодня Голубая мечеть является действующей мечетью, где проводятся регулярные молитвы. Она также является одной из главных туристических достопримечательностей Стамбула, привлекая миллионы посетителей ежегодно. Вход в мечеть свободен, однако, посетителям следует соблюдать дресс-код и уважать правила поведения в святом месте.'
  }
]

const LazySultanahmetCamii = () => {
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
              <span className="attraction__wrapper--el--title">Современное использование</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazySultanahmetCamii