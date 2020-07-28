import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll"

class App extends Component {
  constructor() {
    super()
    this.state = {
      robot:[],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response=> response.json())
    .then (users => {this.setState({robot:users})});
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  render() {
    const filteredRobot = this.state.robot.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robot.length === 0) {
      return <h1>Loading</h1>
    } else {
    return (
      <div className="tc" /*text center*/>
      <h3> RoboFriends</h3>
      <SearchBox searchChange = {this.onSearchChange}/>   
      <Scroll>
      <CardList robot={filteredRobot} />
      </Scroll>
      </div>
    )
  }
}
}

export default App;

