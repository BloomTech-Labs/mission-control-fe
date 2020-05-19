import gql from 'graphql-tag';

export const GET_ALL_TAGS = gql`
query getProjectTags($projectId: ID!) {
  project(where: {id: $projectId}) {
   tags { 
    tag {
      name
      id
    }
  }
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

export const CONNECT_TO_PROJECT = gql`
    mutation connectTagToProject($data: ProjectTagElementCreateInput!) {
      createProjectTagElement(data: $data 
          )
          {
        id
      }
    }`;
export const DELETE_TAG = gql`
    mutation deleteThisTag($tag: TagWhereUniqueInput!) {
	    deleteTag(where: $tag) {
        name
     }
    }`;

export const UPDATE_TAG = gql`
    mutation updateThisTag($tag: TagWhereUniqueInput!, $data: TagUpdateInput!) {
	    updateTag(where: $tag, data: $data) {
        name
     }
    }`;