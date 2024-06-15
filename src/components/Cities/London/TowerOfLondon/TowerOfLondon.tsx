import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyTowerOfLondon = React.lazy(() => import('./LazyTowerOfLondon'))

const TowerOfLondon = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyTowerOfLondon />
        <Footer />
      </Suspense>
    </>
  )
}

export default TowerOfLondon