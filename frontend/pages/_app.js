import { ApolloProvider } from "@apollo/client";

import client from "../src/apollo/client";
import "../src/styles/index.scss";

function MyApp({ Component, pageProps }) {
  console.log(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
