import React , {useState} from 'react'

export default function TitleItem({imgTitle , nameTitle, handleClick , name }) {

    return (        
        <div className="title-course"
            onClick={()=>{handleClick(name)}}
        >
            <img src={imgTitle} alt={nameTitle} />
            <p>{nameTitle}</p>
        </div>
    )
}
