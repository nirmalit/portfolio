import React from 'react'
import skillsCatlog from '../../config/skill.json'
import skillBackground from '../../assets/design/skill_background.svg'
import { SkillCard } from '../card'

const Skills = () => {
  
    const RightSide = () =>{
        return(
            <div className="w-full h-full flex justify-center items-center">
                <img src={skillBackground} alt="" />
            </div>
        )
    }

    const LeftSide = () => {
        return(
            <div className="w-full h-full flex flex-wrap justify-evenly items-center">
                {skillsCatlog.map((eachSkill, i)=>{
                    return <SkillCard
                    key = {i} 
                    contentTitle = {eachSkill.contentTitle}
                    contentList = {eachSkill.contentList}
                    />
                })}
            </div>
        )
    }

  return (
    <div className='w-full h-full md:flex pt-3 pb-8'>        
        <div className="w-full md:w-1/2">
            <LeftSide />
        </div>
        <div className="hidden md:block w-full md:w-1/2 p-2">
            <RightSide/>
        </div>
    </div>
  )
}

export default Skills