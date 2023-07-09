import React from "react";
import Screenshot from "../assets/Screenshot.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <img src={Screenshot} alt="img" />
      <div id="right-nav">
        <button>Book a Demo</button>
        <button><AiOutlineMenu /></button>
      </div>
    </nav>
  );
};

export default Navbar;
