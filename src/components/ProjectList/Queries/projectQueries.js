import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    projects {
      id
      name
      updatedAt
      notes(orderBy: updatedAt_DESC) {
        id
        updatedAt
      }
      product {
        id
        grades {
          id
          grade
          name
          link
        }
      }
    }
  }
`;

export const LABELS_QUERY = gql`
  query {
    labels {
      id
      name
      color
    }
  }
`;

export const DUMMY_QUERY = gql`
  query {
    info
  }
`;

