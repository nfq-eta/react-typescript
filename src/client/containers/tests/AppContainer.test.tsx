import * as React from 'react';
import { shallow } from 'enzyme';
import AppConnected, { App } from '../AppContainer';

jest.mock('../../core/store');
import { store } from '../../core/store';

describe('AppContainer.tsx', () => {
  const props = {
    items: [{ id: 'demo1', label: 'Demo', value: 'demo' }, { id: 'demo2', label: 'Demo2', value: 'demo2' }],
  };

  it('renders without crashing', () => {
    shallow(<AppConnected {...props} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<AppConnected {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Buttons should be visible', () => {
    const wrapper = shallow(<AppConnected {...props} />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('handleAdd()', () => {
    const wrapper = shallow(<AppConnected />).instance() as App;

    wrapper.handleAdd();
    // expect(store.addAction).toBeCalled();

    expect(store.addAction).toBeCalledWith({
      id: expect.any(String),
      label: 'Demo',
      value: 'demo',
    });
  });
});
