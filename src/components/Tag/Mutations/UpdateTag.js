import { gql } from 'apollo-boost';

//Lab23-T1
export default gql`
  mutation UpdateTag(
    $id: ID!
    $name: String!
    $isUsed: Boolean
  ) {
    updateTag(
      where: { id: $id }
      data: {
        name: $name
        isUsed: $isUsed
          }
    ) {
      id
    }
  }
`;