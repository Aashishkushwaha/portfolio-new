import React from 'react'
import "../styles/Loader.scss"

const Loader = () => {
  return (
    <div className="backdrop">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
