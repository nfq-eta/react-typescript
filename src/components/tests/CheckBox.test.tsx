import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { CheckBox, IItem } from '../CheckBox';


describe('CheckBox.js', () => {
    it('renders without crashing', () => {
        // const handleClick = (id:any) => jest.fn();
        const handleClick = (item: IItem, checked: boolean) => jest.fn();
        shallow(<CheckBox handleClick={handleClick} id={1} label={'Testing'} />);
    });

    it('matches snapshot', () => {
        const handleClick = (item: IItem, checked: boolean) => jest.fn();
        const wrapper = shallow(<CheckBox handleClick={handleClick} id={1} label={'Testing'} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('handle click', () => {
        // TODO
    })


});
