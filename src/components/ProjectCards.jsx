import React from "react";
import { BsFillChatFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export default function PROJECTS_CARDS(props) {
  return props.projectData.map((single) => (
    <ProjectsCardsCollection
      key={uuid()}
      label={single.label}
      data={single.data}
      handleUpvotes={props.handleUpvotes}
    />
  ));
}

function ProjectCard(props) {
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
        <button
          className="upvote-btn"
          onClick={() => props.handleUpvotes(props.name)}
        >
          <FaArrowUp />
          <h5>{props.upvotes}</h5>
        </button>
      </div>
    </div>
  );
}

function ProjectsCardsCollection(props) {
  let key = 0;
  return (
    <div className="project-card-sec">
      <h2>{props.label}</h2>
      {props.data.map((el) => (
        <ProjectCard
          image={el.image}
          name={el.projectName}
          title={el.title}
          replies={el.replies}
          category={el.category}
          upvotes={el.upvotes}
          key={key++}
          handleUpvotes={props.handleUpvotes}
        />
      ))}
    </div>
  );
}
