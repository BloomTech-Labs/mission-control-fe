import gql from 'graphql-tag';

export const PULSE = gql`
  query{
    GithubPulse(owner: "Lambda-School-Labs", name:"mission-control-be"){
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