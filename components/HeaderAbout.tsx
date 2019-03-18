import Link from "next/link";
import React from "react";
import Switch from "./Switch";

export default () => {
  return (
    <header id="header">
      <div className="header-container">
        <div id="header-body">
          <div
            id="avatar-img"
            style={{
              backgroundImage: `url("/static/images/avatar/moondaddi_avatar.jpg")`
            }}
          />
          <div id="profile">
            <div id="name">moondaddi</div>
            <div id="job">Full Stack developer</div>
          </div>
          <div id="menu">
            <div id="header-blog">
              <a href="/blog">Blog</a>
            </div>
            <div id="header-about">
              <a href="mailto:woonki.moon@gmail.com">woonki.moon@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          #header {
            background-color: var(--background-color);
            color: white;
          }
          .header-container {
            width: 1200px;
            margin: 0 auto;
          }
          #avatar-img {
            display: inline-block;
            -webkit-border-radius: 25px;
            -moz-border-radius: 25px;
            border-radius: 25px;
            width: 50px;
            height: 50px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            vertical-align: middle;
          }
          #profile {
            display: inline-block;
            vertical-align: middle;
            padding-left: 1rem;
            font-family: var(--text-san-serif);
            font-size: 1rem;
            line-height: 1.5rem;
          }
          #profile #name {
          }
          #profile #job {
          }
          #header-body {
            position: relative;
            padding: 1rem;
          }
          #menu {
            display: inline-block;
            position: absolute;
            right: 0;
            font-family: var(--text-serif);
            font-size: 0.9rem;
            margin-top: 1rem;
          }
          #menu #header-blog {
            display: inline-block;
            margin: auto 1rem;
          }
          #menu #header-about {
            display: inline-block;
            margin: auto 1rem;
          }

          @media (max-width: 1200px) {
            .header-container {
              width: 100%;
              margin: 0 auto;
            }
          }
          @media (max-width: 576px) {
            #menu {
              display: block;
              text-align: right;
              position: relative;
            }
          }
        `}
      </style>
    </header>
  );
};
