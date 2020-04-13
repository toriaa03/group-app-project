import React from 'react'
import { NavLink } from 'react-router-dom';

export default function() {
  return (
    <div className="nav-wrapper">
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
                <NavLink exact to="/message" activeClassName="nav-active-link">
                    Message
                </NavLink>
            </div>
    </div>
    
    </div>
  )
}