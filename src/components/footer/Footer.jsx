import React from "react";
import logo from "../images/sf-logo-1 1.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <div className="row mb-5 pt-5 ">
            <div className="col-8">
              <img src={logo} alt="" />
              <div className="contact-info">
                <h1>Address</h1>
                <p>26 lane 57 Trung Van, Nam Tu Liem district,Hanoi city</p>
              </div>
              <div className="contact-info">
                <h1>Working Hours:</h1>
                <p>9:00AM To 6:00PM</p>
              </div>
              <div className="contact-info">
                <h1>Contact</h1>
                <p>088 685 54 44</p>
                <p>admin@sf-technologiesgroup.com</p>
              </div>
            </div>
            <div className="col-4 contact-info">
              <h1>MESSAGE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto distinctio magni iusto?
              </p>
              <div>
                <form>
                  <h2 className="fs-3 title-input">Name</h2>
                  <input type="text" className="w-100 input" />
                  <h2 className="fs-3 mt-3 title-input">Email</h2>
                  <input type="text" className="w-100 input" />
                  <h2 className="fs-3 mt-3 title-input">Message</h2>
                  <input type="text" className="input-message w-100" />
                  <button className="btn-send mt-5">
                    <b>SEND</b></button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center  mt-5 mb-5">
              <span>2023 © SF Technologies Group</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
