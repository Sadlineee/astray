import React, { Suspense } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LazyMunich = React.lazy(() => import('./LazyMunich'))

const Munich = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyMunich />
        <Footer />
      </Suspense>
    </>
  )
}

export default Munich