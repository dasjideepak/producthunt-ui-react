import React from "react";

export default function NEWSLETTER_SECTION() {
  return (
    <div className="newsletter-sec">
      <h1 className="card-heading">Newsletter</h1>
      <div className="card-data">
        <img
          src="https://ph-files.imgix.net/9740ee2c-3fc9-4904-a058-deb8fe5def85.png?auto=format&auto=compress&codec=mozjpeg&cs=strip"
          alt="newsletter"
        />
        <a href="##">The most anticipated app of 2020</a>
        <div className="text-and-button">
          <h4>
            Get the best new products in your inbox, every day
            <span role="img" aria-label="finger">
              👇
            </span>
          </h4>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
