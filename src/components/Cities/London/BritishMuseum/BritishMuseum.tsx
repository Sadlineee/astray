import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyBritishMuseum = React.lazy(() => import('./LazyBritishMuseum'))

const BritishMuseum = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyBritishMuseum />
        <Footer />
      </Suspense>
    </>
  )
}

export default BritishMuseum