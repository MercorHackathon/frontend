import React, { useState } from "react";

import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SlidebarData";
import "./navbar.css";

const Navbar = ()=> {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate()
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: "#FFF" }}> {/* to make text color white */}
       
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 onClick={() => navigate('/')} className="title">FIT SCORE</h1>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
             
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
