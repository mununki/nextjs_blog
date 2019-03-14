import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/global.scss";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  state = {};

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Head>
          <title>Build the Codes</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default MyApp;
