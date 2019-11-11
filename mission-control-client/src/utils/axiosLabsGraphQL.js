import axios from "axios";

const axiosLabsGraphQL = axios.create({
  baseURL: "https://api.use-mission-control.com/",
  headers: {
     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTczNDkwNTgwLCJleHAiOjE1NzQwOTUzODB9.-qmJLZQmoDuOkhhNN70zfvG3N11Br5Zty1F1REUZMv0" 
  }
});

export default axiosLabsGraphQL;
