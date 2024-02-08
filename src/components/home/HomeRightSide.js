import React from 'react'
import homeImage from '../../assets/person/home_right_final.png'

const HomeRightSide = () => {
  return (
    <div className='p-2'>
        <img src={homeImage} alt="" className='xs:h-[259px] xs:w-[316px] lg:h-[396px] lg:w-[479px] xl:h-[496px] xl:w-[579px]'/>
    </div>
  )
}

export default HomeRightSide