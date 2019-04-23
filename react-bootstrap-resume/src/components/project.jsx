import React, { Component } from "react";

import tableau1 from "../img/tableau1.png";
import tableau2 from "../img/tableau2.png";
import evaluate from "../img/evaluate.png";
import exploryatory from "../img/exploryatory.png";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import dataquality1 from "../img/dataquality1.png";
import dataquality2 from "../img/dataquality2.png";

class Project extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="projects"
      >
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0" />
              <div className="subheading mb-3">
                SSAS: Contoso Retail Project
              </div>
              <div>Introduction</div>
              <p>xxxx</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2019 - April 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0" />
              <div className="subheading mb-3">SSRS:</div>
              <div>Introduction</div>
              <p>xxxx</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 - July 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0" />
              <div className="subheading mb-3">
                Tableau: US Nationwide Flood Trend
              </div>
              <div>Introduction</div>
              <p>Find whether flood influence each state equally?</p>
              <p>
                If not, identify which states suffer the most/least from flood.
                Find states with more than average flood casualty.
              </p>
              <p>
                Identify dangerous group, which has big flood casualty and small
                population relative to other states.
              </p>
              <p>
                Exclude state with downward flood casualty from dangerous group.
              </p>
              <p>
                For states left in dangerous group, find the best relocation
                state for each one with the shortest distance.
              </p>
              <img
                src={tableau1}
                className="img-fluid"
                alt="Tableau Dashboard"
              />
              <img src={tableau2} className="img-fluid" alt="Tableau Trend" />
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2017 - Dec 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0" />
              <div className="subheading mb-3">
                Python3: Air pollution Machine learning and Prediction
              </div>
              <div>Introduction</div>
              <p>
                Find which factors influence pm2.5 concentration and the
                relationship between them.
              </p>
              <p>
                LSTM networks are well-suited to classifying, processing and
                making predictions based on time series data, since there can be
                lags of unknown duration between important events in a time
                series.
              </p>
              <p>
                Python library Keras is well support the LSTM algorithms and is
                great benefit in time series forecasting.
              </p>
              <img src={evaluate} className="img-fluid" alt="Evaluate" />
              <img
                src={exploryatory}
                className="img-fluid"
                alt="Exploryatory"
              />
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2018 - Dec 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0" />
              <div className="subheading mb-3">
                Microsoft Project: Softec College IT Project Management
              </div>
              <div>Introduction</div>
              <p>
                Softec College employs a person on a part-time basis to act as
                facilities coordinator.
              </p>
              <p>
                We envision reducing the amount of paperwork done and the amount
                of time spent on keeping track of bookings and arranging and
                confirming bookings and increasing the convenience for those
                wishing to make bookings by automating the process.
              </p>
              <img src={project1} className="img-fluid" alt="project1" />
              <img src={project2} className="img-fluid" alt="project2" />
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2018 - Apr 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0" />
              <div className="subheading mb-3">
                Data Quality Analyzer: Market Financial Data Clean Project
              </div>
              <div>Introduction</div>
              <p>
                The State Contract and Procurement Registration System (SCPRS)
                was established in 2003, as a centralized database of
                information on State contracts and purchases over $5000.
              </p>
              <p>
                Find out the trend of the state’s purchases and the future
                financial budget.
              </p>
              <img
                src={dataquality1}
                className="img-fluid"
                alt="dataquality1"
              />
              <img
                src={dataquality2}
                className="img-fluid"
                alt="dataquality2"
              />
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2018 - Dec 2018</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
