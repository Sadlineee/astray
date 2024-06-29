import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/Munich/SchlossNymphenburg/1.jpg'
import Img2 from '../../../../data/images/cities/Munich/SchlossNymphenburg/2.jpg'
import Img3 from '../../../../data/images/cities/Munich/SchlossNymphenburg/3.jpg'
import Img4 from '../../../../data/images/cities/Munich/SchlossNymphenburg/4.jpg'
import Img5 from '../../../../data/images/cities/Munich/SchlossNymphenburg/5.jpg'

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
    title: 'Schloss Nymphenburg',
    address: 'Schloß Nymphenburg 1, 80638 München',
    link: 'https://www.schloss-nymphenburg.des',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Дворец Нимфенбург – это изумительное здание, расположенное в Мюнхене. Построенный в стиле барокко, дворец служил летней резиденцией для баварских правителей. Он удивляет своей архитектурой и живописными садами, включая Большой парк Нимфенбург. Внутри дворца можно увидеть роскошную мебель, картины и декоративные элементы, отражающие богатую историю этого места. Туры по дворцу позволяют почувствовать атмосферу роскоши и великолепия баварской королевской резиденции.',
    history: 'История Дворца началась в 17 веке, когда принц-электор Максимилиан I заказал строительство уединенной летней резиденции за пределами Мюнхена. В разные периоды дворец перестраивался и расширялся, при этом работали выдающиеся архитекторы и дизайнеры. Важное значение для развития дворца имела вдовствующая императрица Сиси, которая привнесла романтические элементы в интерьер и сады. Во время Второй мировой войны здание пострадал от бомбардировок, но было восстановлено в послевоенные годы. Сегодня Дворец Нимфенбург является популярным туристическим местом и удивляет своей красотой и историей.',
    view: 'Архитектура отражает различные стили и эпохи, которые оставили свой след в строении. Начиная с барокко, которое преобладало при первоначальном строительстве дворца, затем добавлялись элементы рококо и классицизма. В XIX веке были проведены реконструкции в стиле неоготики и ренессанса. Заметны также влияния романтизма и модернизма. Внутреннее убранство отличается изысканностью и красотой, сочетающей в себе разнообразные архитектурные течения и стили. Дворец окружен красивыми садами и парком, что создает уникальную атмосферу и делает его одним из наиболее впечатляющих архитектурных памятников Баварии.',
    other: 'Роль и значимость Дворца в истории и культуре Баварии трудно переоценить. Этот дворец служил резиденцией для баварских монархов и является одним из наиболее важных архитектурных памятников региона. Он отражает богатство и великолепие баварской монархии, а также искусство и культуру различных периодов. Дворец стал местом встреч и мероприятий высшего общества, символизируя могущество и роскошь. Сегодня Нимфенбург привлекает туристов со всего мира своей красотой и историческим значением, представляя собой важный объект культурного наследия не только Баварии, но и всей Германии.'
  }
]

const LazySchlossNymphenburg = () => {
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

export default LazySchlossNymphenburg