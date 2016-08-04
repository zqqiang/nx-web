var React = require('react');

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

function AboutMe() {
    let cscUrl = 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Ecsi%2Eca%2Fstudent%2Fverify%2FstudentBadge%2Edo%3Fcid%3DMzU4NDQ0NA%3D%3D&urlhash=ycDK&trk=profile_certification_company_title'
    let sasAdvancedUrl = 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eyouracclaim%2Ecom%2Fbadges%2F1682ab90-dbb5-47a3-8a64-44a42ffa1d6a%2Flinked_in_profile&urlhash=eM3R&trk=profile_certification_company_title'
    let sasBaseUrl = 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eyouracclaim%2Ecom%2Fbadges%2Fc4a64ce6-0983-4f3c-9978-c86aff60c4dd%2Flinked_in_profile&urlhash=wnc3&trk=profile_certification_company_title'

    return (
        <div className="box box-primary">
            <div className="box-header with-border">
                <h3 className="box-title">About Me</h3>
            </div>
            <div className="box-body">
                <strong><i className="fa fa-book margin-r-5"></i> Education</strong>

                <p className="text-muted">
                    B.S. in Finance from the Nankai University at Tianjin China
                </p>

                <hr />

                <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>

                <p className="text-muted">Burnaby, British Columbia</p>

                <hr />

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

                <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                <p></p>
            </div>
        </div>
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
                    </div>
                </div>
            </section>
        </div>
    )
}
