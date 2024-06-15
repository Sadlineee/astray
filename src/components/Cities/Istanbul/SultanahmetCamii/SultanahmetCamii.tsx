import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyGalataKulesi = React.lazy(() => import('./LazySultanahmetCamii'))

const SultanahmetCamii = () => {
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

export default SultanahmetCamii