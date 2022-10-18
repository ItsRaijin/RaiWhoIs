import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from "react";
import pfp from './images/profile.png';

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

      <div className='home'>

        <div className='leftHome'>
          <img className='pfp' src={pfp}></img>
          <p className='title'>Developer +</p>
        </div>

        <div className='rightHome'>
          <p className='intro'>Hi There, I'm Habib</p>
        </div>

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
