import React from 'react';
import './Home.css';
import logo2 from './images/image1/logo-vertical-main-page.png';
import manufacture from './product/Icon-manufacturing.png';
import medtech from './product/med-tech-icon.png';
import material from './product/material (1).png';
import built from './product/built-icon.png';
import economy from './product/digital-economy-icon.png';
import product from './product/product-image.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div>
           <div className="topbox">  
             
             <div class="masthead">The Future AI Platform</div>
             
             <div className="logo2">
             <img src={logo2} width="200" alt="Logo" />
             </div>
             
             <div className="button">
             <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/company/about us">What is ModStore.ai?</a>
             </div>

           </div>

          <div class="containter">
           <div class="ourfocus">
               <div className="title">OUR FOCUS</div>
           </div>    

           <div class="ourfocus">
               <div clasName="manufacture">
               <NavLink to="/product/advanced-manufacturing/details" className="manufacture">
               <img src={manufacture} width="90" alt="manufacture" />
                 <h4 class="text1">Advaced Manufacturing</h4>
               </NavLink>
               </div>

               <div className="medtech">
               <NavLink to="/product/medtech" className="medtech">
               <img src={medtech} width="90" alt="medtech" />
                 <h4 class="text2">Med Tech</h4>
               </NavLink>
               </div>

               <div className="material">
               <NavLink to="/product/materials-development" className="material" >
               <img src={material} width="95" alt="material" />
                 <h4 class="text3">Materials Development</h4>
               </NavLink>
               </div>
               
            
               <div className="built">
               <NavLink to="/product/built-environment" className="built" >
               <img src={built} width="92" alt="built" />
                 <h4 class="text4">Built Environment</h4>
               </NavLink>
               </div>

               <div className="economy">
               <NavLink to="/product/digital-economy" className="economy" >
               <img src={economy} width="92" alt="economy" />
                 <h4 class="text5">Digital Economy</h4>
               </NavLink>
               </div>
           </div>
          </div>

          <div class="updated">
           <div className="title">UPDATED MODELS</div>
           
           <div class="row">
           <NavLink to="/product/advanced-manufacturing/details" className="manufacture">
               <div class="portfolio-item">
                 <i class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <img class="img-fluid" src={product} width="1500" alt="product" />
                 </i>
                 
                 <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Product Title Goes Here</div>
                  <div class="portfolio-caption-subheading">Details</div>              
                 </div> 
                 </div>                          
              </NavLink>

              <NavLink to="/product/advanced-manufacturing/details" className="manufacture">
               <div class="portfolio-item">
                 <i class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <img class="img-fluid" src={product} width="1500" alt="product" />
                 </i>
                 
                 <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Product Title Goes Here</div>
                  <div class="portfolio-caption-subheading">Details</div>              
                 </div> 
                 </div>                          
                 </NavLink>

              <NavLink to="/product/advanced manufacturing" className="manufacture">
               <div class="portfolio-item">
                 <i class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <img class="img-fluid" src={product} width="1500" alt="product" />
                 </i>
                 
                 <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Product Title Goes Here</div>
                  <div class="portfolio-caption-subheading">Details</div>              
                 </div> 
                 </div>                          
                 </NavLink>

              <NavLink to="/product/advanced manufacturing" className="manufacture">
               <div class="portfolio-item">
                 <i class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <img class="img-fluid" src={product} width="1500" alt="product" />
                 </i>
                 
                 <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Product Title Goes Here</div>
                  <div class="portfolio-caption-subheading">Details</div>              
                 </div>                         
                 </div>
             </NavLink>
           
           
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <FontAwesomeIcon icon={ faAngleLeft } fontSize="24px"/>
             
            </a>

            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <FontAwesomeIcon icon={ faAngleRight } />
            </a>
          </div>


          
         </div>
         <div class="resources">
         <div className="title">LEARN WITH MODSTORE</div>

         <div class="row2">

         <div className="title2">What is AI?
          <div class="content">AI is also called Artificial Intelligence ... </div>
          </div>
         <div className="title2">What is Machine Learning?
          <div class="content">AI is also called Artificial Intelligence ... </div>
          </div>
         </div>
         </div>




        </div>
    );
};

export default Home;