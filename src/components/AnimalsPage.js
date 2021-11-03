import React, { Component } from "react";
import { animals } from "./Animals/animals";
import AnimalsCard from "./Animals/AnimalsCard";
import { Switch, Route } from "react-router-dom";
import AnimalsSingle from "./Animals/AnimalsSingle";

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
      <div className="mainContainer">
        <Switch>
          <Route exact path={this.props.match.path}>
            <div className="searchBar">
              <label htmlFor="search">Search for your favourite Animal!</label>
              <input
                className="search"
                name="searchInput"
                type="text"
                onChange={this.searchInputHandler}
              />
            </div>
            <div className="cardContainer">{animalsListing}</div>
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalsSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AnimalsList;
