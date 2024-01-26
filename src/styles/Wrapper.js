import React from 'react'

const Wrapper = child => {
  return (
    <div className="w-full h-full py-4">
        {child.children}
    </div>
  )
}

export default Wrapper