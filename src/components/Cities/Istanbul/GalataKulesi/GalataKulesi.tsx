import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyGalataKulesi = React.lazy(() => import('./LazyGalataKulesi'))

const GalataKulesi = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyGalataKulesi />
        <Footer />
      </Suspense>
    </>
  )
}

export default GalataKulesi