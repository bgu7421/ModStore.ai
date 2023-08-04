import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Ai from './routes/resources/Ai';
import MachineL from './routes/resources/MachineL';
import Advanced from './routes/product/Advanced';
import Medtech from './routes/product/Medtech'
import Material from './routes/product/Materials';
import Digital from './routes/product/Digital';
import Built from './routes/product/Built';
import Aboutus from './routes/company/Aboutus';
import News from './routes/company/News';
import Updates from './routes/company/Updates';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>                     
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/product/advanced-manufacturing" component={Advanced}/>
                        <Route path="/product/medtech" component={Medtech}/>
                        <Route path="/product/materials-development" component={Material}/>
                        <Route path="/product/digital-economy" component={Digital}/>
                        <Route path="/product/built-environment" component={Built}/>
                        <Route path="/company/about-us" component={Aboutus}/>
                        <Route path="/company/news-events" component={News}/>
                        <Route path="/company/updates" component={Updates}/>
                        <Route path="/resources/what-is-ai" component={Ai}/>
                        <Route path="/resources/what-is-machine-learning" component={MachineL}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
                <Footer/>           
            </div>
        </Router>
    );
};

export default App;