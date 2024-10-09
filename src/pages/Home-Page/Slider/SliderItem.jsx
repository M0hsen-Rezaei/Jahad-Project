import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderItem({ data }) {
    return (
        <div className="slider-courses">
            <div className="description">
                <h3 className="description-title">{data.title}<span>{data.titleBold}</span></h3>
                <p className="description-text">{data.description}</p>
            </div>
            <div className="preview">
                <img className="preview-img" src={data.img} alt="img" />
                <Link to={data.to}>
                    <button className="preview-button">مشاهده دوره ها</button>
                </Link>
            </div>
        </div>
    )
}
