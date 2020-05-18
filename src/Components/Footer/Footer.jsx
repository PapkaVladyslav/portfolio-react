import React from "react";
import {render} from "react-dom";
import "./Footer.scss";

export class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div class="container">
                    <div class="down_content">
                        <p class="created">Created by Vladyslav Papka in 2020</p>
                    </div>
                </div>
            </footer>
        );
      }
    }
    
    render(
      <Footer />,
      document.getElementById('root')
    );