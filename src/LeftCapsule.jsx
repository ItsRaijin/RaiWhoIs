import './LeftCapsule.css'
import { useEffect } from "react";
import pfp from './images/Group.png';
function LeftCapsule({img, title, date, description, link}) { 
    useEffect(() => {
      let hidden = document.querySelectorAll('.hidden1')
      hidden.forEach((item) => observer.observe(item));
  }, [])
    
    return (
        <div className='leftCapsule hidden1'>
        {/* image */}
          <a href={link} className="titleLink hvr-icon-bob">
            <img className='capsuleImage' src={img}></img>
          </a>
            {/* text */}
        <div className='capsuleText'>
              <a href={link} className="titleLink hvr-icon-bob">
                <h1 className='capsuleTitle' >{title}</h1>
              </a>
              <h2 className='capsuleDate'>{date}</h2>
              <p className='capsuleDescription'>{description}</p>
            </div>
        </div>
    )
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show1');
    } else {
      //entry.target.classList.remove('show');
    }
  });
});
export default LeftCapsule;