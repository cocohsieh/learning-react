import React from 'react'
import photo from "../image/swim.png"

const Contact = () => {
  return (
    <>
    <div className='contact-card'>
        <img src={photo} alt="swim"/>
        <h3>MR</h3>
        <div className='info-group'>
            <p>27933903</p>
            <p>qqqfangtw@hmail.com</p>
        </div>
    </div>
    </>
  )
}

export default Contact