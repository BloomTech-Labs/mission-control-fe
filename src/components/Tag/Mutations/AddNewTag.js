//Lab23-T1
import { gql } from 'apollo-boost';

export default gql`
  mutation AddTag(
    $name: String!
    $isUsed: Boolean
  ) {
    createTag(
      data: {
        name: $name
        isUsed: $isUsed
      }
    ) {
      id
    }
  }
`;