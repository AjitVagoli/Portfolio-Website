import React from 'react'

const Project = () => {
  return (
    <div className='pwrp'>
        <div className='prj'>
        <h3>Random GIF Generator</h3>
        <p>
        <ul>
            <li>Built a React app that fetches and displays GIFs using the GIPHY API </li>
            <br/>
            <li>Implemented search functionality with real-time updates </li>
            <br/>
            <li>Handled asynchronous data fetching with fetch() and useEffect </li>
            <br/>
            <li>Styled the UI to be clean, responsive, and mobile-friendly </li>
            <br/>
            <li>Demonstrated API integration and user input handling</li>
        </ul>
        </p>
        <button className='pbut' onClick={()=>window.open('https://ajit-gif.netlify.app/', '_blank')}>
        View Site
        </button>
      
        </div>
        <div className='prj'>
        <h3>Todo App with Context API</h3>
        <p>
        <ul>
            <li>Created a fully functional todo app using React and Context API for global state </li>
            <br/>
            <li>Implemented add, update, and delete features with real-time UI changes </li>
            <br/>
            <li>Used hooks like useState, useContext, and conditional rendering </li>
            <br/>
            <li>Practiced component-based architecture and reusable logic </li>
        </ul>
        </p>
        <button className='pbut' onClick={()=>window.open('https://ajit-todo.netlify.app/', '_blank')}>
        View Site
        </button>
      
        </div>
    </div>
  )
}

export default Project
