import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {


  return (
    <div className="">
      <header>
        <div className="left">
          <img
            src="https://theceopublication.com/wp-content/uploads/2021/04/Netflix-snags-seven-awards-which-doubles-its-all-time-Oscars-tally.png"
            alt=""
          />
        </div>
        <div className="center">
          <ul>
            <li className="home">
              <b>Home</b>
            </li>
            <li>TV shows</li>
            <li>Originals</li>
            <li>Movies</li>
            <li>Recental added</li>
          </ul>
        </div>
        <div className="right">
          <i class="fal fa-bell"></i>
          <img
            src="https://static.toiimg.com/photo/64134961.cms"
            alt="User Profile"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
