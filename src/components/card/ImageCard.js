import React from 'react'
import colorCatlog from '../../config/color.json'
import { getImage } from '../icon'

const ImageCard = ({contentImage, tagList = [], contentTitle, contentSummary}) => {

  const TopComponent = () => {
    if(!contentImage){
        throw new Error("ContentImage must be needed");
    }
    let cardLogo = getImage(contentImage)
    return(
        <div className="h-full w-full p-1 flex justify-center items-center">
            <img src={cardLogo} alt="" className='h-full w-full' />
        </div>
    )
  }

  const MiddleComponent = () =>{
    if(tagList.length === 0 ){
        throw new Error("Tag list needed");
    }

    return (
        <div className='w-full h-full flex flex-wrap justify-evenly items-center font-mono from-neutral-400'>
            { tagList.map((eachTag,i) => <div key={i}><p>{eachTag}</p></div>)}
        </div>
    )    
  }

  const BottomComponent = () =>{
    return(
        <div className="w-full h-full p-2 font-mono flex flex-col justify-evenly">
            <div className='font-extrabold'>{contentTitle}</div>
            <div className='' style={{color : colorCatlog.gray}}>{contentSummary}</div>
        </div>
    )
  }
  return (
    <div className='w-[320px] h-[415px] p-4 lg:p-1'>
        {/* TOP  - Image */}
        <div className='h-1/2 w-full border-[1px] border-slate-50'>
            <TopComponent />
        </div>
        {/* MID  - Tags */}
        <div className='h-fit w-full border-[1px] border-slate-50' style={{color : colorCatlog.gray}}>
            <MiddleComponent />
        </div>
        {/* BOTTOM  - content */}
        <div className='h-1/3 w-full border-[1px] border-slate-50'>
            <BottomComponent />
        </div>
    </div>
  )
}

export default ImageCard