export default () => {
  const token = localStorage.getItem('okta-token-storage');
  const {
    accessToken: { accessToken },
  } = JSON.parse(token);
  console.log('=========accessToken==========', accessToken);
  return accessToken;
};
