import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div id="image-box" />
        <div className="content">
          <div className="sub-title">Rust projects</div>
          <div className="sub-body">
            <div className="sub-body-title">
              rust_graphql_api_boilerplate
              <iframe
                src="https://ghbtns.com/github-btn.html?user=mattdamon108&repo=rust_graphql_api_boilerplate&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
            This is a GraphQL API boilerplate built with Rust. This api features
            user sign up, sign in, change password, change profile. Also, Json
            Web Token authentication is implemented.
          </div>
          <div className="sub-body">
            <div className="sub-body-title">
              rust_front_matter_parser
              <a
                href="https://github.com/mattdamon108/rust_front_matter_parser"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </div>
            This is a front matter in markdown file(*.md, *.mdx) parser built
            with Rust. The front matter is the metadata of markdown content. It
            stays on top of markdown content and contains the metadata of
            itself.
          </div>
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img src="/static/images/works/stack_img/rust.png" alt="rust" />
            <img src="/static/images/works/stack_img/docker.png" alt="docker" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        #image-box {
        }
        .sub-title {
          font-size: 1.2rem;
          color: grey;
          margin: 1rem 0;
        }
        .sub-body {
          margin: 0 0 1.5rem 0;
        }
        .sub-body .sub-body-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 0 0 0.5rem 0;
          display: flex;
          align-items: center;
        }
        .sub-body-title i {
          font-weight: normal;
          margin: 0 1rem;
        }
        .sub-body-title iframe {
          padding-left: 1rem;
        }
        .sub-body-title span {
          position: relative;
          top: 3px;
        }
        .stack {
          display: flex;
          flex-direction: columns;
          flex-wrap: wrap;
        }
        .stack img {
          width: 50px;
          height: 50px;
          margin: 0 0.5rem;
        }
      `}</style>
    </>
  );
};
