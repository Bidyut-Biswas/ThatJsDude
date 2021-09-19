import React, { useEffect, useState } from 'react';
import './App.css'
import mni from './Tutorial.json'
const App = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
};

function Header(){
  return(
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
  )
};

function Main(){
  return(
    <div className='main'>
      <Left></Left>
      <Right></Right>
    </div>
  )
}
function Left(){
  const [tutorials ,setTutorials]=useState([])
  useEffect(()=>{
    setTutorials(mni)
  },[])
  return(  
    <div style={{width:'70%'}}>
      <JsConfussing></JsConfussing>
      <div className='left'>
      {
        tutorials.map(tutorial=><Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>)
      }
    </div>
    </div>
  )
}
function JsConfussing(){
  return(
    <div className='js-config'>
      <h2>Js Confussing Part</h2>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats.</p>
    </div>
  )
}
function Tutorial(props){
  return(
    <div className='card-bg'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button className='details'>Learn More &gt; &gt;</button>
    </div>
  )
}
function Right(){
  return(
    <div className='right'>
      <h3>Personal Training for $30</h3>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>
      <h2 style={{marginTop:'10px'}}>Recent Videos</h2>
      <ul style={{marginLeft:'50px'}}>
        <li>15+ tricks for dev tool</li>
        <li>15+ tricks for dev tool</li>
        <li>15+ tricks for dev tool</li>
        <li>15+ tricks for dev tool</li>
        <li>15+ tricks for dev tool</li>
      </ul>
    </div>
  )
}
export default App;