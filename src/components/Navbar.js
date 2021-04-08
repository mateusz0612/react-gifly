import React from "react";
import "../css/navbar.css";
import { AiOutlineGif } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="icon">
          <AiOutlineGif />
        </li>
        <li className="item">Trending</li>
        <li className="item">Search</li>
      </ul>
    </nav>
  );
};

export default Navbar;
