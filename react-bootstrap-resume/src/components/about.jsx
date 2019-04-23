import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">
            Ruijia (Ella)
            <span className="text-primary"> Fan</span>
          </h1>
          <div className="subheading mb-5">
            3233 East 7th Ave · Vancouver, BC V5M 1V8 · (604) 446-8039 ·
            <a href="mailto:name@email.com">ruijia.ella.fan@gmail.com</a>
          </div>
          <p className="mb-5">
            BCIT Applied Data Analytics Certificate, CFA III Candidate, Senior
            Credit Analyst
          </p>
          <p className="mb-5">
            Expertise in extracting data and communicating findings clearly to
            non-technical audiences in timely fashion. Familiarity with querying
            tools such as SQL, and Strong background with BI/analytics tools
            like Tableau. Strong investigative skills, data intuition, and
            attention to detail. Strong mathematical, analytic and problem
            solving ability. Comfort manipulating, blending and analyzing
            complex, high-volume, high-dimensionality data from varying sources.
            Problem-solving skills - analyze the data, identify problem areas
            and provide solutions with strong attention to detail.
          </p>
          <p className="mb-5">
            Rational results-driven financial industry professional, more than
            nine years of banking, auto finance institutions work experience.
            Have rich experience on credit investigations; proficient knowledge
            of operational and credit risk management principals. Very familiar
            with the policies, rules and regulations of the financial sector,
            with a strong ability to identify business risks and credit risks.
            Also a team leader with outstanding problem solving skills, ability
            to work under pressure.Personal strengths and core competencies.
          </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-weixin fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-messenger fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default About;
