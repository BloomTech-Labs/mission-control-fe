import axios from "axios";

const axiosLabsGraphQL = axios.create({
  baseURL: "https://api-dev.use-mission-control.com/",
  headers: {
    Authorization:
      process.env.REACT_APP_JWT_TOKEN
  }
});

export default axiosLabsGraphQL;
