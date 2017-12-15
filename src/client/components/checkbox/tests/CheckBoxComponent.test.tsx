import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import {} from 'jest';

import { CheckBox } from '../CheckBoxComponent';

const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });


describe('CheckBox.js', () => {
    const props = {
        item: {
            id: 'test',
            value: 1,
            label: 'Test',
        },
        handleClick: jest.fn(),
    };

    it('renders without crashing', () => {
        shallow(<CheckBox {...props} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<CheckBox {...props} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('Label should be visible', () => {
        const wrapper = shallow(<CheckBox {...props} />);
        expect(wrapper.find('label').text()).toContain('Test');
    });

    it('should be checked', () => {
        const wrapper = shallow(<CheckBox {...props} checked={true} />);
        const appInstance = wrapper.instance();
        expect(appInstance.state.checked).toBeTruthy();
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('should toggle state', () => {
        const wrapper = shallow(<CheckBox {...props} />);
        const appInstance = wrapper.instance() as CheckBox;

        appInstance.handleClick({ target: { checked: true } });
        expect(appInstance.state.checked).toBeTruthy();

        appInstance.handleClick({ target: { checked: false } });
        expect(appInstance.state.checked).toBeFalsy();
    });
});
