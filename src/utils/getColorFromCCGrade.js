const getColor = grade => {
  switch (grade) {
    case 'A':
      return 'green';
    case 'B':
      return 'greenyellow';
    case 'C':
      return 'yellow';
    case 'D':
      return 'orange';
    case 'F':
      return 'red';
    default:
      return 'black';
  }
};

export default getColor;
