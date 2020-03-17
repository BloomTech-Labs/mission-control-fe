import gql from 'graphql-tag';

export const TEAM_QUERY = gql`
  query TeamView($id: ID!) {
    project(id: $id) {
      id
      projectManagers {
        name
      }
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
  query NoteFeed($id: ID!, $privatePerm: Boolean) {
    me {
      id
      email
    }
    project(id: $id) {
      id
      projectManagers {
        name
        id
        email
        avatar
      }
      notes(orderBy: updatedAt_DESC, privatePerm: $privatePerm) {
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
        privateNote
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
    $privateNote: Boolean
    $notification: Boolean
  ) {
    createNote(
      topic: $topic
      content: $content
      attendedBy: $attendedBy
      id: $id
      rating: $rating
      privateNote: $privateNote
      notification: $notification
    ) {
      content
      topic
      attendedBy {
        name
      }
      id
      rating
      privateNote
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
    $privateNote: Boolean!
  ) {
    updateNote(
      topic: $topic
      content: $content
      attendedBy: $attendedBy
      id: $id
      rating: $rating
      privateNote: $privateNote
    ) {
      content
      topic
      attendedBy {
        name
      }
      id
      rating
      privateNote
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
  mutation CreateLabelMutation($id: ID!, $name: String!, $color: String!) {
    createLabel(id: $id, name: $name, color: $color) {
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
  mutation DeleteLabelMutation($id: ID!, $columnId: String!) {
    deleteLabel(id: $id, columnId: $columnId) {
      id
    }
  }
`;

export const GET_USER_ROLE = gql`
  query GetUserRole($email: String!) {
    person(email: $email) {
      id
      name
      role {
        id
        name
        privateNote
      }
    }
  }
`;

export const CREATE_STATUS = gql`
  mutation createStatusMutation($id: ID!, $name: String!) {
    createStatus(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_STATUS = gql`
  mutation updateStatusMutation($id: ID!, $name: String!) {
    updateStatus(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_STATUS = gql`
  mutation DeleteStatusMutation($id: ID!) {
    deleteStatus(id: $id) {
      id
    }
  }
`;

export const TEST_QUERY = gql`
  query {
    me {
      email
    }
  }
`;

export const GET_GITHUB_REPOS = gql`
  query githubrepos($search: String!, $org: String) {
    GithubRepos(search: $search, org: $org) {
      name
      id
    }
  }
`;
