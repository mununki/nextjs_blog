import Link from "next/link";
import Router from "next/router";
import React from "react";
import "../style/header.scss";

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
                <Link href="/about">
                  <a>moondaddi</a>
                </Link>
              </div>
              <div>My dreams with Codes</div>
            </div>
            <div id="menu">
              <div id="header-tag">
                <Link href="/tag">
                  <a>Tags</a>
                </Link>
              </div>
              <div id="header-about">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
