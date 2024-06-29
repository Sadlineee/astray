import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyKensingtonPalace = React.lazy(() => import('./LazyKensingtonPalace'))

const KensingtonPalace = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyKensingtonPalace />
        <Footer />
      </Suspense>
    </>
  )
}

export default KensingtonPalace