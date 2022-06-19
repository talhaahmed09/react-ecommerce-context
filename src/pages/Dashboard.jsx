import SliderImg from '../components/Slider'
import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Products from '../components/Products'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
   <Navbar/>
   <SliderImg/>
   <Category/>
   <Products/>
   <Newsletter/>
   <Footer/>
   </div>
  )
}

export default Dashboard