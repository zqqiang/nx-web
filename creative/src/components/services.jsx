import React, {Component} from "react"
import ScrollReveal from "scrollreveal"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faGem, faPaperPlane, faNewspaper, faHeart} from '@fortawesome/fontawesome-free-regular'

class Services extends Component {
    componentDidMount() {
        window.sr = ScrollReveal()
        sr.reveal('.sr-icons', {
            duration: 600,
            scale: 0.3,
            distance: '0px'
        }, 200)
    }
    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">At Your Service</h2>
                            <hr className="my-4"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <FontAwesomeIcon icon={faGem} size="4x" className="text-primary mb-3 sr-icons"/>
                                <h3 className="mb-3">Sturdy Templates</h3>
                                <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    size="4x"
                                    className="text-primary mb-3 sr-icons"/>
                                <h3 className="mb-3">Ready to Ship</h3>
                                <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <FontAwesomeIcon
                                    icon={faNewspaper}
                                    size="4x"
                                    className="text-primary mb-3 sr-icons"/>
                                <h3 className="mb-3">Up to Date</h3>
                                <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    size="4x"
                                    className="text-primary mb-3 sr-icons"/>
                                <h3 className="mb-3">Made with Love</h3>
                                <p className="text-muted mb-0">You have to make your websites with love these days!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services