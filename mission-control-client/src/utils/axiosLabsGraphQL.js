import axios from "axios";

const axiosLabsGraphQL = axios.create({
  baseURL: "https://cr0ydt7cm4.execute-api.us-east-1.amazonaws.com/dev/",
  headers: {
     'x-api-key': "83oxHzYXTq5dHDUbh43TX1fUjxcq4wrr6zavVVR8" 
  }
});

export default axiosLabsGraphQL;
