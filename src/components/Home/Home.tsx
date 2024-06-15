import React, { Suspense } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const LazyHome = React.lazy(() => import('./LazyHome'))

const Home = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyHome />
        <Footer />
      </Suspense>
    </>
  )
}

export default Home