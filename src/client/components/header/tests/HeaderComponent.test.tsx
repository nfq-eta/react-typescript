import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { HeaderComponent } from '../HeaderComponent';

describe('HeaderComponent.js', () => {
    it('renders without crashing', () => {
        shallow(<HeaderComponent/>);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<HeaderComponent/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
