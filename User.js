import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "./context";

class User extends Component {
  // onClickEvent = e => {
  //   this.setState({
  //     isVisible: !this.state.isVisible
  //   });
  // };
  state = {
    visible: true
  };
  changeVisibility = e => {
    this.setState({
      visible: !this.state.visible
    });
  };
  onDeleteuser = (dispatch, e) => {
    const { id } = this.props;

    dispatch({ type: "DELETE_USER", payload: id });
  };
  onHideuser = (dispatch, isVisible, e) => {
    console.log(dispatch);
    dispatch({ type: "HIDE_USER", payload: isVisible });
  };
  render() {
    const { name, department, salary } = this.props;

    return (
      <UserConsumer>
        {value => {
          const { dispatch } = value;

          const { visible } = this.state;
          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  visible
                    ? { backgroundColor: "#69ebf9", color: "white" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline " onClick={this.changeVisibility}>
                    {/* //onClick={this.onClickEvent}> */} a
                  </h4>
                  <i
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                    onClick={this.onDeleteuser.bind(this, dispatch)}
                  >
                    aa
                  </i>
                </div>
                {visible ? (
                  <div className="card-body">
                    <p className="card-text ">Name:{name}</p>
                    <p className="card-text ">Maaş:{salary}</p>
                    <p style={{ color: "blue" }} className="card-text">
                      department:{department}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
export default User;
