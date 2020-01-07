// These are temporary to fetch data from testing
// Update methods accordingly once Apollo is in place

import axios from 'axios';

export const getData = async token => {
  const result = await axios.get('http://localhost:4000/secure', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const secureRequest = async (verify, http) => {
  const token = await verify();
  const result = await http(token);

  return result;
};

export const getToken = () => {
  const token = localStorage.getItem('okta-token-storage');
  const {
    accessToken: { accessToken },
  } = JSON.parse(token);

  return accessToken;
};
