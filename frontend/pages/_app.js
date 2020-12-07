import { ApolloProvider } from "@apollo/client";

import client from "../src/apollo/client";
import "../src/styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
