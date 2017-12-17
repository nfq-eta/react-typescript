import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { HomePage } from '../HomePage';

describe('HomePage.js', () => {
    it('renders without crashing', () => {
        shallow(<HomePage/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<HomePage/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
