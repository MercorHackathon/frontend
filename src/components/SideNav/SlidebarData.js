import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },

  {
    title: "Your Account",
    path: "/account",
    icon: <MdIcons.MdAccountCircle/>,
    cName: "nav-text"
  },

  {
    title: "Physical health score",
    path: "/Wishlisr",
    icon: <MdIcons.MdHealthAndSafety />,
    cName: "nav-text"
  },

  {
    title: "Mental Health Score",
    path: "/",
    icon: <RiIcons.RiMentalHealthFill />,
    cName: "nav-text"
  },

  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },

  
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
