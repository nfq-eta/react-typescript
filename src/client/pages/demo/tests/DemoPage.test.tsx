import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { DemoPage } from '../DemoPage';

describe('DemoPage.js', () => {
    it('renders without crashing', () => {
        shallow(<DemoPage/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<DemoPage/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

});
