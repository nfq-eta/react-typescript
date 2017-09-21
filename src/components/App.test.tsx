import { shallow } from 'enzyme';

import enzymeToJson from 'enzyme-to-json';
import * as React from 'react';

import { App } from './App';

describe('App.js', () => {
    const items = [
        { id: 1, label: 'Foo' },
        { id: 2, label: 'Buzz' },
        { id: 3, label: 'Fuzz' },
        { id: 4, label: 'Fizz' },
        { id: 5, label: 'FizzBuzz' },
        { id: 6, label: 'Boo' },
    ];

    it('renders without crashing', () => {
        shallow(<App title="Test" items={items} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<App title="Test" items={items} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('should work', () => {
        const wrapper = shallow(<App title="Test" items={items} />);
        expect(enzymeToJson(wrapper)).toBeTruthy();
    });
});
