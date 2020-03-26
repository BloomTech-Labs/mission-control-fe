// Sets the maximum value of data sets to display sparkline (DS repos can have 2.5million changes and skew the sparkline)
const maxValueCheck = (array, value, maxValue) => {
  if (value > maxValue) {
    array.push(maxValue);
  } else {
    array.push(value);
  }
};

// Takes in API data set, arrays, maxValue variable, reverses the order and then parses into three seperate arrays
export const ChartDatafier = (
  data,
  additions,
  deletions,
  changedFiles,
  maxValue
) => {
  const flippyBoy = data.SparkyBoy.slice().reverse();

  flippyBoy.map(commit => {
    return (
      maxValueCheck(additions, commit.additions, maxValue),
      maxValueCheck(deletions, commit.deletions, maxValue),
      maxValueCheck(changedFiles, commit.changedFiles, maxValue)
    );
  });
};
