import React from "react";

import "../assets/css/Footer.css";

import Daignosis from "../assets/img/daignosis.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 left">
              <img src={Daignosis} alt="Daignosis" />
            </div>
            <div className="col-sm-6 right">
              <ul>
                <a
                  href="https://github.com/daignosis-bangkit"
                  className="text-light"
                  alt="Daignosis Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </ul>
              <ul>
                <a
                  href="mailto:daignosis.id@gmail.com"
                  className="text-light"
                  alt="Daignosis Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-light text-center mt-4">2023 &copy; Daignosis.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
