import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    projects {
      id
      name
      active
      updatedAt
      tags {
        id
        tag {
          id
          name
        }
      }
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

export const LABEL_LIST_VIEW = gql`
  query {
    programs {
      id
      name
    }
  }
`;
