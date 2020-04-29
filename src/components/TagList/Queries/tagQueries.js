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

