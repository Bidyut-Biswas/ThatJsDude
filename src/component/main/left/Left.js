import React from 'react';
import { useEffect, useState } from 'react';
import mni from '../../../Tutorial.json'
import JsConfussing from './jsConfuse/JsConfussing';
import Tutorial from './tutorial/Tutorial';
import './Left.css'

const Left = () => {
    const [tutorials ,setTutorials]=useState([])
        useEffect(()=>{
        setTutorials(mni)
    },[])
    return (
        <div style={{width:'70%'}}>
            <JsConfussing></JsConfussing>
            <div className='left'>
                {
                    tutorials.map(tutorial=><Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>)
                }
            </div>
        </div>
    );
};

export default Left;