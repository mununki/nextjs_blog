import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="sub-title">Go projects</div>
          <div className="sub-body">
            <div className="sub-body-title">
              go-graphql-api-boilerplate
              <iframe
                src="https://ghbtns.com/github-btn.html?user=mattdamon108&repo=go-graphql-api-boilerplate&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
            This is a GraphQL API boilerplate built with Go. This API has
            features `user sign up`, `sign in`, `change password`, `change
            profile`. Also, JSON web token authentication is implemented.
          </div>
          <div className="sub-body">
            <div className="sub-body-title">
              gql-merge
              <iframe
                src="https://ghbtns.com/github-btn.html?user=mattdamon108&repo=gqlmerge&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
            This is a GraphQL schema helper tool to merge and stitch modularized
            GraphQL schema files(*.graphql, *.gql) into one schema file. It has
            a feature to customize an indent size.
          </div>
          <div className="sub-body">
            <div className="sub-body-title">
              gw
              <iframe
                src="https://ghbtns.com/github-btn.html?user=mattdamon108&repo=gw&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
            This is a command wrapper to monitor any changes in target file
            system. If it detect any file system changes, then GW will re-run a
            command.
          </div>
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img src="/static/images/works/stack_img/go.png" alt="go" />
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
          flex-wrap: wrap;
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
