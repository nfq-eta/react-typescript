import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import * as React from 'react';

import { App } from '../App';

describe('App.js', () => {
    it('renders without crashing', () => {
        shallow(<App title="Test" />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<App title="Test" />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('Title should be visible', () => {
        const wrapper = shallow(<App title="Test" />);
        expect(wrapper.find('h1').text()).toContain('Test');
    });

    it('Title should not be visible', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text().length).toBe(0);
    });

    it('should handle click', () => {
        const wrapper = shallow(<App />);
        const params = { id: 1, label: 'Demo' };
        wrapper.instance().handleClick(params, true);

        expect(wrapper.instance().selectedItems.has(1)).toBeTruthy();

        wrapper.instance().handleClick(params, false);

        expect(wrapper.instance().selectedItems.has(1)).toBeFalsy();
    });
});
