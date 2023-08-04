import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './logo (1).png'; 

const Header = ({history}) => {
    return (
        <div>
          <div className="logo">
          <NavLink exact to="/">
              <img src={logo} width="40" height="40" class="d-inline-block align-top" alt="Logo" /></NavLink>

          <div className="logoName">
          <NavLink exact to="/" className="logoName" activeClassName="active">ModStore.ai</NavLink>
            

          </div>
              
          </div>
        
          <div className="header">
            
            <NavLink exact to="/" className="item" activeClassName="active"></NavLink>
            <div className="item">
              <ul>
                <li><a><NavLink to="/product" className="item" activeClassName="active">PRODUCT</NavLink></a>
                  <ul>
                    <li><a><NavLink to="/product/advanced-manufacturing" className="item" >Advanced Manufacturing</NavLink></a></li>
                    <li><a><NavLink to="/product/medtech" className="item" >Med-Tech</NavLink></a></li>
                    <li><a><NavLink to="/product/materials-development" className="item" >Materials Development</NavLink></a></li>
                    <li><a><NavLink to="/product/built-environment" className="item" >Built Environment</NavLink></a></li>
                    <li><a><NavLink to="/product/digital-economy" className="item" >Digital Economy</NavLink></a></li>
                   </ul>
                </li>
              </ul>
            </div>
            

            <div className="item">
              <ul>  
                <li><a><NavLink to="/company" className="item" activeClassName="active">COMPANY</NavLink></a>
                  <ul>
                    <li><a><NavLink to="/company/about-us" className="item" >About Us</NavLink></a></li>
                    <li><a><NavLink to="/company/updates" className="item" >Updates</NavLink></a></li>
                    <li><a><NavLink to="/company/news-events" className="item" >News & Events</NavLink></a></li>
                   </ul>
                </li>
              </ul>  
            </div>
            
            <div className="item">
              <ul> 
                <li><a><NavLink to="/resources" className="item" activeClassName="active">RESOURCES</NavLink></a>
                  <ul>
                    <li><a><NavLink to="/resources/what-is-ai?" className="item" >What is AI?</NavLink></a></li>
                    <li><a><NavLink to="/resources/what-is-machine-learning?" className="item" >What is Machine Learning?</NavLink></a></li>
                   </ul>
                </li>
              </ul>  
            </div>
          
         
           
            <NavLink to="/Contact" className="item" activeClassName="active">CONTACT</NavLink>
            
            <NavLink to="/login" className="account" activeClassName="active">LOG IN</NavLink>
            <NavLink to="/Register" className="account" activeClassName="active">REGISTER</NavLink>
          </div>
          
          


        </div>

    );
};


export default Header;