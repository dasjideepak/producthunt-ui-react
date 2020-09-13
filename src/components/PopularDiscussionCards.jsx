import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { ImReply } from "react-icons/im";

export default function POPULAR_DISCUSSION_CARDS_SECTION() {
  return (
    <div className="discussion-card-sec">
      <h2>Popular Discussion</h2>
      <div className="discussion-card">
        <div className="user-detail-bar">
          <div className="user-detail">
            <a href="##">
              <img
                src="https://ph-avatars.imgix.net/2299615/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
                alt="user-avatar"
              />
            </a>
            <h4>Austin Marks</h4>
            <h5>Co-Founder of Meta Nutrition</h5>
          </div>
          <div className="time">
            <h5>16h</h5>
          </div>
        </div>
        <div className="content-sec">
          <div className="text">
            <h3>Saas companies, lets talk converting free users to paid</h3>
            <p>
              As the title suggests, I want to discuss strategies that SaaS
              companies have implemented or hope to implement on converting
              their free users into a free trial, and hopefully a paid plan.
              <br />
              <br />
              What have your most successful campaigns been vs some of your
              worst to get these conversions?
            </p>
          </div>
          <div className="upvote-btn">
            <FaArrowUp />
            <h5>72</h5>
          </div>
        </div>
        <div className="icons-bar flex">
          <div className="flex box">
            <BsFillChatFill />
            <span>5</span>
          </div>
          <div className="flex box reply-box">
            <ImReply />
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
}
