import React from 'react';

const getMessage = grade => {
  switch (grade) {
    case 'A':
      return <>Projects with Technical Debt Ratios below 5% are rated A</>;
    case 'B':
      return <>Projects with Technical Debt Ratios between 5% and 10% are rated B</>;
    case 'C':
      return <>Projects with Technical Debt Ratios between 10% and 20% are rated C</>;
    case 'D':
      return <>Projects with Technical Debt Ratios between 20% and 50% are rated D</>;
    case 'F':
      return <>Projects with Technical Debt Ratios above 50% are rated F</>;
    case 'N':
      return <>This repo hasn't received a Maintainability Rating.</>;
    case '!':
      return <>This repo hasn't had a successful analysis for its default branch yet.</>;
    default:
      return <></>;
  };
};

export default getMessage;