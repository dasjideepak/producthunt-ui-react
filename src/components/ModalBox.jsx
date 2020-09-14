import React, { Component } from "react";

export default class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="modal-body">
        <div className="modal-box">
          <button
            className="close-btn"
            onClick={() => this.props.handleModal()}
          >
            X
          </button>
          <h1>Add New Project</h1>
          <form action="" className="form">
            <img src="" alt="" />
            <input type="text" name="" id="" placeholder="Enter project name" />
            <input type="text" name="" id="" placeholder="Enter title" />
            <input type="number" name="" id="" placeholder="Enter replies" />
            <input type="text" name="" id="" placeholder="Category" />
            <input type="number" placeholder="Upvotes" />
            <button>Add Project</button>
          </form>
        </div>
      </div>
    );
  }
}
