import React from 'react'
import { PageTitle } from '../pageTitle'
import rigtSideImage from '../../assets/person/about_me_right.png'
import colorCatlog from '../../config/color.json'

const AboutMe = () => {

  const LeftSide = () => {
    return(
      <div className='w-full h-full p-2 font-mono'>
        {/* Title/ Wish note */}
        <div className='p-1'>
          <span className='font-bold'><h2>Hello, I'm Nirmal!</h2></span>
        </div>
        {/* Main Content  */}
        <div className='p-1 py-2' style={{color : colorCatlog.gray}}>
          <span className='block py-2'>
            <p>I'm a self-motivated data analyst based in Chennai, India , equipped with full-stack skills. I specialize in transforming complex data sets into user-friendly and visually appealing frontends with robust backends. Over the years, I've honed my ability to translate intricate data into comprehensible insights for end-users.</p>
          </span>
          <span className='block py-2'>
            <p>I'm committed to keeping up with the coolest tech trends and newest frameworks, always on the lookout for the shiniest tools to craft top-notch solutions</p>
          </span>
        </div>
      </div>
    )
  }
  const RightSide = () => {
    return(
      <div className='w-full h-full p-2 flex justify-center items-center'>
        <img src={rigtSideImage} alt="" />
      </div>
    )
  }
  
  return (
    <div className='py-2'>
      {/* Titile of the page  */}
      <div className="py-1">
        <PageTitle titleName="about-me"/>
      </div>
      {/* Content of the Page  */}
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className="w-full md:w-2/3">
          <LeftSide />
        </div>
        <div className="w-full h-full md:w-1/3 flex justify-center items-center">
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default AboutMe