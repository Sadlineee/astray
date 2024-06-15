import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../data/images/main/main.png'

const LazyMain = () => {
  const [displayText, setDisplayText] = useState<string>('')
  const [typing, setTyping] = useState<boolean>(true)
  
  useEffect(() => {
    const message = 'В каждом уголке мира ждет открытие новых чудес'
    if (typing) {
      if (displayText.length < message.length) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText + message.charAt(displayText.length))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setTyping(false)
      }
    }
  }, [displayText, typing])

  return(
    <main className="main">
      <div className="main__wrapper">
        <div className="main__wrapper--text01">В каждом уголке мира ждет открытие новых чудес</div>
        <hr className="main__wrapper--hr" />
        <span className="main__wrapper--text02">Кликните ниже и начните исследовать Мир с главной страницы нашего сайта!</span>
        <Link className="main__wrapper--button" to='/home'>Вперёд!</Link>
      </div>
      <img className="main__image" src={image} alt='image' />
    </main>
  )
}

export default LazyMain