import React from "react";
import data from "../data";
import {CCard, CCardBody, CCardImage, CCardTitle, CButton, CCardText} from '@coreui/react'
import './Course.css'
import '../components/Navbar.css'
function Course(){
    return(
        <>
        <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{marginBottom: "90px;"}}>
        <div className="container text-center my-5 py-5">
            <h1 className="text-white mt-4 mb-4">Pick a category</h1>
            <div className="mx-auto mb-5" style={{width: "100%;", maxWidth: "600px;"}}>
                <ul>
                    <li>Development</li>
                    <li>Media</li>
                </ul>
            </div>
        </div>
    </div>
        <div className="courseWrapper">
        {
            data && data.map(data=>{
                return(
                    
                    <div className="containers">
                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h2>{data.id}</h2>
                      <h3>{data.name}</h3>
                      <p>{data.category}</p>
                      <a href={data.link}>Learn now</a>
                    </div>
                  </div>
                </div>
                </div>
            )})
            
        }
        </div>
        
        </>
    )
}

export default Course;