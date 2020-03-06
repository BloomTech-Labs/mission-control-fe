import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    programs {
      name
      id
      columns {
        name
        id
        labels {
          name
          color
          id
        }
      }
      products {
        projects {
          id
          name
          updatedAt
          notes(orderBy: updatedAt_DESC) {
            id
            updatedAt
          }
          projectActive
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

export const DUMMY_QUERY = gql`
  query {
    info
  }
`;

export const LABELS_SUBSCRIPTION = gql`
  subscription labelSubscription {
    newLabels {
      id
      name
      color
    }
  }
`;

export const LABELS_QUERY = gql`
  query labelQuery {
    labels {
      id
      name
      color
    }
  }
`;
