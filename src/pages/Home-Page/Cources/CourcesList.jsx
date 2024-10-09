import React ,{ useState,useEffect,useContext } from 'react'
import CourceItem from './CourceItem'
import { Context } from '../../../Contexts/CourceContext'



export default function CoursesList({data }) {

    const ActiveTitle = useContext(Context)
    const [courseItems, setCourseItems] = useState([]);


    useEffect(() => {
        if (ActiveTitle) {
            const subActiveTitle = data[ActiveTitle]?.sub;
            if (subActiveTitle) {
                const items = Object.keys(subActiveTitle).map(key => (
                    <CourceItem
                        key={key}
                        imgCource={subActiveTitle[key]["img"]}
                        nameCource={subActiveTitle[key]["name"]}
                        courceID={subActiveTitle[key]["courceID"]}
                        ActiveTitle = {ActiveTitle}
                    />
                ));
                setCourseItems(items);
            }
        }
    }, [ActiveTitle, data]);


    return (
        <div className="courses">
            {courseItems.length > 0 ? courseItems : <p className='not-cources'>دوره های آموزشی</p>}
            
        </div>
    )
}
