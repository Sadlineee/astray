import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyNotreDame = React.lazy(() => import('./LazyNotreDame'))

const NotreDame = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyNotreDame />
        <Footer />
      </Suspense>
    </>
  )
}

export default NotreDame