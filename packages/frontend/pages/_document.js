import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render () {

    const { styleTags } = this.props
    return (
      <html lang="it">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          {styleTags}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}