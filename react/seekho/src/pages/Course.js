import React from "react";
import data from "../data";
import {CCard, CCardBody, CCardImage, CCardTitle, CButton, CCardText} from '@coreui/react'
import './Course.css'
import '../components/Navbar.css'
function Course(){
    var temp=[];
    for(var i in data){
        temp.push(data[i].category);
    }
    var categories =[...new Set(temp)];
    //alert(categories)
    return(
        <>
        <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{marginBottom: "90px;"}}>
        <div className="container text-center my-5 py-5">
            
            <div className="mx-auto mb-5" style={{width: "100%;", maxWidth: "600px;"}}>
            <input className="dark-light" type="checkbox" id="dark-light" name="dark-light"/>

  	<div className="sec-center"> 	
	  	<input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	<label className="for-dropdown" for="dropdown">Pick a category <i className="uil uil-arrow-down"></i></label>
  		<div className="section-dropdown"> 
        {   categories && categories.map(categories=>{
            for(var i in categories)
                return(
  			        <a href="#">{categories}<i className="uil uil-arrow-right"></i></a>
		  	
  			)})}
  		</div>
  	</div>
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
                      <a href={data.link} target="__blank">Learn now</a>
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