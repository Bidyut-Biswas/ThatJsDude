import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className='nav'>
                <h3>That Js Dude</h3>
                <button className='sign-in'>Sign In</button>
            </div>
            <div className='header-main'>
                <h1>Exclusive React Workshop for <br /> beginners!</h1>
                <p>Once in a year opportunity to learn and build your first React app</p>
                <button className='sign-in'>Learn More &gt; &gt;</button>
            </div>
        </section>
    );
};

export default Header;