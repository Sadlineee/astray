import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyBalat = React.lazy(() => import('./LazyBalat'))

const Balat = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyBalat />
        <Footer />
      </Suspense>
    </>
  )
}

export default Balat