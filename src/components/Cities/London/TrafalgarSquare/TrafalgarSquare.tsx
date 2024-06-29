import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyTrafalgarSquare = React.lazy(() => import('./LazyTrafalgarSquare'))

const TrafalgarSquare = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyTrafalgarSquare />
        <Footer />
      </Suspense>
    </>
  )
}

export default TrafalgarSquare