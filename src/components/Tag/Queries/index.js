
//LAB23-T1
import gql from 'graphql-tag';


export const HEADER_QUERY = gql`
  query HeaderView($id: ID!) {
    tag(where: { id: $id }) {
      id
      name
      createdAt
      isUsed
    }
  }
`
export const TAG_VIEW_QUERY = gql`
query TagView($id: ID!) {

    tag(where: { id: $id }) {
      id
      name
      createdAt
      isUsed
    }
}`

