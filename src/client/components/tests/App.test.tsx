import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import {} from 'jest';

import { AppDisconnected as App } from '../../containers/App';

describe('App.tsx', () => {
    const props = {
        actions: jest.fn(),
        items: [],
    };

    it('renders without crashing', () => {
        shallow(<App {...props} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<App {...props} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('Title should be visible', () => {
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.find('h1').text()).toContain('App');
    });

    it('should handle click', () => {
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance() as App;
        const params = { value: 1, label: 'Demo' };

        instance.handleClick(params, true);
        expect(instance.selectedItems.has(1)).toBeTruthy();

        instance.handleClick(params, false);
        expect(instance.selectedItems.has(1)).toBeFalsy();
    });
});
