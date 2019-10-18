import React, { useState, useEffect } from "react";

// Axios GraphQL Config
import axiosLabsGraphQL from '../../utils/axiosLabsGraphQL';
// Pull in query
import { GET_PRODUCTS, GET_PROJECTS, GET_PERSONS, GET_PERSON, getPerson } from '../../queries';

const Dashboard = ({ children }) => {
  const [products, setProducts] = useState({});
  console.log(products);

  useEffect(() => {
    axiosLabsGraphQL
      .post('', { query: GET_PRODUCTS })
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosLabsGraphQL
      .post('', { query: GET_PROJECTS })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosLabsGraphQL
      .post('', { query: GET_PERSONS })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const id = "ck0ztzki20moz0a30avr3p1oa";
    axiosLabsGraphQL
      .post('', { query: GET_PERSON, variables: { id } })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const id = "ck0ztzki20moz0a30avr3p1oa";
    console.log(getPerson(id.toString()));
    axiosLabsGraphQL
      .post('', { query: getPerson(id) })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
