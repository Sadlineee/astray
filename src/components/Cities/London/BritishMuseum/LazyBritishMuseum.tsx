import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/BritishMuseum/1.jpg'
import Img2 from '../../../../data/images/cities/London/BritishMuseum/2.jpg'
import Img3 from '../../../../data/images/cities/London/BritishMuseum/3.jpg'
import Img4 from '../../../../data/images/cities/London/BritishMuseum/4.jpg'
import Img5 from '../../../../data/images/cities/London/BritishMuseum/5.jpg'

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
    title: 'British Museum',
    address: 'Great Russell Street London WC1B 3DG',
    link: 'https://www.britishmuseum.org',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Британский музей (The British Museum) — один из крупнейших и наиболее значимых музеев мира, расположенный в Лондоне. Основанный в 1753 году, музей обладает одной из самых богатых и разнообразных коллекций артефактов, представляющих культуру и историю человеческой цивилизации от древнейших времен до современности. Его коллекция насчитывает более 8 миллионов предметов, и многие из них считаются истинными сокровищами мировой культуры.',
    history: 'Британский музей был основан на базе коллекции сэра Ганса Слоана, врача и натуралиста, который завещал свою огромную коллекцию нации. Первая версия музея открылась для публики 15 января 1759 года в особняке Монтегю-хаус. Впоследствии, из-за стремительного роста коллекции, здание музея несколько раз перестраивалось, и нынешнее здание, спроектированное архитектором сэром Робертом Смарти, было завершено в середине 19 века.',
    view: 'Архитектурный ансамбль музея представляет собой образец неоклассической архитектуры. Особенно выделяются монументальный фасад с колоннами и купол Большого двора, также известного как Двор имени Королевы Елизаветы II, который был открыт в 2000 году. Этот впечатляющий крытый атриум, спроектированный архитекторами Норманом Фостером и партнерством «Foster and Partners», является крупнейшим крытым общественным пространством в Европе.',
    other: 'Экспонаты Британского музея охватывают несколько тысячелетий и представляют культуры всех континентов: Египетская коллекция - вторая по величине после Египетского музея в Каире. Здесь можно увидеть знаменитый Розеттский камень, статуи фараонов и мумии. Древнегреческая и Римская коллекция - включает в себя скульптуры Парфенона, известные как мраморы Элгина, и тысячи других артефактов. Ближневосточная коллекция - содержит элементы из древнего Месопотамии, включая знаменитую библиотеку Ашшурбанипала и ассирийские рельефы. Азиатская секция - охватывает искусство и артефакты из Китая, Индии, Японии и других стран Азии, включая буддийские статуи и керамику. Африканская и океанийская коллекция - предметы, которые иллюстрируют богатую культуру и традиции народов Африки и Океании. Медальоны, монеты и памфлеты - одна из крупнейших коллекций нумизматики в мире.'
  }
]

const LazyBritishMuseum = () => {
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

export default LazyBritishMuseum