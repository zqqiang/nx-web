import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery.easing'

import Resume from "./components/resume.jsx";

import "./scss/resume.scss";

ReactDOM.render(
    <Resume/>, document.getElementById("app"));