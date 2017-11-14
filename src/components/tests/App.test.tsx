import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import {} from 'jest';

import App from '../App';

describe('App.tsx', () => {
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
        const instance = wrapper.instance() as App;
        const params = { id: 1, label: 'Demo' };

        instance.handleClick(params, true);
        expect(instance.selectedItems.has(1)).toBeTruthy();

        instance.handleClick(params, false);
        expect(instance.selectedItems.has(1)).toBeFalsy();
    });
});
