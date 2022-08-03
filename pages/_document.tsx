import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Hypolia Server MMO-RPG" />
        <meta name="keywords" content="Hypolia, Minecraft" />
        <meta name="author" content="Bonnal Nathael" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document