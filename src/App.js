import React from "react";
import Header from "../src/components/Header";
import PopularDiscussionCard from "../src/components/PopularDiscussionCard";
import ProjectCard from "./components/ProjectCard";
import UpcomingProjects from "./components/UpcomingProjects";
import HiringNow from "./components/HiringNow";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div>
      <Header />
      <main class="container flex">
        <div className="left-side">
          <PopularDiscussionCard />
          <ProjectCard />
        </div>
        <div className="right-side">
          <UpcomingProjects />
          <HiringNow />
          <NewsLetter />
          {/* <TopDiscussionCard />
          <Footer /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
