import React from "react";
import './Home.css'

function Home(){
    return(
        <>
    <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{marginBottom: "90px;"}}>
        <div className="container text-center my-5 py-5">
            <h1 className="text-white mt-4 mb-4">Learn From Home</h1>
            <h1 className="text-white display-1 mb-5">Education Courses</h1>
            <div className="mx-auto mb-5" style={{width: "100%", maxWidth: "600px;"}}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Courses</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Courses 1</a>
                            <a className="dropdown-item" href="#">Courses 2</a>
                            <a className="dropdown-item" href="#">Courses 3</a>
                        </div>
                    </div>
                    <input type="text" className="form-control border-light" style={{padding:"30px 25px;"}} placeholder="Keyword" />
                    <div className="input-group-append">
                        <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px;"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={require("../img/about.jpg")} style={{objectFit: "cover;"}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">About Us</h6>
                        <h1 className="display-4">First Choice For Online Education Anywhere</h1>
                    </div>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                    <div className="row pt-3 mx-0">
                        <div className="col-3 px-0">
                            <div className="bg-success text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">123</h1>
                                <h6 className="text-uppercase text-white">Available<span className="d-block">Subjects</span></h6>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="bg-primary text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">1234</h1>
                                <h6 className="text-uppercase text-white">Online<span className="d-block">Courses</span></h6>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="bg-secondary text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">123</h1>
                                <h6 className="text-uppercase text-white">Skilled<span className="d-block">Instructors</span></h6>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="bg-warning text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">1234</h1>
                                <h6 className="text-uppercase text-white">Happy<span className="d-block">Students</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-image" style={{margin: "90px 0;"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?</h6>
                        <h1 className="display-4">Why You Should Start Learning with Us?</h1>
                    </div>
                    <p className="mb-4 pb-2">Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet.</p>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-primary mr-4">
                            <i className="fa fa-2x fa-graduation-cap text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Skilled Instructors</h4>
                            <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-secondary mr-4">
                            <i className="fa fa-2x fa-certificate text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>International Certificate</h4>
                            <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="btn-icon bg-warning mr-4">
                            <i className="fa fa-2x fa-book-reader text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Online classNamees</h4>
                            <p className="m-0">Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5" style={{minHeight: "500px;"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={require("../img/feature.jpg")} style={{objectFit: "cover;"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                    <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                </div>
            </div>
        </div>
        
        </div>

        </>
    )
}

export default Home;