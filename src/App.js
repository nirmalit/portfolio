import React, { useState } from 'react'
import './tailwind_import.css'
import './app.css'

import colorCatlog from './config/color.json'
import pageCatlog from './config/page.json'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Works from './components/Works'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'

import { MainStore } from './store'

const App = () => {
  
  const [globalState, setGlobalState] = useState({
    activePage : "HOME"
  })

  return (
    <MainStore.Provider value={{globalState, setGlobalState}}> 
      <div className='px-14 w-full h-full'>
        <Navbar colors={{...colorCatlog}} />
      </div>
      {/* HOME COMPONENT */}
      <div id = {pageCatlog.home} className='h-full'>
        <Home />
      </div>
      {/* WORKS COMPONENT */}
      <div id = {pageCatlog.works} className='h-full'>
        <Works />
      </div>
      {/* ABOUT-ME COMPONENT */}
      <div id = {pageCatlog.about} className='h-full'>
        <AboutMe />
      </div>
      {/* HOME COMPONENT */}
      <div id = {pageCatlog.contacts} className='h-full'>
        <Contacts />
      </div>
    </MainStore.Provider>
  )
}

export default App