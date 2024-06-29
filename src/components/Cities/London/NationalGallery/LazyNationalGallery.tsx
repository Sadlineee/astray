import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/NationalGallery/1.jpg'
import Img2 from '../../../../data/images/cities/London/NationalGallery/2.jpg'
import Img3 from '../../../../data/images/cities/London/NationalGallery/3.jpg'
import Img4 from '../../../../data/images/cities/London/NationalGallery/4.jpg'
import Img5 from '../../../../data/images/cities/London/NationalGallery/5.jpg'

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
    title: 'National Gallery',
    address: 'Trafalgar Square, London WC2N 5DN',
    link: 'https://www.nationalgallery.org.uk',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'National Gallery - один из величайших музеев мира, расположенный в Лондоне. Музей находится в самом сердце города, на площади Трафальгар, и является домом для более чем 2,300 произведений искусства от средневековых картин до произведений современных художников. Посетители могут насладиться коллекциями знаменитых художников, таких как Ван Гог, Моне, Рембрандт, да Винчи и многих других. Галерея предлагает удивительное погружение в мир искусства, позволяя посетителям насладиться красотой и разнообразием живописи различных эпох.',
    history: 'Галерея была основана в 1824 году в Лондоне как государственное институт, предназначенный для общественного использования и представления шедевров живописи. Открытие галереи состоялось в 1824 году, а в 1838 году она была открыта для посетителей в новом здании на Трафальгарской площади. Музей был создан с целью сохранения и распространения произведений искусства и способствовал развитию художественного образования общества. С тех пор National Gallery стала одним из крупнейших и современных музеев мира, демонстрирующим шедевры живописи различных эпох и направлений искусства.',
    view: 'Архитектура галереи является примером классического здания, отличающегося своим элегантным и величественным стилем. Здание музея было спроектировано архитектором Уильямом Уилкинсом. Основные черты архитектуры National Gallery включают в себя классическую фасаду с колоннами и портиком, который придает зданию величественный вид. Внутри здания преобладают высокие потолки, обширные галереи и изысканные детали отделки, создающие благородную обстановку для хранения и презентации коллекции произведений искусства.',
    other: 'В галерее можно насладиться обширной коллекцией произведений искусства, представляющих различные исторические периоды и стили. Вот несколько знаковых произведений, которые стоит посмотреть при посещении музея: "Солнце в тумане" Винсента ван Гога - одно из самых известных произведений художника, известное своей яркой красочностью и эмоциональной глубиной. "Модестий" Тициана - шедевр итальянского Ренессанса, известный своей изысканной композицией и красочной палитрой. "Самсон и Далила" Петера Паула Рубенса - картина, воплощающая мастерство барокко и драматичность сюжета. "Сирены" Джона Уильяма Уотерахауса - работа прерафаэлитов, представляющая тему греческой мифологии и женской красоты. Это лишь небольшая часть шедевров, которые можно увидеть в National Gallery. Рекомендуется также ознакомиться с постоянной коллекцией искусства музея, включающей работы таких великих мастеров, как Леонардо да Винчи, Рембрандт, Вермеер, Микеланджело и многих других.'
  }
]

const LazyNationalGallery = () => {
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
              <span className="attraction__wrapper--el--title">Коллекции</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyNationalGallery