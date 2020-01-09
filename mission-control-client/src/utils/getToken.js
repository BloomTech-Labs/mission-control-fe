export default () => {
  const token = localStorage.getItem('okta-token-storage');
  const {
    accessToken: { accessToken },
  } = JSON.parse(token);

  if (token)
    return {
      accessToken,
      type: 'OKTA',
    };
};
