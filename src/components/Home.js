import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import "./home.css";

const Home = () => {
  return (
      <>
        <section className="home" id="home">
        <div className="home-width  max-width ">
            <div className="home-content">
                <div className="text-1 title1">Hello, my name is</div>
                <div className="text-2 title2 ">Sworup Kc</div>
                <div className="text-3"><span className='span'>I'm a</span ><span className='span2'><Typewriter 
                words={[' Web Developer', ' Fast Learnere', ' Web Designer', ' Tech Enthusiast']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000} /></span></div>
               <button>Hire me</button> 
            </div>
        </div>
    </section>
    
   
      </>
  );
};

export default Home;


{/* <div className="text-3">And <span><Typewriter options={
  {autoStart:true,
    loop:true,
    delay:40,
    strings:[
        "I'm a Fast Learner",
        "I'm a Web Developer",
        "I'm a Web Designer",
        "I'm a Web Developer"

    ]
}} /></span></div> */}

 <Typewriter 
words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  
                
                />
