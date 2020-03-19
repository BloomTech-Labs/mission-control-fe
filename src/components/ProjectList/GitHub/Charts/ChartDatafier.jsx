const maxValueCheck = (array, value, maxValue) => {
  if (value > maxValue) {
    array.push(maxValue);
  } else {
    array.push(value);
  }
};

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
