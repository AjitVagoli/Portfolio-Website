import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='wrp'>
      <h1>👤 Ajit Manohar Vagoli</h1>

      <nav>
        <NavLink to="/" style={linkStyle} >Intro</NavLink> |{" "}
        <NavLink to="Skills" style={linkStyle} >Skills</NavLink> |{" "}
        <NavLink to="experience" style={linkStyle} >Experience</NavLink> |{" "}
        <NavLink to="projects" style={linkStyle} >Projects</NavLink> |{" "}
        <NavLink to="contact" style={linkStyle} >Contact</NavLink> 
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
