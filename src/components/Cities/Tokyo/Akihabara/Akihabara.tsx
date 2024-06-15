import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyAkihabara = React.lazy(() => import('./LazyAkihabara'))

const Akihabara = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyAkihabara />
        <Footer />
      </Suspense>
    </>
  )
}

export default Akihabara