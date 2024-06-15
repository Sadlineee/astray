import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyTourEiffel = React.lazy(() => import('./LazyTourEiffel'))

const TourEiffel = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyTourEiffel />
        <Footer />
      </Suspense>
    </>
  )
}

export default TourEiffel