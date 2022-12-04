import './App.css'
import './Effects.css'
import Home from './Home'
import LeftCapsule from './LeftCapsule'
import RightCapsule from './RightCapsule'
import useScrollPosition from "./useScrollPosition";
import { useEffect } from "react";
import pfp from './images/Group.png';
import resume from './images/resume.png';
import arrow from './images/arrow.png';
import robbin from './images/foxx.png'
import playmakers from './images/PM.png';
import SoulPink from './images/SoulEye.png';
import nose from './images/nose.png';
import { useRef } from 'react';
import pdf from './images/Resume.pdf';


function App() {
  
  const home = useRef(null);
  const scrollHome = () => home.current.scrollIntoView({ behavior: 'smooth' });
  const portfolio = useRef(null);
  const scrollPortfolio = () => portfolio.current.scrollIntoView({ behavior: 'smooth' });
  const about = useRef(null);
  const scrollAbout = () => about.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const top = document.querySelectorAll('scrolldown');
    let showContact = document.querySelectorAll('.showContact')
    showContact.forEach((item) => observer.observe(item));
  }, [])
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
          <button className='nav button' onClick={scrollAbout}>About</button>
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

          <h1 className='sectionName'> Projects </h1>

          <LeftCapsule
            img={robbin}
            title="Round Robbin'"
            date="Jan 2022 - Present"
            description={desc1}
            link="https://leaire.itch.io/round-robbin"
          />

          <RightCapsule
            img={playmakers}
            title="Playmaker's Executive"
            date="Dec 2020 - Present"
            description={desc2}
            link="https://utsplaymakers.github.io/"
          />

          <LeftCapsule
            img={SoulPink}
            title="Soul Searcher"
            date="Jan 2021 - Dec 2021"
            description={desc3}
            link="https://playmakersdevteam.itch.io/soul-searcher"
          />

          <RightCapsule
            img={nose}
            title="Nose of a Thousand Winds"
            date="Jan 2022 - Dec 2022"
            description={desc4}
            link="https://playmakersdevteam.itch.io/nose-of-a-thousand-winds"
          />

        </div>
      </div>
      
      <br /><br /><br /><br /><br /><br /><br/><br/><br/>

      <div className="container">
        <h1 className='sectionName'> About Me </h1>
        <br/>
        <div className='About showContact'>
          <div className='contact' ref={about}>
            <a href={pdf}>
              <img src={resume} className='resume hvr-pulse-shrink pink'></img>
            </a>
            <p><span className='pink'>Email: </span>habibleton@gmail.com <br/><br/>
               <span className='pink'>Mobile: </span>+61406510133</p>
          </div>
          <div className='description'>
            <p>I'm a programmer operating in Sydney with a <span className='pink'>Bachelor of Science in Games Development.</span> I have experience in both <span className='pink'>Unity and Unreal</span>, 
              and have worked on a variety of projects ranging from 2D to 3D. I'm currently working publishing a 2D game on steam <span className='pink'>(Round Robbin')</span>, but I'm always looking
              for new opportunities. I am most confident in Programming, QA and Design applications of developments, though I have experience in all areas.
              My most competent languages are <span className='pink'>C# and C++</span>, but I am also familiar with <span className='pink'>Java, Python, Javascript, HTML and CSS.</span> 
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        
      </div>

    </div>
  )

  
}
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
    
const desc3 = <span>Worked in a development group of 19~ individuals to develop a<span className='pink'> Turn Based Rogue-Like </span>
  throughout 2021. I operated in a <span className='pink'>Programming and Quality Assurance</span> position, as well
  as being the managing<span className='pink'> marketing lead</span> for the product. This resulted in maintaining a
  constantly shifting codebase, as well as managing the forefront of the game's marketing throughout development.</span>
  
const desc4 = <span> Lead the development of a group of 25~ individuals in creating a
  <span className='pink'> 3D Puzzle Platformer </span>game. I was one of 2 <span className='pink'>Producers </span>overseeing all the
  teams of the project, as well as the <span className='pink'>Design Lead</span> for the game. This included managing 
  the SCRUM development process, leading the entire team and managing leads, as well as defining key design decisions
  throughout the development of the game.
  
</span>


/*window.addEventListener("scroll", reveal);*/

// To check the scroll position on page load
//reveal();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    } else {
      //entry.target.classList.remove('show');
    }
  });
});



export default App
