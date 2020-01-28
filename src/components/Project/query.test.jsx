import React from 'react';
import { render } from '@testing-library/react';
import query from './query'

it('Checks if the project queries are present', () => {
  render (
    <query />
  )
})

it('Should match snapshot of the queries', () => {
  expect(render(<query />)).toMatchSnapshot();
});