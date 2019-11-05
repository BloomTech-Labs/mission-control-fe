import axios from "axios";

const axiosLabsGraphQL = axios.create({
  baseURL: "http://pma-n-publi-11bvc0q971mnj-2025074476.us-east-1.elb.amazonaws.com/",
  headers: {
     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTcyODgzOTUxLCJleHAiOjE1NzM0ODg3NTF9.9QKq5sKaQLlOVzw5vOAlfnC_4W7M34VGAz9jdlV1fD0" 
  }
});

export default axiosLabsGraphQL;
