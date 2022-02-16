import React, { useContext } from "react";
import "./navbar.css";
import Icon from "../../../../src/assets/svg 3.svg";
import Icon1 from "../../../assets/$.svg";
import Icon3 from "../../../assets/Vector.svg";
import Icon4 from "../../../assets/svg 19.svg";
import { Link } from "react-router-dom";
import { currencyContext } from "../../../context/currencyContext";

//make navbar with filter components
const Navbar = ({ setCategoryName }) => {
  const { data, setChoosenCurrency } = useContext(currencyContext);

  const onSelectClick = (event) => {
    const selectedCurrency = event.target.value;

    if (selectedCurrency === "USD") {
      setChoosenCurrency(0);
    } else if (selectedCurrency === "GBP") {
      setChoosenCurrency(1);
    } else if (selectedCurrency === "AUD") {
      setChoosenCurrency(2);
    } else if (selectedCurrency === "JPY") {
      setChoosenCurrency(3);
    } else if (selectedCurrency === "RUB") {
      setChoosenCurrency(4);
    } else {
      setChoosenCurrency(0);
    }
  };

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
            <select className="selector" onClick={onSelectClick}>
              {data?.currencies.map((currency) => (
                <option key={currency.symbol} value={currency.label}>
                  {currency.symbol} {currency.label}
                </option>
              ))}
            </select>
          </div>
          <Link to="/cart">
            <div className="rect_icon">
              <img src={Icon3} alt="/" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
