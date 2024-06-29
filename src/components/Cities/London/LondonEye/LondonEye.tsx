import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyLondonEye = React.lazy(() => import('./LazyLondonEye'))

const LondonEye = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyLondonEye />
        <Footer />
      </Suspense>
    </>
  )
}

export default LondonEye