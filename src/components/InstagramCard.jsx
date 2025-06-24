import React,{useState} from 'react'
import { FiInstagram } from "react-icons/fi";
export default function InstagramCard({img}) {
const[hover,setHover]=useState(false)
  return (
      <div  className=' insta-card lg:w-[calc((100%-4rem)/5)] md:w-[calc((100%-3rem)/4)] w-[calc((100%-1rem)/2)]  rounded-3xl overflow-hidden relative 'onMouseEnter={()=>setHover(true)}  onMouseLeave={()=>setHover(false)}>
          <img src={img.img} alt=""  className='w-full h-full'/>
          <div className={`layer absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,.5)] flex items-center justify-center ${hover ? 'opacity-100 visible' : 'opacity-0 invisible'}  transition duration-700 ease `}> 
          
               <FiInstagram  className={`insta-icon  text-white  ${hover?' insta-icon-animated-reverse stroke-[2.4]':'insta-icon-animated stroke-[1.2]'}  `} />
          </div>
      </div>
  )
}
