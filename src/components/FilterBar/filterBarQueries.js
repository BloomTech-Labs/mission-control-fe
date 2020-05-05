import gql from 'graphql-tag';

export const FILTERED_DATA = gql`
  query ($filter: ProjectWhereInput!) {

    projects(where: $filter) {
      id
      name
      active
      updatedAt
      notes(orderBy: updatedAt_DESC) {
        id
        updatedAt
      }
      status {
        id
        # category {
        #   id
        #   name
        # }
        # display
        # labels {
        #   id
        #   name
        #   color
        # }
      }
      product {
        id
        githubRepos {
          id
          grade {
            id
            url
            value
          }
        }
      }
    }
  }
`;
