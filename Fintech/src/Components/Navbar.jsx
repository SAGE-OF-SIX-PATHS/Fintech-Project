import React from 'react';
import './Navbar.css';

const Navbar = () => {
          return (
                    <nav className="navbar">
                              <div className="logo">
                                        <div className="imgContainer"><img className='logoImage' src="/images/Logo.png" alt="" /></div>
                                        <span>FinTrack</span>
                              </div>
                              <ul className="nav-links">
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        <li><a href="#blog">Blog</a></li>
                              </ul>
                              <button className="sign-in">Sign In</button>
                    </nav>
          );
};


export default Navbar;