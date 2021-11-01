import React from 'react';
import { animals } from './animals'
import AnimalsCard from './AnimalsCard';

const AnimalsList = () => {
    return (
        <div className="cardContainer">
            {animals.map((item) => 
            <div>
                <AnimalsCard key={item.name} name={item.name} />
            </div>)}
        </div>
    )
};

export default AnimalsList;