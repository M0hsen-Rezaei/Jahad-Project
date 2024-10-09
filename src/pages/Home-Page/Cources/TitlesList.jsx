import React from 'react';
import TitleItem from './TitleItem';
import { useNavigate } from 'react-router-dom';

export default function TitlesList({ data, setSelectedTitle }) {
    const navigate = useNavigate();

    const handleClick = (name) => {
        if (window.innerWidth <= 768) { // اگر عرض صفحه کمتر یا مساوی 768 باشد (موبایل)
            navigate(`/cources/${name}`); // به صفحه مربوطه بروید
        } else {
            setSelectedTitle(name); // اگر در کامپیوتر هستید، handleClick را اجرا کنید
        }
    };

    return (
        <div className="title-courses">
            {Object.keys(data).map((key) => (
                <TitleItem
                    key={key}
                    imgTitle={data[key].img}
                    nameTitle={data[key].name}
                    name={key}
                    handleClick={handleClick}
                />
            ))}
            {Object.keys(data).map((key) => (
                <TitleItem
                    key={key}
                    imgTitle={data[key].img}
                    nameTitle={data[key].name}
                    name={key}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}