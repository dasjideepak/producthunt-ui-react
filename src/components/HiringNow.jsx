import React from "react";

function HiringNowComponent() {
  return (
    <div className="project-card">
      <a href="##" className="text-content">
        <h3>Instantish</h3>
        <h4>Software Engineer</h4>
        <span>San Francisco, Remote</span>
      </a>
      <img
        src="https://ph-files.imgix.net/fe9b6850-5cc2-4661-955d-38583ac79f0b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&fit=max&dpr=2"
        alt="project-img"
      />
    </div>
  );
}

export default function HiringNow() {
  return (
    <div className="upcoming-projects-sec">
      <h1 className="card-heading">Hiring Now</h1>
      <div className="upcoming-project-container">
        <HiringNowComponent />
        <HiringNowComponent />
        <HiringNowComponent />
        <button>View All Jobs</button>
        <h5 className="hiring-btn">
          Hiring? <a href="##">Post a job</a>
        </h5>
      </div>
    </div>
  );
}
