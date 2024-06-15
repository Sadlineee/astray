import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazyYerebatanSarnıcı = React.lazy(() => import('./LazyYerebatanSarnıcı'))

const YerebatanSarnıcı = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyYerebatanSarnıcı />
        <Footer />
      </Suspense>
    </>
  )
}

export default YerebatanSarnıcı