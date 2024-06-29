import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyNationalGallery = React.lazy(() => import('./LazyNationalGallery'))

const NationalGallery = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyNationalGallery />
        <Footer />
      </Suspense>
    </>
  )
}

export default NationalGallery