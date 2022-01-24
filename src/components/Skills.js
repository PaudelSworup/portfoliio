import React,{useEffect} from 'react';
import "./skills.css";
import skillData from './SkillsData';

const Skills = ({classname}) => {

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            let reveals = document.querySelector(".skillsreveal");
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
        let reveals = document.querySelector(".skillsreveal");
        reveals.classList.add("active");
        };
      },[]);
  return (
      <>
       <section className="skills" id="skills">
       <div className={classname}>
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="column left left1">
                    <div className="text">My Creative  skills and experience</div>
                    <p>Hey, this is Sworup kc and currently I am studying on kathmandu college of technology on BCA facuty and I am intrested in web and mobile application development and currently I am learing React and Android.</p>
                    <a href="#">Read More</a>
                </div>
                <div className="column right right1">
                    {skillData.map((curElem,index)=>{
                        const{class1,class2,class3,span1,span2} = curElem;
                        return(
                            <div className={class1} key={index}>
                                <div className={class2}>
                                    <span>{span1}</span>
                                    <span>{span2}</span>
                                </div>
                                <div className={class3}></div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
      </section>
      </>
  );
};

export default Skills;
