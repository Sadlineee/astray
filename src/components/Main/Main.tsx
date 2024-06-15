import React, { Suspense } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const LazyMain = React.lazy(() => import('./LazyMain'))

const Main = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyMain />
        <Footer />
      </Suspense>
    </>
  )
}

export default Main