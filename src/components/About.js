import React, {useEffect} from 'react';
import "./about.css";
const About = ({classname}) => {
    
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            let reveals = document.querySelector(".aboutreveal");
            let windowHeight = window.innerHeight;
            let elementTop = reveals.getBoundingClientRect().top;
            let elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals.classList.add("active");
              } else {
                reveals.classList.remove("active");
              }
        });
        return () => {
        let reveals = document.querySelector(".aboutreveal");
        reveals.classList.add("active");
        };
      },[]);


  return (
      <>
      <section className="about" id="about">
        <div className={classname} >
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="/images/sk1.jpg" alt="" />
                </div>
                <div className="column right">
                    <div className="text">I'm Sworup Khatri and I'm a fast learner and frontend <span>React developer</span></div>
                    <p>Welcome viewers! This is Sworup Kc currently living at Bhaktapur and learning BCA at kathmandu college of technology. I love to design and develop websites and mobile applications and besides from that I love to sing a song, to watch and play football and love to travel.  </p>
                    <button>Download CV</button>
                </div>
                </div>
        </div>
    </section>
      </>
  );
};

export default About;
