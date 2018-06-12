import React, {Component} from "react"

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shrink: ""
        }
        this.handleScroll = this
            .handleScroll
            .bind(this)
    }
    handleScroll(event) {
        if ($("#mainNav").offset().top > 100) {
            this.setState({shrink: "navbar-shrink"})
        } else {
            this.setState({shrink: ""})
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    render() {
        return (
            <nav
                className={"navbar navbar-expand-lg navbar-light fixed-top " + this.state.shrink}
                id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Creative</a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav