import gql from 'graphql-tag';

const PULSE = gql`
  query Pulse($owner: String!, $name: String!) {
    githubPulse(owner: $owner, name: $name) {
      id
      issueCount
      closedIssues
      openIssues
      prCount
      closedPRs
      openPRs
      mergedPRs
    }
  }
`;

export { PULSE as default };
