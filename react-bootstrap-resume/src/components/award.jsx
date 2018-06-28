import React, {Component} from "react"

class Award extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                <div className="my-auto">
                    <h2 className="mb-5">Awards &amp; Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            BCIT - Applied Data Analytics
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            CFA Level III Candidate
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            Canadian Securities Course
                        </li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            SAS Certified Advanced Programmer for SAS 9
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Award