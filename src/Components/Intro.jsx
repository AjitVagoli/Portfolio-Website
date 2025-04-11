import pic from '../assets/ajit.jpg';
import React from 'react'

const Intro = () => {
  return (
    <div className='intro'>
      <img className='pic' src={pic} alt='pic'/>
      <p className='about'><strong>About:</strong>"Motivated React Developer with strong fundamentals in JavaScript, React, and modern web development. Experienced in building user interfaces using reusable components and managing app state with Context API and hooks. Quick learner with a passion for creating clean, efficient, and scalable front-end solutions."</p>
    </div>
  )
};

export default Intro
