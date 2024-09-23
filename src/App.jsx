import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/ui/Navbar';

const App = () => {
  return (
    <main id='main-containter'>
      <Navbar />
      <Hero/>
      <section className='h-screen w-full'></section>
      <section className='h-screen w-full'></section>
    </main>

  )
}

export default App;