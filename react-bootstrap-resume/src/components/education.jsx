import React, { Component } from "react";

import bcitLogo from "../img/bcit.png";

class Education extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education"
      >
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">British Columbia Institute of Technology</h3>
              <div className="subheading mb-3">Certificate</div>
              <div>Applied Data Analytics</div>
              <p>GPA: 90</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2016 - Jun 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Nanka University</h3>
              <div className="subheading mb-3">Bachelor's degree</div>
              <div>Finance</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2004 - May 2008</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
