import gql from "graphql-tag";

//Product CRUD
//Add

const createProduct = gql`
  mutation AddProductMutation($name: String!) {
    createProduct(data: { name: $name }) {
      id
      name
    }
  }
`;

//Edit

const updateProduct = gql`
  mutation EditProductMutation($name: String!, $where: ID!) {
    updateProduct(where: { id: $where }, data: { name: $name }) {
      id
      name
    }
  }
`;

//Delete

const deleteProduct = gql`
  mutation DeleteProductMutation($where: ID!) {
    deleteProduct(where: { id: $where }) {
      id
      name
    }
  }
`;

//Project CRUD
//Add

const addProject = gql``;

//Edit

//Delete
