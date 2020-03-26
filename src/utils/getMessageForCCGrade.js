//this function takes in a lettter for grades and returns a string for the tooltip
import React from 'react';

const getMessage = grade => {
  switch (grade) {
    case 'A':
      return <>Code Climate Maintainability: Projects with Technical Debt Ratios below 5% are rated A</>;
    case 'B':
      return <>Code Climate Maintainability: Projects with Technical Debt Ratios between 5% and 10% are rated B</>;
    case 'C':
      return <>Code Climate Maintainability: Projects with Technical Debt Ratios between 10% and 20% are rated C</>;
    case 'D':
      return <>Code Climate Maintainability: Projects with Technical Debt Ratios between 20% and 50% are rated D</>;
    case 'F':
      return <>Code Climate Maintainability: Projects with Technical Debt Ratios above 50% are rated F</>;
    case 'N':
      return <>Code Climate Maintainability: This repo has not received a Maintainability Rating.</>;
    case '!':
      return <>Code Climate Maintainability: This repo has not yet had a successful analysis for it&apos;s default branch.</>;
    default:
      return <></>;
  };
};

export default getMessage;