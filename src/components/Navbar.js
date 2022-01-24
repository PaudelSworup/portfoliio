import React, { useState,useEffect } from 'react';
import "./navbar.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './MenuItems';

const Navbar = () => {
    const[show , handleShow] = useState(false);
    const[toggle , setToggle] = useState(false);
   

    useEffect(() => {
      window.addEventListener("scroll", () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
      });
    
      return () => {
      window.removeEventListener("scroll");
      };
    }, []);

    const Bars = () =>{
        setToggle(true);
        console.log('clicked');
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');

        
       
        if(bars_icon.style.display = 'flex'){
            bars_icon.style.display = 'none';
            cross_icon.style.display = 'flex';
        }else{
            bars_icon.style.display = 'flex';
        }
    }

    const Times = () =>{
        setToggle(false);
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');
        

        if(cross_icon.style.display = 'flex'){
            cross_icon.style.display = 'none';
            bars_icon.style.display = 'flex';
        }else{
            cross_icon.style.display = 'flex';
        }
    }

    
    
  return (
      <>
      <nav className={`navbar ${show && "navblack"}`}>
          <div className='nav-width  max-width'>
                <div className='logo'>
                    <a href="#" alt="" >Port<span>folio.</span></a>
                </div>
                <ul className={toggle ? 'menu active' : 'menu'}>
                    {data.map((curElem, index) =>{
                        const{title,url} = curElem;
                        return(
                        <li key={index}>
                             <a href={url}>{title}</a>
                        </li>
                        );
                    })}

                </ul>
                <div className="menu-btn">
               <i onClick={ ()=>Bars()} id="bars" className='bars-icon' ><FontAwesomeIcon   icon={faBars }  /></i>
                <i onClick={()=>Times()} id="cross" className='cross-icon'><FontAwesomeIcon    icon={faTimes } /></i>
                </div>
          </div>
      </nav>
      

      
      </>
  )
};

export default Navbar;
