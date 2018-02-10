import * as React from 'react';
import { shallow } from 'enzyme';

import { AppDisconnected, mapStateToProps } from '../AppContainer';
import { IRootState } from '../../core/reducers';

describe('AppContainer.tsx', () => {
    const props = {
        items: [
            { id: 'demo1', label: 'Demo', value: 'demo' },
            { id: 'demo2', label: 'Demo2', value: 'demo2' },
        ],
        addAction: jest.fn(),
    };

    it('renders without crashing', () => {
        shallow(<AppDisconnected {...props} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Buttons should be visible', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        expect(wrapper.find('button').length).toBe(3);
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

    it('Add to selected list and check if exists', () => {
        const wrapper = shallow(<AppDisconnected {...props} />);
        const instance = wrapper.instance() as AppDisconnected;
        const item = { id: 'test', value: 1, label: 'Demo' };

        instance.selectedItems.set(item.id, item);

        expect(instance.isSelected(item)).toBe(true);
    })
});
