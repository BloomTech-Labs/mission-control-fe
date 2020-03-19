import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelList from '../components/Settings/LabelList';

afterEach(cleanup);

describe('Create Label Form', () => {
  it('renders CreateLabelForm', () => {
    const asFragment = render(<LabelList />);
    expect(asFragment).toMatchSnapshot();
  });
});
