import gql from 'graphql-tag';

export const SPARKLINE = gql`
  query Sparkline($name:String!) {
  SparkyBoy(owner: "Lambda-School-Labs", name:$name){
    id
    message
    additions
    deletions
    changedFiles
    committedDate
  }
}
`