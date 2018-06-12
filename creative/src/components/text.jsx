import React, {Component} from "react"

class Text extends Component {
    render() {
        return (
            <section className="bg-dark text-white">
                <div className="container text-center">
                    <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                    <a
                        className="btn btn-light btn-xl sr-button"
                        href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
                </div>
            </section>
        )
    }
}

export default Text