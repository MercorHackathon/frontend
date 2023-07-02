import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";



export const SidebarData = [
  {
    title: "Home",
    path: "/empHome",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },

  // {
  //   title: "Your Account",
  //   path: "/account",
  //   icon: <MdIcons.MdAccountCircle/>,
  //   cName: "nav-text"
  // },

  {
    title: "Physical health score",
    path: "/physical-health",
    icon: <MdIcons.MdHealthAndSafety />,
    cName: "nav-text"
  },

  {
    title: "Mental Health Score",
    path: "/mental-health",
    icon: <RiIcons.RiMentalHealthFill />,
    cName: "nav-text"
  },

  // {
  //   title: "Reports",
  //   path: "/reports",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text"
  // },

  
  {
    title: "Logout",
    path: "/logout",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text"
  }
];
