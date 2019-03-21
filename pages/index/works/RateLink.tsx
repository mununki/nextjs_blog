import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="img-box">
            <div
              style={{
                width: "100%",
                height: "0px",
                position: "relative",
                paddingBottom: "55.625%"
              }}
            >
              <iframe
                src="https://streamable.com/s/ompp5/qloeva"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden"
                }}
              />
            </div>
          </div>
          <div className="sub-title">description</div>
          <div className="sub-body">
            RateLink is the shipping Freight management system. User can sign up
            and make their account and save their shipping freight data and
            search instantly by from/to location, shipping liners, container
            types, period. All data is saved safely in Amazon cloud service. It
            has a following/follower model. So, user can share their data if
            user allow to show them.
          </div>
          <div className="sub-body">
            Data visualization system will enhance your decision making more
            effectively. User can have a beautiful chart with their rate and
            their following `teller` user's data. User also can update their
            avatar and manage followers with user-friendly interface.
          </div>
          <div className="sub-title">Github</div>
          <div className="sub-body">
            <ul>
              <li>
                <a
                  href="https://github.com/mattdamon108/RateLink-Frontend"
                  target="_blank"
                >
                  Frontend
                </a>{" "}
                : React | Next.js | GraphQL
              </li>
              <li>
                <a
                  href="https://github.com/mattdamon108/RateLink-Backend_v2"
                  target="_blank"
                >
                  Backend
                </a>{" "}
                : Node | Django | Prisma | Postgres | AWS lambda
              </li>
            </ul>
          </div>
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img src="/static/images/works/stack_img/react.png" alt="react" />
            <img src="/static/images/works/stack_img/nextjs.png" alt="nextjs" />
            <img src="/static/images/works/stack_img/prisma.jpg" alt="prisma" />
            <img
              src="/static/images/works/stack_img/graphql.png"
              alt="graphql"
            />
            <img src="/static/images/works/stack_img/node.png" alt="node" />
            <img src="/static/images/works/stack_img/django.png" alt="django" />
            <img
              src="/static/images/works/stack_img/postgres.png"
              alt="postgres"
            />
            <img
              src="/static/images/works/stack_img/awslambda.png"
              alt="awslambda"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        .img-box {
          padding: 1rem;
        }
        .sub-title {
          font-size: 1.2rem;
          color: grey;
          margin: 1rem 0;
        }
        .stack {
          display: flex;
          flex-direction: columns;
          flex-wrap: wrap;
        }
        .stack img {
          width: 50px;
          height: 50px;
          margin: 0.3rem;
        }
      `}</style>
    </>
  );
};
