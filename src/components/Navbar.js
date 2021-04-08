import React from "react";
import "../css/navbar.css";
import { AiOutlineGif } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <AiOutlineGif className="icon" />
        </Link>
        <Link to="/trending" className="item">
          Trending
        </Link>
        <Link to="/search" className="item">
          Search
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
