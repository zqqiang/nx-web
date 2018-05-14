import React, {Component} from "react"

class Header extends Component {
  render() {
    return (
      <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong>Your Favorite Source of Free Creative Themes</strong>
              </h1>
              <hr/>
            </div>
            <div class="col-lg-8 mx-auto">
              <p class="text-faded mb-5">Start Bootstrap can help you build better websites
                using the Bootstrap CSS framework! Just download your template and start going,
                no strings attached!</p>
              <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header