import React from 'react'
import colorCatlog from '../../config/color.json'

const HomeBottom = () => {
  return (
    <div className='flex justify-center items-center border-[1px] border-white w-[720px] h-[70px]' style={{color : colorCatlog.gray}}>
       <h2 className='font-semibold font-mono text-center'>In the realm of code, I sculpt the future of modern IT technology</h2> 
    </div>
  )
}

export default HomeBottom