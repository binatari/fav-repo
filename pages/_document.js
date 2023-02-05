import Document, { Head, Html, Main, NextScript } from 'next/document';
// import { ThemeScriptTag } from 'tailwind-darkmode-toggle';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>    
        </Head>
          <Main />
          <NextScript />
      </Html>
    );
  }
}

export default MyDocument;