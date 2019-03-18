import Link from "next/link";
import React from "react";
import Switch from "./Switch";

export default () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header-container">
          <div id="header-title">
            <a href="/">Build the Codes</a>
          </div>
          <div id="header-body">
            <div
              id="avatar-img"
              style={{
                backgroundImage: `url("/static/images/avatar/moondaddi_avatar.jpg")`
              }}
            />
            <div id="profile">
              <div id="name">
                <a href="/">moondaddi</a>
              </div>
              <div>My dreams with Codes</div>
            </div>
            <div id="menu">
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
            background-color: var(--background-color);
            color: white;
          }
          .header-container {
            margin: 0 1rem;
            padding: 1rem 0;
          }
          #header-title {
            display: block;
            position: relative;
            font-family: var(--text-san-serif);
            font-size: 1.7rem;
            margin: 1rem auto;
            font-weight: bold;
          }
          #header-title a {
            color: white;
            text-decoration: none;
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
            font-family: $font-serif;
            color: $text-normal-color;
            font-size: 0.9rem;
          }
          #header-body {
            position: relative;
          }
          #menu {
            display: inline-block;
            position: absolute;
            right: 0;
            font-family: $font-serif;
            font-size: 0.9rem;
            margin-top: 1rem;
          }
          #menu #header-tag {
            display: inline-block;
            margin: auto 1rem;
          }
        `}
      </style>
    </div>
  );
};
