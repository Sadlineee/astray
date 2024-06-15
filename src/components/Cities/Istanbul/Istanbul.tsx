import React, { Suspense } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LazyIstanbul = React.lazy(() => import('./LazyIstanbul'))

const Istanbul = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyIstanbul />
        <Footer />
      </Suspense>
    </>
  )
}

export default Istanbul