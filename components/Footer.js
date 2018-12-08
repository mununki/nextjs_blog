export default () => (
  <>
    <div id="footer">
      <div className="footer-container">
        <div className="footer-left-span" />
        <div className="copyright">
          <div>Copyright © 2018 Moondaddi's Blog</div>
          <div>The source code is under MIT License</div>
        </div>
        <div className="footer-right-span">
          <a href="mailto:woonki.moon@gmail.com">
            <i className="fas fa-envelope" />
          </a>
          <a href="https://github.com/mattdamon108" target="_blank">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
    <style jsx="true">{`
      .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .footer-left-span {
        width: 70px;
      }
      .copyright {
        color: #999;
        font-size: 0.8rem;
        text-align: center;
        padding: 10px;
      }
      .footer-right-span {
        color: #fff;
        font-size: 1.5rem;
        text-align: right;
      }
      .footer-right-span a:link,
      .footer-right-span a:visited,
      .footer-right-span a:hover,
      .footer-right-span a:active {
        color: #fff;
      }
      .footer-right-span i {
        padding-right: 10px;
      }
    `}</style>
  </>
);
