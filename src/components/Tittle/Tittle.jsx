import React from 'react'
import './Tittle.css'

const Tittle = ({subTittle, Tittle}) => {
  return (
    <div className='tittle'>
      <p>{subTittle}</p>
      <h2>{Tittle}</h2>
    </div>
  )
}

export default Tittle
