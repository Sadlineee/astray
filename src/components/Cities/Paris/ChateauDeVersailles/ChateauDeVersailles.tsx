import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyChateauDeVersailles = React.lazy(() => import('./LazyChateauDeVersailles'))

const ChateauDeVersailles = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyChateauDeVersailles />
        <Footer />
      </Suspense>
    </>
  )
}

export default ChateauDeVersailles