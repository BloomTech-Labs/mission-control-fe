import axios from "axios";

const axiosLabsGraphQL = axios.create({
  baseURL: process.env.REACT_APP_LABS_API_URL,
  headers: {
     'x-api-key': process.env.REACT_APP_LABS_API_KEY 
  }
});

export default axiosLabsGraphQL;
