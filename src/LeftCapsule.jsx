import './LeftCapsule.css'
import { useEffect } from "react";
import pfp from './images/Group.png';
function LeftCapsule({img, title, date, description}) { 
    useEffect(() => {
      let hidden = document.querySelectorAll('.hidden1')
      hidden.forEach((item) => observer.observe(item));
  }, [])
    
    return (
        <div className='leftCapsule hidden1'>
            {/* image */}
            <img className='capsuleImage' src={img}></img>
            {/* text */}
            <div className='capsuleText'>
          <h1 className='capsuleTitle'>{title}</h1>
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