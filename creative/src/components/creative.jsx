import React, {Component} from "react"
import Nav from "./nav.jsx"
import Header from "./header.jsx"
import About from "./about.jsx"
import Services from "./services.jsx"

class Creative extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <About/>
                <Services/>
            </div>
        )
    }
}

export default Creative