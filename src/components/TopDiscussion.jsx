import React from "react";
import { BsFillChatFill } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";

function TopDiscussionComponent() {
  return (
    <div className="project-card">
      <div className="text-content">
        <a href="##">
          What were your achievements last week?
          <span role="img" aria-label="rocket-img">
            🚀💪
          </span>
        </a>
        <div className="flex">
          <span className="flex">
            <TiArrowSortedUp className="icon" />
            <h5>57</h5>
          </span>
          <span className="flex">
            <BsFillChatFill />
            <h5>10</h5>
          </span>
          <span className="flex">Join discussion</span>
        </div>
      </div>
      <img
        src="https://ph-avatars.imgix.net/2828818/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
        alt="user-avatar"
      />
    </div>
  );
}

export default function TopDiscussion() {
  return (
    <div className="top-discussion-sec">
      <h1 className="card-heading">Top Discussions</h1>
      <div className="top-discussion-container">
        <TopDiscussionComponent />
        <TopDiscussionComponent />
        <TopDiscussionComponent />
        <button>View more discussion</button>
      </div>
    </div>
  );
}
