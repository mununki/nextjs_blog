import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import React from "react";

const isServer = typeof window === "undefined";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // window.dataLayer = window.dataLayer || []; function gtag(){" "}
    // {dataLayer.push(arguments)}
    // gtag("js", new Date()); gtag("config", "UA-136784454-1");
    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Head>
          <title>Build the Codes</title>
        </Head>
        <Component {...pageProps} />
        <style jsx global>
          {`
            html,
            body {
              width: 100%;
              margin: 0;
              padding: 0;
              border: 0;
              --background-color: #222f3e;
              --text-serif: Merriweather, Courier, serif;
              --text-san-serif: "Ubuntu", "Helvetica Neue", Helvetica, Arial,
                sans-serif;
              --text-link-color: #ed4c67;
            }
            body {
              font-size: 1rem;
              font-family: var(--text-serif);
              font-weight: 300;
              width: 100%;
              line-height: 200%;
              -webkit-font-smoothing: antialiased;
            }
            a {
              text-decoration: underline;
            }
            a:link {
              color: var(--text-link-color);
            }
            a:visited {
              color: var(--text-link-color);
            }
            a:hover {
              color: var(--text-link-color);
            }
            a:active {
              color: var(--text-link-color);
            }
            .container {
              width: 800px;
              margin: 0 auto;
            }
            @media (max-width: 900px) {
              .container {
                width: 100%;
                margin: 0 auto;
              }
            }
            .post-content {
              background-color: #fff;
              padding: 1rem;
              margin-bottom: 50px;
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
              padding: 2px 3px;
              border-width: 0;
              border-radius: 3px;
              background-color: rgba(255, 229, 100, 0.2);
              font-family: Merriweather, Courier, serif;
            }
            pre code {
              overflow: auto;
              word-wrap: normal;
              white-space: pre;
              line-height: 150%;
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
              font-family: Consolas, Menlo, Monaco, monospace;
              font-size: 0.8rem;
              font-weight: 600;
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
                width: 100%;
              }
            }
          `}
        </style>
      </Container>
    );
  }
}

export default MyApp;
