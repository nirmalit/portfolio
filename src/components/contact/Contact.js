import React from 'react'
import { PageTitle } from '../pageTitle'
import { ShowIcon } from '../icon'

import colorCatlog from '../../config/color.json'
import iconCatlog from '../../config/icon.json'
import { Footer } from '../footer'

const Contacts = () => {

  const LeftSide = () => {
    return(
      <div className="p-2 font-mono" style={{color : colorCatlog.gray }}>
        <span className="block p-2">
          I am actively seeking opportunities that align with my skill set. However, I am open to exploring additional requests or inquiries. 
        </span>
        <span className="block p-2">
          If you have opportunities available, I would welcome the opportunity to connect and discuss potential collaborations. Please don't hesitate to reach out, and I look forward to the possibility of working together.
        </span>
      </div>
    )
  }

  const RightSide = () => {
    return(
      <div className="p-1 h-full flex justify-center items-center flex-wrap">
        <div className='w-full h-1/2 font-mono border-[1px] border-slate-300'>
          <div className="p-2">
            Message me here
          </div>
          <div className="w-full h-1/2 p-2 flex flex-col justify-evenly items-center"  style={{color : colorCatlog.gray }}>
            <div className='w-full flex justify-start items-center'>
              <ShowIcon iconName={iconCatlog.email}/>
              <h2 className='px-2'>nirmalit151@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='h-full py-2'>
      <div className='p-2'>
        <PageTitle  titleName = "contacts" />
      </div>
      <div className='w-full h-full flex md:flex-row flex-col'>
        <div className="w-full md:w-1/2">
          <LeftSide />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <RightSide />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts