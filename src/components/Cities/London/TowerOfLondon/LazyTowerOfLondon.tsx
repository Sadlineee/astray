import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../../data/images/cities/London/TowerOfLondon/1.jpg'
import Img2 from '../../../../data/images/cities/London/TowerOfLondon/2.jpg'
import Img3 from '../../../../data/images/cities/London/TowerOfLondon/3.jpg'
import Img4 from '../../../../data/images/cities/London/TowerOfLondon/4.jpg'
import Img5 from '../../../../data/images/cities/London/TowerOfLondon/5.jpg'

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
    title: 'Tower of London',
    address: 'The Tower of London, London, England EC3N 4AB',
    link: 'https://www.hrp.org.uk/tower-of-london/#gs.abwfru',
    image: [Img1, Img2, Img3, Img4, Img5],
    description: 'Лондонский Тауэр (Tower of London) – один из самых знаменитых исторических памятников Великобритании, расположенный на северном берегу реки Темзы в центре Лондона. Он известен своей богатой историей, загадочными легендами и значимостью как королевская резиденция, крепость и тюрьма.',
    history: 'История Лондонского Тауэра начинается в XI веке. Основанный Вильгельмом Завоевателем в 1066 году после его победы в битве при Гастингсе, Тауэр был построен для защиты Лондона и утверждения его власти. Центральная часть комплекса, Белый Тауэр (White Tower), была завершена в 1078 году и служила королевской резиденцией, а также крепостью. На протяжении веков Лондонский Тауэр расширялся, превращаясь в мощный крепостной комплекс, включающий внутренний и внешний дворы, мощные стены и многочисленные башни. Эти дополнительные сооружения были построены в основном в XII и XIII веках.',
    view: 'Лондонский Тауэр представляет собой сложный ансамбль зданий и укреплений. Наиболее значимыми элементами комплекса являются: Белый Тауэр (White Tower) – массивное каменное строение, которое являлось ядром оригинального замка. Его высота составляет около 27 метров. В его залах расположен Аморий (Armoury), где хранятся коллекции оружия и доспехов. Кровавая башня (Bloody Tower) – известна как предполагаемое место убийства двух принцев, Эдуарда V и его брата Ричарда, в XV веке. Внутри башни представлена экспозиция, посвященная этим событиям. Башня Уордера (Beauchamp Tower) – знаменита своими камерами для пленников, стены которых покрыты многочисленными надписями и граффити, оставленными узниками. Башня Королевы Елизаветы (Queen’s House) – деревянная постройка, выполненная в стиле Тюдоров, используемая для размещения высокопоставленных заключенных.',
    other: 'На протяжении своей истории Лондонский Тауэр исполнял множество функций. Основными ролями Тауэра были: Королевская резиденция – многие монархи использовали Тауэр в качестве своей резиденции и убежища. Тюрьма – со средних веков до начала XX века Лондонский Тауэр служил местом заключения для политических заключенных, предателей и преступников. Среди его известных узников числятся Анна Болейн, Томас Мор и Гай Фокс. Казни – Тауэр известен как место исполнения смертных приговоров, включая казни Анны Болейн и Кэтрин Говард, жен Генриха VIII. Сокровищница – здесь хранятся королевские регалии и сокровища, включая Императорскую государственную корону и Скипетр с крестом, которые используются при коронациях британских монархов.'
  }
]

const LazyTowerOfLondon = () => {
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

export default LazyTowerOfLondon