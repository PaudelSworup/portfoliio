import React,{useEffect} from 'react';
import Sdata from './ServiceData';
import "./services.css";

const Services = ({classname}) => {

  useEffect(() => {
    window.addEventListener("scroll", () =>{
        let reveals = document.querySelector(".servicesreveal");
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
    let reveals = document.querySelector(".servicesreveal");
    reveals.classList.add("active");
    };
  },[]);

  return (
      <>

<section className="services" id="services">
        <div className={classname}>
            <h2 className="title">My services </h2>
            <div className="serv-content">
                {Sdata.map((curElem, index)=>{
                    const{id,text,detail,icons} = curElem;
                    return(
                      <div className="card" key={index}>
                            <div className="box">
                                 <i>{icons}</i>
                          <div className="text">{text}</div>
                         <p>{detail}</p>
                        </div>
                     </div>

                    )
                })}

             </div>
        </div>
    </section>
      
      </>
  );
};

export default Services;



