import * as React from 'react';
import { shallow } from 'enzyme';

import { FooterComponent } from '../FooterComponent';

describe('FooterComponent.js', () => {
    it('renders without crashing', () => {
        shallow(<FooterComponent />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<FooterComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});
