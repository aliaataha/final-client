import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { useTheme } from '../store/useTheme';
export default function FooterColumn({ columnData, index ,active,setActive,setShow}) {
    const { theme } = useTheme()
  return (
      
             <div className="lg:w-[22%] w-full">
      <div className={`flex justify-between items-center border-b  ${theme === "light" ? 'border-gray-200' : 'border-gray-600'}`} onClick={() => { active == index ? setActive(null) : setActive(index); setShow(false)}} >
                  <h4 className='text-[1.2rem] opacity-80 font-medium  pb-3'>{columnData.title}</h4>
                                      <FaAngleDown className='lg:hidden block '/>
                                  </div>
                                  <div className="">
                                      <ul className={` text-[var(--medium-gray)] pt-2 text-[.9rem] lg:block ${active==index?'block':'hidden'} `}>
                                               {columnData.links.map((ele, index) => (
                                                   <li className='py-[0.4rem] hover:cursor-pointer hover:text-[var(--main-color)]' key={index}>{ele}</li>
                                                 ))}
                                          
                                        </ul>
                                  </div>
                              </div>
   
  )
}
