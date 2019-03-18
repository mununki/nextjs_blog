import Link from "next/link";
import React from "react";

export default () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header-container">
          <div id="header-title">
            <a href="/">Build the Codes</a>
          </div>
          <div id="header-body">
            <div id="menu">
              <div id="header-blog">
                <a href="/blog">Blog</a>
              </div>
              <div id="header-tag">
                <a href="/tag">Tags</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          #header {
          }
          .header-container {
            position: relative;
            margin: 0 1rem;
          }
          #header-title {
            display: inline-block;
            font-family: var(--text-san-serif);
            font-size: 1.4rem;
            margin: 1rem auto;
            font-weight: bold;
          }
          #header-title a {
            text-decoration: none;
          }
          #header-body {
            display: inline-block;
            position: absolute;
            right: 0;
            margin: 1rem auto;
            text-align: right;
          }
          #menu {
            display: inline-block;
            font-size: 0.9rem;
          }
          #menu #header-blog {
            display: inline-block;
            margin: auto 1rem;
          }
          #menu #header-tag {
            display: inline-block;
            margin: auto 1rem;
          }
          @media (max-width: 576px) {
            #header-title {
              margin: 1rem auto 0 auto;
            }
            #header-body {
              display: block;
              text-align: right;
              position: relative;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
};
