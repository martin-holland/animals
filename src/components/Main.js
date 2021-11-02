import React, { Component } from 'react';
import { animals } from './Animals/animals.js'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js';
import AnimalsPage from './AnimalsPage.js';
import About from './About.js';

class Main extends Component {
    state = {
        animals: animals,
    }
    render() {
        return (
            <main className="container">
                <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/AnimalsPage" component = {AnimalsPage} />
            <Route path="/about" component = {About} />
        </Switch>
            </main>
        );
    }
}

export default Main;