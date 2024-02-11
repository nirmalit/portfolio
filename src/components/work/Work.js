import React from 'react'
import { PageTitle } from '../pageTitle'
import { ImageCard } from '../card'
import projectCatlog from '../../config/project.json'
const Work = () => {

  const ProjectCards = ({ projectInfo }) =>{
    return(
      <ImageCard 
      tagList = {projectInfo.techList}
      contentTitle = {projectInfo.projectName} 
      contentSummary = {projectInfo.shortSummary}
      contentImage = {projectInfo.projectLogo}
      />
    )
  }
  return (
    <div className='h-full lg:h-screen'>
      <PageTitle titleName = "projects" redirectionUrl = {true} />

      {/* Project List in cards  */}
      <div className='h-4/5 my-2 w-full h-full flex flex-wrap justify-around items-center'>
        {
          projectCatlog.map((eachProject)=> <ProjectCards projectInfo = {eachProject} />)
        }
      </div>
    </div>
  )
}

export default Work