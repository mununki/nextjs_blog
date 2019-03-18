import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="author" content={"moondaddi"} />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:400,700|Merriweather"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Build my dreams with codes" />
          <meta name="theme-color" content="#222f3e" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
