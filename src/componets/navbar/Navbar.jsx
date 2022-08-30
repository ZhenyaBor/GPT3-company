import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Logo.svg";
import { Menu } from "./Menu";

export const Navbar = () => {
  const [togleMenu, setTogleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-container">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="gpt3__navbar-links">
          <Menu />
        </ul>
      </div>
      <div className="gpt3__navbar-button">
        <button className="gpt3__navbar-button_action">Sign in</button>
        <button className="gpt3__navbar-button_none">Sign up</button>
        <div className="gpt3__navbar-hiden">
          {togleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              onClick={() => setTogleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={30}
              onClick={() => setTogleMenu(true)}
            />
          )}
        </div>
        {togleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};
