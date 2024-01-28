import React, { useState } from 'react'
import './tailwind_import.css'
import './app.css'

import colorCatlog from './config/color.json'
import pageCatlog from './config/page.json'

import {Home, Contacts , Navbar , AboutMe , Work } from './components'
import { MainStore } from './store'
import { Wrapper } from './styles'

const App = () => {
  
  const [globalState, setGlobalState] = useState({
    activePage : "HOME"
  })

  return (
    <MainStore.Provider value={{globalState, setGlobalState}}> 
      <div className='w-full h-full fixed'>
        <Navbar colors={{...colorCatlog}} />
      </div>
      <Wrapper>
        {/* HOME COMPONENT */}
        <div id = {pageCatlog.home} className='w-full h-full mt-8'>
          <Home />
        </div>
        {/* WORKS COMPONENT */}
        <div id = {pageCatlog.works} className='w-full h-full'>
          <Work />
        </div>
        {/* ABOUT-ME COMPONENT */}
        <div id = {pageCatlog.about} className='w-full h-full'>
          <AboutMe />
        </div>
        {/* HOME COMPONENT */}
        <div id = {pageCatlog.contacts} className='w-full h-full'>
          <Contacts />
        </div>
      </Wrapper>
    </MainStore.Provider>
  )
}

export default App