import React, { useEffect, useRef, useState } from 'react'
import './tailwind_import.css'
import './app.css'

import colorCatlog from './config/color.json'
import pageCatlog from './config/page.json'

import {Home, Contacts , Navbar , AboutMe , Work } from './components'
import { MainStore } from './store'
import { Wrapper } from './styles'

const App = () => {
  
  const [globalState, setGlobalState] = useState({
    activePage : pageCatlog.home
  })

  let idRefs = {}
  idRefs[pageCatlog.home] = useRef(null)
  idRefs[pageCatlog.work] = useRef(null)
  idRefs[pageCatlog.about] = useRef(null)
  idRefs[pageCatlog.contact] = useRef(null)

  const updateActivePage = (pageName) =>{
    // console.log(pageName)
    if(pageName !== globalState.activePage) setGlobalState({...globalState, activePage : pageName })
  }

  useEffect(()=>{
    
    idRefs[globalState.activePage].current.scrollIntoView({
      behavior : 'smooth'
    })

  }, [globalState])


  return (
    <MainStore.Provider value={{globalState, setGlobalState}}> 
      <div className='w-full h-full sticky top-0'>
        <Navbar colors={{...colorCatlog}} />
      </div>
      <Wrapper>
        {/* HOME COMPONENT */}
        <div id = {pageCatlog.home} className='w-full h-screen lg:h-[90vh] lg:p-5 mt-4' ref = {idRefs[pageCatlog.home]} onWheel={()=>updateActivePage(pageCatlog.home)} onTouchStart={()=>updateActivePage(pageCatlog.home)} >
          <Home />
        </div>
        {/* WORKS COMPONENT */}
        <div id = {pageCatlog.work} className='w-full h-full' ref = {idRefs[pageCatlog.work]} onWheel={()=>updateActivePage(pageCatlog.work)} onTouchStart={()=>updateActivePage(pageCatlog.work)} >
          <Work />
        </div>
        {/* ABOUT-ME COMPONENT */}
        <div id = {pageCatlog.about} className='w-full h-full' ref = {idRefs[pageCatlog.about]} onWheel={()=>updateActivePage(pageCatlog.about)} onTouchStart={()=>updateActivePage(pageCatlog.about)} >
          <AboutMe />
        </div>
        {/* HOME COMPONENT */}
        <div id = {pageCatlog.contact} className='w-full h-full' ref = {idRefs[pageCatlog.contact]} onWheel={()=>updateActivePage(pageCatlog.contact)} onTouchStart={()=>updateActivePage(pageCatlog.contact)} >
          <Contacts />
        </div>
      </Wrapper>
    </MainStore.Provider>
  )
}

export default App