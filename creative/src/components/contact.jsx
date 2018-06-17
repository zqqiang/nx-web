import React, {Component} from "react"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/fontawesome-free-solid'
import {faEnvelope} from '@fortawesome/fontawesome-free-regular'

class Contact extends Component {
    componentDidMount()
    {
        sr.reveal('.sr-contact', {
            duration: 600,
            scale: 0.3,
            distance: '0px'
        }, 300)
    }
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading">Let's Get In Touch!</h2>
                            <hr className="my-4"/>
                            <p className="mb-5">Ready to start your next project with us? That's great! Give
                                us a call or send us an email and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center">
                            <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3 sr-contact"/>
                            <p>123-456-6789</p>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3 sr-contact"/>
                            <p>
                                <a href="mailto:your-email@your-domain.com">qiqitech@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact