import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyTowerBridge = React.lazy(() => import('./LazyTowerBridge'))

const TowerBridge = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyTowerBridge />
        <Footer />
      </Suspense>
    </>
  )
}

export default TowerBridge