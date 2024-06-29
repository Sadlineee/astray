import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyCoventGarden = React.lazy(() => import('./LazyCoventGarden'))

const CoventGarden = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyCoventGarden />
        <Footer />
      </Suspense>
    </>
  )
}

export default CoventGarden