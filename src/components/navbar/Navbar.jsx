import React from "react";
import "./Navbar.css";
import logo from "../images/sf-logo-1 1.png";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav class="navbar">
        <div class="navbar__container">
          <div class="main-content">
            <div class="container container--full-width container--flex container--flex--space-between">
              <div class="logo-container">
                <img src={logo} alt="" className="logo-sf-tech" />
              </div>
              <div class="menu-container" >
                <ul class="menu" id="navbarMenu">
                  <li class="menu__item menu__item--main">
                    <Link to="#">
                      <span
                        class="menu__item__expandable-link"
                        id="services-option"
                      >
                        Services
                      </span>
                    </Link>
                  </li>
                  <li class="menu__item menu__item--main">
                    <Link to="/Industries">
                      <span
                        class="menu__item__expandable-link"
                        id="industries-option"
                      >
                        Industries
                      </span>{" "}
                    </Link>
                  </li>
                  <li class="menu__item menu__item--main">
                    <Link to="/aboutus">
                      <a
                        class="menu__item__link menu__item__expandable-link"
                        href="/portfolio/"
                        id="portfolio-option"
                      >
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li class="menu__item menu__item--main">
                    <Link to="#">
                      <a
                        class="menu__item__link menu__item__expandable-link"
                        href="/products/"
                        id="r-and-d-option"
                      >
                        Recruitment
                      </a>
                    </Link>
                  </li>
                  <li class="menu__item menu__item--main">
                    <Link to="contactus">
                      <span
                        class="menu__item__expandable-link"
                        id="company-option"
                      >
                        Contact us
                      </span>
                    </Link>
                  </li>
                  <li class="menu__item menu__item--language">
                    <span class="current-language">
                      <span class="current-language__text">EN</span>
                      <i class="material-icons current-language__icon current-language__icon--expand">
                        expand_more
                      </i>
                      <i class="material-icons current-language__icon current-language__icon--collapse">
                        expand_less
                      </i>
                    </span>
                    <div class="language-dropdown">
                      <a href="/" class="language-dropdown__option">
                        KR
                      </a>
                      <a href="/" class="language-dropdown__option">
                        JP
                      </a>
                      <a href="/" class="language-dropdown__option">
                        ZH
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>


      </nav>
    </>
  );
}
