// start of the application

import { Component } from "react";
import "./App.css";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/Search-box.component";

class App extends Component {
  constructor() {
    super();
    console.log("constructor of App");
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();
    // searchfield value is updated from here
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render from App");

    // defining the constants
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // the filtered list is being stored here with the help of searchfield updated before
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="page-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
