import App, { Container } from "next/app";
import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Head from "next/head";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  state = {
    isShowing: null
  };
  componentDidMount() {
    const header = document.querySelector("#header");
    const container = document.querySelector(".container");
    const containerCategory = document.querySelector("#container-category");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > header.offsetTop + 250) {
        header.classList.add("make-fixed");
        container.classList.add("add-padding-for-fixed-header");
        containerCategory.classList.add("make-fixed-category");
      } else {
        header.classList.remove("make-fixed");
        container.classList.remove("add-padding-for-fixed-header");
        containerCategory.classList.remove("make-fixed-category");
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  _setShowing = name => {
    if (name) {
      this.setState({
        isShowing: name
      });
    } else {
      if (this.state.isShowing) {
        this.setState({
          isShowing: null
        });
      } else {
        this.setState({
          isShowing: "category"
        });
      }
    }
  };
  render() {
    const { Component, pageProps, router } = this.props;
    const { isShowing } = this.state;

    return (
      <Container>
        <Head>
          <title>Moondaddi's Blog</title>
        </Head>
        <div id="layout">
          <Header _setShowing={this._setShowing} />
          <Category
            isShowing={isShowing}
            _setShowing={this._setShowing}
            router={router}
          />
          <Component {...pageProps} />
          <Footer />
        </div>
        <style jsx global>
          {`
            html,
            body {
              margin: 0;
              padding: 0;
              border: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Helvetica, Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 1rem;
              font-weight: 300;
              line-height: 160%;
            }
            #layout {
              display: grid;
              grid-template-columns: 300px 1fr;
              grid-template-areas: "header header" "category content" "footer footer";
            }
            #footer {
              grid-area: footer;
              background-color: #eee;
            }
            #content {
              grid-area: content;
              display: grid;
              grid-template-columns: minmax(auto, 100px) 1fr minmax(auto, 100px);
              grid-template-areas: "left-span container right-span";
              padding: 50px 0px;
              background: radial-gradient(black 15%, transparent 16%) 0 0,
                radial-gradient(black 15%, transparent 16%) 8px 8px,
                radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0
                  1px,
                radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%)
                  8px 9px;
              background-color: #282828;
              background-size: 16px 16px;
            }
            @media (max-width: 576px) {
              #layout {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-areas: "header" "content" "footer";
              }
              #content {
                grid-area: content;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-areas: "container";
                padding: 50px 0px;
              }
              img {
                width: 100%;
              }
            }
            .container {
              grid-area: container;
              padding: 20px 10px 20px 10px;
              min-width: 0;
            }

            .add-padding-for-fixed-header {
              padding: 90px 10px 20px 10px;
            }

            // post style here!
            // because <MD /> loaded earlier than <style jsx /> in indexPresenter.js and postPresenter.js
            // So, implement the sytle as global here!
            .index-h2-title {
              display: inline-block;
              border: 5px solid #2c3e50;
              border-radius: 35px;
              padding: 10px 20px;
              background-color: #fff;
            }
            .pinned {
              border: 5px solid #e74c3c;
            }
            #latest {
              color: #f39c12;
            }
            #pinned {
              color: #e74c3c;
            }
            .post-card {
              background-color: #fff;
              border: 1px solid #eee;
              padding: 20px;
              margin-bottom: 50px;
              border-radius: 5px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            img {
              width: 100%;
              max-width: fit-content;
            }

            blockquote {
              margin: 0;
              padding: 0 1em;
              color: #6a737d;
              border-left: 0.25em solid #dfe2e5;
              word-break: break-word;
            }

            code {
              color: #c0392b;
              padding: 2px 3px;
              border: 1px solid #ccc;
              border-radius: 3px;
            }

            pre code {
              overflow: auto;
              word-wrap: normal;
              white-space: pre;
              // width: calc(100vw - 360px);
            }

            .hljs-comment,
            .hljs-quote {
              color: #d4d0ab;
            }

            .hljs-variable,
            .hljs-template-variable,
            .hljs-tag,
            .hljs-name,
            .hljs-selector-id,
            .hljs-selector-class,
            .hljs-regexp,
            .hljs-deletion {
              color: #ffa07a;
            }

            /* Orange */
            .hljs-number,
            .hljs-built_in,
            .hljs-builtin-name,
            .hljs-literal,
            .hljs-type,
            .hljs-params,
            .hljs-meta,
            .hljs-link {
              color: #f5ab35;
            }

            /* Yellow */
            .hljs-attribute {
              color: #ffd700;
            }

            /* Green */
            .hljs-string,
            .hljs-symbol,
            .hljs-bullet,
            .hljs-addition {
              color: #abe338;
            }

            /* Blue */
            .hljs-title,
            .hljs-section {
              color: #00e0e0;
            }

            /* Purple */
            .hljs-keyword,
            .hljs-selector-tag {
              color: #dcc6e0;
            }

            .hljs {
              display: block;
              overflow-x: auto;
              background: #2b2b2b;
              color: #f8f8f2;
              padding: 1rem;
              font-size: 1rem;
              border-radius: 5px;
            }

            .hljs-emphasis {
              font-style: italic;
            }

            .hljs-strong {
              font-weight: bold;
            }

            @media screen and (-ms-high-contrast: active) {
              .hljs-addition,
              .hljs-attribute,
              .hljs-built_in,
              .hljs-builtin-name,
              .hljs-bullet,
              .hljs-comment,
              .hljs-link,
              .hljs-literal,
              .hljs-meta,
              .hljs-number,
              .hljs-params,
              .hljs-string,
              .hljs-symbol,
              .hljs-type,
              .hljs-quote {
                color: highlight;
              }

              .hljs-keyword,
              .hljs-selector-tag {
                font-weight: bold;
              }
            }

            @media (max-width: 576px) {
              pre {
                width: calc(100vw - 60px);
              }
            }
          `}
        </style>
      </Container>
    );
  }
}

export default MyApp;
