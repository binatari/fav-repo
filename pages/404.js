import React from 'react'
import Projects from '../components/sections/Projects'

const FourOhFour = () => {
  return (
    <div className="pt-20 md:pt-0">
        <div className='py-10'>
          <div className='flex flex-col items-center py-[100px]'>
           <img src='/assets/fave.png'/> 
           <h1 className='text-[30px] font-bold leading-[40px] '>Looks like something’s missing {`:(`}</h1>
           <p className='text-sm font-[300] mt-2 mb-7'>In the meantime, why don’t you check out one of my projects?</p>
           <img src='/assets/down-arrow.png'/> 
          </div>
        </div>
        <Projects noHead noTitle/>
    </div>
  )
}

export default FourOhFour