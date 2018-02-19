import * as React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../LoginPage';

describe('LoginPage.js', () => {
    it('renders without crashing', () => {
        shallow(<LoginPage />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
