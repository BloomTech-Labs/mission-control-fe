import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    me {
      id
      projects {
        id
        name
        status
        updatedAt
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
