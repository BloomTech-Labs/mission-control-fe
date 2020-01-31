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
    name: 'Dev',
    email: 'missioncontrolpm@gmail.com',
    avatar:
      'https://img.discogs.com/bPb2OOaaSY21Gt7fae5qnz17eF0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-3624278-1419177982-9445.jpeg.jpg',
  },
];

export default email => {
  const [res] = managers.filter(e => e.email === email);
  if (res) {
    return res.avatar;
  }
  return 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png';
};
