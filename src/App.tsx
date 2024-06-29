import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './components/Main/Main'
import AboutUs from './components/AboutUs/AboutUs'
import Home from './components/Home/Home'

import London from './components/Cities/London/London'
import BuckinghamPalace from './components/Cities/London/BuckinghamPalace/BuckinghamPalace'
import TowerBridge from './components/Cities/London/TowerBridge/TowerBridge'
import HydePark from './components/Cities/London/HydePark/HydePark'
import BritishMuseum from './components/Cities/London/BritishMuseum/BritishMuseum'
import PalaceOfWestminster from './components/Cities/London/PalaceOfWestminster/PalaceOfWestminster'
import TowerOfLondon from './components/Cities/London/TowerOfLondon/TowerOfLondon'
import LondonEye from './components/Cities/London/LondonEye/LondonEye'
import TrafalgarSquare from './components/Cities/London/TrafalgarSquare/TrafalgarSquare'
import CoventGarden from './components/Cities/London/CoventGarden/CoventGarden'
import NationalGallery from './components/Cities/London/NationalGallery/NationalGallery'
import KensingtonPalace from './components/Cities/London/KensingtonPalace/KensingtonPalace'

import Istanbul from './components/Cities/Istanbul/Istanbul'
import Ayasofya from './components/Cities/Istanbul/Ayasofya/Ayasofya'
import Balat from './components/Cities/Istanbul/Balat/Balat'
import GalataKulesi from './components/Cities/Istanbul/GalataKulesi/GalataKulesi'
import SultanahmetCamii from './components/Cities/Istanbul/SultanahmetCamii/SultanahmetCamii'
import YerebatanSarnıcı from './components/Cities/Istanbul/YerebatanSarnıcı/YerebatanSarnıcı'

import Paris from './components/Cities/Paris/Paris'
import TourEiffel from './components/Cities/Paris/TourEiffel/TourEiffel'
import ArcDeTriomphe from './components/Cities/Paris/ArcDeTriomphe/ArcDeTriomphe'
import Louvre from './components/Cities/Paris/Louvre/Louvre'
import NotreDame from './components/Cities/Paris/NotreDame/NotreDame'
import ChateauDeVersailles from './components/Cities/Paris/ChateauDeVersailles/ChateauDeVersailles'

import Tokyo from './components/Cities/Tokyo/Tokyo'
import Sensoji from './components/Cities/Tokyo/Sensoji/Sensoji'
import TokyoTower from './components/Cities/Tokyo/TokyoTower/TokyoTower'
import Akihabara from './components/Cities/Tokyo/Akihabara/Akihabara'

import Munich from './components/Cities/Munich/Munich'
import Marienplatz from './components/Cities/Munich/Marienplatz/Marienplatz'
import SchlossNymphenburg from './components/Cities/Munich/SchlossNymphenburg/SchlossNymphenburg'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/astray' element={ <Main /> } />
        <Route path='/about-us' element={ <AboutUs /> } />
        <Route path='/home' element={ <Home /> } />

        <Route path='/home/1' element={ <London /> } />
        <Route path='/home/1/1' element={ <BuckinghamPalace /> } />
        <Route path='/home/1/2' element={ <TowerBridge /> } />
        <Route path='/home/1/3' element={ <HydePark /> } />
        <Route path='/home/1/4' element={ <BritishMuseum /> } />
        <Route path='/home/1/5' element={ <PalaceOfWestminster /> } />
        <Route path='/home/1/6' element={ <TowerOfLondon /> } />
        <Route path='/home/1/7' element={ <LondonEye /> } />
        <Route path='/home/1/8' element={ <TrafalgarSquare /> } />
        <Route path='/home/1/9' element={ <CoventGarden /> } />
        <Route path='/home/1/10' element={ <NationalGallery /> } />
        <Route path='/home/1/11' element={ <KensingtonPalace /> } />

        <Route path='/home/2' element={ <Istanbul /> } />
        <Route path='/home/2/1' element={ <Ayasofya /> } />
        <Route path='/home/2/2' element={ <Balat /> } />
        <Route path='/home/2/3' element={ <GalataKulesi /> } />
        <Route path='/home/2/4' element={ <SultanahmetCamii /> } />
        <Route path='/home/2/5' element={ <YerebatanSarnıcı /> } />

        <Route path='/home/3' element={ <Paris /> } />
        <Route path='/home/3/1' element={ <TourEiffel /> } />
        <Route path='/home/3/2' element={ <ArcDeTriomphe /> } />
        <Route path='/home/3/3' element={ <Louvre /> } />
        <Route path='/home/3/4' element={ <NotreDame /> } />
        <Route path='/home/3/5' element={ <ChateauDeVersailles /> } />

        <Route path='/home/4' element={ <Tokyo /> } />
        <Route path='/home/4/1' element={ <Sensoji /> } />
        <Route path='/home/4/2' element={ <TokyoTower /> } />
        <Route path='/home/4/3' element={ <Akihabara /> } />

        <Route path='/home/5' element={ <Munich /> } />
        <Route path='/home/5/1' element={ <Marienplatz /> } />
        <Route path='/home/5/2' element={ <SchlossNymphenburg /> } />
      </Routes>
    </Router>
  )
}

export default App