import React from 'react'
import { nav } from '../data/data';
export default function ({class_name=''}) {
  return (
     <ul className={class_name}>
                          {
                             nav.map((ele, index) => (
                              <li key={index} className='cursor-pointer hover:text-[var(--main-color)]'>
                                   {ele}
                              </li>
                               ))
                          }
                        </ul>
  )
}
