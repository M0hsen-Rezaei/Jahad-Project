import React, { useEffect } from 'react'
import {Link} from "react-router-dom"

export default function CourceItem({imgCource , nameCource , courceID , ActiveTitle}) {
    return (
        <Link to={`cource/${ActiveTitle}/${courceID}`}>
        <div className="course">
            <img src={imgCource} alt={nameCource} />
            <p>{nameCource}</p>
        </div>
        </Link>      
    )}
