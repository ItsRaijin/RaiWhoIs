import pfp from './images/Group.png';
import './Home.css'
import './Effects.css'

import git from './images/git.png';
import twt from './images/twt.png';
import linkd from './images/linkdIn.png';

function App() { 
  return (
     <div className="App"> 
      <div className='home'>

            <div className='leftHome'>
              <img className='pfp' src={pfp}></img>
            </div>

            <div className='rightHome'>
              <p className='intro'>Hey There, <br></br>I'm <span className='pink test'> Habib. </span></p>
              <p className='para'>I'm a software developer experienced in Unity, Unreal and web development.
              I am currently based in Sydney and am confident in an array of languages including <span className='pink'>C#, C++, and React. </span></p>
            <div className='socials'>
              <a href='https://github.com/ItsRaijin'>
                  <img className='social hvr-pulse-shrink         ' src={git}></img>
              </a>
              <a href='https://twitter.com/YaBoiRaijin'>
                <img className='social hvr-pulse-shrink' src={twt}></img>
              </a>
              <a href='https://www.linkedin.com/in/habibullah-saleem-765784218/'>
                <img className='social hvr-pulse-shrink' src={linkd}></img>
              </a>
                
            </div>
          </div>
      </div>
      <div className='colSocial'>
            <a href='https://github.com/ItsRaijin'>
                <img className='socialCol hvr-pulse-shrink         ' src={git}></img>
            </a>
            <a href='https://twitter.com/YaBoiRaijin'>
              <img className='socialCol hvr-pulse-shrink' src={twt}></img>
            </a>
            <a href='https://www.linkedin.com/in/habibullah-saleem-765784218/'>
              <img className='socialCol hvr-pulse-shrink' src={linkd}></img>
            </a>
          </div>
      </div>
    )
}

export default App;