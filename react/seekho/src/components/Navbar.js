import React from 'react';
import './Navbar.css'

function Navbar(){
    return(
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>Seekho</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form action="/" method="get" >
        <input
            type="text"
            id="header-search"
            placeholder="Search courses"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="course.html" className="nav-item nav-link">Courses</a>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;