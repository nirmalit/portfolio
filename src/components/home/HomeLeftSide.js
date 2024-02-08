import React from 'react'
import colorCatlog from '../../config/color.json'

const HomeLeftSide = () => {
  return (
    <div className='h-5/6 flex flex-col justify-evenly p-4'>
        <div>
            <h1 className='font-bold font-mono'>
                I'm Nirmal Kumar, <span style={{color : colorCatlog.pink}}>data analyst </span>seamlessly blended with <span style={{color : colorCatlog.pink}}>full-stack</span> proficiency.
            </h1>
        </div>
        <div>
            <h1 className='font-semibold font-mono' style={{color : colorCatlog.gray}}>
            I explore the complex world of data, telling meaningful stories through polished front-end presentations and robust back-end solutions
            </h1>
        </div>
    </div>
  )
}

export default HomeLeftSide