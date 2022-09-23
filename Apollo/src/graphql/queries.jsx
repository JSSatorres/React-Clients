import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query getTodo {
    todos {
      title
      description
    }
  }
`;
