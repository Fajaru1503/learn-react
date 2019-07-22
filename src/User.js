import React, { Component } from "react";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class User extends Component {
  Style = {
    margin: "auto",
    textAlign: "center",
    width: "50%"
  };

  state = {
    username: "Fajaru"
  };

  setUsernameHandler = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div style={this.Style}>
        <UserOutput name={this.state.username} />
        <UserInput setUsername={this.setUsernameHandler} />
      </div>
    );
  }
}

export default User;
