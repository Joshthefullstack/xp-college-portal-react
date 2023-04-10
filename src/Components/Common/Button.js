import React from 'react'

function Button({text, action, setAdd, add}) {
  return (
    <button onClick={()=>{
      action();
      setAdd(add = true);
    }}>{text}</button>
  )
}

export default Button