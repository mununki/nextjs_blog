import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div id="image-box" />
        <div className="content">
          <div className="sub-title">
            Javascritp (with Typescript) Libraries
          </div>
          <div className="sub-body">
            <div className="sub-body-title">
              simple-react-cropper
              <a
                href="https://github.com/mattdamon108/simple-react-cropper"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </div>
            This is a simple image cropper & resizer has a dependency on
            Cropper.js. Simply it is wrapped to React Component to allow to use
            more easily in React project. This module is simplified with main
            features in purpose of avatar image crop & resize in most
            user-profile web page.
          </div>
          <div className="sub-body">
            <div className="sub-body-title">
              react-simple-click-outside
              <a
                href="https://github.com/mattdamon108/react-simple-click-outside"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </div>
            This is a simple click outside handler which enables your target
            component(or element) to listen click events outside of itself. This
            module can help you to make such as drop-down menu, modal, popover,
            tooltip easily.
          </div>
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img src="/static/images/works/stack_img/react.png" alt="react" />
            <img
              src="../../../static/images/works/stack_img/js.jpeg"
              alt="js"
            />
            <img src="/static/images/works/stack_img/ts.jpg" alt="typescript" />
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
        }
        .sub-body-title i {
          font-weight: normal;
          margin: 0 0 0 1rem;
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
