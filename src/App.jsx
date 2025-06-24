import React from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Footer from './components/Footer'
import Category from './components/Category'
import ProductCard from './components/ProductCard'
import ShopCard from './components/ShopCard'
import SecondaryBanner from './components/SecondaryBanner'
import Feature from './components/Feature'
import VendorsSection from './components/VendorsSection'
import TestimonialsSection from './components/TestimonialsSection'
import BlogCard from './components/BlogCard'
import { blogs, instagramImages } from './data/data'
import InstagramCard from './components/InstagramCard'

export default function App() {
  
  return (
 <>
      <Header />   
      <HeroBanner />
      <Category />
      {/* <div className="products grid grid-cols-12 px-[var(--l-px)]">
           <ProductCard/>
      </div> */}
     
      <div className="shop-section flex flex-wrap gap-[1rem] lg:px-[var(--l-px)] md:px-[var(--md-px)] px-[var(--sm-px)] py-[var(--l-py)]">
        <ShopCard numShopCard={'first-shop-card'} color={'#fbf2e5'} img={'cardShop1.png'} />
        <ShopCard numShopCard={'second-shop-card'} color={'#ffe8ee'} img={'cardShop2.png'} />
      </div>
      <SecondaryBanner />
      <Feature />
      <VendorsSection />
      <TestimonialsSection />
      <div className="blogsSection flex flex-wrap gap-[1rem] lg:px-[var(--l-px)] md:px-[var(--md-px)] px-[var(--sm-px)] py-[var(--l-py)]">
        {
          blogs.map((ele, index) => (
                <BlogCard key={index} blogData={ele} />
          ))
         }
      </div>
      <div className="instagramImages flex flex-wrap gap-[1rem] lg:px-[var(--l-px)]  md:px-[var(--md-px)] px-[var(--sm-px)] py-[var(--l-py)]">
        {
          instagramImages.map((ele,index) => (
              <InstagramCard key={index} img={ele} />
            ))
        }
                 
      </div>
      <Footer/>
</>

  )
}
