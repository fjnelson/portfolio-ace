import React from "react";
import "./pages.css";
import oldHome from "../images/CSR/old-home.JPG";
import recommendations from "../images/CSR/recommendations.JPG";
import oldNavbar from "../images/CSR/old-navbar.jpg";

export default function CSR() {
  return (
    <div className="CSR-container">
      <div className="CSR-container-title">
        <h1>Minor Web Update for CSR-jobs.com</h1>
      </div>
      <div>
        <p className="CSR-container-blog">
          I was contacted by the owner of CSR-Personnel to do a minor-update to
          their company website. I accepted the role and got to work. The first
          thing I did was I checked out the old site. It didn't look half bad
          already.
        </p>
      </div>
      <div className="old-home-container">
        <img src={oldHome} alt="old home page"></img>
      </div>
      <p className="CSR-container-blog">
        But I did notice a few things right off the bat that we needed to
        update, critically. I put together a recommendations meeting and met
        with the site owner to go over my findings.
      </p>
      <div className="recommendations-container">
        <img src={recommendations} alt="old home page"></img>
      </div>
      <div>
        <p className="CSR-container-blog">
          Next, I got to work. I received documentation on how to access the
          host, called uhost. I made myself familiar with the code and styling.
          But, I wasn't familiar with some of the scripting. The codebase was using a
          local application to set the navbar as well as what looked like HTML4.
        </p>
      </div>
      <div className="old-navbar-container">
        <img src={oldNavbar} alt="old nav bar"></img>
      </div>
    </div>
  );
}