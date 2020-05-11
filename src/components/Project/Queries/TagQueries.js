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
    mutation createTag($tag: TagCreateInput!) {
	    createTag(data: $tag) {
        id
        name
     }
    }`;
export const DELETE_TAG = gql`
    mutation deleteThisTag($tag: TagWhereUniqueInput!) {
	    deleteTag(where: $tag) {
        name
     }
    }`;
