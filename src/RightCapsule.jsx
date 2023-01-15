import './RightCapsule.css'
import { useEffect } from "react";
function RightCapsule({img, title, git, description, link}) { 
    useEffect(() => {
        let hidden = document.querySelectorAll('.hidden')
        hidden.forEach((item) => observer.observe(item));
    }, [])
    
    return (
        <div className='rightCapsule hidden'>
            {/* text */}
        <div className='capsuleText row'>
            <a href={link} className="titleLink">
              <h1 className='capsuleTitle'>{title}</h1>
            </a>
          {/* <h2 className='capsuleDate'>{date}</h2> */}
          <a href={git}>
            <button className='git' href={git}>github</button>
          </a>
            <p className='capsuleDescription'>{description}</p>
            </div>
            {/* image */}
            <a href={link} className="titleLink">
              <img className='capsuleImage hvr-icon-bob' src={img}></img>
            </a>

            <div className='capsuleText col'>
              <a href={link} className="titleLink">
                <h1 className='capsuleTitle'>{title}</h1>
              </a>
          {/* <h2 className='capsuleDate'>{date}</h2> */}
            <a href={git}>
            <button className='git hvr-icon-bob'>github</button>
            </a>
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