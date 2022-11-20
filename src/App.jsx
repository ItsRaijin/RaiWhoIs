import './App.css'
import './Effects.css'
import Home from './Home'
import LeftCapsule from './LeftCapsule'
import RightCapsule from './RightCapsule'
import useScrollPosition from "./useScrollPosition";
import { useEffect } from "react";
import pfp from './images/Group.png';
import arrow from './images/arrow.png';
import robbin from './images/foxx.png'
import playmakers from './images/PM.png';
import { useRef } from 'react';


function App() {
  
  const home = useRef(null);
  const scrollHome = () => home.current.scrollIntoView({ behavior: 'smooth' });
  const portfolio = useRef(null);
  const scrollPortfolio = () => portfolio.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const top = document.querySelectorAll('scrolldown');
  }, [])
  

  const desc1 = <span>Developed a<span className='pink'> Top Down 2D </span>
    party game in Unity using C#. The game was was awarded <a href="https://www.gamesstudio.org/media-gallery-uts-student-games-showcase-autumn-2022">
    <span className='pink'>Best Game Developed</span></a> in the UTS games showcase and is currently
    being aided in publishing by <span className='pink'>
    Playbox Studios</span>. I operated as a <span className='pink'>
    Programming and QA</span> lead for this project.</span>
  
  const desc2 = <span>Operated as the <span className='pink'>Events Director</span> for UTS Playmakers and
    was responsible for club management and the hosting of all events. In my 2 years I've managed
    to host a variety of <span className='pink'>Game Jams, Workshops, and Industry Talks</span> whilst also facilitating
    a club with over a hundred members </span>
  const scrollPosition = useScrollPosition();
  
if (scrollPosition) {
  if (top) {
    const toppss = document.getElementById('top');

    //fade based on scroll position

    toppss.style.opacity = 1 - (scrollPosition / 300);
    if(1 - (scrollPosition / 300) < 0) {
      toppss.style.display = 'none';
    }
    else {
      toppss.style.display = 'block';
    }
    

  }
}



  return (
    <div className="App">


      <div className="heading">
        <a href="/">
          <button className='name button'>Habibullah Saleem</button>
        </a>

        <div className='navbar'>
          <button className='nav button' onClick={scrollHome}>Home</button>
          <button className='nav button' onClick={scrollPortfolio}>Portfolio</button>
          <button className='nav button'>About</button>
        </div>

            
      </div>


      <div className="container" ref={home}>
        <Home />
        <div className='scrolldown' id='top'>
          <p className='para'>scroll down</p>
          <img className='scrollImage hvr-icon-bob' src={arrow} onClick={scrollPortfolio}></img>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      

      <div className="container">
        <div className='projects' ref={portfolio}>

          <LeftCapsule
            img={robbin}
            title="Round Robbin'"
            date="Jan 2022 - Present"
            description={desc1}
          />

          <RightCapsule
            img={playmakers}
            title="Playmaker's Executive"
            date="2020 - 2022"
            description={desc2}
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
