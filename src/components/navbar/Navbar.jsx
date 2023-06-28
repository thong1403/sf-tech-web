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
                <Link to='/sf-tech-web'>
                <img src={logo} alt="" className="logo-sf-tech" />
                </Link>
              </div>
              <div class="menu-container">
                <ul class="menu">
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
                      <a href="/sf-tech-web" class="language-dropdown__option">
                        KR
                      </a>
                      <a href="/sf-tech-web" class="language-dropdown__option">
                        JP
                      </a>
                      <a href="/sf-tech-web" class="language-dropdown__option">
                        ZH
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <input id="mobileMenu" type="checkbox" />
          <label for="mobileMenu" class="mobile-hambuger">
            <div class="hambuger-button hambuger-button--mobile">
              <span></span> <span></span> <span></span> <span></span>
            </div>
          </label>
        </div>
        <div class="navbar__mobile-menu">
          <div class="mask-navbar container container--full-width container--flex container--flex--space-between">
            <div class="logo-container">
              <a class="logo" href="/">
                <img
                  class="logo"
                  src="https://ntq.com.vn/media/DoNX8qOhRRaEZCDVbfOm"
                  alt="NTQ SOLUTION"
                />
              </a>
            </div>
          </div>
          <div class="mobile-menu">
            <div class="mobile-menu__option container container--full-width mobile-menu__item--search">
              <div class="search-box">
                <input class="input" placeholder="What are you looking for?" />
                <div class="btn search">
                  <img
                    class="fa fa-search fa-search-mobile"
                    src="/website/2022/11/assets/search-mobile.f485d8.png"
                    alt="youtube"
                  />
                </div>
                <div class="btn arrow">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
                <input type="checkbox" id="toggle" />
                <input id="mobileMenu" type="checkbox" />
                <label for="mobileMenu" class="custom-menu">
                  <div class="hambuger-button hambuger-button--mobile">
                    <span></span> <span></span> <span></span> <span></span>
                  </div>
                </label>
              </div>
            </div>
            <div class="mobile-menu__option">
              <div class="mobile-menu__option__expandable">
                <div class="container container--full-width display-text">
                  <span>Services</span>
                  <span class="material-icons display-text__expand-icon">
                    expand_more
                  </span>
                  <span class="material-icons display-text__collapse-icon">
                    expand_less
                  </span>
                </div>
                <div class="expand-area">
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/business-technology-consulting/"
                  >
                    Business Technology Consulting
                  </a>
                  <div class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child display-text-child">
                    <span>Software Development</span>
                    <span class="material-icons display-text-child__expand-icon">
                      expand_more
                    </span>
                    <span class="material-icons display-text-child__collapse-icon">
                      expand_less
                    </span>
                  </div>
                  <div class="expand-area-child">
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/system-integration/"
                    >
                      System Integration
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/enterprise-software-development/"
                    >
                      Enterprise Software Development
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/website-application/"
                    >
                      Website Application Development
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/mobile-application/"
                    >
                      Mobile Application Development
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/cloud-based-service/"
                    >
                      Cloud based service
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/dedicated-development-team/"
                    >
                      Dedicated Development Team
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/ux-ui-design/"
                    >
                      UX/UI Design
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/qa-testing/"
                    >
                      QA Testing
                    </a>
                  </div>
                  <div class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child display-text-child">
                    <span>New Technologies</span>
                    <span class="material-icons display-text-child__expand-icon">
                      expand_more
                    </span>
                    <span class="material-icons display-text-child__collapse-icon">
                      expand_less
                    </span>
                  </div>
                  <div class="expand-area-child">
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/artificial-intelligence-service/"
                    >
                      AI/Machine Learning
                    </a>
                    <a
                      class="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child"
                      href="/internet-of-things/"
                    >
                      IoT
                    </a>
                  </div>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/maintenance-services/"
                  >
                    Maintenance and Support
                  </a>
                </div>
              </div>
            </div>
            <div class="mobile-menu__option">
              <div class="mobile-menu__option__expandable">
                <div class="container container--full-width display-text">
                  <span>Industries</span>
                  <span class="material-icons display-text__expand-icon">
                    expand_more
                  </span>
                  <span class="material-icons display-text__collapse-icon">
                    expand_less
                  </span>
                </div>
                <div class="expand-area">
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/bfsi/"
                  >
                    BFSI (Bank, Finance, Insurance)
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/healthcare-software-development/"
                  >
                    Healthcare
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/travel-logistics/"
                  >
                    Travel/ Logistic
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/e-commerce/"
                  >
                    Ecommerce
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/social-platform/"
                  >
                    Social
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/business-process-application/"
                  >
                    Business Process Application
                  </a>
                </div>
              </div>
            </div>
            <div class="mobile-menu__option">
              <a
                class="container container--full-width mobile-menu__option__link"
                href="/portfolio/"
              >
                Portfolio
              </a>
            </div>
            <div class="mobile-menu__option">
              <a
                class="container container--full-width mobile-menu__option__link"
                href="/products/"
              >
                Products
              </a>
            </div>
            <div class="mobile-menu__option">
              <div class="mobile-menu__option__expandable">
                <div class="container container--full-width display-text">
                  <span>Company</span>
                  <span class="material-icons display-text__expand-icon">
                    expand_more
                  </span>
                  <span class="material-icons display-text__collapse-icon">
                    expand_less
                  </span>
                </div>
                <div class="expand-area">
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/about-us/"
                  >
                    About Us
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="https://career.ntq.com.vn/"
                  >
                    Career
                  </a>
                </div>
              </div>
            </div>
            <div class="mobile-menu__option">
              <div class="mobile-menu__option__expandable">
                <div class="container container--full-width display-text">
                  <span>Insight</span>
                  <span class="material-icons display-text__expand-icon">
                    expand_more
                  </span>
                  <span class="material-icons display-text__collapse-icon">
                    expand_less
                  </span>
                </div>
                <div class="expand-area">
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/blog/"
                  >
                    Blog
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="/newsroom/"
                  >
                    Newsroom
                  </a>
                </div>
              </div>
            </div>
            <div class="mobile-menu__option container container--full-width">
              <a class="mobile-menu__option__link" href="/contact-us/">
                Contact us
              </a>
            </div>
            <div class="mobile-menu__option">
              <div class="mobile-menu__option__expandable">
                <div class="container container--full-width display-text">
                  <span>LANGUAGES</span>
                  <span class="material-icons display-text__expand-icon">
                    expand_more
                  </span>
                  <span class="material-icons display-text__collapse-icon">
                    expand_less
                  </span>
                </div>
                <div class="expand-area">
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="https://kr.ntq.com.vn/"
                  >
                    Korean
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="https://jp.ntq.com.vn/"
                  >
                    Japanese
                  </a>
                  <a
                    class="container container--full-width mobile-menu__option__link mobile-menu__option__link--child"
                    href="https://ntq.com.hk/?utm_source=ntqsolution&amp;utm_medium=language"
                  >
                    Simplified Chinese
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar__site-map">
          <div class="bottom-shadow">
            <div class="mask-navbar container container--full-width container--flex container--flex--space-between">
              <div class="logo-container">
                <a class="logo" href="/">
                  <img
                    class="logo--primary"
                    src="https://ntq.com.vn/media/DoNX8qOhRRaEZCDVbfOm"
                    alt="NTQ SOLUTION"
                  />
                </a>
              </div>
              <div class="menu-container">
                <ul class="menu">
                  <li class="menu__item">
                    <a class="button button--primary" href="/contact-us/">
                      Contact us
                    </a>
                  </li>
                  <li class="menu__item menu__item--language menu__item--language--mask">
                    <span class="current-language">
                      <span class="current-language__text">EN</span>
                      <i class="material-icons current-language__icon current-language__icon--expand">
                        expand_more
                      </i>
                      <i class="material-icons current-language__icon current-language__icon--collapse">
                        expand_less
                      </i>
                    </span>
                    <div class="language-dropdown language-dropdown--site-map language-dropdown--site-map--mask">
                      <a
                        href="https://kr.ntq.com.vn/"
                        class="language-dropdown__option language-dropdown__option--mask"
                      >
                        KR
                      </a>
                      <a
                        href="https://jp.ntq.com.vn/"
                        class="language-dropdown__option language-dropdown__option--mask"
                      >
                        JP
                      </a>
                      <a
                        href="https://ntq.com.hk/?utm_source=ntqsolution&amp;utm_medium=language"
                        class="language-dropdown__option language-dropdown__option--mask"
                      >
                        ZH
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="navbar__site-map__content container container--full-width">
            <div class="navbar__site-map__content__grid grid grid--c4">
              <div class="site-map-column">
                <div class="site-map-column__heading">Services</div>
                <div class="site-map-column__detail">
                  <div class="site-map-item">
                    <a
                      class="item-link"
                      href="/business-technology-consulting/"
                    >
                      Business Technology Consulting
                    </a>
                  </div>
                  <div class="site-map-item">
                    <div class="item-expandable">
                      <span>Software Development</span>
                      <i class="fas fa-chevron-down item-expandable__expand-icon"></i>
                      <i class="fas fa-chevron-up item-expandable__collapse-icon"></i>
                    </div>
                    <div class="expanded-content">
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/system-integration/"
                        >
                          System Integration
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/enterprise-software-development/"
                        >
                          Enterprise Software Development
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/website-application/"
                        >
                          Website Application Development
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/mobile-application/"
                        >
                          Mobile Application Development
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/cloud-based-service/"
                        >
                          Cloud based service
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/dedicated-development-team/"
                        >
                          Dedicated Development Team
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/ux-ui-design/"
                        >
                          UX/UI Design
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/qa-testing/"
                        >
                          QA Testing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="site-map-item">
                    <div class="item-expandable">
                      <span>New Technologies</span>
                      <i class="fas fa-chevron-down item-expandable__expand-icon"></i>
                      <i class="fas fa-chevron-up item-expandable__collapse-icon"></i>
                    </div>
                    <div class="expanded-content">
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/artificial-intelligence-service/"
                        >
                          AI/Machine Learning
                        </a>
                      </div>
                      <div class="expanded-content__item">
                        <a
                          class="expanded-content__item__link"
                          href="/internet-of-things/"
                        >
                          IoT
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/maintenance-services/">
                      Maintenance and Support
                    </a>
                  </div>
                </div>
              </div>
              <div class="site-map-column">
                <div class="site-map-column__heading">Industries</div>
                <div class="site-map-column__detail">
                  <div class="site-map-item">
                    <a class="item-link" href="/bfsi/">
                      BFSI (Bank, Finance, Insurance)
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a
                      class="item-link"
                      href="/healthcare-software-development/"
                    >
                      Healthcare
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/travel-logistics/">
                      Travel/ Logistic
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/e-commerce/">
                      Ecommerce
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/social-platform/">
                      Social
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/business-process-application/">
                      Business Process Application
                    </a>
                  </div>
                </div>
              </div>
              <div class="site-map-column">
                <div class="site-map-column__heading">Products</div>
                <div class="site-map-column__detail">
                  <div class="site-map-item">
                    <a class="item-link" href="/products/#enkomm">
                      enKomm
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/products/#konia">
                      KoniaLMS
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/products/#dentalflow">
                      DentalFlow
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/products/#zoro-bike">
                      Zoro Bike
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/products/#iluton">
                      iLUTon
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/products/#shopify-solutions">
                      Shopify Solutions
                    </a>
                  </div>
                </div>
              </div>
              <div class="site-map-column">
                <div class="site-map-column__heading">Company</div>
                <div class="site-map-column__detail">
                  <div class="site-map-item">
                    <a class="item-link" href="https://ntq.com.vn/about-us/">
                      About
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="https://career.ntq.com.vn/">
                      Career
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/portfolio/">
                      Portfolio
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/blog/">
                      Blog
                    </a>
                  </div>
                  <div class="site-map-item">
                    <a class="item-link" href="/privacy/">
                      Privacy Statement
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar__site-map__content__contact"></div>
          </div>
        </div>
        <div class="navbar__expand-menu">
          <div class="detail-content" id="services-option-detail">
            <div class="detail-content__section container container--full-width">
              <div class="detail-content__image">
                <img
                  src="https://ntq.com.vn/media/KvhwE59Sb6DpCUEVvCU4"
                  alt="services"
                />
              </div>
              <div class="detail-content__child-option">
                <div class="child-option-container">
                  <div class="parent-option-title">Services</div>
                  <div class="child-option">
                    <a
                      class="child-option__link"
                      href="/business-technology-consulting/"
                    >
                      Business Technology Consulting
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <div class="child-option__title">
                      Software Development <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <div class="grand-child-option">
                    <div class="parent-option-title">Software Development</div>
                    <div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/system-integration/"
                        >
                          System Integration
                        </a>
                      </div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/enterprise-software-development/"
                        >
                          Enterprise Software Development
                        </a>
                      </div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/website-application/"
                        >
                          Website Application Development
                        </a>
                      </div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/mobile-application/"
                        >
                          Mobile Application Development
                        </a>
                      </div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/cloud-based-service/"
                        >
                          Cloud based service
                        </a>
                      </div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/dedicated-development-team/"
                        >
                          Dedicated Development Team
                        </a>
                      </div>
                      <div class="child-option">
                        <a class="child-option__link" href="/ux-ui-design/">
                          UX/UI Design
                        </a>
                      </div>
                      <div class="child-option">
                        <a class="child-option__link" href="/qa-testing/">
                          QA Testing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="child-option">
                    <div class="child-option__title">
                      New Technologies <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <div class="grand-child-option">
                    <div class="parent-option-title">New Technologies</div>
                    <div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/artificial-intelligence-service/"
                        >
                          AI/Machine Learning
                        </a>
                      </div>
                      <div class="child-option">
                        <a
                          class="child-option__link"
                          href="/internet-of-things/"
                        >
                          IoT
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="child-option">
                    <a class="child-option__link" href="/maintenance-services/">
                      Maintenance and Support
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-content" id="industries-option-detail">
            <div class="detail-content__section container container--full-width">
              <div class="detail-content__image">
                <img
                  src="https://ntq.com.vn/media/KvhwE59Sb6DpCUEVvCU4"
                  alt="industries"
                />
              </div>
              <div class="detail-content__child-option">
                <div class="child-option-container">
                  <div class="parent-option-title">Industries</div>
                  <div class="child-option">
                    <a class="child-option__link" href="/bfsi/">
                      BFSI (Bank, Finance, Insurance)
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a
                      class="child-option__link"
                      href="/healthcare-software-development/"
                    >
                      Healthcare
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a class="child-option__link" href="/travel-logistics/">
                      Travel/ Logistic
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a class="child-option__link" href="/e-commerce/">
                      Ecommerce
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a class="child-option__link" href="/social-platform/">
                      Social
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a
                      class="child-option__link"
                      href="/business-process-application/"
                    >
                      Business Process Application
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-content" id="company-option-detail">
            <div class="detail-content__section container container--full-width">
              <div class="detail-content__image">
                <img
                  src="https://ntq.com.vn/media/KvhwE59Sb6DpCUEVvCU4"
                  alt="company"
                />
              </div>
              <div class="detail-content__child-option">
                <div class="child-option-container">
                  <div class="parent-option-title">Company</div>
                  <div class="child-option">
                    <a class="child-option__link" href="/about-us/">
                      About Us
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a
                      class="child-option__link"
                      href="https://career.ntq.com.vn/"
                    >
                      Career
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-content" id="insight-option-detail">
            <div class="detail-content__section container container--full-width">
              <div class="detail-content__image">
                <img
                  src="https://ntq.com.vn/media/U6N71e67TISPvIWOXc57"
                  alt="insight"
                />
              </div>
              <div class="detail-content__child-option">
                <div class="child-option-container">
                  <div class="parent-option-title">Insight</div>
                  <div class="child-option">
                    <a class="child-option__link" href="/blog/">
                      Blog
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div class="child-option">
                    <a class="child-option__link" href="/newsroom/">
                      Newsroom
                    </a>
                  </div>
                  <div class="grand-child-option"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
