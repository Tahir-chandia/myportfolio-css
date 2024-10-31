import React from 'react'
import Hero from './components/hero'
import Aboutme from './components/aboutme'
import Projects from './components/projects'
import Contact from './components/contact'

const Page = () => {
  return (
      <main>
        <Hero/>
        <Aboutme/>
        <Projects/>
        <Contact/>
      </main>
  )
}

export default Page
