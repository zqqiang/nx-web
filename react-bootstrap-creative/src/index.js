import React from "react";
import ReactDOM from "react-dom";

import Creative from "./components/creative.jsx";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery.easing'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'

import "./scss/creative.scss";

ReactDOM.render(
  <Creative/>, document.getElementById("app"));