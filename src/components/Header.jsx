import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Daignosis from "../assets/img/daignosis.png";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="" variant="light">
        <div className="container">
          <Navbar.Brand href="/" className="mt-2">
            <img src={Daignosis} alt="Daignosis" class="daignosis" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <a href="#kenapa" className="text-dark mb-2 mt-3 mx-3">
                Alasan Memilih Daignosis
              </a>
              <a href="#fitur" className="text-dark mb-2 mt-3 mx-3">
                Fitur
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
