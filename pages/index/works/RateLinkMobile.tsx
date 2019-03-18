import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div id="content-description">
            <div className="img-box">
              <div
                style={{
                  width: "100%",
                  height: "0px",
                  position: "relative",
                  paddingBottom: "214.286%"
                }}
              >
                <iframe
                  src="https://streamable.com/s/3yhx5/etoqou"
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
            <div id="content-left">
              <div>
                <div className="sub-title">description</div>
                <div className="sub-body">
                  RateLink mobile is the mobile app for iOS, Android. RateLink
                  mobile enables users to carry their shipping freight data
                  anywhere on his/her hand. User friendly and intuitive
                  interface get users to satisfaction.
                </div>
                <div className="sub-body">
                  RateLink mobile brings all features as same as RateLink web
                  page has.
                </div>
              </div>
            </div>
          </div>
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img
              src="/static/images/works/stack_img/reactnative.jpg"
              alt="reactnative"
            />
            <img
              src="/static/images/works/stack_img/graphql.png"
              alt="graphql"
            />
            <img src="/static/images/works/stack_img/node.png" alt="node" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column;
        }
        #content-description {
          display: flex;
        }
        #content-left {
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }
        .img-box {
          width: 400px;
          margin: 0 auto;
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
          margin: 0 0.5rem;
        }
        @media screen and (max-width: 576px) {
          #content-description {
            flex-direction: column;
          }
          .img-box {
            width: 50%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
};
