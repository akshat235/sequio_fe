import React from "react";
import ReactDOM  from "react-dom";
import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));


import {BrowserRouter as Router}  from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);