import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black px-8'>
        <div className=' container mx-auto'>
        <div className='pt-[100px] pb-[120px]'>
        
        <h3 className=' text-[20px] font-bold md:text-subhead text-white'>
        Want to discuss a project or just say hello?
        <br/>
        Contact me:<span className='text-clip'>hello@favourmomoh.xyz</span>
        </h3>
      
       </div>
       <div className='flex justify-between'>
        <img src='/assets/light-logo.svg'/>
        <ul className='flex gap-4 items-center'>
           <li><img src='/assets/email.svg'/></li>
           <li><img src='/assets/dribble.svg'/></li>
           <li><img src='/assets/linkedin.svg'/></li>
           <li><img src='/assets/behance.svg'/></li>
           <li><img src='/assets/insta.svg'/></li>
        </ul>
        
        </div>
        <p className='text-center font-[300] text-white text-[12px] py-6 mt-[105px]'>Copyright © 2023 Favour Momoh. Made with  💕 and lots of ☕️</p>
        </div>
    
    </div>
  )
}

export default Footer