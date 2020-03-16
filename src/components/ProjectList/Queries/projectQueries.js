import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    programs {
      name
      id
      statuses {
        name
        id
        labels {
          name
          color
          id
        }
      }
      products {
        id
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
    }
  }
`;

export const LABEL_LIST_VIEW = gql`
  query {
    programs {
      name
      id
      statuses {
        name
        id
        labels {
          name
          color
          id
        }
      }
    }
  }
`;
