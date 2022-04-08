import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">Portf</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Alexander Pierece</a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}



                <li className="nav-header"></li>

                <li className="nav-item has-treeview">
                  <Link to="/addrole" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      Role
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/getrole" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>GetRole</p>
                      </a>
                    </li>
                  </ul>

                </li>
                <li className="nav-item has-treeview">
                  <a href="/dashbord" className="nav-link">
                    <i class=" nav-icon far fa-plus-square"></i>
                    <p>
                      ADD
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/adduser" className="nav-link">
                        <i class=" nav-icon far fa-plus-square"></i>
                        <p>User</p>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/dashbord/user" className="nav-link">
                        <i class=" nav-icon far fa-plus-square"></i>
                        <p>Get User</p>
                      </Link>
                    </li>

                  </ul>
                </li>


                <li className="nav-item has-treeview">
                  <Link to="/usersubs" className="nav-link">
                    <i className="nav-icon far fa-address-book" />
                    <p>
                      Subscription

                    </p>
                  </Link>

                </li>

                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                      Extras
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/examples/login.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Login</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/register.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Register</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/forgot-password.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Forgot Password</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/recover-password.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Recover Password</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/lockscreen.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Lockscreen</p>
                      </a>
                    </li>

                  </ul>
                </li>

                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-circle nav-icon" />
                    <p>Level 1</p>
                  </a>
                </li>


              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>

    )
  }
}
