import React, { Component } from "react";
import zither from "../img/zither.jpg";

class Interest extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="interests"
      >
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>Zither</p>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <img className="img-skill" src={zither} alt="Zither" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Interest;
