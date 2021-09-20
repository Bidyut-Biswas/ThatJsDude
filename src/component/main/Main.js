import React from 'react';
import Left from './left/Left';
import Right from './right/Right';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <Left></Left>
            <Right></Right>
        </div>
    );
};

export default Main;