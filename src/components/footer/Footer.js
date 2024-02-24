import React from 'react'
import colorCatlog from '../../config/color.json'
import urlCatlog from '../../config/url.json'
import iconCatlog from '../../config/icon.json'
import { ShowIcon } from '../icon'

const Footer = () => {
    
    const openInNewTab= (url) =>{
        window.open(url, "_blank")
    }

    const SocialMediaContent= () =>(
        <div className="flex justify-around w-1/2 md:justify-between md:w-[70px]">
          <div role="button" onClick={()=>openInNewTab(urlCatlog.github)}>
            <ShowIcon iconName={iconCatlog.github}/>
          </div>
          <div role="button" onClick={()=>openInNewTab(urlCatlog.linkedin)}>
            <ShowIcon iconName={iconCatlog.linkedin}/>
          </div>
        </div>
      )

  return (
    <div className='p-3'>
        <div className='w-full h-[1px] bg-slate-300'></div>
        <div className='w-full flex flex-col md:flex-row justify-evenly items-center py-5'>
            {/* LEFT SIDE  */}
            <div className="font-mono p-3">
                <div>Nirmal Kumar</div>
                <div  style={{color : colorCatlog.gray}}>Data Analyst with Full stack skills</div>
            </div>
            {/* RIGHT SIDE  */}
            <div className="font-mono p-3">
                <SocialMediaContent />
            </div>
        </div>
    </div>
  )
}

export default Footer