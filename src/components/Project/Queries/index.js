import gql from 'graphql-tag';

export const TEAM_QUERY = gql`
  query TeamView($id: ID!) {
    project(id: $id) {
      id
      team {
        id
        name
        email
        avatar
      }
    }
  }
`;

export const HEADER_QUERY = gql`
  query HeaderView($id: ID!) {
    project(id: $id) {
      id
      projectActive
      name
    }
  }
`;

export const NOTE_FEED_QUERY = gql`
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
        avatar
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
          avatar
        }
        rating
      }
    }
  }
`;

export const ATTENDANCE_QUERY = gql`
  query attendance($id: ID!) {
    project(id: $id) {
      projectManagers {
        name
        id
        email
        avatar
      }
    }
  }
`;

export const PROJECT_VIEW_QUERY = gql`
  query ProjectView($id: ID!) {
    me {
      id
      email
    }
    project(id: $id) {
      id
      name
      product {
        id
        name
        grades {
          id
          name
          grade
          link
        }
      }
      team {
        id
        name
      }
      projectManagers {
        name
        id
        email
        avatar
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

export const CREATE_NOTE = gql`
  mutation CreateNoteMutation(
    $id: ID!
    $topic: String!
    $content: String!
    $attendedBy: [String!]!
    $rating: Int!
    $notification: Boolean
  ) {
    createNote(
      topic: $topic
      content: $content
      attendedBy: $attendedBy
      id: $id
      rating: $rating
      notification: $notification
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

export const UPDATE_NOTE = gql`
  mutation UpdateNoteMutation(
    $id: ID!
    $topic: String!
    $content: String!
    $attendedBy: [String!]!
    $rating: Int!
  ) {
    updateNote(
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

export const DELETE_NOTE = gql`
  mutation DeleteNoteMutation($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`;

export const CREATE_LABEL = gql`
  mutation CreateLabelMutation($name: String!, $color: String!) {
    createLabel(name: $name, color: $color) {
      name
      color
      id
    }
  }
`;

export const UPDATE_LABEL = gql`
  mutation UpdateLabelMutation($id: ID!, $name: String!, $color: String!) {
    updateLabel(name: $name, color: $color, id: $id) {
      id
      name
      color
    }
  }
`;

export const DELETE_LABEL = gql`
  mutation DeleteLabelMutation($id: ID!) {
    deleteLabel(id: $id) {
      id
    }
  }
`;
