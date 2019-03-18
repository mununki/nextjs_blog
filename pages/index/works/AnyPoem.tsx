import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div id="image-box" />
        <div className="content">
          <div className="sub-title">description</div>
          <div className="sub-body">
            <b>(Currently developing as a team)</b>
            <br /> Any-Poem is the web service which users can write their poems
            anytime and share it with others. Users can give a `like` to poem or
            poet, and Any-Poem suggests poems for each individual users who
            might like.
          </div>
          <div className="sub-body" />
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img src="/static/images/works/stack_img/react.png" alt="react" />
            <img src="/static/images/works/stack_img/ts.jpg" alt="typescript" />
            <img src="/static/images/works/stack_img/nextjs.png" alt="nextjs" />
            <img
              src="/static/images/works/stack_img/graphql.png"
              alt="graphql"
            />
            <img src="/static/images/works/stack_img/node.png" alt="node" />
            <img
              src="/static/images/works/stack_img/postgres.png"
              alt="postgres"
            />
            <img src="/static/images/works/stack_img/aws.jpg" alt="aws" />
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
        .stack {
          display: flex;
          flex-direction: columns;
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
