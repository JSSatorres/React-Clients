import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API
  }),
  cache: new InMemoryCache(),
});
