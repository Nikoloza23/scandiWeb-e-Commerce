import React from "react";
import "./navbar.css";
import Icon from "../../../../src/assets/svg 3.svg";
import Icon1 from "../../../assets/$.svg";
import Icon2 from "../../../assets/line.svg";
import Icon3 from "../../../assets/Vector.svg";
import Icon4 from "../../../assets/svg 19.svg";
import { Link } from "react-router-dom";

//make navbar with filter components
const Navbar = ({ setCategoryName }) => {
  return (
    <div>
      <div className="nav_container">
        <div className="nav_container_item left_nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="color" onClick={() => setCategoryName("all")}>
              All
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="color" onClick={() => setCategoryName("clothes")}>
              CLOTHES
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="color" onClick={() => setCategoryName("tech")}>
              TECH
            </div>
          </Link>
        </div>
        <div className="nav_container_item mid_nav">
          <div className="mid_nav_1_img">
            <img src={Icon} alt="/" />
          </div>
          <div className="mid_nav_2_img">
            <img src={Icon4} alt="/" />
          </div>
        </div>
        <div className="nav_container_item right_nav">
          <div className="dollar_icon">
            <img src={Icon1} alt="/" />
          </div>
          <div className="arrow_icon">
            <img src={Icon2} alt="/" />
          </div>
          <div className="rect_icon">
            <img src={Icon3} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
