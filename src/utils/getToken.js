export default () => {
  const token = localStorage.getItem('okta-token-storage');
  const {
    idToken: { idToken },
  } = JSON.parse(token);
  return idToken;
};
