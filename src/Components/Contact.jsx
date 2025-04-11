import React from 'react'

const Contact = () => {
  return (
    <div className='cont'>
    <h3>Name: Ajit Manohar Vagoli</h3>
    <h3>Mobile.No: +91 9284079473</h3>
    <h3>Gmail: ajitvagoli34@gmail.com</h3>
    <button className='link' onClick={() => window.open("https://www.linkedin.com/in/ajit-vagoli-0a0455238", "_blank")}>
    Visit My LinkedIn
    </button>

      
    </div>
  )
}

export default Contact
