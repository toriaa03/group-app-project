import React from 'react'
import { NavLink } from 'react-router-dom';

export default function() {
  return (
    <div className="nav-wrapper">
        <div className="left-column">

            {/* logo here */}

        </div>
        <div className="center">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-active-link">
                    Home
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink exact to="/profile" activeClassName="nav-active-link">
                    My Profile
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink exact to="/messaging" activeClassName="nav-active-link">
                    Message
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink exact to="/about" activeClassName="nav-active-link">
                    About Us
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink exact to="/help" activeClassName="nav-active-link">
                    FAQ
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink exact to="/login" activeClassName="nav-active-link">
                    Sign In
                </NavLink>
            </div>
    </div>
    
    </div>
  )
}