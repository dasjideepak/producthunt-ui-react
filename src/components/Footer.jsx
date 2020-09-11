import React from "react";
import { BsDot } from "react-icons/bs";

function FooterComponent(props) {
  return (
    <div className="flex">
      <a href="##">{props.name}</a>
      <BsDot className="icon" />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <FooterComponent name="blog" />
        <FooterComponent name="newsletter" />
        <FooterComponent name="apps" />
        <FooterComponent name="about" />
        <FooterComponent name="FAQ" />
        <FooterComponent name="terms" />
        <FooterComponent name="privacy and cookies" />
        <FooterComponent name="twitter" />
        <FooterComponent name="facebook" />
        <FooterComponent name="instagram" />
        <FooterComponent name="advertise" />
      </div>
      <div className="copyright">
        <span>© 2020 PRODUCT HUNT</span>
      </div>
    </div>
  );
}
