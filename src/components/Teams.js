import React, { useEffect } from 'react';
import "./teams.css";
import Tdata from './TeamsData';

const Teams = ({classname}) => {

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            let reveals = document.querySelector(".teamsreveal");
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
        let reveals = document.querySelector(".teamsreveal");
        reveals.classList.add("active");
        };
      },[]);
  return (
      <>
      <section className='teams' id='teams'>

      <div className={classname}>

      <h2 className="title">My Teams</h2>

      <div className="carousel">
                <div className="card box">
                {Tdata.map((curElem,index)=>{
                           const{img,classkonam,Name,desc,class1} = curElem;
                           return(
                               <>
                               <div className={class1} key={index}>
                               <img src={img}alt="" />
                               <div className={classkonam}>{Name}</div>
                               <p>{desc}</p>
                               </div>
                               
                               </>
                            
                           )
                       })}
                    
                       
                </div>
     </div>
      </div>
     

      </section>
      </>
  )
};

export default Teams;
