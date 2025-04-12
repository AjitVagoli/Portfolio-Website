import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='wrp'>
      <h1>👤 Ajit Manohar Vagoli</h1>

      <nav className='nav'>
        <NavLink className='navb' to="/" style={linkStyle} >Intro</NavLink> |{" "}
        <NavLink className='navb' to="Skills" style={linkStyle} >Skills</NavLink> |{" "}
        <NavLink className='navb' to="experience" style={linkStyle} >Experience</NavLink> |{" "}
        <NavLink className='navb' to="projects" style={linkStyle} >Projects</NavLink> |{" "}
        <NavLink className='navb' to="contact" style={linkStyle} >Contact</NavLink> 
      </nav>

      {/* This will render the nested route component */}
      <Outlet />
    </div>
  );
};

const linkStyle = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'normal',
  color: isActive ? '#FF9933' : 'white',
  textDecoration: 'none',
  margin: '0 10px',
});

export default Profile;
