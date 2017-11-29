import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import {} from 'jest';

import { AppDisconnected, mapStateToProps } from '../App';
import { IRootState } from '../../core/reducers';

describe('App.tsx', () => {
    const props = {
        items: [
            { id: 'demo1', label: 'Demo', value: 'demo' },
        ],
        addAction: jest.fn(),
    };

    it('renders without crashing', () => {
        shallow(<AppDisconnected {...props} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('Title should be visible', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        expect(wrapper.find('h1').text()).toContain('App');
    });

    it('should handle click', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        const instance = wrapper.instance() as AppDisconnected;
        const params = { id: 'test', value: 1, label: 'Demo' };

        instance.handleClick(params, true);
        expect(instance.selectedItems.has('test')).toBeTruthy();

        instance.handleClick(params, false);
        expect(instance.selectedItems.has('test')).toBeFalsy();
    });

    it('handleAdd()', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        const instance = wrapper.instance() as AppDisconnected;

        instance.handleAdd();

        expect(props.addAction).toBeCalledWith({ id: expect.any(String), label: 'Demo', value: 'demo' });
    });

    it('mapStateToProps()', () => {
        const initialState: IRootState = {
            checkBoxItems: [],
        };

        expect(mapStateToProps(initialState)).toEqual({ items: [] });
    });

});
