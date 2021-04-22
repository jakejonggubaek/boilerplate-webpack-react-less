import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Admin from './Admin';
import Main from './Main';
import Footer from './Footer';
import Animation from './Animation';
import Background1 from './images/background1.jpg';
import Background2 from './images/background2.jpg';
import Background3 from './images/background3.jpg';
import Background4 from './images/background4.jpg';

export function App() {

    return (
       <Router>
            <Header />
           <main>
                <img className='background1' src={Background1} alt="" />
                <img className='background2' src={Background2} alt="" />
                <img className='background3' src={Background3} alt="" />
                <img className='background4' src={Background4} alt="" />
                <Nav />
                <Route exact path="/" render={Main} />
                <Route path="/admin" component={Admin} />
                <Animation />
           </main>
            <Footer />
       </Router>
    );
}