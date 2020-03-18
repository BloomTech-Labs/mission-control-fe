import gql from 'graphql-tag';

export const SPARKLINE = gql`
  query Sparkline($owner: String!, $name: String!) {
    SparkyBoy(owner: $owner, name: $name) {
      id
      message
      additions
      deletions
      changedFiles
      committedDate
    }
  }
`;
