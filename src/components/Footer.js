import React from "react";
import './Footer.css';
import logo2 from './logo-vertical-main-page.png';
import { NavLink } from 'react-router-dom';


const Footer = ({history}) => {
    return (
        <div>
        <div className="background">
        <div className="Menu">
          <div className="explain">
              <NavLink exact to="/">
              <img src={logo2} width="50" height="60" alt="Logo" /></NavLink>
              <div className="texts">
                  ModStore is an Autonomous AI platform to create, deploy and update AI models for domain specific applications.
              </div></div>

              
                <div class="title-menu">
                    PRODUCT
                    <div class="title-submenu">
                        Advanced-manufacturing
                    </div>
                    <div class="title-submenu">
                        Medtech
                    </div>
                    <div class="title-submenu">
                        Materials Development
                    </div>
                    <div class="title-submenu">
                        Built Environment
                    </div>
                    <div class="title-submenu">
                        Digital Economy
                    </div>
                </div>
                <div class="title-menu">
                    COMPANY
                    <div class="title-submenu">
                        About Us</div>
                    
                    <div class="title-submenu">
                        Updates
                    </div>
                    <div class="title-submenu">
                        News & Events
                    </div>
                </div>
                <div class="title-menu">
                    RESOURCES
                    <div class="title-submenu">
                        What is AI?
                    </div>
                    <div class="title-submenu">
                        What is Machine Learning?
                    </div>
                </div>
                <div class="title-menu">
                    CONTACT
                </div>

              </div>
          </div>

          <div className="company-name">
            © Institute of High Performance Computing
          </div>
        </div>
    );
};

export default Footer;