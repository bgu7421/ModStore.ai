import React from 'react';
import './company.css';
const Aboutus = () => {
    return (
        <div>
            <div className="titletop">About Us</div>

            <div className="space">

            <div className="background box">

            <div className="contents">
                
                <div className="content-title">What is ModStore?</div>

                <div className="content-info">ModStore is an autonomous AI platform to create, deploy and update AI models for domain-specific applications.

We help developers and lean data scientist teams to quickly start model building using our cloud-based computing, and easily release and deploy models as APIs. Individuals and businesses can then easily access these models and re-use them to go generate insights.</div>
            </div>

            <div className="line"></div>

            <div className="contents2">
                
                <div className="content-title">Key Features</div>

                <div className="content-info"><li>We have prepared many domain-specific AI models help you to train your models with your own data, for applications in predictive maintenance, defect inspection, healthcare, and lots of others.</li>
                <li>Ready-to-use templates are available for common tasks in machine learning such as regression, classification, time series, and artificial neural networks.</li>
                <li>For users from ML novice to experts, we have developed intuitie user interface (UI) with model creation wizard, drag-n-drop workspace, and autonomous AI technologies for automation in data preparation, model selections, and parameter tunings.</li>
                <li>We provide flexible deployment options including on-premise, public or private clouds, and managed services.</li></div>
            </div>

            <div className="line"></div>

            <div className="contents">
                
                <div className="content-title">Target-users</div>

                <div className="content-info content-info2">
                 <li><b>Data specialists</b> that provide domain knowledge and business requirement can get quick insights with our autonomous AI technologies.</li>

                 <li><b>Data scientists</b> can use our automated model building technologies to build models quickly and develop customized models for specific domains.</li>

                 <li><b>Developers</b> can use our automated model deployment and management systems to deploy the developed AI models and monitor their operations.</li>
                </div>
                </div>

            </div></div>
        </div>
    );
};

export default Aboutus;