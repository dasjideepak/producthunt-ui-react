import React from "react";
import { BsDot } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <FooterTab url="##" name="blog" />
        <FooterTab url="##" name="newsletter" />
        <FooterTab url="##" name="apps" />
        <FooterTab url="##" name="about" />
        <FooterTab url="##" name="FAQ" />
        <FooterTab url="##" name="terms" />
        <FooterTab url="##" name="privacy and cookies" />
        <FooterTab url="##" name="twitter" />
        <FooterTab url="##" name="facebook" />
        <FooterTab url="##" name="instagram" />
        <FooterTab url="##" name="advertise" />
      </div>
      <div className="copyright">
        <span>© 2020 PRODUCT HUNT</span>
      </div>
    </div>
  );
}

function FooterTab(props) {
  return (
    <div className="flex">
      <a href={props.url}>{props.name}</a>
      <BsDot className="icon" />
    </div>
  );
}
