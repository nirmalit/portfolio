import React from 'react'
import colorCatlog from '../../config/color.json'

const SkillCard = ({ contentTitle, contentList = [] }) => {

  const TopComponent = () =>{
    if(!contentTitle){
        throw new Error("Namecard title is empty")
    }
    return(
        <div className="p-2 font-mono border-[1px] border-slate-50">
            {contentTitle}
        </div>
    )
  }

  const MainComponent = () =>{
    return(
        <div className="p-2 font-mono w-full h-full flex flex-wrap justify-around items-center border-[1px] border-slate-50"
        style={{color : colorCatlog.gray}}
        >
            {contentList.map((eachInfo, i) => <div key = {i}><p>{eachInfo}</p></div>)}
        </div>
    )
  }
  return (
    <div className='p-6 w-[250px] h-[150px] md:h-auto'>
        <TopComponent />
        <MainComponent />
    </div>
  )
}

export default SkillCard