import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setToogle(!toggle);
  const closeMobileMenu = () => setToogle(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            logo <i className="fab fa-typo3" />
          </Link>
          <div className="navbar__burger" onClick={handleClick}>
            <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={toggle ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>{" "}
            <li className="navbar__item">
              <Link
                to="/services"
                className="navbar__link"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/products"
                className="navbar__link"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/sign-up"
                className="navbar__link--mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle={"btn--outline"} path={"/sign-up"}>
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
