import React from 'react'
import { Link } from 'react-router-dom'

const NavigationContent = ({content,to,buttonText}) => {
  return (
    <Link to={to}>{content} <button className='font-bold'>{buttonText}</button></Link>
  )
}

export default NavigationContent