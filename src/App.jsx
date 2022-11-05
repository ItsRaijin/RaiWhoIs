import './App.css'
import './Effects.css'
import Home from './Home'
import { useEffect } from "react";
import arrow from './images/arrow.png';



function App() {
  
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
        <Home />
      </div>

      <div className='scrolldown'>
        <p className='para'>scroll down</p>
        <img className='social hvr-icon-bob' src={arrow}></img>
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
