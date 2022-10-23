import pfp from './images/Group.png';
import './Home.css'

import git from './images/git.png';
import twt from './images/twt.png';
import linkd from './images/linkdIn.png';

function App() { 
    return(
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
            I am currently based in Sydney and am confident in an array of languages including <span className='pink'>C#, C++, Python and React. </span></p>
          </div>
        </div>
    )
}

export default App;