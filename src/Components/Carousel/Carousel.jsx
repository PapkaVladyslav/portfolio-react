import React from "react";
import {render} from "react-dom";
import "../Carousel/Carousel.scss";
import nebo_1 from "../../assets/image/neboskreby-1.jpg";
import nebo_2 from "../../assets/image/neboskreby-2.jpg";
import nebo_3 from "../../assets/image/neboskreby-3.jpg";

export class Carousel extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ nebo_1 } className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        <h4>First slide label</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ nebo_2 } className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        <h4>Second slide label</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ nebo_3 } className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        <h4>Third slide label</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        );
      }
    }
    
    render(
      <Carousel />,
      document.getElementById('root')
    );