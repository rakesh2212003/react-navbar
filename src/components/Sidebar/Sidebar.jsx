import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faCircleInfo,
    faHandshakeAngle,
    faAddressBook,
    faBars
}from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            path:"/information",
            name:"Information",
            icon: <FontAwesomeIcon icon={faCircleInfo} />
        },
        {
            path:"/guide",
            name:"Guide",
            icon: <FontAwesomeIcon icon={faHandshakeAngle} />
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FontAwesomeIcon icon={faAddressBook} />
        }
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FontAwesomeIcon icon={faBars} onClick={ toggle }/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;