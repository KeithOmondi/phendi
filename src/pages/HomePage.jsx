import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Layout/Hero'
import BestDeals from '../Route/BestDeals/BestDeals'
import ShopEvents from '../components/Events/Events'
import NewProducts from '../Route/NewProducts/NewProducts'
import FeaturedProducts from '../Route/FeaturedProducts/FeaturedProducts'
import Footer from '../components/Layout/Footer'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <BestDeals />
        <ShopEvents />
        <NewProducts />
        <FeaturedProducts />
        <Footer />
    </div>
  )
}

export default HomePage