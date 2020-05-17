import React from "react";
import {render} from "react-dom";
import "./Header.scss"

 export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header>
          <div className="container">
            <div className="navigation d-flex justify-content-between">
              <div className="label d-flex align-items-center">
                <h1 className="label">V-Papka</h1>
              </div>
              <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">About Me</a>
                    <a className="nav-item nav-link" href="#">Portfolio</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
    );
  }
}

render(
  <Header />,
  document.getElementById('root')
);