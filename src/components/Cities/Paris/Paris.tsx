import React, { Suspense } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LazyParis = React.lazy(() => import('./LazyParis'))

const Paris = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyParis />
        <Footer />
      </Suspense>
    </>
  )
}

export default Paris