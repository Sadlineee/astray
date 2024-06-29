import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazySchlossNymphenburg = React.lazy(() => import('./LazySchlossNymphenburg'))

const SchlossNymphenburg = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazySchlossNymphenburg />
        <Footer />
      </Suspense>
    </>
  )
}

export default SchlossNymphenburg