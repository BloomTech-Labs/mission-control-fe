import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    programs {
      name
      products {
        projects {
          id
          name
          updatedAt
          notes(orderBy: updatedAt_DESC) {
            id
            updatedAt
          }
          projectStatus {
            id
            name
            color
          }
          product {
            grades {
              grade
              name
              link
            }
          }
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

export const SUBSCRIPTION = gql`
  subscription {
    newLabels {
      id
      name
      color
    }
  }
`;
