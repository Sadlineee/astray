import React, { Suspense } from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'

const LazySensoji = React.lazy(() => import('./LazySensoji'))

const Sensoji = () => {
  return(
    <>
      <Header />
      <Suspense fallback={<div className="loader"><div className="loader__el" /></div>}>
        <LazySensoji />
        <Footer />
      </Suspense>
    </>
  )
}

export default Sensoji