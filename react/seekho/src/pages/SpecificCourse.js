import React from "react";
import { CategoryCourse } from "../components/CategoryCourse";

export function SpecificCourse(props){
    return(
        <CategoryCourse 
        category = {props.category}
        />
    )
}