import React, { Component } from 'react';
import {Link} from 'react-router-dom'



export default class Header extends Component {
  render() {
    return(
    <div>
   {/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a to="/index.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
   
      <a href="/login" className="nav-link">Login</a>

    </li>
    
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </form>
  
</nav>
{/* /.navbar */}

  
</div>
)
  }
}
