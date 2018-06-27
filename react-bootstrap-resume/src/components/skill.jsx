import React, {Component} from "react"

import tableau from "../img/tableau.png"
import excel from "../img/excel.png"
import rlang from "../img/rlang.png"

class Skil extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                            <img className="img-skill" src={tableau} alt="Tableau"/>
                        </li>
                        <li className="list-inline-item">
                            <img className="img-skill" src={excel} alt="Excel"/>
                        </li>
                        <li className="list-inline-item">
                            <img className="img-skill" src={rlang} alt="RLang"/>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Skil