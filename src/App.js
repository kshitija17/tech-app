import React from 'react'

import { Blog, Header, Processor, Footer, Features, About } from './containers'
import { CTA,Brand, Navbar } from './components'
import './app.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Processor/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App  