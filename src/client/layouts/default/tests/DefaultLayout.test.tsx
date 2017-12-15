import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { DefaultLayout } from '../DefaultLayout';

describe('DefaultLayout.js', () => {
    it('renders without crashing', () => {
        shallow(<DefaultLayout/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<DefaultLayout/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
