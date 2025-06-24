import React from 'react'
import { feature } from '../data/data'
import FeatureCard from './FeatureCard'

export default function Feature() {
  return (
      <div className='grid grid-cols-12 gap-[1rem] px-[var(--sm-px)] py-[var(--l-py)]'> 
          {feature.map((ele,index) => (
               <FeatureCard key={index} feature={ele} />
           ))}
      </div>
  )
}
