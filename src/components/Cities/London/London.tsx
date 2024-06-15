import React, { Suspense } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LazyLondon = React.lazy(() => import('./LazyLondon'))

const London = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyLondon />
        <Footer />
      </Suspense>
    </>
  )
}

export default London