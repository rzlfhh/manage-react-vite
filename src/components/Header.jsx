import React from "react";
import logoimg from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

function Header() {
  return (
    <header
      className="mt-10 flex justify-between items-center border
    "
    >
      <a href="#">
        <img src={logoimg} alt="logo" width="108" />
      </a>

      <div>
        <button>
          <img src={hamburger} alt="hamburger" width="24" />
        </button>
      </div>
    </header>
  );
}

export default Header;
