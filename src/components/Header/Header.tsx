import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className="header">
      <Link className="header__title" to='/astray'>astray</Link>
      <Link className="header__about" to='/about-us'>О нас</Link>
    </header>
  )
}

export default Header