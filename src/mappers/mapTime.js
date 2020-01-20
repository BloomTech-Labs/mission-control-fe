// Takes in a DateTime object from graphql and returns a formatted
// string in a human readable format such that it is the difference
// between the date passed in and the current date in
// seconds/minutes/days/years

export default str => {
  const split = str.split('');
  const result = split.slice(0, 10);
  const time = result.join('');
  const timestamp = new Date(time).getTime() / 1000;
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
