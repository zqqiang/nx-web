import React, { Component } from "react";

import tableau from "../img/tableau.png";
import excel from "../img/excel.png";
import rlang from "../img/rlang.png";
import sqlServer from "../img/sqlServer.png";
import sas from "../img/sas.jpg";
import ssas from "../img/ssas.jpg";
import ssrs from "../img/ssrs.png";
import python from "../img/python.png";
import datawarehouse from "../img/datawarehouse.png";

class Skil extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="skills"
      >
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <img className="img-skill" src={tableau} alt="Tableau" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={excel} alt="Excel" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={rlang} alt="RLang" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={sqlServer} alt="SQL Server" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={sas} alt="SAS" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={ssas} alt="SSAS" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={ssrs} alt="SSRS" />
            </li>
            <li className="list-inline-item">
              <img className="img-skill" src={python} alt="PYTHON" />
            </li>
            <li className="list-inline-item">
              <img
                className="img-skill"
                src={datawarehouse}
                alt="Data Warehouse"
              />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              Experience in using Microsoft database technologies. (e.g. SQL
              Server, SSAS, SSRS)
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Proficiency with Python including various statistical packages
              (ex. Pandas, Matplotlib, NumPy, SciPy)
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Experience with SQL and the ability to create complex queries and
              joins
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              High level of proficiency with Tableau, Excel
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Strong knowledge of R
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Proficient in Data Warehousing and BI
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              CSC Passed &amp; Advanced SAS
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Financial academic background{" "}
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Internal and external coordination{" "}
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Staff training and team spirit{" "}
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Credit management and investigation
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Familiar with financial products\regulations
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Operational and financial risk control
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Information integration and logical analysis
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Skil;
