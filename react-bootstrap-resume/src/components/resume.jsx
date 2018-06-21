import React, {Component} from "react"

import Nav from "./nav.jsx"
import About from "./about.jsx"
import Experience from "./experience";

class Resume extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container-fluid p-0">
                    <About/>
                    <Experience/>
                </div>
            </div>
        )
    }
}

export default Resume