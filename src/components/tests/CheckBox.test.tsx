import * as React from 'react';
import { shallow } from 'enzyme';

import { CheckBox } from '../CheckBox';

describe('CheckBox.js', () => {
    const props = {
        item: {
            id: 1,
            label: 'Test',
        },
        handleClick: jest.fn(),
    };

    it('renders without crashing', () => {
        shallow(<CheckBox {...props} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<CheckBox {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Label should be visible', () => {
        const wrapper = shallow(<CheckBox {...props} />);
        expect(wrapper.find('div').text()).toContain('Test');
    });

    it('should be checked', () => {
        const wrapper = shallow(<CheckBox {...props} checked={true} />);
        const appInstance = wrapper.instance() as CheckBox;
        expect(appInstance.state.checked).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it('should toggle state', () => {
        const wrapper = shallow(<CheckBox {...props} />);
        const appInstance = wrapper.instance() as CheckBox;
        appInstance.handleClick();

        expect(appInstance.state.checked).toBeTruthy();

        appInstance.handleClick();
        expect(appInstance.state.checked).toBeFalsy();
    });
});
