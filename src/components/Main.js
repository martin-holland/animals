import React, { Component } from 'react';
import { animals } from './Animals/animals.js'
import AnimalsList from './Animals/AnimalsList.js';

class Main extends Component {
    state = {
        animals: animals,
    }
    render() {
        return (
            <div className="container">
                <AnimalsList />
            </div>
        );
    }
}

export default Main;