//LAB23-T1
import gql from 'graphql-tag';

export const TAG_LIST_VIEW = gql`
  query {
    tags {
      id
      name 
      isUsed

    }    
  }
`;
export const GET_ALL_TAGS = gql`
  query {
    tags {
      id
      name
  
    }
}
`;
export const QUERY_ALL_TAGS = gql `
query Tag($tags: String!) {
  tag(tags: $tag) {
    id
    name
    isUsed
  }
}
`