import React from 'react'
import HomeLeftSide from './HomeLeftSide'
import HomeRightSide from './HomeRightSide'
import HomeBottom from './HomeBottom'

const Home = () => {

  return (
    <div className='w-full h-full'>
      {/* TOP Content */}
      <div className="w-full h-4/5 lg:flex">
        {/* Left side */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full">
          <HomeLeftSide />
        </div>
        {/* Right Side */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center">
          <HomeRightSide />
        </div>
      </div>
      {/* BOTTOM Content  */}
      <div className="w-full flex justify-center content-center">
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home