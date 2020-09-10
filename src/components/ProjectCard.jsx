import React from "react";
import { BsFillChatFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import projectsData from "../projectsData";

let ProjectComponent = (props) => {
  return (
    <div className="project-card flex">
      <img src={props.image} alt="project-img" />
      <div className="text-and-upvote-btn flex">
        <div className="text-content">
          <h3>{props.name}</h3>
          <p>{props.title}</p>
          <div className="icon-and-category flex">
            <div className="flex box">
              <BsFillChatFill />
              <span>{props.replies}</span>
            </div>
            <h5>{props.category}</h5>
          </div>
        </div>
        <div className="upvote-btn">
          <FaArrowUp />
          <h5>{props.upvotes}</h5>
        </div>
      </div>
    </div>
  );
};

let WhatIsNewComp = () => {
  return (
    <div className="project-card-sec">
      <h2>What's new</h2>
      {projectsData.map((el) => (
        <ProjectComponent
          image={el.image}
          name={el.projectName}
          title={el.title}
          replies={el.replies}
          category={el.category}
          upvotes={el.upvotes}
        />
      ))}
    </div>
  );
};

let TodayComp = () => {
  return (
    <div className="project-card-sec">
      <h2>Today</h2>
      {projectsData.map((el) => (
        <ProjectComponent
          image={el.image}
          name={el.projectName}
          title={el.title}
          replies={el.replies}
          category={el.category}
          upvotes={el.upvotes}
        />
      ))}
    </div>
  );
};

let YesterdayComp = () => {
  return (
    <div className="project-card-sec">
      <h2>Tommorow</h2>
      {projectsData.map((el) => (
        <ProjectComponent
          image={el.image}
          name={el.projectName}
          title={el.title}
          replies={el.replies}
          category={el.category}
          upvotes={el.upvotes}
        />
      ))}
    </div>
  );
};

export default function ProjectCard() {
  return (
    <>
      <WhatIsNewComp />
      <TodayComp />
      <YesterdayComp />
    </>
  );
}
