import gql from 'graphql-tag';

export const GET_ALL_TAGS = gql`
  query {
    tags {
      id
      name
    }
}
`;
export const CREATE_TAG = gql`
    mutation createTag($name: String!) {
	    createTag(data: {name: $name}) {
        id
        name
     }
    }`;

