import React from 'react';
import Header from './Components/Navbar';

import { Switch, Route, Redirect } from 'react-router';

import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Team from './Components/Team';
import Connect from './Components/Connect';
import Foooter from './Components/Foooter'

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/connect" component={Connect} />
                <Redirect to="/" />
            </Switch>
            <Foooter />
        </>
    );
}
export default App;