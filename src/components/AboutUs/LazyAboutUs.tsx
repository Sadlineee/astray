import React from 'react'
import { Link } from 'react-router-dom'

const LazyAboutUs = () => {
  return(
    <div className="aboutUs">
      <p className="aboutUs__greeting">Hello World!</p>
      <span className="aboutUs__text01">
        Меня зовут Денис, я Fullstack-разработчик. Рад представить вам Astray – сайт, посвящённый городским достопримечательностям.
      </span>
      <hr className="aboutUs__hr" />
      <span className="aboutUs__text02">
        Проект находится на стадии активного развития, и вы можете помочь ему! Ваш вклад может стать ключевым для его успеха, позволяя 
        достигнуть новых высот. Буду искренне благодарен за любую поддержку, а также за вашу обратную связь, которая жизненно важна для нашего роста и улучшения.
      </span>
      <Link className="aboutUs__telegram" to='https://t.me/Sadlineee'>Написать в Telegram</Link>
    </div>
  )
}

export default LazyAboutUs