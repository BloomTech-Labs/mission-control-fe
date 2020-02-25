import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    me {
      id
      projects {
        id
        name
        updatedAt
        notes(orderBy: updatedAt_DESC) {
          id
          updatedAt
        }
        sectionLead {
          id
          name
        }
        teamLead {
          id
          name
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
