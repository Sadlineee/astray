import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyAyasofya = React.lazy(() => import('./LazyAyasofya'))

const Ayasofya = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyAyasofya />
        <Footer />
      </Suspense>
    </>
  )
}

export default Ayasofya