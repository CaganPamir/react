import React, { Component } from "react";
import Users from "./Users";
import AddUser from "./AddUser";
import Navbar from "./Navbar";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <AddUser />
        <Users />
      </div>
    );
  }
}
export default App;
