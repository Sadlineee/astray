import { CityProps } from '@/types/CityProps'
import * as cityImage from '@images/cities'
import * as flagImage from '@images/flags'

export const citiesData: CityProps[] = [
  
  { 
    id: 1,
    link: 'London',
    image: cityImage.LondonImage,
    title: 'Лондон',
    country: 'Великобритания',
    flag: flagImage.UK
  },

  { 
    id: 2,
    link: 'Paris',
    image: cityImage.ParisImage,
    title: 'Париж',
    country: 'Франция',
    flag: flagImage.France
  },

  { 
    id: 3,
    link: 'NewYork',
    image: cityImage.NewYorkImage,
    title: 'Нью-Йорк',
    country: 'США',
    flag: flagImage.USA
  },

  { 
    id: 4,
    link: 'Moscow',
    image: cityImage.MoscowImage,
    title: 'Москва',
    country: 'Россия',
    flag: flagImage.Russia
  },

  { 
    id: 5,
    link: 'Rome',
    image: cityImage.RomeImage,
    title: 'Рим',
    country: 'Италия',
    flag: flagImage.Italy
  },

  { 
    id: 6,
    link: 'RioDeJaneiro',
    image: cityImage.RioDeJaneiroImage,
    title: 'Рио-де-Жанейро',
    country: 'Бразилия',
    flag: flagImage.Brazil
  },

  { 
    id: 7,
    link: 'Amsterdam',
    image: cityImage.AmsterdamImage,
    title: 'Амстердам',
    country: 'Нидерланды',
    flag: flagImage.Netherlands
  },

  { 
    id: 8,
    link: 'Prague',
    image: cityImage.PragueImage,
    title: 'Прага',
    country: 'Чехия',
    flag: flagImage.Czech_Republic
  },

  { 
    id: 9,
    link: 'Singapore',
    image: cityImage.SingaporeImage,
    title: 'Сингапур',
    country: 'Сингапур',
    flag: flagImage.Singapore
  }
]