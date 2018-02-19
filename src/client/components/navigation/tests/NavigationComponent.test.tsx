import * as React from 'react';
import { shallow } from 'enzyme';

import { NavigationComponent } from '../NavigationComponent';

describe('NavigationComponent.js', () => {
    it('renders without crashing', () => {
        shallow(<NavigationComponent />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<NavigationComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});
