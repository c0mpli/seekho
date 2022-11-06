import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="/" className="navbar-brand ml-lg-3">
                <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>Seekho</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form action="/" method="get" >
        {/*<input className='search'
            type="text"
            id="header-search"
            placeholder="Search courses"
            name="s" 
    />*/}
    {/*<input type="text" className="form-control border-light" style={{padding:"30px 25px;"}} placeholder="Keyword" />
                    <div className="input-group-append">
                        <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                    </div>*/}

    </form>
        <div className="collapse navbar-collapse right justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    
                    <a href="/seekho/about" className="nav-item nav-link">About Us</a>
                    <a href='/seekho/course' className="nav-item nav-link">Courses</a>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;