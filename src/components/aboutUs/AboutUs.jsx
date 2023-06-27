import React from "react";
import "./AboutUs.css";
import imgBackgroud from "../images/Group 8 (2).png";

export default function AboutUs() {
  return (
    <>
      <img src={imgBackgroud} alt="" className="w-100" />
      <div className="container">
        <div className="row">
          <h1 className="text-center title-about-us">ABOUT US</h1>
          <div className="col-12">
            <div className="row">
              <div className="col-9 container-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse nec purus ex. Sed euismod enim lectus, et
                  facilisis risus viverra id. Sed eget ipsum vitae sapien
                  sodales accumsan vitae et purus. Pellentesque egestas dui sem,
                  vitae cursus odio sollicitudin vel. Vivamus dui est, dignissim
                  vitae finibus eget, iaculis quis nisi. Nulla facilisi. Mauris
                  ultrices condimentum sapien, id pulvinar tortor vehicula eget.
                  Vestibulum faucibus pharetra lectus in tristique. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Pellentesque vel
                  est a augue luctus mollis at quis diam. Etiam ullamcorper
                  tempor consequat. Pellentesque iaculis tincidunt nibh, sit
                  amet euismod eros elementum sit amet.{" "}
                </p>
              </div>
              <div className="col-3 img-content">
              </div>
            </div>
            <div className="row row-conten-about-us">
            <div className="col-3 img-content">
              </div>
              <div className="col-9 container-content float-right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse nec purus ex. Sed euismod enim lectus, et
                  facilisis risus viverra id. Sed eget ipsum vitae sapien
                  sodales accumsan vitae et purus. Pellentesque egestas dui sem,
                  vitae cursus odio sollicitudin vel. Vivamus dui est, dignissim
                  vitae finibus eget, iaculis quis nisi. Nulla facilisi. Mauris
                  ultrices condimentum sapien, id pulvinar tortor vehicula eget.
                  Vestibulum faucibus pharetra lectus in tristique. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Pellentesque vel
                  est a augue luctus mollis at quis diam. Etiam ullamcorper
                  tempor consequat. Pellentesque iaculis tincidunt nibh, sit
                  amet euismod eros elementum sit amet.{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center build-website">
                <h1>
                Build your dream website today
                </h1>
                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
