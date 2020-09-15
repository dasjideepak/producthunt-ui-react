import React, { Component } from "react";

export default class ModalBox extends Component {
  constructor() {
    super();
    this.state = {
      dataAdded: false,
    };
  }

  handleAddProduct = (e) => {
    e.preventDefault();
    let data = {
      projectName: e.target.projectName.value,
      title: e.target.title.value,
      image: e.target.image.value,
      replies: e.target.replies.value,
      category: e.target.category.value,
      upvotes: e.target.upvotes.value,
    };
    // console.log(data);
    this.setState({ dataAdded: true });
    this.props.handleAddProduct(data);
  };

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
          {this.state.dataAdded ? (
            <h1>Project Added Successfully</h1>
          ) : (
            <>
              <h1>Add New Project</h1>
              <form
                action="/"
                className="form"
                onSubmit={this.handleAddProduct}
              >
                <img src="" alt="" />
                <input
                  type="text"
                  name="projectName"
                  placeholder="Enter project name"
                  required
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  required
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Enter Image URL"
                  required
                />

                <input
                  type="number"
                  name="replies"
                  placeholder="Enter replies"
                  required
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  required
                />
                <input
                  type="number"
                  name="upvotes"
                  placeholder="Upvotes"
                  required
                />
                <button>Add Project</button>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }
}
