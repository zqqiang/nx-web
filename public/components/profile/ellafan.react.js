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

function TimelineItemRow({ text }) {
    return (<li>{text}</li>)
}

function TimelineItem({ icon, color, city, title, company, description, button }) {
    let rows = [];
    description.forEach((item, index) => {
        rows.push(<TimelineItemRow text={item} key={index}/>)
    })
    return (
        <li>
            <i className={"fa fa-" + icon + " bg-" + color}></i>
            <div className="timeline-item">
                <span className="time"><i className="fa fa-clock-o"></i> {city}</span>
                <h3 className="timeline-header"><a href="#">{title}</a> {company}</h3>
                <div className="timeline-body">
                    <ol>{rows}</ol>
                </div>
                <div className="timeline-footer">
                    <a className={"btn btn-" + button + " btn-xs"}>Read more</a>
                </div>
            </div>
        </li>
    )
}

function Timelabel({ color, time }) {
    return (
        <li className="time-label">
            <span className={"bg-" + color}>
                {time}
            </span>
        </li>
    )
}

function TimeEnd() {
    return (
        <li>
            <i className="fa fa-clock-o bg-gray"></i>
        </li>
    )
}

function Timeline() {
    return (
        <ul className="timeline timeline-inverse">
            <Timelabel color="red" time="Jan. 2013"/>
            <TimelineItem
                icon="envelope"
                color="blue"
                city="Beijing, China"
                title="Credit Analyst"
                company="Volkswagen finance"
                description={[
                    "Responsible for credit risk assessment and conduct comprehensive review of the dealers",
                    "Analyze and find sales, industry rankings, poor repayment records case, avoid credit losses",
                    "Analysis dealer's financial statements and related information",
                    "Comment on the wholesale loan applications to ensure the validity, completeness and compliance of the material submitted",
                    "Monitoring the implementation of the dealer financing business control",
                    "give guidance and supervision to dealers to improve financial management, standardize the use of financial support, security dealers funding",
                    "Gather and analyze Volkswagen’s financial services data to help improve corporate banking and credit management system",
                    "Assist financial business development and design of new products",
                    "responsible for business operations and collect information to provide a reliable basis for the development of new products and improving existing financing products",
                    "Improve staffs’understanding of credit laws and regulations",
                    "in accordance with the requirements of daily management of the loan and help supervise the implementation of the risk management measures"
                ]}
                button="danger"
            />
            <Timelabel color="green" time="Sep. 2011"/>
            <TimelineItem 
                icon="comments" 
                color="yellow"
                city="Tianjin, China"
                title="Investment Backoffice Accountant"
                company="Heng An Standard Life"
                description={[
                    "Responsible for process bonds, funds and other financial products, assist in analysis of investment products",
                    "Responsible for investment valuation, according to the scale of investment, calculated investment price and investment assets",
                    "Overall responsibility for the production and submission of the report of the work, including the cash flow statement, balance sheet, income statement",
                    "Ensure the accuracy of finishing work on a daily basis, archiving company documents, reports, statistics and other accounting information",
                    "Audit daily expense reimbursement vouchers, write documents to assist treasurers handle internal business transactions"
                ]}
                button="warning"
            />
            <Timelabel color="red" time="Jul. 2008"/>
            <TimelineItem
                icon="envelope"
                color="blue"
                city="Tianjin, China"
                title="Customer Relationship Manager"
                company="Shenzhen Development Bank"
                description={[
                    "Audit client financial needs, industry or customer analysis, operational status, write investigation reports, complete credit rating",
                    "Collect information form survey report, provide necessary info for credit decisions, analyze and solve problems found in vetting",
                    "Communicate and coordinate project discussions until the project successfully",
                    "Responsible for the implementation of the inspection of the condition of the correct assessment for the credit risk",
                    "Responsible for loan management work, regular loans after visits, track usage per customer and repayment of a loan, including the repayment amount and punctuality",
                    "Understand its recent financial position and writing credit report",
                    "Participated in the work of more than 30 customer loans, including mortgages alley Group, Ltd. Tianjin Shun maritime transport security to guarantee the loan, a good credit risk control, No arrears"
                ]}
                button="danger"
            />
            <TimeEnd />         
        </ul>
    )
}

function Contacting() {
    return (
        <section className="invoice">
            <div className="row invoice-info">
                <div className="col-sm-4 invoice-col">
                    To
                    <address>
                        <strong>Ruijia Fan</strong><br />
                        4058 Pine St<br />
                        Burnaby, BC V5G 1Z5<br />
                        Phone: (604) 446-8039<br />
                        Email: frj0412942@aliyun.com
                    </address>
                </div>                
            </div>
        </section>
    )
}

function NavTabs() {
    return (
        <Tabs defaultActiveKey={2} className="nav-tabs-custom" >
            <Tab eventKey={1} title="Background"><Background /></Tab>
            <Tab eventKey={2} title="Experience"><Timeline /></Tab>
            <Tab eventKey={3} title="Contacting"><Contacting /></Tab>
            <Tab eventKey={4} title="Project">financial modeling project</Tab>
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
