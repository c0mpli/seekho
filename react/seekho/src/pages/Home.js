import React from "react";
import './Home.css'
import data from "../data";

function Home(){
    return(
        <>
    <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{marginBottom: "90px;"}}>
        <div className="container text-center my-5 py-5">
            <h1 className="text-white mt-4 mb-4">Learn any skill</h1>
            <h1 className="text-white display-1 mb-5">Anytime, Anywhere.</h1>
            <div className="mx-auto mb-5" style={{width: "100%", maxWidth: "600px;"}}>
                <div className="input-group">
                    {/*<div className="input-group-prepend">
                        <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Courses</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Courses 1</a>
                            <a className="dropdown-item" href="#">Courses 2</a>
                            <a className="dropdown-item" href="#">Courses 3</a>
                        </div>
    </div>*/}
                    
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
                    <p>If you want to create an ideal atmosphere for your learners and make them feel inspired by your content, we can help. We have collected some videos that will help you create and sell your courses online. These videos are hand-picked, based on relevance and the quality of the content.Let’s take a look!</p>
                    <div className="row pt-3 mx-0">
                        <div className="col-3 px-0">
                            <div className="bg-success text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">50+</h1>
                                <h6 className="text-uppercase text-white">Available<span className="d-block">Subjects</span></h6>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="bg-primary text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">300+</h1>
                                <h6 className="text-uppercase text-white">Online<span className="d-block">Courses</span></h6>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="bg-secondary text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">200</h1>
                                <h6 className="text-uppercase text-white">Skilled<span className="d-block">Instructors</span></h6>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="bg-warning text-center p-4">
                                <h1 className="text-white" data-toggle="counter-up">1000</h1>
                                <h6 className="text-uppercase text-white">Happy<span className="d-block">Students</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*<div className="container-fluid bg-image" style={{margin: "90px 0;"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?</h6>
                        <h1 className="display-4">Why You Should Start Learning with Us?</h1>
                    </div>
                    <p className="mb-4 pb-2">Because we focus on results. For us, it’s all about what adds value for you and your business. Above all, we want our words to work for you.Work with us, and you’ll work with seasoned professionals – vigilant of deadlines, and committed to exceeding expectations.</p>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-primary mr-4">
                            <i className="fa fa-2x fa-graduation-cap text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Skilled Instructors</h4>
                            <p>Carefully hand selected instructors for the all the learners out there to make your time worth and efficient as much as possible</p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-secondary mr-4">
                            <i className="fa fa-2x fa-certificate text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>International Certificate</h4>
                            <p>Certification is the job you completed by yourself . Making a project by yourself is the meaning of growth and excellence</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="btn-icon bg-warning mr-4">
                            <i className="fa fa-2x fa-book-reader text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Types of courses</h4>
                            <p className="m-0">The variety of courses offered here will never be finite , our site will help you get what you want in more than 1 way</p>
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
            <div className="courseWrapper">

        {
            data && data.map(data=>{
                return(
                    
                    <div class="containers">
                <div class="card">
                  <div class="box">
                    <div class="content">
                      <h2>{data.id}</h2>
                      <h3>{data.name}</h3>
                      <p>{data.category}</p>
                      <a href={data.link} target="__blank">Learn now</a>
                    </div>
                  </div>
                </div>
                </div>
            )})
            
        }
        </div>
        </div>
        
        </div>*/}

        </>
    )
}

export default Home;