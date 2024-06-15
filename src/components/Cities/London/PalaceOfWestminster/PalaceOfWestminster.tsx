import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyPalaceOfWestminster = React.lazy(() => import('./LazyPalaceOfWestminster'))

const PalaceOfWestminster = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyPalaceOfWestminster />
        <Footer />
      </Suspense>
    </>
  )
}

export default PalaceOfWestminster