import React from 'react';
import './Header.css';
import brmed from '../brmed.png'; 

const Header: React.FC = () => {
  return (
    <header className="main-header">
      
      <div className="header-left">
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img src={brmed} alt="Logo da BR MED" />
        </div>
      </div>

      <div className="header-right">
        <button className="btn btn-secondary">Sign In</button>
        <button className="btn btn-primary">Register</button>
      </div>

    </header>
  );
};

export default Header;