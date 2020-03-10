import gql from 'graphql-tag';

export const PULSE = gql`
  query Pulse($owner: String!, $name:String!){
    GithubPulse(owner: $owner, name: $name){
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