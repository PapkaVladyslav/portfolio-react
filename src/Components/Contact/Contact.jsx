import React from "react";
import {render} from "react-dom";
import "./Contact.scss";
import insta from "../../assets/image/contact/instagram.png";
import telegram from "../../assets/image/contact/telegram.png";
import skype from "../../assets/image/contact/skype.png";
import github from "../../assets/image/contact/github.png";

export class Contact extends React.Component {

    render() {
        return (
            <div class="contact">
                <div class="container">
                    <div class="info">
                        <h3>Contact Me</h3>
                    </div>
                    <div class="contact-block d-flex justify-content-between justify-content-between">
                        <div class="block-inst">
                            <div class="name-block">
                            <h5>My Instagram</h5>
                            </div>
                            <div class="instagram">
                                <a href="https://www.instagram.com/?hl=uk"><button><img src={ insta } alt="" /></button></a>
                            </div>
                        </div>
                        <div class="block-tel">
                            <div class="name-tel">
                                <h5>My Telegram</h5>
                            </div>
                            <div class="telegram">
                                <a href="https://web.telegram.org/#/im"><button><img src={ telegram } alt="" /></button></a>
                            </div>
                        </div>
                        <div class="block-sk">
                            <div class="name-sk">
                                <h5>My skype</h5>
                            </div>
                            <div class="skype">
                                <a href="https://www.skype.com/uk/"><button><img src={ skype } alt="" /></button></a>
                            </div>
                        </div>
                        <div class="block-gh">
                            <div class="name-gh">
                                <h5>My GitHub</h5>
                            </div>
                            <div class="github">
                                <a href="https://github.com/PapkaVladyslav/my-app"><button><img src= { github } alt="" /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    }
    
    render(
      <Contact />,
      document.getElementById('root')
    );