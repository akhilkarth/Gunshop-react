import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App1 from './nav'

ReactDOM.render(
  <Router>
    <App1/>
  </Router>,
  document.getElementById("root")
)