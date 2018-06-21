import React, {Component} from "react"

class About extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">
                        Ella
                        <span className="text-primary"> Fan</span>
                    </h1>
                    <div className="subheading mb-5">3233 East 7th Ave · Vancouver, BC V5M 1V8 · (604) 446-8039 ·
                        <a href="mailto:name@email.com">ruijia.ella.fan@gmail.com</a>
                    </div>
                    <p className="mb-5">Data Analysis with Business Intelligence SSRS, SQL
                        Server, Tableau, Advanced Excel, R, DQ Analyzer, SAS. Nine year plus of
                        banking, auto finance institutions work experience.</p>
                    <ul className="list-inline list-social-icons mb-0">
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-weixin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-messenger fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default About