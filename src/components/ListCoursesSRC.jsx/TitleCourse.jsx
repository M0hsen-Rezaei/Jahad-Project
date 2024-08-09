import React from 'react'

export default function TitleCourse({imgTitle , nameTitle , handleClick , title}) {
   
    return (
        <div onClick={()=>{handleClick(title)}} className="title-course">
            <img src={imgTitle} alt={nameTitle} />
            <p>{nameTitle}</p>
        </div>)
}
