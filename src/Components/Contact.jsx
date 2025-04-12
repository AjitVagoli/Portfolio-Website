import React from 'react'

const Contact = () => {
  return (
    <div className='cont'>
    <h3>Ajit Manohar Vagoli</h3>
    <h3>+91 9284079473</h3>
    <h3>ajitvagoli34@gmail.com</h3>
    <button className='cbut' onClick={() => window.open("https://www.linkedin.com/in/ajit-vagoli-0a0455238", "_blank")}>
    Visit My LinkedIn
    </button>

      
    </div>
  )
}

export default Contact
