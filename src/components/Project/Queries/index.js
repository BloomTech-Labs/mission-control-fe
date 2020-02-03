import gql from 'graphql-tag';

export const TEAM_QUERY = gql`
  query TeamView($id: ID!) {
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

export const HEADER_QUERY = gql`
  query HeaderView($id: ID!) {
    project(id: $id) {
      id
      status
      name
    }
  }
`;

export const NoteFeedQuery = gql`
  query NoteFeed($id: ID!) {
    me {
      id
      email
    }
    project(id: $id) {
      projectManagers {
        name
        id
        email
      }
      notes(orderBy: updatedAt_DESC) {
        id
        topic
        content
        author {
          id
          email
          name
        }
        attendedBy {
          id
          name
          email
        }
        rating
      }
    }
  }
`;
