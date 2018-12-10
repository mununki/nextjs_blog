import App, { Container } from "next/app";
import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Footer from "../components/Footer";
import cssGlobal from "../utils/cssGlobal";
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
      if (window.scrollY > 75) {
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
          {cssGlobal}
        </style>
      </Container>
    );
  }
}

export default MyApp;
