import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
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
          id
          grade
          name
          link
        }
      }
    }
    SparkyBoy(owner: "Lambda-School-Labs", name:"mission-control-be"){
      oid
      message
      additions
      deletions
      changedFiles
      committedDate
    }
  }
`;

export const LABELS_QUERY = gql`
  query {
    labels {
      id
      name
      color
    }
  }
`;

export const DUMMY_QUERY = gql`
  query {
    info
  }
`;

export const SPARKLINE = gql`
  query{
  SparkyBoy(owner: "Lambda-School-Labs", name:"mission-control-be"){
    oid
    message
    additions
    deletions
    changedFiles
    committedDate
  }
}
`

