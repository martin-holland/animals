import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";
import { Switch, Route } from "react-router-dom";
import AnimalsSingle from "./AnimalsSingle";

class AnimalsList extends Component {
  state = {
    searchInput: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const animalFilter = animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const animalsListing = animalFilter.map((item) => (
      <AnimalsCard key={item.name} name={item.name} />
    ));

    return (
      <div className="cardContainer">
        <Switch>
          <Route exact path={this.props.path}>
            <input
              name="searchInput"
              type="text"
              onChange={this.searchInputHandler}
            />
            {animalsListing}
          </Route>
          <Route path={`${this.props.path}/:animal`}>
            <AnimalsSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AnimalsList;
