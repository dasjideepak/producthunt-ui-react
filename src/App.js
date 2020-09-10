import React from "react";
import Header from "../src/components/Header";
import PopularDiscussionCard from "../src/components/PopularDiscussionCard";
import ProjectCard from "./components/ProjectCard";

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
          {/* <UpcomingProjectsCard />
        <HiringNowCard /> 
        <NewsLetterCard /> 
        <TopDiscussionCard /> 
        <Footer />
        */}
        </div>
      </main>
    </div>
  );
}

export default App;
