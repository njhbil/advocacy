import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./navbar.css";
import { } from "react";


function Navbar() {
  return (

    
    <nav className=" navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          NABIL AKBAR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link text-white" href="#me">
              About Me
            </a>
            <a className="nav-link text-white" href="#expe">
              Experience
            </a>
            <a className=" nav-link text-white" href="#carouselExample">
            Advocacy
            </a>
            <a className=" nav-link text-white" href="#footer">
            Contact
            </a>
            
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
