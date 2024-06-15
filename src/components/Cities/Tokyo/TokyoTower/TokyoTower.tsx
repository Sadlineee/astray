import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyTokyoTower = React.lazy(() => import('./LazyTokyoTower'))

const TokyoTower = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}> 
        <LazyTokyoTower />
        <Footer />
      </Suspense>
    </>
  )
}

export default TokyoTower