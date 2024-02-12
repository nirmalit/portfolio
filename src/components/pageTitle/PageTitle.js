import React from 'react'
import colorCatlog from '../../config/color.json'

const PageTitle = ({ titleName , redirectionUrl = false }) =>{

    const mainDivStyle = redirectionUrl? `flex justify-around w-full font-mono` : `flex w-full font-mono`
    const RightSide = () => {
        return(
            <div className="w-1/5 flex justify-end">
                <div className='flex' role='button'>
                    <div className='hidden md:block w-[100 px] h-[20px]'>
                        <p>view all</p>
                    </div>
                    <div style={{letterSpacing : "-0.21em"}}>
                        <p>{`~~>`}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={mainDivStyle}> 
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
            {redirectionUrl ? <RightSide /> : null}
        </div>
    )
  }

export default PageTitle