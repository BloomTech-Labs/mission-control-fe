// * This file contains all of the labs members avatars until
// * we develop a relationship between Slack Okta

const members = [
  {
    name: 'Kevin Afable',
    email: 'kevin.afable@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULJ1MK9GT-17419b760e18-512',
  },
  {
    name: 'Nicholas Gebhart',
    email: 'nicholas.gebhart@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULXHMK9PY-013dd2da8dd8-512',
  },
  {
    name: 'Dakotah Huey',
    email: 'hueydakotah@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULP6AEAF3-7aa2e18de5a8-512',
  },
  {
    name: 'Tony Kovar',
    email: 'tonykovar@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULXJ07DJS-d95403332534-24',
  },
  {
    name: 'Tommy Coleman',
    email: 'tommycoleman87@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UHXNFRBFE-b1accb251340-512',
  },
  {
    name: 'Roy Wakumelo Jr',
    email: 'roywakumelojr@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULXALGWPR-90c177b51aa7-512',
  },
];

export default email => {
  const [res] = members.filter(e => e.email === email);
  if (res) {
    return res.avatar;
  }
  return 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png';
};
