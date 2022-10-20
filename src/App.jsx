import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from "react";
import pfp from './images/profile.png';

import git from './images/git.png';
import twt from './images/twt.png';
import linkd from './images/linkdIn.png';
import arrow from './images/arrow.png';



function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let hidden = document.querySelectorAll('.reveal')
    hidden.forEach((item) => observer.observe(item));
  }, [])

  return (
    <div className="App">

      <div className="heading">

        <button className='name button'>Habibullah Saleem</button>

        <div className='navbar'>
          <button className='nav button'>Home</button>
          <button className='nav button'>Portfolio</button>
          <button className='nav button'>About</button>
        </div>

        <button className='contact button'>Contact Me</button>
        
      </div>
      <div className="container">
        <div className='home'>

          <div className='leftHome'>
            <img className='pfp' src={pfp}></img>
            <p className='title'>Developer +</p>
            <div className='socials'>
              <a href='https://github.com/ItsRaijin'>
                <img className='social' src={git}></img>
              </a>
              <img className='social' src={twt}></img>
              <img className='social' src={linkd}></img>
              <p className='title2'>Designer</p>
            </div>
          </div>

          <div className='rightHome'>
            <p className='intro'>Hey There, <br></br>I'm <span className='pink'> Habib. </span></p>
            <p className='para'>I'm a software developer experienced in Unity, Unreal and web development.
            I am currently based in Sydney and am confident in an array of languages including <span className='pink'>c#, c++, python and react. </span></p>
          </div>
        </div>
      </div>
      
      <div className='scrolldown'>
        <p>scroll down</p>
        <img className='social' src={arrow}></img>
      </div>

      <div className="container">
        
      </div>


      <div className="container">
        
      </div>

      <div className="container">
        
      </div>

    </div>
  )

  
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
});



/*window.addEventListener("scroll", reveal);*/

// To check the scroll position on page load
//reveal();

export default App
