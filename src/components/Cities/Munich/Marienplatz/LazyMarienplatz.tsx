import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Munich/Marienplatz/1.jpg'
import Img2 from '../../../../data/images/cities/Munich/Marienplatz/2.jpg'
import Img3 from '../../../../data/images/cities/Munich/Marienplatz/3.jpg'
import Img4 from '../../../../data/images/cities/Munich/Marienplatz/4.jpg'
import Img5 from '../../../../data/images/cities/Munich/Marienplatz/5.jpg'

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
    title: 'Marienplatz',
    address: 'Schloß Nymphenburg 1, 80638 München',
    link: 'https://www.marienplatz.de',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Мариенплац — один из центральных площадей в Мюнхене. Она находится в историческом центре города и окружена знаменитыми зданиями. Мариенплац является популярным местом среди туристов и местных жителей, благодаря своей красоте и историческому значению. Вокруг площади располагаются магазины, кафе и рестораны, создавая живописную атмосферу для прогулок и отдыха. В разное время года на Мариенплац устраиваются различные мероприятия, фестивали и ярмарки, делая это место еще более привлекательным для посещения.',
    history: 'Площадь имеет историческое значение и окружена знаменитыми зданиями, такими как Ратуша и Церковь Святого Петра. Площадь была названа в честь Марии Терезии, императрицы Священной Римской империи. В прошлом она использовалась как рыночная площадь и место проведения различных мероприятий. Сегодня Мариенплац является туристической достопримечательностью и популярным местом для отдыха и прогулок.',
    view: 'Архитектура Мариенплац представлена разнообразными стилями и зданиями, отражающими историю и культуру Мюнхена. Ратуша на площади сочетает в себе элементы готики и неоготики. Церковь Святого Петра представляет собой яркий образец барокко. Фонтан Фрауенбрюннен добавляет элемент романтизма к общему архитектурному ансамблю. Все эти сооружения создают уникальную атмосферу Мариенплац.',
    other: 'В Мариенплац можно попробовать как традиционные баварские блюда, так и блюда мировой кухни. Один из популярных ресторанов - "Хофбройхаус", где можно насладиться аутентичными немецкими колбасами и пивом. "Шаншер" - ресторан с французской кухней, где предлагаются изысканные блюда. Для любителей сладкого стоит посетить кафе "Мюнхенер Фрайхауз", где можно попробовать вкусные десерты и выпечку. В целом, Мариенплац предлагает широкий выбор заведений для любого вкуса и бюджета.'
  }
]

const LazyMarienplatz = () => {
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
              <span className="attraction__wrapper--el--title">Рестораны и кафе</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyMarienplatz