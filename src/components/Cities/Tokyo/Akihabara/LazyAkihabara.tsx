import React from 'react'

import Img1 from '../../../../data/images/cities/Tokyo/Akihabara/1.jpg'
import Img2 from '../../../../data/images/cities/Tokyo/Akihabara/2.jpg'
import Img3 from '../../../../data/images/cities/Tokyo/Akihabara/3.jpg'
import Img4 from '../../../../data/images/cities/Tokyo/Akihabara/4.jpg'
import Img5 from '../../../../data/images/cities/Tokyo/Akihabara/5.jpg'

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
    title: '秋葉原',
    address: 'Sotokanda, Chiyoda-ku, Tokyo, 101-0021',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Акихабара, также известная как "Акиба," — это знаменитый район в Токио, расположенный в специальном районе Чиода. Этот район славится своими многочисленными магазинами электроники, специализированными магазинами, торгующими компьютерными комплектующими, и широким ассортиментом товаров, связанных с поп-культурой, особенно аниме и манга. ',
    history: 'Акихабара, район в Токио, берет свое начало в конце XIX века, когда в 1890 году здесь была построена железнодорожная станция. Первоначально это был рынок, специализировавшийся на продаже овощей и фруктов. После Второй мировой войны район стал известен торговлей радиокомпонентами и бытовой электроникой. В 1980-х и 1990-х годах с распространением персональных компьютеров и видеоигр Акихабара превратилась в центр технологий и геймерской культуры. С конца 1990-х годов район стал мировым центром культуры отаку, предлагая товары, связанные с аниме, мангой и видеоиграми. Сегодня Акихабара — важная точка притяжения для любителей электроники и японской поп-культуры.',
    view: 'Архитектура Акихабары в Токио представляет собой уникальное сочетание современных многоэтажных зданий и ярких неоновых вывесок, отражающих атмосферу технологичного и культурного квартала. Здесь расположены крупные электроника-гипермаркеты, игровые центры и специализированные магазины, многие из которых занимают целые здания. Фасады зданий часто украшены гигантскими рекламными баннерами и экранами, демонстрирующими последние новинки в мире технологий и развлечений. В интерьерах магазинов царит футуристическая атмосфера, с множеством выставочных залов, заполненных электроникой, гаджетами, видеоиграми и товарами для аниме- и манга-энтузиастов.',
    other: 'В Акихабаре вы найдете множество магазинов, продающих всё от последних моделей смартфонов и ноутбуков до старинных радиодеталей. На главных улицах и в переулках расположены кафе с тематикой аниме и игр, где посетители могут насладиться уникальной атмосферой. Акихабара является центром культуры отаку, привлекая фанатов аниме, манги и видеоигр со всего мира. В районе также проходят различные мероприятия, фестивали и выставки, посвященные поп-культуре и новым технологиям. Акихабара — это не только шопинг, но и уникальная атмосфера, которая позволяет окунуться в мир технологий и японской поп-культуры.'
  }
]

const LazyAkihabara = () => {
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
              <span className="attraction__wrapper--el--title">Внутри</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyAkihabara