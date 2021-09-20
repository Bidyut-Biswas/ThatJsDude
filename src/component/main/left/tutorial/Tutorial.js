import React from 'react';
import './Tutorial.css'

const Tutorial = (props) => {
    return (
        <div className='card-bg'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <button className='details'>Learn More &gt; &gt;</button>
        </div>
    );
};

export default Tutorial;