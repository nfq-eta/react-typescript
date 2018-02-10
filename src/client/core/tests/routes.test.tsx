import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { CoreRoutes } from '../routes';

describe('routes.js', () => {
    it('renders without crashing', () => {
        shallow(<CoreRoutes/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<CoreRoutes/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
