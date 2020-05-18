/* eslint-disable react/style-prop-object */
import React from "react";
import {render} from "react-dom";
import "./Cards.scss";

export class Cards extends React.Component {

    render() {
        return (
          <div className="about_me d-flex justify-content-between align-items-center">
            <div className="container">
              <div className="intro">
                <h3>My life</h3>
                <p className="intro-p">This block talk you some things about me.Bend over the blocks its a simple.</p>
              </div>
              <div className="card-block d-flex justify-content-between">
                <div className="card d-flex justify-content-between align-items-center">
                  <div className="face face1">
                    <div className="content">
                      <h2> Hello!</h2>
                        <p>My name Vladyslav 25 years old.I live in Volnyansk city.</p>
                    </div>
                  </div>
                  <div className="face face2 ">
                    <h2>About Me</h2>
                  </div>
                </div>
                <div className="card d-flex justify-content-between align-items-center">
                  <div className="face face1">
                    <div className="content">
                      <h2> ZNTU</h2>
                        <p>I went to ZNTU in 2012 to the department of applied mechanics.In 2017 graduated.</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>My education</h2>
                  </div>
                </div>
                <div className="card d-flex justify-content-between align-items-center">
                  <div className="face face1">
                    <div className="content">
                      <h2> Hi IT!</h2>
                        <p>In 2019 I decided change my lify.Sphere of IT this is what I became very interested for me.</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>IT Life</h2>
                  </div>
                </div>
                <div className="card d-flex justify-content-between align-items-center">
                  <div className="face face1">
                    <div className="content">
                      <h2>My skills</h2>
                      <h6>HTML</h6>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "75%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>Scss</h6>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "55%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>Javascript</h6>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "45%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>Bootstrap</h6>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "45%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>React Js</h6>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "25%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2> My progress</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    
    render(
      <Cards />,
      document.getElementById('root')
    );