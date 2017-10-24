import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { CheckBox, IItem } from '../CheckBox';

describe('CheckBox.js', () => {
    it('renders without crashing', () => {
        const handleClick = (item: IItem, checked: boolean) => jest.fn();
        shallow(<CheckBox handleClick={handleClick} id={1} label={'Testing'} />);
    });

    it('matches snapshot', () => {
        const handleClick = (item: IItem, checked: boolean) => jest.fn();
        const wrapper = shallow(<CheckBox handleClick={handleClick} id={1} label={'Testing'} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('matches checked snapshot', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(<CheckBox handleClick={handleClick} id={1} label={'Testing'} />);
        wrapper.find('div').first().simulate('click');
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('handle click', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(<CheckBox handleClick={handleClick} id={1} label={'Testing'} />);
        wrapper.find('div').first().simulate('click');
        expect(handleClick).toBeCalledWith({ id: 1, label: 'Testing' }, true);
    });
});
