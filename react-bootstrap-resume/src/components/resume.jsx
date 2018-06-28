import React, {Component} from "react"

import Nav from "./nav.jsx"
import About from "./about.jsx"
import Experience from "./experience";
import Education from "./education";
import Skill from "./skill";
import Interest from "./interest";
import Award from "./award";

class Resume extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container-fluid p-0">
                    <About/>
                    <Experience/>
                    <Education/>
                    <Skill/>
                    <Interest/>
                    <Award/>
                </div>
            </div>
        )
    }
}

export default Resume