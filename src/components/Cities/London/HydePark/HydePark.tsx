import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyHydePark = React.lazy(() => import('./LazyHydePark'))

const HydePark = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyHydePark />
        <Footer />
      </Suspense>
    </>
  )
}

export default HydePark