import React from 'react'

//import components
import Slider from '../pages/HomePage/Slider/Slider';
import Menu from './Menu';
import ListCourses from '../pages/HomePage/Courses';
import Footer from './Footer'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



export default function A() {
  return (
    <div className='body'>

      <Menu></Menu>
      <Slider></Slider>  
      <ListCourses></ListCourses>
      <Footer></Footer>
    </div>
  )
}
