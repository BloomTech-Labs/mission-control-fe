import React from "react";
import { mount } from "enzyme";
import { Provider } from "urql";
import Project from '../NoteFeed/index'


//Mock Testing to make sure the urql client is rendering
const mockClient = {
  executeQuery: jest.fn(),
  executeMutation: jest.fn(),
  executeSubscription: jest.fn()
};

it("renders", () => {
  const wrapper = mount(
    <Provider value={mockClient}>
        <Project />
    </Provider>
  );
});

//Test Mutations
it("triggers a mutation", () => {
  const wrapper = mount(
    <Provider value={mockClient}>
        <Project />
    </Provider>
  );
  const variables = {
    name: "Robin"
  };
  wrapper.find('input').simulate('change', {currentTarget: { value: variables.name}})
  wrapper.find('button').simulate('click')

  expect(mockClient.executeMutation).toBeCalledTimes(1);
  expect(mockClient.executeMutation).toBeCalledWith(expect.objectContaining({ variables }))
});
