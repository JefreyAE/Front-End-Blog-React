import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
          <li><NavLink to="/new-article">Create article</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
      </ul>
  </nav>
  )
}
