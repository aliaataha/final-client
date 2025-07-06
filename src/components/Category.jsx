import React from 'react'
import CategoryCard from './CategoryCard'
import {categoryColors} from '../data/data'
import { useCategory } from '../hooks/useCategories'
import Slider from './Slider'
import { useTheme } from '../store/useTheme';
export default function Category() {
    const { theme } = useTheme()
    const { data, isLoading, error } = useCategory()
    const categories = data
    const cards=categories?.map((category, index) => (
        <CategoryCard category={category} key={index} bg_color={categoryColors[index]}  />
     ))
    console.log(cards)
  return (
      <div className={`category grid grid-cols-12  ${theme === "light" ? 'bg-[var(--light-gray)]' : 'bg-[var(--dark-color)]'}  px-[var(--l-px)] py-[var(--l-py)] lg:my-[2rem] gap-[2rem] relative lg:h-[80vh] h-[40vh]`}>
          <div className="category-img lg:col-span-5 rounded-2xl overflow-hidden lg:block hidden">
                <img src="/assets/category.jpg" alt=""  className='w-full h-full object-cover' />
          </div>
          <div className={`lg:col-span-7 `}>
              <h2 className={`text-[5rem] lg:block hidden ${theme === "light" ? 'text-white' : 'text-[var(--body-color)]'} text-shadow-[1px_1px_3px_#777]`}>explore categories</h2>
              <div className={`cards absolute  ${theme === "light" ? 'bg-[var(--light-gray)]' : 'bg-[var(--dark-color)]'} h-[30vh] lg:w-[60%] w-[85%] rounded-tl-4xl  lg:bottom-[-1rem] right-[var(--l-px)] pl-[var(--l-px)] py-6 lg:p-6`}>
                    <Slider items={cards}  slidesPerViewDestop={3} slidesPerViewTablet={2} slidesPerViewMobile={1}  />
              </div>
          </div>
      </div>
  )
}
