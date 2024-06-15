import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyArcDeTriomphe = React.lazy(() => import('./LazyArcDeTriomphe'))

const ArcDeTriomphe = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyArcDeTriomphe />
        <Footer />
      </Suspense>
    </>
  )
}

export default ArcDeTriomphe