import React from "react";
import { IoIosSearch } from "react-icons/io";
import { VscEllipsis } from "react-icons/vsc";
import { AiFillBell } from "react-icons/ai";

export default function Header() {
  return (
    <div className="header">
      <div className="container flex">
        <a href="##">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </a>
        <div className="search-bar flex">
          <IoIosSearch className="icon" />
          <input
            type="text"
            placeholder="Discover your next favorite thing..."
          />
        </div>
        <div className="nav-user-flex">
          <div className="nav-links-sec flex">
            <NavLinks url="##" name="Deals" />
            <NavLinks url="##" name="Jobs" />
            <NavLinks url="##" name="Discussions" />
            <NavLinks url="##" name="Ship" />
            <NavLinks url="##" name="Mentors" />
            <button
              onClick={() => console.log("Button Clicked")}
              className="flex"
            >
              <VscEllipsis className="icon" />
            </button>
          </div>
          <div className="user-login-display">
            <NavLinks url="##" name="Post" />
            <AiFillBell className="icon" />
            <img
              src="https://ph-avatars.imgix.net/2390606/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&dpr=2"
              alt="user-avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLinks = (props) => {
  return <a href={props.url}>{props.name}</a>;
};
