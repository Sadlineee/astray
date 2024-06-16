import React, { Suspense } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const LazyAboutUs = React.lazy(() => import('./LazyAboutUs'))

const AboutUs = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazyAboutUs />
        <Footer />
      </Suspense>
    </>
  )
}

export default AboutUs