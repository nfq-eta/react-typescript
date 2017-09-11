import { shallow } from 'enzyme';

import enzymeToJson from 'enzyme-to-json';
import * as React from 'react';

import { App } from './App';

describe('App.js', () => {
    it('renders without crashing', () => {
        shallow(<App title="Test" />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<App title="Test" />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('should work', () => {
        const wrapper = shallow(<App title="Test" />);
        expect(enzymeToJson(wrapper)).toBeTruthy();
    });
});
