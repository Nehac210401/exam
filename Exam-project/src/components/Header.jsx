import { NavLink } from "react-router-dom";

import './HeadFoot.css';

function Header() {
  const navItems = [
    {name: "Home", path: "/"},
    {name: "Books", path: "/books"},
    {name : "Contact Us", path: "/contact"},
    {name : "Search", path :"/search", icon: "fa-solid fa-magnifying-glass"},  
  ];
  return (
    <header>
      <ul className="navheader">
        {navItems.map((item) => 
        <li key={item.path}>
          <NavLink to={item.path}
          className={({ isActive }) => (isActive ? "btn active" : "btn")}>
            {item.name} {item.icon && <i className={item.icon}></i>}
            </NavLink>
            </li>
            )}
          </ul>
         </header>
         );
       }

      export default Header;

