// * This file contains all of the labs managers avatars until
// * we develop a relationship between Slack Okta

const managers = [
  {
    name: 'Bernie Durfee',
    email: 'bernie.durfee@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULLS6HX6G-22adeea32d11-72',
  },
  {
    name: 'Jess Martin',
    email: 'jess.martin@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UJVKYLMED-1fa60e08d02b-512',
  },
  {
    name: 'Elizabeth Lin',
    email: 'elizabeth.lin@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULGD0FZ5L-52e54f3a2c96-512',
  },
  {
    name: 'Parth Shah',
    email: 'parth.shah@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UQ8RC9QG3-5a7f8584c858-72',
  },
  {
    name: 'Ryan Hamblin',
    email: 'ryan.hamblin@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-U5SF97A1Z-3e40fb644cb0-512',
  },
  {
    name: 'Dev Team',
    email: 'missioncontrolpm@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-USLACKBOT-sv41d8cd98f0-512',
  },
  {
    name: 'Jam Dimic',
    email: 'jam.dimic@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UP41N4TPB-d4ebc331c94c-48',
  },
  {
    name: 'Ryan Holdaway',
    email: 'ryan.holdaway@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-U9E7020TX-4e37d09c9c61-512',
  },
  {
    name: 'Alice Karsevar',
    email: 'alice.karsevar@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UGYKPV3PA-72c12c38e387-512',
  },
  {
    name: 'Edd Burke',
    email: 'edd.burke@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UKW1FTYER-35b20bbc2498-48',
  },
  {
    name: 'Alex Parker',
    email: 'alex.parker@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULENDNJ0M-620667813bf9-48',
  },
  {
    name: 'John Muchiri',
    email: 'john.muchiri@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UNR4BBPCZ-989d676f6026-48',
  },
  {
    name: 'David Monson',
    email: 'david.monson@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UHPJ8BF8Q-a7013ad14b55-48',
  },
  {
    name: 'Julia Richert',
    email: 'julia.richert@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UQM09F9H6-0a01e95783be-512',
  },
];

export default email => {
  const [res] = managers.filter(e => e.email === email);
  if (res) {
    return res.avatar;
  }
  return 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png';
};
