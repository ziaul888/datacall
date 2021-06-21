import React from 'react'
import logo from "../../asset/images/logo.svg"
import {Link} from "react-router-dom"


export const NavBar = () => {

    return (
      <nav className="navbar top-navbar sticky-top navbar-expand-lg">
        <div className="container">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="Data Call Solutions" />
          </Link>

          <button
        
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav right-nav ml-5">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Do more with Data Call
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/whydata">
                  Why Data Call
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
