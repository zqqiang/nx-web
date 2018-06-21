import React, {Component} from "react"

import Nav from "./nav.jsx"
import About from "./about.jsx"

class Resume extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container-fluid p-0">
                    <About/>
                </div>
            </div>
        )
    }
}

export default Resume