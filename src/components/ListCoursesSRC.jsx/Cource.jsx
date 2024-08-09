import React from 'react'

export default function Cource({imgCource , nameCource}) {
    return (
        <div className="course">
            <img src={imgCource} alt={nameCource} />
            <p>{nameCource}</p>
        </div>)
}
