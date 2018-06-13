import React, {Component} from "react"

class Text extends Component {
    render() {
        return (
            <section className="bg-dark text-white">
                <div className="container text-center">
                    <h2 className="mb-4">Free Trial at QiQi Tech!</h2>
                    <a
                        className="btn btn-light btn-xl sr-button"
                        href="http://nietsnie.taobao.com">Try Now!</a>
                </div>
            </section>
        )
    }
}

export default Text