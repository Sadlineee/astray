import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyMarienplatz = React.lazy(() => import('./LazyMarienplatz'))

const Marienplatz = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyMarienplatz />
        <Footer />
      </Suspense>
    </>
  )
}

export default Marienplatz