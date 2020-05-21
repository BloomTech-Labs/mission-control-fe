import gql from 'graphql-tag';

export const TEAM_QUERY = gql`
  query TeamView($id: ID!) {
    project(where: { id: $id }) {
      id
      name
      teamMembers: assignments(
        where: { role: { name_not_in: ["Section Lead", "Team Lead"] } }
      ) {
        assignmentId: id
        person {
          id
          name
          email
          avatar
        }
        role {
          id
          name
        }
      }
      teamManagers: assignments(
        where: { role: { name_in: ["Section Lead", "Team Lead"] } }
      ) {
        assignmentId: id
        person {
          id
          name
          email
          avatar
        }
        role {
          id
          name
        }
      }
    }
  }
`;

export const HEADER_QUERY = gql`
  query HeaderView($id: ID!) {
    project(where: { id: $id }) {
      id
      active
      name
    }
  }
`;

export const NOTE_FEED_QUERY = gql`
  query NoteFeed($id: ID!, $private: Boolean) {
    me {
      id
      email
    }
    project(where: { id: $id }) {
      id
      # projectManagers {
      #   name
      #   id
      #   email
      #   avatar
      # }
      notes(where: { private: $private }, orderBy: updatedAt_DESC) {
        id
        topic
        content
        author {
          id
          email
          name
          avatar
        }
        # attendedBy {
        #   id
        #   name
        #   email
        #   avatar
        # }
        rating
        private
      }
    }
  }
`;

export const ATTENDANCE_QUERY = gql`
  query attendance($id: ID!) {
    project(where: { id: $id }) {
      id
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
    project(where: { id: $id }) {
      id
      name

      tags {
        id
        project {
          id
        }
      }

      status {
        id
        project {
          id
        }
        category {
          id
          name
          valueOptions {
            id
            label
            color
          }
        }
        value {
          id
          label
          color
        }
        # name
        # labels {
        #   id
        #   name
        #   color
        #   # selected {
        #   #   id
        #   # }
        # }
      }
      product {
        id
        name
        githubRepos {
          id
          url
          owner
          name
          # ownerId
          grade {
            id
            url
            value
          }
        }
      }
      # team {
      #   id
      #   name
      # }
      # projectManagers {
      #   name
      #   id
      #   email
      #   avatar
      # }
      notes(orderBy: updatedAt_DESC) {
        id
        topic
        content
        author {
          id
          email
          name
        }
        # attendedBy {
        #   id
        #   name
        #   email
        # }
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
    # $attendedBy: [String!]!
    $rating: Int!
    $private: Boolean
    $notification: Boolean
  ) {
    createNote(
      topic: $topic
      content: $content
      # attendedBy: $attendedBy
      id: $id
      rating: $rating
      private: $private
      notification: $notification
    ) {
      content
      topic
      # attendedBy {
      #   id
      #   name
      # }
      id
      rating
      private
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNoteMutation(
    $id: ID!
    $topic: String!
    $content: String!
    # $attendedBy: [String!]!
    $rating: Int!
    $private: Boolean!
  ) {
    updateNote(
      topic: $topic
      content: $content
      # attendedBy: $attendedBy
      id: $id
      rating: $rating
      private: $private
    ) {
      content
      topic
      # attendedBy {
      #   id
      #   name
      # }
      id
      rating
      private
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
      selected {
        id
      }
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
`

export const UPDATE_PROJECT_STATUS_ELEMENT_VALUE = gql`
  mutation UpdateProjectStatusElementValue(
    $projectId: ID!
    $projectStatusElementId: ID!
    $projectStatusValue: ID!
  ) {
    updateProject(
      # Select the project
      where: { id: $projectId }
      data: {
        # We want to update the status
        status: {
          update: {
            # Select the element being updated
            where: { id: $projectStatusElementId }
            data: {
              # Connect the element to the new value option
              value: { connect: { id: $projectStatusValue } }
            }
          }
        }
      }
    ) {
      id
    }
  }
`;

export const DISCONNECT_SELECTED_LABEL = gql`
  mutation DisconnectSelectedLabelMutation(
    $id: ID!
    $selected: ID!
    $columnId: String!
  ) {
    disconnectSelectedLabel(id: $id, selected: $selected, columnId: $columnId) {
      id
      selected {
        id
        name
      }
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
    person(where: { email: $email }) {
      id
      name
      # role {
      #   id
      #   name
      #   private
      # }
    }
  }
`;

export const CREATE_STATUS = gql`
  mutation createStatusMutation($id: ID!, $name: String!, $display: Boolean) {
    createStatus(id: $id, name: $name, display: $display) {
      id
      name
      display
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
      id
      owner
      name
      # ownerId
    }
  }
`;

export const CREATE_GITHUB_REPO = gql`
  mutation createGithubRepo(
    $id: String!
    $name: String!
    # $owner: String!
    # $ownerId: String!
    $repoId: String!
  ) {
    createGithubRepo(
      id: $id
      name: $name
      # owner: $owner
      # ownerId: $ownerId
      repoId: $repoId
    ) {
      name
      id
      # owner
      # ownerId
      repoId
    }
  }
`;

export const DELETE_GITHUB_REPO = gql`
  mutation deleteGithubRepo($id: ID!) {
    deleteGithubRepo(id: $id) {
      id
    }
  }
`;

export const GET_PROJECT_STATUS = gql`
  query projectStatusQuery($id: ID!) {
    project(where: { id: $id }) {
      id
      name
      status {
        id
        name
        labels {
          id
          name
          color
          # selected {
          #   id
          # }
        }
      }
    }
  }
`;

export const UPDATE_STATUS_DISPLAY = gql`
  mutation updateStatusMutation($id: ID!, $display: Boolean) {
    updateStatus(id: $id, display: $display) {
      id
      name
      display
    }
  }
`;

