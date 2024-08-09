import React from 'react'
import { useState } from 'react'


//import components
import TitleCourse from './TitleCourse'


export default function TitleCourses({ data , handler}) { 
    const [ActiveTitle , setActiveTitle] = useState()

    


        const h = function(title){
        setActiveTitle(title);
        console.log(ActiveTitle);
        
        
    }
    

    return (
        <div className="title-courses">

            {Object.keys(data).map((key) => {
                return <TitleCourse handleClick={h} 
                        imgTitle={require(`../assest/img/vector-${key}.jpg`)} 
                        nameTitle={data[key].name}
                        title={key}
                        >
                        </TitleCourse>
            })}


        </div>
    )
}
