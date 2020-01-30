import gql from 'graphql-tag';

export const TEAM_QUERY = gql`
  query ProjectView($id: ID!) {
    project(id: $id) {
      id
      team {
        id
        name
        email
        role
      }
      teamLead {
        id
        name
      }
      sectionLead {
        id
        name
      }
    }
  }
`;

export const DUMMY = 'hello world';
