import React from 'react'

import Img1 from '../../../../data/images/cities/Istanbul/Balat/1.jpg'
import Img2 from '../../../../data/images/cities/Istanbul/Balat/2.jpg'
import Img3 from '../../../../data/images/cities/Istanbul/Balat/3.jpg'
import Img4 from '../../../../data/images/cities/Istanbul/Balat/4.jpg'
import Img5 from '../../../../data/images/cities/Istanbul/Balat/5.jpg'

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
    title: 'Balat',
    address: 'Balat, Fatih, Istanbul, Turkey',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Балат – это исторический район в Стамбуле, расположенный в районе Фатих на берегу Золотого Рога. Он знаменит своей уникальной архитектурой, мультикультурным наследием и атмосферой, где переплетаются история и современность. Название "Балат" происходит от греческого слова "палациум," что означает "дворец."',
    history: 'Балат исторически населялся в основном евреями-сефардами, прибывшими сюда после изгнания из Испании в 1492 году. Район также был домом для греческой и армянской общин, что создало уникальное культурное смешение. Здесь можно увидеть синагоги, церкви и мечети, расположенные в непосредственной близости друг от друга, что отражает долгую историю религиозного и культурного сосуществования.',
    view: 'Балат известен своими красочными домами, многие из которых были построены в XIX веке и имеют характерные деревянные фасады. Узкие улочки и крутые лестницы придают району чарующую атмосферу старого Стамбула. Некоторые из ключевых достопримечательностей Балата включают: Церковь Святого Георгия (Святая София) – базилика, построенная в XIV веке, которая служит кафедральным собором Константинопольской (Вселенской) Православной Патриархии. Болгарская церковь Святого Стефана (Железная церковь) – построена в конце XIX века полностью из металлических конструкций, что делает её одной из немногих железных церквей в мире. Еврейские синагоги – в Балате все еще можно найти несколько функционирующих синагог, таких как Агудас Ахим Синагога и Йесхилдирмак Синагога, свидетельствующие о богатой еврейской истории района. Балатския улицы и переулки – прогулка по живописным улицам Балата, например, Маринона или Кючюкмюдерезе, позволит ощутить дух старины и насладиться традиционной архитектурой и многочисленными кафе, антикварными лавками и художественными галереями.',
    other: 'В последние годы Балат стал популярным среди художников, молодежи и иностранцев, что привело к появлению множества новых кафе, ресторанов и художественных студий. Район активно привлекает тех, кто ищет альтернативные и некоммерческие культурные мероприятия. Каждый год в Балате проходят различные фестивали и культурные события, которые привлекают как местных жителей, так и туристов. Артисты и творческие люди публикуют свои работы и устраивают выставки на улицах и в общественных пространствах.'
  }
]

const LazyBalat = () => {
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
              <span className="attraction__wrapper--el--title">Современная жизнь</span>
              <hr className="attraction__wrapper--el--hr" />
              <p className="attraction__wrapper--el--description">{el.other}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LazyBalat