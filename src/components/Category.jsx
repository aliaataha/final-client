import React from 'react'
import CategoryCard from './CategoryCard'
import {categoryColors} from '../data/data'
import { useCategory } from '../hooks/useCategories'
import Slider from './Slider'
export default function Category() {
    const { data, isLoading, error } = useCategory()
    const categories = data?.data?.data?.map(ele => (ele))
    const cards=categories?.map((category, index) => (
        <CategoryCard category={category} key={index} bg_color={categoryColors[index]}  />
     ))
    console.log(cards)
  return (
      <div className='category grid grid-cols-12  px-[var(--l-px)] py-[var(--l-py)] lg:my-[2rem] gap-[2rem] relative lg:h-[80vh] h-[40vh]'>
          <div className="category-img lg:col-span-5 rounded-2xl overflow-hidden lg:block hidden">
                <img src="/assets/category.jpg" alt=""  className='w-full h-full object-cover' />
          </div>
          <div className="lg:col-span-7">
              <h2 className='text-[5rem] lg:block hidden text-white text-shadow-[2px_2px_5px_#777]'>explore categories</h2>
              <div className="cards absolute  bg-white h-[30vh] lg:w-[60%] w-[85%] rounded-tl-4xl  lg:bottom-[-1rem] right-[var(--l-px)] pl-[var(--l-px)] py-6 lg:p-6">
                    <Slider items={cards}  slidesPerViewDestop={3} slidesPerViewTablet={2} slidesPerViewMobile={1}  />
              </div>
          </div>
      </div>
  )
}
