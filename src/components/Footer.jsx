import React, { useState } from 'react'
import Logo from './Logo'
import { FaAngleDown } from "react-icons/fa";
import { contact_info, dataFooter, social_media_icons } from '../data/data';
import FooterColumn from './FooterColumn';
import { useTheme } from '../store/useTheme';

export default function Footer() {
    const { theme } = useTheme()
    const [active, setActive] = useState(null)
    const [show, setShow] = useState(false)
  return (
      <div className={`${theme === "light" ? 'bg-[var(--light-gray)]' : 'bg-[var(--dark-color)]'}`}>
          <div className={`top grid grid-cols-12 gap-[1.3rem] py-10 px-[var(--l-px)]  border-y   ${theme === "light" ? 'border-gray-200' : 'border-gray-600'} `}>
              <div className="flex flex-col gap-[1rem] lg:col-span-3 col-span-12">
                  <Logo />
                  <p className='text-[var(--medium-gray)]'>BlueBerry is the biggest market of grocery products. Get
                      your daily needs from our store.</p>
                  <div className=" flex gap-[.7rem]">
                      <div className=' rounded overflow-hidden '> <img src="/assets/apple.png" alt="" className='h-full w-full' /></div>
                      <div className='rounded overflow-hidden'><img src="/assets/android.png" alt="" className='h-full w-full'/></div>
                  </div>
              </div>
              <div className="lg:col-span-9 col-span-12 lg:flex gap-[1.5rem]">
                  {
                      dataFooter.map((ele, index) => (
                        <FooterColumn key={index} columnData={ele} index={index} active={active} setActive={setActive} setShow={setShow} />
                      ))
              }
                  <div className="lg:w-[44%] w-full">
                      <div className={`flex justify-between items-center border-b  ${theme === "light" ? 'border-gray-200' : 'border-gray-600'}`} onClick={() => { setShow(!show); setActive(null)}} >
                          <h4 className='text-[1.2rem] opacity-80 font-medium  pb-3'>contact</h4>
                          <FaAngleDown  className='lg:hidden block'/>
                      </div>
                      <div className="">
                            <ul className={` text-[var(--medium-gray)] pt-2 text-[.9rem] lg:block ${show?'block':'hidden'} `}>
                              {
                                  contact_info.map((ele) => (
                                    <li className='py-1 flex gap-[.5rem]'>
                                    <span  className='text-[var(--main-color)] text-[1.2rem]' >{ele.icon}</span>
                                    <p>{ele.title}</p>
                                 </li>
                                  ))
                              }
                              <li className='py-[.5rem] flex gap-[.2rem]'>
                                  {
                                      social_media_icons.map((ele) => (
                                        <div className='bg-black opacity-70 p-1 rounded hover:bg-[var(--main-color)] cursor-pointer hover:opacity-100'>
                                          { ele}
                                         </div>
                                      ))
                                  }
                               </li>
                            </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bottom py-3 px-[var(--l-px)] flex lg:flex-row justify-between items-center flex-col gap-y-[1rem]">
              <div className="copyrights">
                 <h6 className='text-[var(--medium-gray)] text-[.9rem]'>Copyright © 2025 <span className='text-[var(--main-color)] font-medium hover:cursor-pointer'>BlueBerry</span> all rights reserved.</h6>
              </div>
              <div className="payment">
                  <img src="/assets/payment-footer.png" alt="" />
              </div>
          </div>
      </div>
  )
}
