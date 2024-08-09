import React from 'react'

//import components
import Slider from './Slider';
import Menu from './Menu';
import ListCourses from './ListCourses';
import Footer from './Footer';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Main() {
  return (
    <div className='body'>

      <Menu></Menu>
      <Slider></Slider>  
      <ListCourses></ListCourses>
      <Footer></Footer>

    </div>
  )
}
