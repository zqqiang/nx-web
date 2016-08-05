import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function ProfileImage() {
    return (
        <div className="box box-primary">
            <div className="box-body box-profile">
                <img 
                    className="profile-user-img img-responsive img-circle" 
                    src="http://placehold.it/128x128/DD4B39/ffffff" 
                    alt="User profile picture"
                />

                <h3 className="profile-username text-center">Ella Fan</h3>
                <p className="text-muted text-center">Credit Analyst</p>
                <ul className="list-group list-group-unbordered">
                    <li className="list-group-item">
                      <b>Followers</b> <a className="pull-right">1,322</a>
                    </li>
                    <li className="list-group-item">
                      <b>Following</b> <a className="pull-right">543</a>
                    </li>
                    <li className="list-group-item">
                      <b>Friends</b> <a className="pull-right">13,287</a>
                    </li>
                </ul>

                <a href="javascript:void(0);" className="btn btn-primary btn-block"><b>Follow</b></a>
            </div>
        </div>
    )
}

function Experience({ icon, title, description }) {
    return (
        <div>
            <strong><i className={"fa fa-" + icon + " margin-r-5"}></i> {title}</strong>
            <p className="text-muted">{description}</p>
            <hr />
        </div>
    )
}

let cscUrl = 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Ecsi%2Eca%2Fstudent%2Fverify%2FstudentBadge%2Edo%3Fcid%3DMzU4NDQ0NA%3D%3D&urlhash=ycDK&trk=profile_certification_company_title'
let sasAdvancedUrl = 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eyouracclaim%2Ecom%2Fbadges%2F1682ab90-dbb5-47a3-8a64-44a42ffa1d6a%2Flinked_in_profile&urlhash=eM3R&trk=profile_certification_company_title'
let sasBaseUrl = 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eyouracclaim%2Ecom%2Fbadges%2Fc4a64ce6-0983-4f3c-9978-c86aff60c4dd%2Flinked_in_profile&urlhash=wnc3&trk=profile_certification_company_title'

function Skills() {
    return (
        <div>
            <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>
            <p>
                <span className="label label-danger">CFA III Candidate</span>
            </p>
            <p>
                <span className="label label-success">
                    <a href={cscUrl}>Canadian Securities Course</a>
                </span>
            </p>
            <p>
                <span className="label label-info">
                    <a href={sasAdvancedUrl}>SAS Certified Advanced Programmer for SAS 9</a>
                </span>
            </p>
            <p>
                <span className="label label-warning">
                    <a href={sasBaseUrl}>SAS Certified Base Programmer for SAS 9</a>
                </span>
            </p>
            <hr />
        </div>
    )
}

function AboutMe() {
    return (
        <div className="box box-primary">
            <div className="box-header with-border">
                <h3 className="box-title">About Me</h3>
            </div>
            <div className="box-body">
                <Experience icon="book" title="Education" description="B.S. in Finance from the Nankai University at Tianjin China" />
                <Experience icon="map-marker" title="Location" description="Burnaby, British Columbia" />
                <Skills />
            </div>
        </div>
    )
}

function Background() {
    return (
        <div className="post">
            <div className="user-block">
                <img className="img-circle img-bordered-sm" src="http://placehold.it/128x128/DD4B39/ffffff" alt="user image" />
                <span className="username">
                    <a href="#">Ella Fan</a>
                    <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                </span>
                <span className="description">Credit Analyst at Volkswagen Finance</span>
            </div>
            <ul>
                <li>Rational, results-driven financial industry professional</li>
                <li>more than seven years of banking, auto finance institutions work experience</li>
                <li>Have rich experience on credit investigations</li>
                <li>proficient knowledge of operational and credit risk management principals</li>
                <li>Very familiar with the policies, rules and regulations of the financial sector</li>
                <li>with a strong ability to identify business risks and credit risks</li>
                <li>Also a team leader with outstanding problem solving skills, ability to work under pressure</li>
                <li>Personal strengths and core competencies</li>
            </ul>
            <ul className="list-inline">
                <li><a href="javascript:void(0);" className="link-black text-sm"><i className="fa fa-share margin-r-5"></i> Share</a></li>
                <li><a href="javascript:void(0);" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5"></i> Like</a></li>
                <li className="pull-right">
                    <a href="javascript:void(0);" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5"></i> Comments (0)</a>
                </li>
            </ul>
            <input className="form-control input-sm" type="text" placeholder="Type a comment" />            
        </div>
    )
}

function Timeline() {
    return (
        <ul className="timeline timeline-inverse">
            <li className="time-label">
                <span className="bg-red">
                    Jan. 2013
                </span>
            </li>
            <li>
                <i className="fa fa-envelope bg-blue"></i>
                <div className="timeline-item">
                    <span className="time"><i className="fa fa-clock-o"></i> Beijing City, China</span>
                    <h3 className="timeline-header"><a href="#">Credit Analyst</a> Volkswagen finance</h3>
                    <div className="timeline-body">
                        <ol>
                            <li>Responsible for credit risk assessment and conduct comprehensive review of the dealers</li>
                            <li>Analyze and find sales, industry rankings, poor repayment records case, avoid credit losses</li>
                            <li>Analysis dealer's financial statements and related information</li>
                            <li>Comment on the wholesale loan applications to ensure the validity, completeness and compliance of the material submitted</li>
                            <li>Monitoring the implementation of the dealer financing business control</li>
                            <li>give guidance and supervision to dealers to improve financial management, standardize the use of financial support, security dealers funding</li>
                            <li>Gather and analyze Volkswagen’s financial services data to help improve corporate banking and credit management system</li>
                            <li>Assist financial business development and design of new products</li>
                            <li>responsible for business operations and collect information to provide a reliable basis for the development of new products and improving existing financing products</li>
                            <li>Improve staffs’understanding of credit laws and regulations</li>
                            <li>in accordance with the requirements of daily management of the loan and help supervise the implementation of the risk management measures</li>
                        </ol>
                    </div>
                    <div className="timeline-footer">
                        <a className="btn btn-primary btn-xs">Read more</a>&nbsp;
                    </div>
                </div>
            </li>            
        </ul>
    )
}

function NavTabs() {
    return (
        <Tabs defaultActiveKey={2} className="nav-tabs-custom" >
            <Tab eventKey={1} title="Background"><Background /></Tab>
            <Tab eventKey={2} title="Experience"><Timeline /></Tab>
            <Tab eventKey={3} title="Settings">Tab 3 content</Tab>
        </Tabs>
    )
}

export default function EllaFan() {
    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileImage />
                        <AboutMe />
                    </div>
                    <div className="col-md-9">
                        <NavTabs />
                    </div>
                </div>
            </section>
        </div>
    )
}
