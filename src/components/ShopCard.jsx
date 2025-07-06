import React from 'react'
import Button from './Button'
export default function ShopCard({numShopCard,color,img}) {
  return (
      <div className={`${numShopCard} lg:w-[calc((100%-1rem)/2)] w-full  h-[55vh] rounded-2xl relative overflow-hidden mb-2 px-2 `} style={{ backgroundColor: color }} >
          <div className='relative z-10 grid grid-cols-12 w-full items-center'>
                  <div className="left col-span-6 h-[55vh]  flex justify-center items-center ">
                       <div className="img h-[80%] w-[90%] ">
                           <img  src={`/assets/${img}`} alt="" className="w-full h-full" />
                       </div>
                 </div>
                 <div className="content col-span-6  ">
                         <h3 className='lg:text-[2rem] md:text-[2rem] text-[1rem] font-semibold text-black opacity-80'>Tasty Snack & Fast food</h3>
                         <p className=' text-[var(--medium-gray)] lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 lg:text-[1rem] md:text-[1rem] text-[.7rem] py-[1rem] ' style={{ wordSpacing: '0.2rem' ,lineHeight: '2rem' }}><span className='lg:col-span-12 md:col-span-12'>The flavour of</span> <span className='lg:col-span-12 md:col-span-12'>something special</span></p>
                        <Button/>
                 </div>
         </div>
     </div>
  )
}
