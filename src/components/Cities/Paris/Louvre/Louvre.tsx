import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyLouvre = React.lazy(() => import('./LazyLouvre'))

const Louvre = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyLouvre />
        <Footer />
      </Suspense>
    </>
  )
}

export default Louvre