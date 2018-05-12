import React, { Component} from "react"

class Header extends Component{
    render(){
      return(
        <header className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase">
                            <strong>Your Favorite Source of Free Creative Themes</strong>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
      )
    }
  }
  
  export default Header