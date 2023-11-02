import React from 'react'
import Profile from './profilessss/Profile'

function About() {
  return (
    <div className='overflow-scroll overflow-x-hidden w-[100vw] h-[100vh] flex flex-col items-start ml-3 sm:ml-7 gap-6'>
      <div className={`text-white text-3xl mt-5`} >ABOUT</div>
      <div className='text-white w-[90vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia animi eligendi natus, veritatis vitae dolor? Corporis ut nulla et, tenetur porro repellendus molestias animi tempore dolores error enim.</div>
      <div className='flex flex-col gap-6'>
          <Profile data-image="" data-content="" link1="" link2="" link3=""/>
          <Profile data-image="" data-content="" link1="" link2="" link3=""/>
          <Profile data-image="" data-content="" link1="" link2="" link3=""/>
      </div>
    </div>
    
  )
}

export default About