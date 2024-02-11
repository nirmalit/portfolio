import React from 'react'
import colorCatlog from '../../config/color.json'

const PageTitle = ({ titleName , redirectionUrl = false }) =>{

    const rightSideStyle = redirectionUrl? `w-1/5 flex justify-end` : `w-1/5 invisible`
    return (
        <div className='flex justify-around w-full font-mono'> 
            {/* left side  */}
            <div className=" w-4/5 flex items-center">
                {/* Title name  */}
                <h1 className='font-mono font-extrabold mr-1'>
                    <span style={{color : colorCatlog.pink}}>#</span>
                    { titleName }
                </h1>
                {/* Horizintal line  */}
                <div className='h-[1px] w-3/4' style={{backgroundColor : colorCatlog.pink}}></div>

            </div>
            {/* Right Side  */}
            <div className={rightSideStyle}>
                <div className='flex' role='button'>
                    <div className='hidden md:block w-[100 px] h-[20px]'>
                        <p>view all</p>
                    </div>
                    <div style={{letterSpacing : "-0.21em"}}>
                        <p>{`~~>`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default PageTitle