import gql from 'graphql-tag';

export const ProjectViewQuery = gql`
  query ProjectView($id: ID!) {
    me {
      id
      email
    }
    project(id: $id) {
      id
      name
      status
      product {
        id
        name
      }
      team {
        id
        name
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
      notes {
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
