import React from 'react'
import Hero from '../home/Hero'
import Tabs from '../home/Tabs'
import Songs from '../home/Songs'
import Footer from '../home/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Songs/>
      <Tabs />
      <Footer/>
    </div>
  )
}

export default Home