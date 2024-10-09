import React from 'react'
import { useState,useEffect } from 'react'
import TitlesList from './TitlesList'
import CoursesList from './CourcesList'
import CoursesData from '../../../data/CoursesData'
import { Context } from '../../../Contexts/CourceContext'

export const ActiveTitle = React.createContext()


export default function Courses() {

    const [cources,setCourses] = useState({})
    const [selectedTitle, setSelectedTitle] = useState()





    // Get Data : //
    useEffect(()=>{
        // fetch('../../data.json')
        //     .then(responce => responce.json())
        //     .then(cources => console.log(cources))
        setCourses(CoursesData);
    })

    return (
        <Context.Provider value={selectedTitle}>
            <h3 className="title-section"><span>گروه های آموزشی :</span></h3>
            <div className="container-courses">
                <TitlesList setSelectedTitle={setSelectedTitle}  data={cources}></TitlesList>
                <CoursesList  data={cources}></CoursesList>
            </div>
        </Context.Provider>
        
    )
}
