import { LOGO_URL } from "../utills/constants";
import { useState } from "react";

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
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
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