import React, {Component} from "react"
import Nav from "./nav.jsx"
import Header from "./header.jsx"
import About from "./about.jsx"

class Creative extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <About/>
            </div>
        )
    }
}

export default Creative