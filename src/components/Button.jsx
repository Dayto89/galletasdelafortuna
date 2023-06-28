import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewInfo}) => {
  return <button className='button' onClick={handleNewInfo}>Ver otro</button>
}

export default Button