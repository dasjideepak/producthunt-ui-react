import React from "react";

function UpcomingProjectComponent() {
  return (
    <div className="project-card">
      <div className="text-content">
        <h3>OoDeLally</h3>
        <h4>Planners for home time.</h4>
        <span>+ Follow (171)</span>
      </div>
      <img
        src="https://ph-files.imgix.net/4d57f75f-b0e0-44a4-8573-16acae1e3190.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20&dpr=2"
        alt="project-img"
      />
    </div>
  );
}

export default function UpcomingProjects() {
  return (
    <div className="upcoming-projects-sec">
      <h1>
        Upcoming Projects<span>Powered by Ship</span>
      </h1>
      <div className="upcoming-project-container">
        <UpcomingProjectComponent />
        <UpcomingProjectComponent />
        <UpcomingProjectComponent />
        <button>View All</button>
      </div>
    </div>
  );
}
