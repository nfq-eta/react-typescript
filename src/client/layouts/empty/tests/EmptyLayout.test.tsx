import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { EmptyLayout } from '../EmptyLayout';

describe('EmptyLayout.js', () => {
    it('renders without crashing', () => {
        shallow(<EmptyLayout/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<EmptyLayout/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
