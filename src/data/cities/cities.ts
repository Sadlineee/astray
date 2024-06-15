import Img01 from '../images/cities/London/PalaceOfWestminster/3.jpg'
import Img02 from '../images/cities/Istanbul/Ayasofya/2.jpg'
import Img03 from '../images/cities/Paris/TourEiffel/3.jpg'
import Img04 from '../images/cities/Tokyo/TokyoTower/3.jpg'

import UnitedKingdom from '../images/flags/UnitedKingdom.png'
import Turkey from '../images/flags/Turkey.png'
import France from '../images/flags/France.png'
import Japan from '../images/flags/Japan.png'

interface CityProps {
  id: number
  title: string
  country: string
  flag: string
  image: string
  description: string
}

const Cities: CityProps[] = [

  { id: 1,
    title: 'Лондон',
    country: 'Великобритания',
    flag: UnitedKingdom,
    image: Img01, 
    description: 'Сердце Великобритании: Биг-Бен, Тауэр, бульвары, дворцы и сумрачные аллеи в тумане.'
  },

  { id: 2,
    title: 'Стамбул',
    country: 'Турция',
    flag: Turkey,
    image: Img02, 
    description: 'Где Восток встречается с Западом. Мечети, базары и Босфор, свидетель истории и культур.'
  },

  { id: 3,
    title: 'Париж',
    country: 'Франция',
    flag: France,
    image: Img03,
    description: 'Город любви, моды и искусства, знаменит Эйфелевой башней и Лувром.'
  },

  { id: 4,
    title: 'Токио',
    country: 'Япония',
    flag: Japan,
    image: Img04,
    description: 'Столица Японии, гармонично сочетающая современные технологии и традиции.'
  }
]

export default Cities