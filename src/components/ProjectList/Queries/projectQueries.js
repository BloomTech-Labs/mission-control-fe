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

export const LABELS_SUBSCRIPTION = gql`
  subscription labelSubscription {
    newLabels {
      id
      name
      color
    }
  }
`;

export const PROGRAM_SUBSCRIPTION = gql`
  subscription programsubscription {
    programs {
      id
      name
      statuses {
        id
        name
        labels {
          id
          name
          color
        }
      }
      products {
        projects {
          id
          name
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
