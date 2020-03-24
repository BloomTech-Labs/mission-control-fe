import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    programs {
      name
      id
      statuses {
        name
        id
        display
        labels {
          name
          color
          id
          status {
            id
          }
          selected {
            id
            name
          }
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
          projectStatus {
            id
            name
            display
            labels {
              id
              name
              color
            }
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
        display
        labels {
          name
          color
          id
          selected {
            id
            name
          }
        }
      }
    }
  }
`;
