import React from "react";
import styled from "styled-components";
import HeaderAbout from "../../components/HeaderAbout";

export default () => {
  return (
    <>
      <div id="about-container">
        <HeaderAbout />
        <div className="about-greeting">
          <div>Hi!</div>
          <div>I'm moondaddi</div>
        </div>
      </div>
      <style jsx>
        {`
          #about-container {
            height: 100vh;
          }
          .about-greeting {
            background-color: red;
            font-family: var(--text-san-serif);
            font-size: 7rem;
            line-height: 8rem;
            padding-left: 2rem;
          }
        `}
      </style>
    </>
  );
};
