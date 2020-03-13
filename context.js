import React, { Component } from "react";

const UserContext = React.createContext();
//provider consumer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state, //eski state
        users: state.users.filter(user => action.payload !== user.id)
      };
    case "HIDE_USER":
      console.log(action);
      return {
        ...state, //eski state
        isVisible: !action.payload
      };
    default:
      return state;
  }
};
export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Mustafa Murat Coşkun",
        salary: "5000",
        department: "Bilişim"
      },
      {
        id: 2,
        name: "Kemalettin Taslak",
        salary: "4000",
        department: "Pazarlama"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    isVisible: false
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
