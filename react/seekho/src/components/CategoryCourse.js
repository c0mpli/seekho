import React from "react";
import data from "../data";



export function CategoryCourse(props){

    return(
        <>
                <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{marginBottom: "90px;"}}>
        <h1 className="container text-center my-5" style={{color:"white"}}>{props.category}</h1>
        <div className="courseWrapper">
        { 
            data && data.map(data=>{
                if(data.category === props.category){
                return(
                    <div className="containers">
                <div className="card">
                  <div className="box" style={{backgroundImage:`src("guitar.jpeg")`}}>
                    <div className="content">
                      <h3>{data.name}</h3>
                      <p>{data.category}</p>
                      <a href={data.link} target="__blank">Learn now</a>
                    </div>
                  </div>
                </div>
                </div>
            )}})
            
        }
        </div>
        </div>
        </>
    )
}