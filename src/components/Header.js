import { LOGO_URL } from "../utills/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            alt="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/about">About us</Link>
            </li>
            <li>
                <Link to = "/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login"
                onClick={() => {
                    btnNameReact === "Login" ?
                    setBtnNameReact("Logout") :
                    setBtnNameReact("Login")
                    ;
                }}
            >
                {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;