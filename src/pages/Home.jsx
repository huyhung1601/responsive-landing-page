import React from 'react'
import '../App.scss'
import Cards from '../components/cards/Cards'
import Footer from '../components/footer/Footer'
import HeroSection from '../components/heroSection/HeroSection'
const Home = () => {
    return (
        <>
          <HeroSection/> 
          <Cards/>
          <Footer/>
        </>
    )
}

export default Home
