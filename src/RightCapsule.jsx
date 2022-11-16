import './RightCapsule.css'
import { useEffect } from "react";
function RightCapsule({img, title, date, description}) { 
    useEffect(() => {
        let hidden = document.querySelectorAll('.hidden')
        hidden.forEach((item) => observer.observe(item));
    }, [])
    
    return (
        <div className='rightCapsule hidden'>
            {/* text */}
            <div className='capsuleText row'>
              <h1 className='capsuleTitle'>{title}</h1>
              <h2 className='capsuleDate'>{date}</h2>
              <p className='capsuleDescription'>{description}</p>
            </div>
            {/* image */}
            <img className='capsuleImage' src={img}></img>

            <div className='capsuleText col'>
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
      entry.target.classList.add('show');
    } else {
      //entry.target.classList.remove('show');
    }
  });
});
export default RightCapsule;