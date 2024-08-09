import React from 'react'
import { useState,useEffect } from 'react'

//import components
import Cource from './Cource'

//import images
import phyton from '../assest/img/phyton.jpg'
import java from '../assest/img/java.jpg'
import c from '../assest/img/c++.jpg'
import asp from '../assest/img/asp.jpg'
import android from '../assest/img/android.jpg'
import sql from '../assest/img/sql.jpg'
import ios from '../assest/img/ios.jpg'

export default function Courses({data ,activeTitle}) {

    // console.log(data.activeTitle);
    

    return (
        <div className="courses">
            <Cource imgCource={c} nameCource={"برنامه نویسی به زبان c++"}></Cource>
            <Cource imgCource={phyton} nameCource={"برنامه نویسی به زبان python"}></Cource>
            <Cource imgCource={java} nameCource={"JAVA SE 8 (مقدماتی و پیشرفته)"}></Cource>
            <Cource imgCource={sql} nameCource={"پایگاه داده های SQL SERVER"}></Cource>
            <Cource imgCource={asp} nameCource={"ASP.NET MVC"}></Cource>
            <Cource imgCource={ios} nameCource={"برنامه نویسی به زبان IOS"}></Cource>
            <Cource imgCource={android} nameCource={"Android Pack"}></Cource>
        </div>
    )
}
