import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyBuckinghamPalace = React.lazy(() => import('./LazyBuckinghamPalace'))

const BuckinghamPalace = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyBuckinghamPalace />
        <Footer />
      </Suspense>
    </>
  )
}

export default BuckinghamPalace