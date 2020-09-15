import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";

import Header from "../src/components/Header";
import POPULAR_DISCUSSION_CARDS_SECTION from "./components/PopularDiscussionCards";
import PROJECTS_CARDS from "./components/ProjectCards";
import UPCOMING_PROJECTS_CARDS_SECTION from "./components/UpcomingProjectsCards";
import HIRING_NOW_CARDS_SECTION from "./components/HiringNowCards";
import NEWSLETTER_SECTION from "./components/NewsLetterSection";
import TOP_DISCUSSION_CARDS_SECTION from "./components/TopDiscussionCards";
import Footer from "./components/Footer";
import ModalBox from "./components/ModalBox";
import { NEW_PROJECTS, TODAYS_PROJECTS, TOMORROWS_PROJECTS } from "./data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      projectData: [
        {
          label: "What's New",
          data: NEW_PROJECTS,
        },
        {
          label: "Today",
          data: TODAYS_PROJECTS,
        },
        {
          label: "Tomorrow",
          data: TOMORROWS_PROJECTS,
        },
      ],
    };
  }

  handleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleUpvotes = (projectName) => {
    let filtered = this.state.projectData.map((el) =>
      el.data.filter((project) => project.projectName === projectName)
    );
    console.log(filtered);
  };

  handleAddProduct = (project) => {
    this.setState({
      projectData: [
        {
          label: "What's New",
          data: [...NEW_PROJECTS, project],
        },
        {
          label: "Today",
          data: TODAYS_PROJECTS,
        },
        {
          label: "Tomorrow",
          data: TOMORROWS_PROJECTS,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        {this.state.isModalVisible ? (
          <ModalBox
            handleModal={this.handleModal}
            handleAddProduct={this.handleAddProduct}
          />
        ) : (
          <>
            <Header handleModal={this.handleModal} />
            <main className="container flex">
              <div className="left-side">
                <POPULAR_DISCUSSION_CARDS_SECTION />
                <PROJECTS_CARDS
                  projectData={this.state.projectData}
                  handleUpvotes={this.handleUpvotes}
                />
              </div>
              <div className="right-side">
                <UPCOMING_PROJECTS_CARDS_SECTION />
                <HIRING_NOW_CARDS_SECTION />
                <NEWSLETTER_SECTION />
                <TOP_DISCUSSION_CARDS_SECTION />
                <Footer />
              </div>
            </main>
          </>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
