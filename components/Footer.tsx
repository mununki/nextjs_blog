import React from "react";

interface IProps {
  about?: boolean;
}

export default (props: IProps) => (
  <div id="footer">
    <div className="container">
      <div className="footer-container">
        <div className="footer-body">
          <div id="footer-menu">
            <div>moondaddi</div>
            <div id="footer-email">
              <a href="mailto:woonki.moon@gmail.com">woonki.moon@gmail.com</a>
            </div>
          </div>
          <div id="footer-contact">
            <div>
              <a href="/blog">Blog</a>
            </div>
            <div>
              <a href="/tag">Tag</a>
            </div>
          </div>
          <div id="footer-online">
            <div>
              <a href="https://github.com/mattdamon108" target="_blank">
                Github
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/woonki-moon-150a8b25/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div>Copyright (c) 2019 moondaddi</div>
          <div>under license MIT</div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        #footer {
          background-color: var(--background-color);
        }
        .container {
          width: ${props.about ? "1200px" : null};
        }
        .footer-container {
          flex: 1;
          padding: 1rem;
          font-size: 0.9rem;
          flex-wrap: wrap;
        }
        .footer-body {
          font-family: var(--text-serif);
          display: flex;
          justify-content: space-between;
        }
        #footer-menu,
        #footer-contact,
        #footer-online {
          flex: 1;
          color: white;
        }
        #footer-contact div,
        #footer-online div {
          text-align: center;
        }
        .footer-copyright {
          color: white;
        }
        @media screen and (max-width: 576px) {
          .footer-body {
            flex-direction: column;
          }
          #footer-contact div,
          #footer-online div {
            text-align: left;
          }
        }
        @media screen and (max-width: 1200px) {
          .container {
            width: ${props.about ? "100%" : null};
          }
        }
      `}
    </style>
  </div>
);
