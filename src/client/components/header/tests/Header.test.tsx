import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { Header } from '../Header';

describe('Header.js', () => {
    it('renders without crashing', () => {
        shallow(<Header/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<Header/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
