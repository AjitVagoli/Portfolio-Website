import React from 'react';

const Skills = () => {
  return (
    <div className='skill'>
       <div className='sk1'>
       <h3>Core React Skills</h3>
       <ul>
        <li>React.js (Functional Components & Hooks)</li>
        <br/>
        <li>JSX (JavaScript XML)</li>
        <br/>
        <li>State Management (useState)</li>
        <br/>
        <li>Lifecycle Methods / Hooks (useEffect, useContext)</li>
        <br/>
        <li>Conditional Rendering</li>
       </ul>
       </div>

       <div className='sk1'>
       <h3>Routing & Navigation</h3>
       <ul>
        <li>React Router (v6+)</li>
        <br/>
        <li>Nested Routes</li>
        <br/>
        <li>Navigation using Link and NavLink</li>
       </ul>
       </div>

       <div className='sk1'>
       <h3>State Management</h3>
       <ul>
        <li>Context API</li>
        <br/>
        <li>Redux Basics</li>
       </ul>
       </div>

       <div className='sk1'>
       <h3>Styling</h3>
       <ul>
        <li>CSS Modules </li>
        <br/>
        <li>Tailwind CSS</li>
        <br/>
        <li>Responsive Design with Flexbox & Grid</li>
       </ul>
       </div>

       <div className='sk1'>
       <h3>API & Data Handling</h3>
       <ul>
        <li>Fetching data using fetch / axios</li>
        <br/>
        <li>Consuming REST APIs</li>
        <br/>
        <li>Handling async/await and error states</li>
       </ul>
       </div>
    </div>
  );
};

export default Skills;
