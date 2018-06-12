import React, {Component} from "react"
import Nav from "./nav.jsx"
import Header from "./header.jsx"
import About from "./about.jsx"
import Services from "./services.jsx"
import Portfolio from "./portfolio";
import Text from "./text";
import Contact from "./contact";

class Creative extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <About/>
                <Services/>
                <Portfolio/>
                <Text/>
                <Contact/>
            </div>
        )
    }
}

export default Creative