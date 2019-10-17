import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
afterEach(rtl.cleanup);

describe('App', () => {
    it ('renders without crashing', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.baseElement).toMatchSnapshot();
    });
});
