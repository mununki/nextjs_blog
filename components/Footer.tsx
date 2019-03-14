import React from "react";

export default () => (
  <div id="footer">
    <div className="container">
      <div className="footer-container">
        <div id="footer-github">
          <a href="https://github.com/mattdamon108" target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        #footer {
          background-color: var(--background-color);
        }
        .footer-container {
          height: 5rem;
          font-family: $font-serif;
          font-size: 0.9rem;
        }
        #footer-github {
          padding-top: 1rem;
          margin-left: 1rem;
        }
      `}
    </style>
  </div>
);
