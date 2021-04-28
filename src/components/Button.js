import React from 'react'
import "../styles/Button.scss"

function Button({
  type="primary",
  label = "Click me!"
}) {

  if(type === "primary")
    return (
      <div className="btn btn-primary">
        <span className="btn-primary-outer">{label}</span>
        <span className="btn-primary-inner" />
      </div>
    )
  else if(type === "secondary")
    return (
      <div className="btn btn-secondary">
        {label}
      </div>
    )
  
  return (
    <div className="btn btn-3d">
      <div className="default">{ label }</div>
      <div className="hover">{ label }</div>
    </div>
  )
}

export default Button
