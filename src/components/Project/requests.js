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
      projectManagers {
        name
        id
        email
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

export const CreateNoteMutation = gql`
  mutation CreateNoteMutation(
    $id: ID!
    $topic: String!
    $content: String!
    $attendedBy: [String!]!
    $rating: Int!
  ) {
    createNote(
      topic: $topic
      content: $content
      attendedBy: $attendedBy
      id: $id
      rating: $rating
    ) {
      content
      topic
      attendedBy {
        name
      }
      id
      rating
    }
  }
`;
