import './App.css'
import './Effects.css'
import Home from './Home'
import LeftCapsule from './LeftCapsule'
import RightCapsule from './RightCapsule'
import useScrollPosition from "./useScrollPosition";
import { useEffect } from "react";
import pfp from './images/Group.png';
import arrow from './images/arrow.png';


function App() {
  


  useEffect(() => {
    const top = document.querySelectorAll('scrolldown');
    console.log(top);
  }, [])
  

  const desc1 = <span>Lorem ipsum dolor sit, amet consectetur <a href='https://utsplaymakers.github.io/'> adipisicing elit. Ut eveniet fugit sequi </a>voluptate nesciunt labore ab voluptatem modi, tempora reiciendis sit. Veniam, possimus optio? Laudantium eum quae quos modi unde.</span>
  const scrollPosition = useScrollPosition();

if (scrollPosition) {
  if (top) {
    const toppss = document.getElementById('top');

    //fade based on scroll position

      toppss.style.opacity = 1 - (scrollPosition / 300);
    

  }
}



  return (
    <div className="App">


      <div className="heading">

        <button className='name button'>Habibullah <span className='hideOnSmall'>Saleem</span></button>

        <div className='navbar'>
          <button className='nav button'>Home</button>
          <button className='nav button'>Portfolio</button>
          <button className='nav button'>About</button>
        </div>

        <button className='contact button'>Contact Me</button>
            
      </div>


      <div className="container">
        <Home />
        <div className='scrolldown' id='top'>
          <p className='para'>scroll down</p>
          <img className='social hvr-icon-bob' src={arrow}></img>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      

      <div className="container">
        <div className='projects'>

          <LeftCapsule
            img={pfp}
            title="Project Title"
            date="Project Date"
            description={desc1}
          />

          <RightCapsule
            img={pfp}
            title="Project Title"
            date="Project Date"
            description={desc1}
          />

          <LeftCapsule
            img={pfp}
            title="Project Title"
            date="Project Date"
            description={desc1}
          />

          <RightCapsule
            img={pfp}
            title="Project Title"
            date="Project Date"
            description={desc1}
          />

        </div>
      </div>


      <div className="container">
        
      </div>

      <div className="container">
        
      </div>

    </div>
  )

  
}







/*window.addEventListener("scroll", reveal);*/

// To check the scroll position on page load
//reveal();

export default App
