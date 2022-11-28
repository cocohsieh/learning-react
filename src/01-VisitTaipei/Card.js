import React from 'react'
import './Card.css'


const Card = (props) => {
    console.log(props)
  return (
    <>
    <div className='card-container'>
    <img src={props.img} alt="img" className='card-img'/>
    <div className='card-info'>
        <h2>{props.name}</h2>
        <h3>{props.des}</h3> 
        <h3>Rate:{props.rate}</h3>
    </div>
    </div>
    </>
  )
}

export default Card