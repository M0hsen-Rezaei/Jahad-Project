import React from 'react'
import { useState,useEffect } from 'react'

//import component
import TitleCourses from './ListCoursesSRC.jsx/TitleCourses'
import Courses from './ListCoursesSRC.jsx/Courses'



export default function ListCourses() {

    const [cources,setCourses] = useState({})
    useEffect(()=>{
        fetch('http://localhost:8000/courses')
            .then(responce => responce.json())
            .then(cources => setCourses(cources))
    })

    const [ActiveTitle , setActiveTitle] = useState()
    


    return (
        <>
            <h3 className="title-section"><span>گروه های آموزشی :</span></h3>
            <div className="container-courses">
                <TitleCourses handler={(title)=>{setActiveTitle(title);}} data={cources}></TitleCourses>
                <Courses activeTitle={ActiveTitle} data={cources}></Courses>
            </div>
        </>
    )
}
