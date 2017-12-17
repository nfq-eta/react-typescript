import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { FooterComponent } from '../FooterComponent';

describe('FooterComponent.js', () => {
    it('renders without crashing', () => {
        shallow(<FooterComponent/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<FooterComponent/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
