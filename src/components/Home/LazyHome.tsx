import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cities from '../../data/cities/cities'

const LazyHome = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  
  const sortCities = cities.filter(city =>
    city.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    city.country.toLowerCase().includes(searchValue.toLowerCase())
  )
  
  const [degreeValue, setDegreeValue] = useState<number>()
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchValue + '&appid=' + process.env.REACT_APP_WEATHER_API + '&units=metric'
  
  useEffect(() => {
    const fetchData = async () => {
      if(searchValue === '') {
        setDegreeValue(0)
        return
      }
      try {
        const response = await fetch(url)
        const data = await response.json()
        setDegreeValue(Math.round(data.main.temp))
      } catch(error) {
        console.error(error)
      }
    }
    fetchData()
  }, [searchValue])
    
  return(
    <main className="home">
      <div className="home__top">
        <div className="home__top--el">
          <span className="home__top--el--text">
            Исследуйте, мечтайте, открывайте мир с новой стороны!
          </span>
          <div className="home__top--el--field">
            <input
              className="home__top--el--field--search"
              type="text"
              maxLength={40}
              placeholder="Введите город или страну"
              value={searchValue}
              onChange={searchChange}
            />
            <div className="home__top--el--field--weather">{degreeValue}°С</div>
          </div>
        </div>
        <div className="home__top--logo">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="0" fill="none" stroke="none" />
            <path id="text-path" d="M20,50a30,30 0 1,1 60,0a30,30 0 1,1 -60,0" fill="transparent" />
            <text>
              <textPath href="#text-path" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
                TRAVELING MEANS DEVELOPING
              </textPath>
            </text>
          </svg>
        </div>
      </div>   
      <div className="home__cities">
        {sortCities.map((el) => (
          <Link to={`${el.id}`} key={el.id} style={{ textDecoration: 'none'}}>
            <div className="home__cities--el">
              <div className="home__cities--el--image">
                <img className="home__cities--el--image--el" src={el.image} alt="City" />
              </div>
              <span className="home__cities--el--title">{el.title}</span>
              <span className="home__cities--el--country">{el.country}</span>
              <img className="home__cities--el--flag" src={el.flag} alt="flag" />
              <p className="home__cities--el--description">{el.description}</p>
              <button className='home__cities--el--button'>ПЕРЕЙТИ</button>
            </div>
          </Link>
        ))}
      </div>        
    </main>
  )
}

export default LazyHome