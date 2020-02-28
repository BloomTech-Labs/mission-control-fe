import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    projects {
        id
        name
        status
        updatedAt
        notes(orderBy: updatedAt_DESC) {
          id
          updatedAt
        }
      }
  }
`;

export const DUMMY_QUERY = gql`
  query {
    info
  }
`;
