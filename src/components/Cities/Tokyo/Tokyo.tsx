import React, { Suspense } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LazyTokyo = React.lazy(() => import('./LazyTokyo'))

const Tokyo = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyTokyo />
        <Footer />
      </Suspense>
    </>
  )
}

export default Tokyo