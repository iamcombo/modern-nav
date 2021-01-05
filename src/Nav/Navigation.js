import React from 'react'
import './nav.css';

function Navigation() {
  return (
    <div class="navigation">
      <ul>
        <li><router-link to="/">start</router-link></li>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/uses">uses</router-link></li>
        <li><router-link to="/blog">blog</router-link></li>
        <li><router-link to="/policy">policy</router-link></li>
      </ul>
    </div>
  )
}

export default Navigation
