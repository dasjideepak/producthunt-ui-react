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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  handleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <div>
        {this.state.isModalVisible ? (
          <ModalBox handleModal={this.handleModal} />
        ) : (
          <>
            <Header handleModal={this.handleModal} />
            <main className="container flex">
              <div className="left-side">
                <POPULAR_DISCUSSION_CARDS_SECTION />
                <PROJECTS_CARDS />
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
