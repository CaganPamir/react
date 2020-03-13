import React, { Component } from "react";
import posed from "react-pose";
var uniqid = require("uniqid");
const Animation = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: 300 },
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    transition: { duration: 1000 },
    applyAtEnd: {
      display: "none"
    }
  }
});

class AddUser extends Component {
  state = {
    visible: true,
    name: "",
    department: "",
    salary: ""
  };
  changeVisibility = e => {
    this.setState({
      visible: !this.state.visible
    });
  };
  addUser = e => {
    e.preventDefault();
    const { name, department, salary } = this.state;
    const newUser = {
      id: uniqid(),
      name: name,
      salary: salary,
      department: department
    };
    console.log(newUser);
  };

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { visible, name, salary, department } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <button
          onClick={this.changeVisibility}
          type="submit"
          className="btn btn-dark btn-block mb-2"
        >
          {visible ? "Hide Form" : "Show Form"}
        </button>
        <Animation pose={visible ? "visible" : "hidden"}>
          <div className="card">
            <div className="card-header">
              <h4>Add User Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.addUser}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Enter Name"
                    className="form-control"
                    value={name}
                    onChange={this.changeInput}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    name="department"
                    id="id"
                    placeholder="Enter Department"
                    className="form-control"
                    value={department}
                    onChange={this.changeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    id="id"
                    placeholder="Enter Salary"
                    className="form-control"
                    value={salary}
                    onChange={this.changeInput}
                  />
                </div>

                <button type="submit" className="btn btn-danger btn-block">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}
export default AddUser;
