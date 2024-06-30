import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegram } from 'react-icons/fa6'

const LazyAboutUs = () => {
  return(
    <div className="aboutUs">
      <p className="aboutUs__greeting">Hello World!</p>
      <span>
        Меня зовут Денис, я Fullstack-разработчик. Рад представить вам Astray – сайт, посвящённый городским достопримечательностям.
      </span>
      <hr />
      <span>
        Проект находится на стадии активного развития, и вы можете помочь ему! Буду искренне благодарен за любую поддержку, а также 
        за вашу обратную связь, которая жизненно важна для нашего роста и улучшения.
      </span>
      <Link className="aboutUs__telegram" to='https://t.me/Sadlineee'><FaTelegram /></Link>
    </div>
  )
}

export default LazyAboutUs